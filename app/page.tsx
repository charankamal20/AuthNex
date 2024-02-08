import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { LoginButton } from '../components/auth/LoginButton';
import { BackgroundBeams } from "@/components/ui/background-beams";

const font = Poppins({
  subsets: ["latin-ext"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="z-10 space-y-6 text-center">
        <h1
          className="text-8xl font-bold text-gray-300 drop-shadow-md"
        >
          AuthNeX
        </h1>
        <p className="font-semibold text-gray-400">Auth.js based Authentication Service.</p>
        <div>
          <LoginButton mode="modal" asChild>

            <Button
              className="hover:text-black cursor-pointer hover:border mt-4 bg-slate-800 text-white"
              variant={"secondary"}
              size={"lg"}
            >
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
      <BackgroundBeams />
    </main>
  );
}
