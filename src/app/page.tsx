import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-40 w-3/4 bg-white m-auto p-6">
      <h1 className="text-5xl font-extrabold shadow-">
        Welcome to shrek's Swamp!.
      </h1>
      <p className="text-black font-bold text-xl">
        Shrek is an ogre who enjoys his solitude, but adventure always finds
        him. Join shrek and his friends on their funny, exciting adventures!
      </p>
      <Image width={200} height={200} alt="Not shrek" src="/shrek.png" />
    </div>
  );
}
