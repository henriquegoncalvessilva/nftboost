import { ContainerGrid } from "@/components/container";

import ImageNft01 from "../assets/nfts/01.png";

import { SectionHero } from "@/components/section-hero";
import { SectionCarrousel } from "@/components/carrousel/section-carrousel";
import { SectionCollectors } from "@/components/section-collectors";
import { SectionBanner } from "@/components/section-banner";
import { SectionQuestions } from "@/components/section-questions";

const featuredCollections = [
    {
        name: "Cat #221",
        thumbnail: ImageNft01,
        price: "0.0721 BTC",
        priceBrl: "602,02",
    },
    {
        name: "Cat #221",
        thumbnail: ImageNft01,
        price: "0.0721 BTC",
        priceBrl: "602,02",
    },
    {
        name: "Cat #221",
        thumbnail: ImageNft01,
        price: "0.0721 BTC",
        priceBrl: "602,02",
    },
    {
        name: "Cat #221",
        thumbnail: ImageNft01,
        price: "0.0721 BTC",
        priceBrl: "602,02",
    },
    {
        name: "Cat #221",
        thumbnail: ImageNft01,
        price: "0.0721 BTC",
        priceBrl: "602,02",
    },
];

export default function Home() {
    return (
        <>
            <ContainerGrid>
                <SectionHero />
                <SectionCarrousel
                    subtitle={"Destaque em Coleções"}
                    title={"Coleções notáveis"}
                    data={featuredCollections}
                />
                <hr className="w-full border-t border-white  border-opacity-15 max-w-grid mx-auto " />
                <SectionCarrousel
                    subtitle={"Seleção Mensal"}
                    title={"Destaque do Mês"}
                    data={featuredCollections}
                />
                <hr className="w-full border-t border-white  border-opacity-15 max-w-grid mx-auto " />

                <SectionCollectors
                    subtitle="Colecionadores em Foco"
                    title="Principais colecionadores"
                    data={[]}
                />
                <hr className="w-full border-t border-white  border-opacity-15 max-w-grid mx-auto " />
                <SectionCarrousel
                    subtitle={"Em Tendência"}
                    title={"Tendências"}
                    data={featuredCollections}
                />

                <SectionBanner />

                <SectionQuestions />
            </ContainerGrid>
        </>
    );
}
