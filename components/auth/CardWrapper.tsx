"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Header from "@/components/auth/Header";
import Social from "@/components/auth/Social";
import { BackButton } from "@/components/auth/BackButton";

interface CardWrapper {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapper) => {
  return (
    <Card className="text-white border-[0.5px] border-zinc-600 bg-neu backdrop-blur-lg w-96 shadow-md">
        <CardHeader>
            <Header label={headerLabel} />
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        {showSocial && (
            <CardFooter>
                <Social />
            </CardFooter>
        )}
        <CardFooter>
            <BackButton label={backButtonLabel} href={backButtonHref} />
        </CardFooter>
    </Card>
  );
};
