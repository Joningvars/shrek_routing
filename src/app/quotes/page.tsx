import React from "react";

const Quotes = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-40 w-3/4 bg-white backdrop-blur-md m-auto p-6">
      <h1 className="text-5xl font-extrabold shadow-sm ">Quotes.</h1>
      <p className="text-black font-bold text-xl">
        Shrek is an ogre who enjoys his solitude, but adventure always finds
        him. Join shrek and his friends on their funny, exciting adventures!
      </p>
      {/* <Image width={200} height={200} alt="Not shrek" src="/shrek.png" /> */}
    </div>
  );
};

export default Quotes;
