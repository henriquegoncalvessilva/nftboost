"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(
            "border-b tw-border-solid border-white border-opacity-5;",
            className
        )}
        {...props}
    />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                ref={ref}
                className={cn(
                    "flex flex-1 items-center justify-between py-4 @laptop:py-6 text-sm text-left @laptop:text-xl hover:text-blue-primary font-medium transition-all [&[data-state=open]>svg]:rotate-180",
                    className
                )}
                {...props}
            >
                <div className="pr-3">{children}</div>
                <ChevronDown
                    className=" h-6 w-6 shrink-0 transition-transform duration-200 "
                    color="#1D4FFE"
                />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <AccordionPrimitive.Content
            ref={ref}
            className="overflow-hidden text-sm @laptop:text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            {...props}
        >
            <div className={cn("pb-4 pt-0", className)}>{children}</div>
        </AccordionPrimitive.Content>
    )
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
