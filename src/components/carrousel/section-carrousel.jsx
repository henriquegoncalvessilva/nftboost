import { ContainerGrid } from "../container";
import { TitleSection } from "../title-section";
import { CarrouselCards } from "./carrousel-cards";
import Swiper from "swiper";
export function SectionCarrousel({ subtitle, title, data }) {
    return (
        <>
            <section className="py-10 px-0 @desktop:py-28">
                <ContainerGrid className="px-0 @desktop:px-3">
                    <TitleSection subtitle={subtitle} title={title} />
                    <CarrouselCards cards={data}  />
                </ContainerGrid>
            </section>
        </>
    );
}
