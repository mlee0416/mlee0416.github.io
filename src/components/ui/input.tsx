import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="bg-white flex row-auto items-center gap-2 border border-input px-3 py-1 rounded-md h-9 w-full shadow-sm transition-colors file:border-0 file:bg-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring focus:border-blue-500">
        {icon && icon}
        <input
          type={type}
          className={cn(
            "flex text-sm file:text-sm file:font-medium placeholder:text-muted-foreground  focus:outline-none",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
