'use client'

import React from "react";
import { LoginButton } from "./auth/LoginButton";
import { Button } from "./ui/button";
import Reveal from "./motion/Reveal";

function LandingPage() {
  return (
    <div className="mt-12 flex-shrink-0 w-full max-w-7xl h-[800px] flex flex-col items-center z-10 mx-6">
      <div className="w-full h-5/6 flex-shrink-0 mx-8 flex flex-col items-center justify-center z-10 space-y-6 text-center">
        <Reveal>
          <h1 className="text-6xl lg:text-8xl font-bold text-gray-300 drop-shadow-md">
            AuthNeX
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-sm px-12 font-semibold text-gray-400">
            An Auth.js based Authentication Service built with Next.js 14.
          </p>
          <div>
            <LoginButton mode="modal" asChild>
              <Button
                className="hover:animate-none animate-pulse duration-[5000ms] hover:text-black cursor-pointer hover:border mt-4 bg-slate-800 text-white"
                variant={"secondary"}
                size={"lg"}
              >
                Try Me!
              </Button>
            </LoginButton>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default LandingPage;
