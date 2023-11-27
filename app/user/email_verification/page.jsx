"use client";
import React from "react";
import EmailVerification from "@/components/EmailVerification";
import { useSearchParams } from "next/navigation";
const EmailVerificationPage = () => {
  const searchParams = useSearchParams();

  const username = searchParams.get("username");
  return (
    <>
      <EmailVerification username={username} />
    </>
  );
};

export default EmailVerificationPage;
