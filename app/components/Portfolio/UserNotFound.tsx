import React from "react";
import Link from "next/link";
export const UserNotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6 font-hero-heading tracking-wider">
      <h1 className="text-9xl font-bold text-[#7CD213] mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4">User Not Found</h2>
      <p className="text-gray-400 text-base font-subtext-mont">
        The profile you’re looking for doesn’t exist.
      </p>
      <p className="text-gray-400 text-base mt-10 mb-4 font-subtext-mont">
        Don't own a portfolio yet? Let's get you set up.
      </p>
      <Link
        href="/"
        className="bg-[#7CD213] text-gray-900 px-4 py-3 rounded-lg text-lg font-medium hover:bg-[#96eb2e] duration-300 font-subtext-mont uppercase"
      >
        Get me started
      </Link>
    </div>
  );
};
