import React from "react";
import { twMerge } from "tailwind-merge";

export function ContainerGrid({ children, className }) {
    const defaultClass = "w-full max-w-grid mx-auto px-3";
    const mergedClasses = twMerge(defaultClass, className);
    return (
        <>
            <div className={mergedClasses}>{children}</div>
        </>
    );
}
