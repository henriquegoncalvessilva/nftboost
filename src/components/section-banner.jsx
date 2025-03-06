"use client";
import { ContainerGrid } from "./container";
import GooglePlay from "@/assets/google.svg";
import AppleStore from "@/assets/apple.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export function SectionBanner() {
    const bannerRef = useRef(null);

    useEffect(() => {
        const bannerArea = bannerRef.current;

        gsap.fromTo(bannerArea,{
            opacity:0,
            scale:0.7,
        },{
            opacity:1,
            scale:1,
            duration:1,
            ease:'power3.out',
            scrollTrigger:{
                trigger:bannerArea,
                start:'top-=100% center'
            }
        })

    }, []);

    return (
        <>
            <section>
                <ContainerGrid>
                    <div
                        ref={bannerRef}
                        className="w-full h-auto bg-cover py-10 px-2 @laptop:py-0 @laptop:px-0 @laptop:h-area-banner bg-banner bg-no-repeat bg-center flex flex-col items-center justify-center rounded-xl"
                    >
                        <h2 className="text-4xl @laptop:text-6xl/snug font-poppins text-center mb-4">
                            Abra as Portas para a Próxima Revolução Digital!
                        </h2>
                        <p className="text-center text-base @laptop:text-xl mb-6 max-w-xl">
                            Descubra, Adquira e Possua os NFTs Mais Valiosos do
                            Universo Digital. Sua Oportunidade, Sua História
                        </p>
                        <div className="flex flex-col @laptop:flex-row items-center gap-6 mt-6">
                            <Image src={GooglePlay} alt=""></Image>
                            <Image src={AppleStore} alt=""></Image>
                        </div>
                    </div>
                </ContainerGrid>
            </section>
        </>
    );
}
