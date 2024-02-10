"use client"

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

function Navbar() {
  return (
    <header className="z-20 absolute top-0 h-12 md:h-16 w-full max-w-7xl flex justify-end items-center">
      <Link className='z-20 transition-all group' target='_blank' href="https://github.com/charankamal20">
        <FaGithub className="w-6 h-6 md:h-8 md:w-8 rounded-full transition-all duration-300 group-hover:fill-black group-hover:bg-white fill-white m-4 md:m-6" />
      </Link>
    </header>
  );
}

export default Navbar;