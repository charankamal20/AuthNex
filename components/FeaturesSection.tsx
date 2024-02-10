'use client'

import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { GrUserAdmin } from "react-icons/gr";
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Reveal from './motion/Reveal';

function FeaturesSection() {
  return (
    <div className="z-10 max-w-6xl items-center flex-shrink-0 pb-16 justify-center w-full text-zinc-300 m-10 px-10 lg:px-16 pt-12 text-center font-semibold flex flex-col max-md:space-y-16 space-y-32 text-lg">
      <Reveal>
        <div className="flex flex-col-reverse sm:grid sm:grid-cols-3 items-center gap-x-16">
          <p className="sm:col-span-2 sm:text-left text-xl md:text-4xl md:leading-[2.75rem]">
            Utilize Next-auth v5 (Auth.js) for a comprehensive authentication
            solution, offering features like{" "}
            <span className="decoration-dashed text-white underline font-bold">
              OAuth with Google & GitHub, 2FA, and user roles for enhanced
              security.
            </span>
          </p>
          <div className="opacity-85 w-full h-full relative justify-center mb-4 sm:mb-0 items-center hover:opacity-100 transition-all hover:brightness-110 flex space-x-4">
            <FcGoogle className="top-10 right-10 sm:absolute h-16 w-16 sm:h-20 sm:w-20" />
            <FaGithub className="text-white bottom-10 left-10 sm:absolute h-16 w-16 sm:h-28 sm:w-28" />
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="flex flex-col sm:grid sm:grid-cols-3 items-center gap-x-16">
          <GrUserAdmin className="opacity-85 hover:opacity-100 transition-all hover:brightness-110 mx-auto text-white mb-4 h-16 w-16 sm:h-28 sm:w-28" />
          <p className="sm:col-span-2 sm:text-right text-xl md:text-4xl md:leading-[2.75rem]">
            Empower administrators with{" "}
            <span className="decoration-dashed text-white underline font-bold">
              role-based access control
            </span>
            , protecting sensitive areas like API routes and server actions,
            while
            <span className="decoration-dashed text-white underline font-bold">
              {" "}
              allowing dynamic user role changes
            </span>{" "}
            for development purposes.
          </p>
        </div>
      </Reveal>
      <Reveal>
        <div className="flex flex-col-reverse sm:grid sm:grid-cols-3 items-center gap-x-16">
          <p className="sm:col-span-2 sm:text-left text-xl md:text-4xl md:leading-[2.75rem]">
            Enable{" "}
            <span className="decoration-dashed text-white underline font-bold">
              email verification, password change with confirmation, and
              two-factor authentication
            </span>
            , bolstering the app&apos;s security and user confidence.
          </p>
          <VscWorkspaceTrusted className="opacity-85 hover:opacity-100 transition-all hover:brightness-110 mx-auto text-white mb-4 h-16 w-16 sm:h-28 sm:w-28" />
        </div>
      </Reveal>
    </div>
  );
}

export default FeaturesSection