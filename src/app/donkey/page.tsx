import React from "react";
import Image from "next/image";

const Donkey = () => (
  <div className="flex flex-col items-center justify-center h-screen gap-40 w-3/4 bg-white m-auto p-6">
    <h1 className="text-5xl font-extrabold shadow-sm ">Donkey</h1>
    <p className="text-black font-bold text-xl">Donkey is voiced by Norbit</p>
    <Image width={200} height={200} alt="Not shrek" src="/donkey.webp" />
  </div>
);

export default Donkey;
