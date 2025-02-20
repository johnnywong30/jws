import { cn } from "@/lib/utils";

function Tag({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "rounded-xl py-1 px-3 text-sm font-medium ring-1 ring-inset text-slate-700 bg-white ring-slate-600/10 dark:text-slate-300 dark:bg-slate-800",
        className
      )}
    >
      {props.children}
    </span>
  );
}

export { Tag };
