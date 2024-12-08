import Button from "../components/Button";

export default function MainSection() {
    return (
        <section className="w-full flex flex-col md:flex-row center gap-8">
            <div className="text md:w-1/2 col gap-8">
                <h1 className="md:text-8xl text-5xl font-redzone">
                    Monetize Your Opinions
                </h1>
                <span className="text-app_gray leading-8 text-xl">
                Autonomous Governance for Decentralized Opinion Markets. <br />
                Explore the world of Opinions. Leveraging AI for trending Opinion Polls. Opinion Trading Mini App based on Telegram to trade your opinions globally!
                </span>
                <div className="row gap-4">
                <a href="https://t.me/opinionx_bot" target="_blank" style={{
      border: "2px solid white",
      borderRadius: "12px", // For curved edges
      padding: "10px 20px", // For sufficient padding
      backgroundColor: "#007BFF", // Optional: Add background color
      color: "white", // Text color for contrast
      cursor: "pointer", // Pointer cursor for better UX
      fontSize: "16px", // Adjust font size for better readability
    }}>
  <button>Get Started</button></a>
                    {/* <Button outline={true}>Join Discord</Button> */}
                </div>
            </div>
            <div className="relative md:w-1/2 col gap-4 center">
                <img
                    src="/assets/banner.jpeg"
                    alt="etherum_logo"
                    className="w-[86%] h-[70%] object-contain mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%);
           -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
                    
                />
            </div>
        </section>
    );
}
