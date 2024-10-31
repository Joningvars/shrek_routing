import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-6  bg-[#95b71d] p-8 flex justify-center items-center gap-10 font-bold text-xl w-3/4 mx-auto  shadow-sm">
      <Link href="/">Home</Link>
      <Link href="/quotes">Shrek Quotes</Link>
      <Link href="/donkey">Donkey</Link>
      <Link href="/gallery">Gallery</Link>
    </div>
  );
};

export default Navbar;
