import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full h-24 flex justify-center sticky bottom-0 bg-transparent text-zinc-400">
      <div className="text-xs flex max-w-7xl w-full mx-6 items-center justify-between h-full">
        <p className="font-bold">
          Created by{" "}
          <Link target="_blank" href="https://charankamal20.github.io/" className="transition-all hover:underline">
            classikh
          </Link>
        </p>
        <p className="text-xs font-semibold">© 2024 AuthNeX</p>
      </div>
    </footer>
  );
}

export default Footer;
