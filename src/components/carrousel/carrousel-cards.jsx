"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CardNFT } from "../card-nft";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Arrow from "@/assets/arrow.svg";
import "swiper/css";
import gsap from "gsap";

export function CarrouselCards({ cards }) {
    const swiperRef = useRef();

    const areaSlideRef = useRef();

    useEffect(() => {
        const areaSlide = areaSlideRef.current;
        gsap.fromTo(
            areaSlide,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: areaSlide,
                    start: "top-=300px center",
                },
            }
        );
    }, []);

    return (
        <div ref={areaSlideRef} className="relative w-full">
            <button
                onClick={() => {
                    swiperRef.current?.slidePrev();
                }}
                className="w-12 h-12 bg-blue-primary hover:bg-gray-hover-btn-slide transition-all ease-linear rounded-full items-center justify-center absolute z-10 top-1/2 -mt-6 -left-6 border-white border-opacity-50 hidden @desktop:flex"
            >
                <Image src={Arrow} alt="seta esquerda"></Image>
            </button>

            <Swiper
                className="!px-3"
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Navigation]}
                slidesPerView={4}
                spaceBetween={33}
                speed={800}
                loop={true}
                breakpoints={{
                    375: {
                        slidesPerView: 1.3,
                        spaceBetween: 1.24,
                    },
                    640: {
                        slidesPerView: 2.5,
                    },
                    1024: {
                        slidesPerView: 3.1,
                    },
                    1250: {
                        slidesPerView: 4,
                        spaceBetween: 2,
                    },
                }}
            >
                {cards.map(({ name, thumbnail, price, priceBrl }, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <CardNFT
                                name="Cat #221"
                                thumbnail={thumbnail}
                                price={price}
                                priceBrl={priceBrl}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <button
                onClick={() => {
                    swiperRef.current?.slideNext();
                }}
                className="w-12 h-12 bg-blue-primary  hover:bg-gray-hover-btn-slide transition-all ease-linear rounded-full hidden items-center justify-center rotate-180 absolute z-10 top-1/2 -mt-6 -right-6 border-white border-opacity-50 @desktop:flex"
            >
                <Image src={Arrow} alt="seta direita"></Image>
            </button>
        </div>
    );
}
