import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import { ContainerGrid } from "./container";
import { TitleSection } from "./title-section";

const questions = [
    {
        question: "O que são NFTs",
        response:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio aut explicabo fugiat ullam possimus iste quia ad id molestiae omnis nemo praesentium, exercitationem eaque sunt quam voluptatem. Facere, consequuntur!",
    },
    {
        question: "Como funciona a compra de NFTs em seu site?",
        response:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio aut explicabo fugiat ullam possimus iste quia ad id molestiae omnis nemo praesentium, exercitationem eaque sunt quam voluptatem. Facere, consequuntur!",
    },
    {
        question: "Como posso vender meus próprios NFTs?",
        response:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio aut explicabo fugiat ullam possimus iste quia ad id molestiae omnis nemo praesentium, exercitationem eaque sunt quam voluptatem. Facere, consequuntur!",
    },
    {
        question: "Os NFTs são seguros e autênticos?",
        response:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio aut explicabo fugiat ullam possimus iste quia ad id molestiae omnis nemo praesentium, exercitationem eaque sunt quam voluptatem. Facere, consequuntur!",
    },
    {
        question:
            "Quais são as taxas envolvidas na compra e venda de NFTs em seu site?",
        response:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio aut explicabo fugiat ullam possimus iste quia ad id molestiae omnis nemo praesentium, exercitationem eaque sunt quam voluptatem. Facere, consequuntur!",
    },
];

export function SectionQuestions() {
    return (
        <>
            <section className="pt-10 @desktop:pt-28">
                <ContainerGrid className={'px-0'}>
                    <TitleSection
                        subtitle={"Desvendando os Mistérios dos NFTs"}
                        title={"Perguntas frequentes"}
                    ></TitleSection>
                    <Accordion type="single" collapsible className="w-full">
                        {questions.map(({ question, response }, index) => {
                            return (
                                <AccordionItem
                                    key={index}
                                    value={`question-${index}`}
                                >
                                    <AccordionTrigger>
                                        {question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {response}
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </ContainerGrid>
            </section>
        </>
    );
}
