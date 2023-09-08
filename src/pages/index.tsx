import { type NextPage } from "next";
import React, { useState } from "react";
import _bgSnow from "../../public/bg-snow.svg";
import _logosDefi from "../../public/defi-logos.svg";
import type { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";

const Home: NextPage = () => {
  return (
    <>
      <div className="my-[100px] flex w-full justify-center px-4 md:my-[200px]">
        <div className="z-10 w-full max-w-[1248px]">
          <div className="flex flex-col justify-center space-y-36">
            <section className="mt-[-130px] flex flex-col items-center md:mt-[-140px]">
              {/* <img
                className="absolute z-[-1] mt-[165px] scale-[200%] md:mt-0 md:max-w-[1440px] md:scale-100"
                src="/hero.png"
                alt="hero"
              /> */}
              <div className="mt-[280px] flex max-w-[350px] flex-col items-center space-y-8 text-center md:mt-[350px] md:max-w-[884px]">
                <div className="md:leading-[73px] lg:text-[64px]">
                  <h1 className="text-5xl font-bold leading-[47px]">
                    The easiest to learn crypto
                  </h1>
                </div>

                <div className="max-w-md">
                  <h2 className="text-slate-400 font-semibold">
                    Learn crypto design at your own pace with guided, bite-sized
                    education that’s effective and fun.
                  </h2>
                </div>

                <div className="w-full md:w-[544px]">
                  <div className="w-full text-[14px]">
                    <div className="text-cf-light-2 border-cf-gray-4 bg-cf-gray-2 hover:border-cf-gray-5 focus-within:bg-cf-gray-3 focus-within:border-cf-gray-5 border-cf-gray-4 flex border-spacing-1 items-center justify-start rounded-md border pl-3 duration-300 focus-within:text-white hover:ease-out">
                      <input
                        className="text-cf-light-3 border-cf-gray-4 placeholder-cf-light-1 focus:text-cf-light-3 pointer-events-auto  h-[44px] w-full flex-1 appearance-none rounded-xl border border-none bg-transparent bg-none py-2 pl-2.5 pr-2.5 shadow-sm focus:border-transparent focus:outline-none"
                        type="text"
                        defaultValue=""
                        placeholder="Enter your email"
                      />

                      <button
                        className="bg-cf-gray-4 flex h-[44px] w-12 items-center justify-center rounded-r-md duration-300 ease-out hover:text-white"
                        type="submit"
                      >
                        {" "}
                      </button>
                      <button
                        type="submit"
                        className="grow rounded-2xl border-b-4 border-purple-600 bg-purple-500 p-3 font-bold text-white duration-300 ease-out hover:bg-purple-600 sm:min-w-[150px] sm:max-w-fit sm:grow-0"
                      >
                        Join waitlist
                      </button>
                    </div>
                    <div className="absolute mt-2 flex max-w-[320px] items-center opacity-0 transition duration-300 xl:max-w-none">
                      &nbsp;
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
