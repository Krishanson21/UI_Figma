"use client"
import Image from "next/image";
import { useScroll } from "@/components/scroll-logic";

export default function Section6() {
    const { scrollRef, scrollLeft, scrollRight } = useScroll();
    return (
        <section className="w-full bg-white overflow-hidden px-[20px] md:px-[80px] py-[60px] md:py-[80px]">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-[40px] md:mb-[64px]">

                <h2 className="font-[800] text-[28px] md:text-[56px] leading-[110%] text-[#0F172A]">
                    What everyone says
                </h2>

                {/* ARROWS */}
                <div className="hidden md:flex items-center gap-[16px]">

                    <button onClick={scrollLeft} className="w-[48px] h-[48px] text-[#EA580C] font-[900] md:text-[32px] rounded-full border-[2px] border-[#EA580C] flex items-center justify-center">
                        🠔
                    </button>

                    <button onClick={scrollRight} className="w-[48px] h-[48px] text-[#EA580C] font-[900] md:text-[32px] rounded-full border-[2px] border-[#EA580C] flex items-center justify-center">
                        🠖
                    </button>

                </div>

            </div>

            {/* CARDS */}
            <div
                ref={scrollRef}
                className="flex gap-[24px] overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-[10px]"
            >

                {/* CARD */}
                <div className="min-w-[300px] md:min-w-[400px] bg-white rounded-[16px] p-[24px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.07),0px_20px_25px_-5px_rgba(0,0,0,0.1)] flex flex-col gap-[24px]">

                    <p className="font-[400] text-[16px] md:text-[18px] leading-[160%] text-[#0F172A]">
                        Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non.
                        Magna congue nisi maecenas elit aliquet eu sed consectetur.
                        Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.
                    </p>

                    <div className="flex items-center gap-[12px]">

                        <Image
                            src="/images/user1.png"
                            alt=""
                            width={48}
                            height={48}
                            className="rounded-full"
                        />

                        <div>
                            <h4 className="font-[500] text-[16px] text-[#0F172A]">
                                Hellen Jummy
                            </h4>
                            <p className="text-[14px] text-[#475569]">
                                Financial Counselor
                            </p>
                        </div>

                    </div>

                </div>

                {/* CARD 2 */}
                <div className="min-w-[300px] md:min-w-[400px] bg-white rounded-[16px] p-[24px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.07),0px_20px_25px_-5px_rgba(0,0,0,0.1)] flex flex-col gap-[24px]">

                    <p className="font-[400] text-[16px] md:text-[18px] leading-[160%] text-[#0F172A]">
                        Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id.
                        In tortor turpis viverra sagittis ultrices nisi, nec tortor.
                        Vestibulum, ultrices ultricies neque, hac ultricies dolor.
                    </p>

                    <div className="flex items-center gap-[12px]">

                        <Image
                            src="/images/user2.png"
                            alt=""
                            width={48}
                            height={48}
                            className="rounded-full"
                        />

                        <div>
                            <h4 className="font-[500] text-[16px] text-[#0F172A]">
                                Ralph Edwards
                            </h4>
                            <p className="text-[14px] text-[#475569]">
                                Math Teacher
                            </p>
                        </div>

                    </div>
                </div>

                {/* CARD 3 */}
                <div className="min-w-[300px] md:min-w-[400px] bg-white rounded-[16px] p-[24px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.07),0px_20px_25px_-5px_rgba(0,0,0,0.1)] flex flex-col gap-[24px]">
                    <p className="font-[400] text-[16px] md:text-[18px] leading-[160%] text-[#0F172A]">
                        Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam.
                        Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.
                    </p>
                    <div className="flex items-center gap-[12px]">
                        <Image
                            src="/images/user3.png"
                            alt=""
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                        <div>
                            <h4 className="font-[500] text-[16px] text-[#0F172A]">
                                Hellena John
                            </h4>
                            <p className="text-[14px] text-[#475569]">
                                Psychology Student
                            </p>
                        </div>
                    </div>
                </div>
                {/* CARD 4 */}
                <div className="min-w-[300px] md:min-w-[400px] bg-white rounded-[16px] p-[24px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.07),0px_20px_25px_-5px_rgba(0,0,0,0.1)] flex flex-col gap-[24px]">

                    <p className="font-[400] text-[16px] md:text-[18px] leading-[160%] text-[#0F172A]">
                        Sapien, sollicitudin et vitae id et laoreet sapien consectetur.
                        Felis egestas egestas amet aliquam sit euismod. Pellentesque neque,
                        sed ut volutpat. Ullamcorper in at nulla dignissim.
                    </p>

                    <div className="flex items-center gap-[12px]">

                        <Image
                            src="/images/user4.png"
                            alt=""
                            width={48}
                            height={48}
                            className="rounded-full"
                        />

                        <div>
                            <h4 className="font-[500] text-[16px] text-[#0F172A]">
                                John Carter
                            </h4>
                            <p className="text-[14px] text-[#475569]">
                                UX Designer
                            </p>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
}