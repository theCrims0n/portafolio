import clsx from "clsx";
import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                 placeholder="Email..."
                className={clsx(
                    "placeholder-gray-300 file:text-white placeholder-opacity-75 autofill:shadow-[inset_0_0_0px_1000px_rgb(0,0,0)] autofill-text bg-black flex h-10 w-full font-normal rounded-sm border border-zinc-900 focus:border-purple-800 bg-zinc-950 px-3 py-2 text-xs shadow-sm shadow-black/5 ring-offset-background transition-shadow focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50",
                    type === "search" &&
                    "[&::-webkit-search-cancel-button]:appearance-none file:text-white [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
                    type === "file" &&
                    "placeholder-gray-300 file:text-white placeholder-opacity-75 p-0 pr-3 italic  file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-zinc-950 file:px-3 file:text-xs file:font-medium file:not-italic focus:bg-purple-800",
                    className,
                )}
                ref={ref}
                {...props}
            />
        );
    },
);
Input.displayName = "Input";

export { Input };