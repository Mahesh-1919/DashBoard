"use client";
import Link from "next/link";

import SideBar from "@/app/components/sideBar";

export default function Component() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6 text-white  bg-secondary">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon width={30} height={30} />
        <span className="text-xl font-bold">Explore</span>
      </Link>

      <SideBar />
    </header>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
