"use client";
import { useEffect, useRef } from "react";
import { CardCollector } from "./card-collectors";
import { ContainerGrid } from "./container";
import { TitleSection } from "./title-section";

import ThumbImage from "@/assets/nfts/01.png";
import gsap from "gsap";

const collectors = [
    {
        image: ThumbImage,
        name: "Lorem Ipsum",
        percent: "20",
        priceBTC: "0.721",
    },
    {
        image: ThumbImage,
        name: "Lorem Ipsum",
        percent: "20",
        priceBTC: "0.721",
    },
    {
        image: ThumbImage,
        name: "Lorem Ipsum",
        percent: "20",
        priceBTC: "0.721",
    },
    {
        image: ThumbImage,
        name: "Lorem Ipsum",
        percent: "20",
        priceBTC: "0.721",
    },
    {
        image: ThumbImage,
        name: "Lorem Ipsum",
        percent: "20",
        priceBTC: "0.721",
    },
    {
        image: ThumbImage,
        name: "Lorem Ipsum",
        percent: "20",
        priceBTC: "0.721",
    },
    {
        image: ThumbImage,
        name: "Lorem Ipsum",
        percent: "20",
        priceBTC: "0.721",
    },
    {
        image: ThumbImage,
        name: "Lorem Ipsum",
        percent: "20",
        priceBTC: "0.721",
    },
    {
        image: ThumbImage,
        name: "Lorem Ipsum",
        percent: "20",
        priceBTC: "0.721",
    },
];

export function SectionCollectors({ subtitle, title, data }) {
    const areaColectorRef = useRef();

    useEffect(() => {
        const areaColector = areaColectorRef.current;
        gsap.fromTo(
            areaColector,
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
                    trigger: areaColector,
                    start: "top-=300px center",
                },
            }
        );
    }, []);
    return (
        <>
            <section className="py-10 @desktop:py-28">
                <ContainerGrid>
                    <TitleSection subtitle={subtitle} title={title} />
                    <div
                        className="grid grid-cols-1 @tablet:grid-cols-2 gap-x-4 @desktop:gap-x-8 gap-y-4"
                        ref={areaColectorRef}
                    >
                        {collectors.map(
                            ({ image, name, percent, priceBTC }, index) => {
                                return (
                                    <CardCollector
                                        numberItem={index + 1}
                                        key={index}
                                        image={image}
                                        name={name}
                                        percent={percent}
                                        valueBtc={priceBTC}
                                    ></CardCollector>
                                );
                            }
                        )}
                    </div>
                </ContainerGrid>
            </section>
        </>
    );
}
