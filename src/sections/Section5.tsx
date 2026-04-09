import Image from "next/image";

export default function Section5() {
    return (
        <section className="bg-[#0F172A] border-b border-[#1E293B]">

            {/* OUTER */}
            <div className="w-full py-[60px] md:py-[80px] px-[80px] md:px-[220px]">

                {/* INNER (1280 container) */}
                <div className="flex flex-col md:flex-row gap-[40px] items-center justify-between text-center">

                    {/* ITEM 1 */}
                    <div className="flex flex-col items-center gap-[16px] text-yellow-400">
                        <Image src="/icons/Icon1.png" alt="" width={64} height={64} />
                        <h3 className="font-[800] text-[40px] md:text-[72px] leading-[110%]">
                            195
                        </h3>
                        <p className="text-[16px] md:text-[24px] font-[400] text-yellow-400">
                            user countries
                        </p>
                    </div>

                    {/* ITEM 2 */}
                    <div className="flex flex-col items-center gap-[16px] text-yellow-400">
                        <Image src="/icons/Icon2.png" alt="" width={64} height={64} />
                        <h3 className="font-[800] text-[40px] md:text-[72px] leading-[110%]">
                            1M
                        </h3>
                        <p className="text-[16px] md:text-[24px] font-[400] text-yellow-400">
                            valued teachers
                        </p>
                    </div>

                    {/* ITEM 3 */}
                    <div className="flex flex-col items-center gap-[16px] text-yellow-400">
                        <Image src="/icons/Icon3.png" alt="" width={64} height={64} />
                        <h3 className="font-[800] text-[40px] md:text-[72px] leading-[110%]">
                            17M
                        </h3>
                        <p className="text-[16px] md:text-[24px] font-[400] text-yellow-400">
                            happy students
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
}