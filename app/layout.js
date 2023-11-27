import './globals.css'
import Navbar from '@/components/Navbar'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/app/provider";
import { NextProvider } from '@/app/provider';
import '@tldraw/tldraw/tldraw.css'
export const metadata = {
  title: 'Drawww',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <AuthProvider>
          <NextProvider>
            <ToastContainer
              theme="dark"
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              draggable
            />
            <Navbar />
            {children}
          </NextProvider>
        </AuthProvider>
      </body>
    </html >
  )
}
