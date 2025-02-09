import React, { PropsWithChildren } from "react";

const Footer: React.FC<PropsWithChildren> = () => {
  return (
    <footer className="hidden sm:flex flex-row justify-end text-xs px-8 mb-2 align-top text-slate-400 font-extralight">
      Built by yours truly using Next.js, React, TailwindCSS, shadcn/ui, and
      Vercel.
    </footer>
  );
};

export default Footer;
