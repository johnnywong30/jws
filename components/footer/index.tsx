import React, { PropsWithChildren } from "react";
import LinkGroup from "@/components/links";

const Footer: React.FC<PropsWithChildren> = () => {
  return (
    <footer className="hidden sm:flex flex-row justify-between text-xs px-16 mb-2 items-center">
      <LinkGroup />
      <p className="min-w-[26rem] text-slate-400 font-extralight">
        Built by yours truly using Next.js, React, TailwindCSS, shadcn/ui, and
        Vercel.
      </p>
    </footer>
  );
};

export default Footer;
