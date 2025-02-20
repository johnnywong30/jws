import React from "react";
import LinkData from "@/constants/links";
import { Mail } from "lucide-react";
import { FaLinkedin as Linkedin, FaGithub as Github } from "react-icons/fa6";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LinkGroup = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-row gap-4 md:gap-8 items-center",
        props.className
      )}
    >
      <Link
        href={LinkData.LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <Linkedin className="size-5" />
      </Link>
      <Link
        href={LinkData.GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <Github className="size-5" />
      </Link>
      <Link href="/contact" className="cursor-pointer">
        <Mail className="size-5" />
      </Link>
    </div>
  );
};

export default LinkGroup;
