import Image from "next/image";

export default function Section4() {
    return (
        <section className="bg-white">

            <div className="w-full px-[20px] md:px-[80px] py-[60px] md:py-[80px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[70px]">

                {/* LEFT → COLLAGE */}
                <div className="w-full md:w-[700px]">
                    <Image
                        src="/images/Col.png"
                        alt="students collage"
                        width={600}
                        height={651}
                        className="w-full h-auto"
                    />
                </div>

                {/* RIGHT → TEXT */}
                <div className="flex flex-col w-full md:w-[600px] gap-[32px] text-[#0F172A]">

                    {/* HEADING BLOCK */}
                    <div className="flex flex-col relative">

                        {/* AERO ICON */}
                        <Image
                            src="/icons/Aero.png"
                            alt="arrow"
                            width={64}
                            height={64}
                            className="absolute ml-[200px] top-[-55] md:ml-[390px] md:top-[-45]"
                        />

                        {/* HEADING */}
                        <h2 className="font-[800] text-[32px] md:text-[56px] leading-[110%]">
                            Meet international <br />
                            students & teachers
                        </h2>

                    </div>

                    {/* PARA */}
                    <p className="font-[400] text-[16px] md:text-[20px] leading-[180%] tracking-[0] text-[#0F172A]">
                        Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel,
                        velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit.
                        Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
                    </p>

                    {/* LINK */}
                    <div className="flex items-center gap-[8px] text-[#2563EB] font-[500] text-[20px] cursor-pointer">

                        <span>Explore teachers and students</span>

                        {/* small arrow (if needed separate, else reuse aero small version) */}
                        <span>→</span>

                    </div>

                </div>

            </div>

        </section>
    );
}