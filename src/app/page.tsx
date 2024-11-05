"use client";

import Link from "next/link";
import shot2 from "../../videos/shot3.mp4";
import BackgroundVideo from "next-video/background-video";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-64 w-fit">
        <BackgroundVideo src={shot2} className="w-full h-full object-cover" />
      </div>

      {/* Overlay Text */}
      <div className="flex flex-col items-center justify-center h-full text-center gap-5 z-10 relative">
        <h1 className="text-8xl font-serif font-semibold text-white">DeBois</h1>
        <h2 className="text-xl font-serif font-bold text-white">
          Defy the Wind, Embrace the Journey.
        </h2>

        <Link
          href="/products"
          className="text-xl font-serif font-extrabold text-white border-2 border-white p-5 hover:bg-gray-50 hover:text-black"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
