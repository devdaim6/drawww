"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import SyncLoader from "react-spinners/SyncLoader";
function OtpForm({ email, sendOtp }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [resendDisabled, setResendDisabled] = useState(true);

  const [countdown, setCountdown] = useState(60);
  const [otp, setOtp] = useState(["", "", "", ""]); // An array to store OTP digits

  // Function to handle OTP input changes

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically focus on the next input field if a digit is entered
      if (value !== "" && index < 3) {
        const nextIndex = index + 1;
        document.getElementById(`otp-input-${nextIndex}`).focus();
      }
    }
  };

  // Function to handle OTP verification
  const handleVerifyOTP = async () => {
    try {
      if (otp.some((value) => value === "")) {
        toast.warning("OTP is Required");
        return;
      }
      setLoading(true);
      const enteredOTP = otp.join(""); // Combine OTP digits
      const res = await toast.promise(
        fetch("/api/v1/user/email_verification/verify_otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            otp: enteredOTP,
          }),
        }),
        {
          pending: "verifying OTP",
          error: "Error While Verifying Otp",
        }
      );
      const response = await res.json();
      setLoading(false);
      // console.log(response);
      if (response.success) {
        setOtp(["", "", "", ""]);

        toast.success(response.result);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleResendClick = (e) => {
    if (!resendDisabled) {
      setResendDisabled(true);
      sendOtp(e);
      const timerInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(timerInterval);
        setResendDisabled(false); // Enable the button after 60 seconds
        setCountdown(59); // Reset the countdown
      }, 60000);
    }
  };

  useEffect(() => {
    // Start the timer when the component mounts
    const timerInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Enable the button after 60 seconds
    setTimeout(() => {
      clearInterval(timerInterval);
      setResendDisabled(false);
      setCountdown(60);
    }, 60000);

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(timerInterval);
    };
  }, []);
  return (
    <>
      <section className="flex flex-col justify-center min-h-screen ">
        <div className="container w-full max-w-md p-10 text-center bg-gray-300 border rounded-lg dark:border-gray-800 dark:bg-gray-700">
          <h1 className="mb-6 text-2xl text-gray-500 dark:text-gray-300 title md:text-3xl lg:text-4xl md:mb-8">
            OTP Verification
          </h1>
          <form
            id="otp-form"
            className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 "
          >
            {otp.map((digit, index) => (
              <input
              autoFocus
                key={index}
                type="number"
                id={`otp-input-${index}`}
                className="w-full h-16 p-4 text-2xl text-center text-white bg-gray-500 border-none rounded-md otp-input dark:bg-gray-400 dark:text-black md:text-3xl lg:text-4xl md:p-6 lg:p-8 max-w-16 md:max-w-20 lg:max-w-24 md:h-20 lg:h-24 outline-2-solid-666 focus-visible:outline-2-solid-royalblue"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                maxLength="1"
              />
            ))}
          </form>

          <button
            onClick={handleVerifyOTP}
            type="button"
            className="w-full p-2 mt-4 text-white bg-gray-600 border rounded-lg md:mt-6 lg:mt-8 dark:bg-gray-200 dark:text-black"
          >
            {!loading ? (
              "Verify Email"
            ) : (
              <>
                Verifying
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
          <button
            onClick={handleResendClick}
            type="button"
            className={`w-full p-2 mt-3 text-white bg-gray-600 border rounded-lg md:mt-4 lg:mt-6 dark:bg-gray-200 dark:text-black ${
              resendDisabled && "opacity-40"
            }`}
            disabled={resendDisabled}
          >
            {!resendDisabled
              ? !resendDisabled
                ? "Resend"
                : "Resend 0:"
              : `Sent (${countdown}s)`}
          </button>
        </div>
      </section>
    </>
  );
}

export default OtpForm;
