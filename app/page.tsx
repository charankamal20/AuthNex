import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from '../components/auth/LoginButton';

const font = Poppins({
  subsets: ["latin-ext"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gray-50">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-gray-800 drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p>A Simple Authentication Service</p>
        <div>
          <LoginButton mode="modal" asChild>
            <Button className="hover:text-black hover:border mt-4 bg-slate-800 text-white" variant={"secondary"} size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
