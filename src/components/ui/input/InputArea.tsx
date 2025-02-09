import clsx from "clsx";
import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> { }

const InputArea = React.forwardRef<HTMLTextAreaElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <textarea
            placeholder="Escribeme un mensaje..."
                className={clsx(
                    "[resize:none] min-h-80 placeholder-gray-300 placeholder-opacity-75 autofill:shadow-[inset_0_0_0px_1000px_rgb(0,0,0)] autofill-text bg-zinc-950 flex h-full w-full font-normal rounded-none border-2 border-zinc-900 bg-black px-3 py-2 text-sm/[14px] text-zinc-100 shadow-sm shadow-black/5 ring-offset-background transition-shadow focus:outline-none focus:ring-0 focus:border-purple-800 disabled:cursor-not-allowed disabled:opacity-50",
                    type === "search" &&
                    "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
                    type === "file" &&
                    "placeholder-gray-300 placeholder-opacity-75 p-0 pr-3 italic text-zinc-100 file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-black file:px-3 file:text-sm file:font-medium file:not-italic file:text-zinc-100 focus:bg-purple-800",
                    className,
                )}
                ref={ref}
                {...props}
            />
        );
    },
);
InputArea.displayName = "InputArea";

export { InputArea };