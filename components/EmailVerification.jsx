"use client";
import { useEffect, useState } from "react";
import OTPFormEmailVerify from "@/components/OtpFormEmailVerify";
import { toast } from "react-toastify";
import SyncLoader from "react-spinners/SyncLoader";

const EmailVerification = ({ username }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [send, setSend] = useState(false);

  useEffect(() => {
    const fetchUserEmail = async () => {
      const res = await fetch(`/api/v1/user/${username}`, { method: "GET" });
      const response = await res.json();
      setEmail(response?.user?.email);
    };
    fetchUserEmail();
  }, [username]);

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/v1/user/email_verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const response = await res.json();
      setLoading(false);
      if (response.success) {
        toast.success(response.message);
        setSend(true);

        console.log(response);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {!send ? (
        <>
          <div className="w-5/6 p-10 mx-auto mt-20 bg-gray-200 border rounded-md dark:border-gray-800 dark:bg-gray-700 border-inherit">
            <h1 className="text-center underline ">Email Verification</h1>
            <div className="px-1 py-6">
              <p className="mb-5 text-sm font-medium text-center text-gray-700 dark:text-gray-300">
                Enter email for OTP verification
              </p>
              <form onSubmit={sendOtp}>
                <input
                  className="w-full p-1 border border-gray-300 rounded-lg dark:bg-gray-600 dark:border-gray-500 "
                  placeholder="Email Associated with the account"
                  type="email"
                  required
                  readOnly
                  value={email}
                  disabled
                  // onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="w-3/6 py-1 mt-5 bg-gray-400 border border-current rounded-md hover:bg-gray-800 hover:text-white"
                  >
                    {!loading ? (
                      "Send Otp"
                    ) : (
                      <>
                        Sending
                        <SyncLoader
                          color={"white"}
                          cssOverride={{}}
                          size={12}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <OTPFormEmailVerify email={email} sendOtp={sendOtp} />
        </>
      )}
    </>
  );
};
export default EmailVerification;
