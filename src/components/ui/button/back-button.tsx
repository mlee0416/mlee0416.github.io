"use client";
import React from "react";
import { Button } from "../button";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button variant="link" onClick={() => router.back()} className="text-white">
      Go Back
    </Button>
  );
};

export default BackButton;
