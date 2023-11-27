import connectMongoDB from "@/lib/db";
import User from "@/models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { username, password } = credentials;
        try {
          await connectMongoDB();
          const user = await User.findOne({ username });

          if (!user) {
            return null; // User not found
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);
          console.log(passwordsMatch)

          if (!passwordsMatch) {
            return null; // Passwords do not match
          }

          user.isloggedin = true;
          user.lastLoggedInTime = new Date();
          await user.save();


          // Return only necessary properties of the user
          return { name: user?.name, email: user?.email }
        } catch (error) {
          console.log("Error: ", error);
          return null; // An error occurred during authentication
        }
      },
    }),
  ],
  session: {
    maxAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async session(session) {
      const sessionUser = await User.findOne({ email: session?.session?.user?.email });
      if (sessionUser) {
        session.session.user.username = sessionUser?.username;
        session.session.user.image = sessionUser?.image;
      }
      return session;
    },
  },
  pages: {
    signIn: "/user/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };