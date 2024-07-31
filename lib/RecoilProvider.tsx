"use client";
import { RecoilRoot } from "recoil";
import React from "react";

const RecoilProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
