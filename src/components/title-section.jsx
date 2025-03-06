"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export function TitleSection({ subtitle, title }) {
    const titleRef = useRef(null);
    useEffect(() => {
        const title = titleRef.current;

        gsap.fromTo(
            title,
            {
                opacity: 0,
                x: 50,
            },
            {
                opacity: 1,
                x: 0,
                ease: "power3.out",
                duration: 2,
                scrollTrigger:{
                    trigger:title,
                    start:'top-=400px center'
                }
            }
        );
    }, []);

    return (
        <>
            <div
                ref={titleRef}
                className="px-3 @desktop:px-0 mb-12 @desktop:mb-14 space-y-1"
            >
                <span className="text-sm @desktop:text-xl font-semibold text-white text-opacity-70">
                    {subtitle}
                </span>
                <h2 className="text-3xl font-poppins @desktop:text-5xl/tight font-semibold">
                    {title}
                </h2>
            </div>
        </>
    );
}
