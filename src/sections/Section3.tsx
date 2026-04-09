import Image from "next/image";
import Card from "@/components/Card";

export default function Section3() {
    return (
        <section className="bg-white">

            <div className="w-full px-[20px] md:px-[80px] pt-[60px] md:pt-[80px] pb-[230px] md:pb-[120px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[80px]">

                {/* LEFT */}
                <div className="flex flex-col w-full md:w-[544px] gap-[32px] text-[#0F172A]">
                    {/* HEADING */}
                    <h2 className="font-[800] text-[32px] md:text-[56px] leading-[110%] tracking-[0]">
                        An{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10">all-in-one</span>

                            <Image
                                src="/images/vector14.png"
                                alt=""
                                width={260}
                                height={10}
                                className="absolute left-0 bottom-[-8px] z-0"
                            />
                        </span>{" "}
                        app that makes it easier
                    </h2>

                    {/* PARA BLOCK */}
                    <div className="flex flex-col gap-[8px] text-[18px] md:text-[20px] leading-[180%] font-[400]">

                        <p>✔ Est et in pharetra magna adipiscing ornare aliquam.</p>
                        <p>✔ Tellus arcu sed consequat ac velit ut eu blandit.</p>
                        <p>✔ Ullamcorper ornare in et egestas dolor orci.</p>

                    </div>
                    {/* LINK */}
                    <div className="flex items-center justify-between w-[277px] h-[56px] px-[8px] py-[16px] rounded-[8px] text-[#2563EB] font-[500] text-[20px] leading-[24px] tracking-[0.5px] cursor-pointer">
                        <span>Find more about the app →</span>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative w-full md:w-[700px] flex flex-col items-center md:block">
                    {/* BLOB */}
                    <Image
                        src="/images/Blob3.png"
                        alt=""
                        width={386}
                        height={308}
                        className="absolute left-[-100px] top-[30px] md:left-[-30px] md:top-[50px] z-0"
                    />
                    {/* ICON STRIP */}
                    <Image
                        src="/images/icons.png"
                        alt=""
                        width={139}
                        height={582}
                        className="absolute left-[100px] top-[-160px] md:left-[-100px] md:top-[-10px] md:w-[139px] md:h-[582px] rotate-[180deg] z-0"
                    />
                    {/* MAIN IMAGE */}
                    <Image
                        src="/images/Desktop.png"
                        alt=""
                        width={800}
                        height={350}
                        className="relative z-10 rounded-[16px] md:left-[40px] "
                    />
                    {/* CARDS */}
                    <div className="flex absolute bottom-[-170px] md:bottom-[-50px] w-full gap-[16px] overflow-x-auto md:overflow-visible no-scrollbar justify-start md:justify-center px-[10px] md:px-0 z-20">
                        <Card
                            type="featured"
                            title="The map of mathematics"
                            description={<> Egestas elit dui <br /> scelerisque ut eu purus aliquam vitae habitasse.</>}
                        />
                        <Card
                            type="popular"
                            title="Design for how people think"
                            description="Aliquam ut euismod condimentum elementum ultrices volutpat sit non."
                        />
                        <Card
                            type="new"
                            title="International & commercial law"
                            description="Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui."
                        />
                    </div>

                </div>

            </div>

        </section>
    );
}