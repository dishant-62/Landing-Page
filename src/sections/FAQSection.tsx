import Heading from "../components/Heading";
import QAComponent, { QAProps } from "../components/Q&A";

const questions: QAProps[] = [
    {
        question: "What is the OPINION-X?",
        answer:"OpinionX is a opinion trading platorm. You will have AI-generated trending opinion polls to place your bets."
    },
    {
        question: "Where are your company branches located?",
        answer:"OpinionX is a Made in India company. We're situated at Bangalore, India."
    },
    {
        question: "What is AI generated Opinion Polls?",
        answer: "We're leveraging the Google Trending News and processing it with the LLM Models to generate the opinion polls. There'll be no custom polls generated by users."
    },
    {
        question: "How can I buy/sell in Telegram?",
        answer: "You just have to launch OpinionX's telegram bot and type `/start` then connect your wallet and start placing the bets. Everything is is very User Friendly."
    },
    {
        question: "Can I trade from you Website?",
        answer:"No, Actually you can see our website which will be listing the product details but we're only allowing you to trade on Telegram Mini App."
    },
    {
        question: "What is the Service fee?",
        answer:"There is no Service fee! Enjoy trading your opinions. We would love you to serve you more :)"
    },
    {
        question: "How should i Start trading my opinion?",
        answer:"Just open-up our telegram bot and start it. After the wallet connection, you can start putting up the trades"
    },
    {
        question: "How is the winner getting decided?",
        answer: "There is nothing like winner or loser here, this platform offers you to put your stake into the pool and sell the moment you feel your trade awarded you well.",
    },
];

export default function FAQSection() {
    return (
        <section className="w-full col gap-4">
            <Heading
                className="text-center"
                heading="FAQs"
                subHeading="Frequently asked Questions"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 place-items-start mt-6">
                {questions.map((prop, i) => (
                    <QAComponent key={i} {...prop} />
                ))}
            </div>

            {/* <div className="flex flex-row flex-wrap mt-6">
                {questions.map((prop, i) => (
                    <div key={i} className="flex-[100%] md:flex-[50%]">
                        <QAComponent {...prop} />
                    </div>
                ))}
            </div> */}
        </section>
    );
}
