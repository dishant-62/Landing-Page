import Button from "../components/Button";

export default function MainSection() {
    return (
        <section className="w-full flex flex-col md:flex-row center gap-8">
            <div className="text md:w-1/2 col gap-8">
                <h1 className="md:text-8xl text-5xl font-redzone">
                    Monetize Your Opinions
                </h1>
                <span className="text-app_gray leading-8 text-xl">
                    Explore the world of Opinions. Leveraging AI for trending Opinion Polls.
                </span>
                <div className="row gap-4">
                    <Button>Get Started</Button>
                    <Button outline={true}>Join Discord</Button>
                </div>
            </div>
            <div className="relative md:w-1/2 col gap-4 center">
                <img
                    src="/assets/Designer.png"
                    alt="etherum_logo"
                    className="w-[86%] h-[70%] object-contain"
                />
            </div>
        </section>
    );
}
