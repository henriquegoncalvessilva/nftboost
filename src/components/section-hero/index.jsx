import { ContainerGrid } from "../container";
import { AreaText } from "./components/area-text";

import { CardsHero } from "./components/cards";
export function SectionHero() {
    return (
        <>
            <section className="pt-36 bg-hero-pattern bg-no-repeat bg-top overflow-hidden">
                <ContainerGrid className="flex flex-col items-center">
                    <AreaText />
                    <CardsHero />
                </ContainerGrid>
            </section>
        </>
    );
}
