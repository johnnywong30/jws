import React, { PropsWithChildren } from "react";
import Content from "@/components/footer/contents";

const Footer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Content />
    </footer>
  );
};

export default Footer;
