import React from "react";
import { ContainerGrid } from "./container";
import Logo from "@/assets/logo.svg";
import IconHamburguer from "@/assets/icon-hamburger.svg";
import Image from "next/image";
import Link from "next/link";
export function Header() {
    const itemsNav = ["Download", "NFTs", "Rank", "FAQ"];
    return (
        <>
            <header className="absolute top-0 left-0 py-6 w-full @laptop:py-5">
                <ContainerGrid className="flex items-center justify-between">
                    <Image
                        src={Logo}
                        alt="logo"
                        className="max-w-logo-size-mb"
                    />
                    <div className="hidden @laptop:flex flex-1 max-w-nav-header items-center justify-between">
                        <nav className="flex gap-12">
                            {itemsNav.map((item, index) => {
                                return (
                                    <Link
                                        href="#"
                                        key={index}
                                        className="font-inter hover:text-blue-primary transition-colors ease-linear"
                                    >
                                        {item}
                                    </Link>
                                );
                            })}
                        </nav>
                        <button className="bg-blue-primary py-4 px-7 rounded-full font-medium hover:bg-blue-900 transition-all ease-linear">
                            Conectar carteira
                        </button>
                    </div>
                    <button className="w-10 h-10 flex items-center justify-center border border-white border-opacity-5 rounded bg-white bg-opacity-5 @laptop:hidden">
                        <Image src={IconHamburguer} alt="Menu Mobile" />
                    </button>
                </ContainerGrid>
            </header>
        </>
    );
}
