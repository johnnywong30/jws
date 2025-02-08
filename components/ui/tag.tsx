import { cn } from "@/lib/utils";

function Tag({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("px-2 py-1", className)}>{props.children}</span>;
}

export { Tag };
