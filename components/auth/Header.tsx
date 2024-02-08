import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

function Header({ label }: HeaderProps) {
  return (
    <div className="flex w-full flex-col gap-y-4 items-center justify-center">
      <Link className={cn("text-3xl font-bold", font.className)} href="/">AuthNex</Link>
      <p className="to-muted-foreground font-semibold text-sm">{label}</p>
    </div>
  );
}

export default Header;
