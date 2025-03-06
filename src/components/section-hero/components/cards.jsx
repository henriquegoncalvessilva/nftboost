"use client";
import CardsLeft from "@/assets/cards-left.png";
import CardsRight from "@/assets/cards-right.png";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function CardsHero() {
    const areaCardRef = useRef(null);
    const cardsLeftRef = useRef(null);
    const cardsRightRef = useRef(null);

    useEffect(() => {
        const cardsLeft = cardsLeftRef.current;
        const cardsRight = cardsRightRef.current;
        const areaCards = areaCardRef.current;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: areaCards,
                markers: false,
                start:'-=80% center',
                scrub:true
            },
        });

        tl.to(
            cardsLeft,
            {
                left: 0,
            },
            0
        ).to(
            cardsRight,
            {
                right: 0,
            },
            0
        );
    }, []);

    return (
        <>
            <div
                ref={areaCardRef}
                className="relative w-area-cards-mobile h-area-cards-mobile mt-12 @desktop:w-full @desktop:h-area-cards-desktop @desktop:mt-20"
            >
                <Image
                    ref={cardsLeftRef}
                    className=" z-10 w-1/2 @desktop:w-auto @desktop:left-[25%] absolute top-0 left-8"
                    src={CardsLeft}
                    alt="Card"
                ></Image>
                <Image
                    ref={cardsRightRef}
                    className=" w-1/2 @desktop:w-auto  @desktop:right-[25%] absolute top-0 right-8"
                    src={CardsRight}
                    alt="Card"
                ></Image>
            </div>
        </>
    );
}
