import { type NextPage } from "next";
import Link from "next/link";
import React from "react";
import _bgSnow from "../../public/bg-snow.svg";
import type { StaticImageData } from "next/image";

const bgSnow = _bgSnow as StaticImageData;

const Home: NextPage = () => {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-[#F9A38A] text-white"
      style={{ backgroundImage: `url(${bgSnow.src})` }}
    >
      <div className="flex w-full flex-col items-center justify-center gap-3 px-4 py-16 md:flex-row md:gap-36">
        <div>
          <p className="mb-6 max-w-[600px] text-center text-3xl font-bold md:mb-12">
            The free, fun, and effective way to learn how to cook!
          </p>
          <div className="mx-auto mt-4 flex w-fit flex-col items-center gap-3">
            <Link
              href="/learn"
              className="w-full rounded-2xl border-b-4 border-green-700 bg-green-600 px-10 py-3 text-center font-bold uppercase transition hover:border-green-600 hover:bg-green-500 md:min-w-[320px]"
            >
              Get started
            </Link>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
