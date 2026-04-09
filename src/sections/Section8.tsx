import Image from "next/image";

export default function Section8() {
    return (
        <section className="relative w-full h-[779px] px-[80px] pt-[256px] pb-[256px] border-b border-[#E2E8F0] overflow-hidden">

            {/* BACKGROUND */}
            {/* DESKTOP BG */}
            <Image
                src="/images/sec8-bg.png"
                alt="background"
                fill
                className="hidden md:block object-cover z-0"
            />

            {/* MOBILE BG */}
            <Image
                src="/images/mobile-sec8.png"
                alt="background"
                fill
                className="block md:hidden object-cover z-0"
            />

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col items-center text-center gap-[32px] max-w-[800px] mx-auto">

                {/* HEADING */}
                <h2 className="font-[800] text-[24px] md:text-[56px] leading-[110%] text-[#0F172A]">
                    Join a world of learning
                </h2>

                {/* TEXT */}
                <p className="font-[400] text-[16px] md:text-[20px] leading-[180%] text-[#0F172A]">
                    Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
                    <br />
                    Risus elit et fringilla habitant ut facilisi.
                </p>

                {/* BUTTON */}
                <button className="mt-[8px] flex items-center justify-center w-[239px] h-[64px] px-[24px] py-[20px] bg-[#EA580C] border-[2px] border-[#EA580C] rounded-[8px] text-white font-[500] text-[20px] md:text-[24px] leading-[24px] tracking-[0.5px]">
                    Sign Up Now
                </button>

            </div>

        </section>
    );
}