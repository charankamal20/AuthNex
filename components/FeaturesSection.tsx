'use client'

import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { GrUserAdmin } from "react-icons/gr";
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Reveal from './motion/Reveal';

function FeaturesSection() {
  return (
    <div className="z-10 max-w-7xl items-center flex-shrink-0 pb-16 justify-center w-full text-zinc-300 m-10 px-10 pt-12 text-center font-semibold flex flex-col md:flex-row max-md:space-y-16 text-lg">
      <Reveal>
        <div className="flex flex-col items-center gap-4">
          <div className="opacity-85 hover:opacity-100 transition-all hover:brightness-110 flex space-x-4">
            <FcGoogle className="h-16 w-16" />
            <FaGithub className="text-white h-16 w-16" />
          </div>
          <p>
            Utilize Next-auth v5 (Auth.js) for a comprehensive authentication
            solution, offering features like{" "}
            <span className="decoration-dashed text-white underline font-bold">
              OAuth with Google & GitHub, 2FA, and user roles for enhanced
              security.
            </span>
          </p>
        </div>
      </Reveal>
      <Reveal>
        <p>
          <GrUserAdmin className="opacity-85 hover:opacity-100 transition-all hover:brightness-110 mx-auto text-white mb-4 h-16 w-16" />
          Empower administrators with{" "}
          <span className="decoration-dashed text-white underline font-bold">
            role-based access control
          </span>
          , protecting sensitive areas like API routes and server actions, while
          <span className="decoration-dashed text-white underline font-bold">
            {" "}
            allowing dynamic user role changes
          </span>{" "}
          for development purposes.
        </p>
      </Reveal>
      <Reveal>
        <p>
          <VscWorkspaceTrusted className="opacity-85 hover:opacity-100 transition-all hover:brightness-110 mx-auto text-white mb-4 h-16 w-16" />
          Enable{" "}
          <span className="decoration-dashed text-white underline font-bold">
            email verification, password change with confirmation, and two-factor
            authentication
          </span>
          , bolstering the app&apos;s security and user confidence.
        </p>
      </Reveal>
    </div>
  );
}

export default FeaturesSection