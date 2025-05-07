import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm rounded-[3px] font-medium ring-offset-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "text-white bg-orange hover:bg-orange-light hover:scale-[0.97] hover:rounded-[5px]",
        input: "bg-white/5 border border-white/10 text-white",
        gray: "text-white bg-grey-light hover:bg-grey-hover",
      },
      size: {
        default: "h-10 px-4 py-6",
        sm: "h-9 px-8",
        lg: "h-14 px-12",
        xl: " h-14 px-14 text-base",
        full: "h-10 w-[50%] py-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };