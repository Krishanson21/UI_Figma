import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-[#E2E8F0]">

            {/* TOP */}
            <div className="w-full px-[20px] md:px-[80px] py-[60px] md:py-[60px]">

                <div className="grid grid-cols-1 md:grid-cols-6 gap-[40px] md:gap-[80px]">

                    {/* LOGO */}
                    <div className="col-span-1 md:col-span-1 w-[173.33px] h-[35px]">
                        <Image
                            src="/images/logo2.png"
                            alt="logo"
                            width={173.33}
                            height={35}
                        />
                    </div>

                    {/* COLUMN */}
                    <div className="flex flex-col gap-[16px] w-[173.33px]">
                        <h4 className="font-[500] text-[16px] leading-[110%]">Product</h4>
                        <p className="font-[400] text-[16px] leading-[140%]">Pricing</p>
                        <p className="font-[400] text-[16px] leading-[140%]">Overview</p>
                        <p className="font-[400] text-[16px] leading-[140%]">Browse</p>
                        <div className="flex items-center gap-[6px]">
                            <span className="font-[400] text-[16px] leading-[140%]">Accessibility</span>
                            <span className="text-[10px] bg-purple-200 text-purple-700 px-[6px] py-[2px] rounded-[4px]">
                                BETA
                            </span>
                        </div>
                    </div>

                    {/* COLUMN */}
                    <div className="flex flex-col gap-[16px] w-[173.33px]">
                        <h4 className="font-[500] text-[16px] leading-[110%]">Solutions</h4>
                        <p className="font-[400] text-[16px] leading-[140%]">Brainstorming</p>
                        <p className="font-[400] text-[16px] leading-[140%]">Ideation</p>
                        <p className="font-[400] text-[16px] leading-[140%]">Wireframing</p>
                        <p className="font-[400] text-[16px] leading-[140%]">Research</p>
                    </div>

                    {/* COLUMN */}
                    <div className="flex flex-col gap-[16px] w-[173.33px]">
                        <h4 className="font-[500] text-[16px] leading-[110%]">Resources</h4>
                        <p className="font-[400] text-[16px] leading-[140%]">Help Center</p>
                        <p className="font-[400] text-[16px] leading-[140%]">Blog</p>
                        <p className="font-[400] text-[16px] leading-[140%]">Tutorials</p>
                        <p className="font-[400] text-[16px] leading-[140%]">FAQs</p>
                    </div>

                    {/* COLUMN */}
                    <div className="flex flex-col gap-[16px] w-[173.33px]">
                        <h4 className="font-[500] text-[16px] leading-[110%]">Support</h4>
                        <p className="font-[400] text-[16px] leading-[140%]">Contact Us</p>
                        <p className="font-[400] text-[16px] leading-[140%]">Developers</p>
                        <p className="font-[400] text-[16px] leading-[140%]">Documentation</p>
                        <p className="font-[400] text-[16px] leading-[140%]">Integrations</p>
                    </div>

                    {/* COLUMN */}
                    <div className="flex flex-col gap-[16px] w-[173.33px]">
                        <h4 className="font-[500] text-[16px] leading-[110%]">Company</h4>
                        <p className="font-[400] text-[16px] leading-[140%]">About</p>
                        <p className="font-[400] text-[16px] leading-[140%]">Press</p>
                        <p className="font-[400] text-[16px] leading-[140%]">Events</p>
                        <div className="flex items-center gap-[8px]">
                            <span className="font-[400] text-[16px] leading-[140%]">Request Demo</span>
                            <span>→</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* DIVIDER */}
            <div className="w-full px-[20px] md:px-[80px]">
                <div className="max-w-[1280px] mx-auto border-t border-[#1E293B]" />
            </div>

            {/* BOTTOM */}
            <div className="w-full py-[24px]">

                <div className="max-w-[1330px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[24px] md:gap-[48px]">

                    {/* LEFT */}
                    <p className="font-[400] text-[16px] leading-[140%] text-[#E2E8F0]">
                        uteach @ 2023. All rights reserved.
                    </p>

                    {/* RIGHT */}
                    <div className="flex flex-wrap md:flex-nowrap items-center gap-[16px] md:gap-[32px] text-[#E2E8F0] font-[400] text-[16px] leading-[140%]">

                        <span>Terms</span>
                        <span>Privacy</span>
                        <span>Contact</span>

                        <div className="flex items-center gap-[8px]">
                            <Image src="/icons/world.png" alt="" width={24} height={24} />
                            <span>EN</span>
                        </div>

                        <div className="flex items-center gap-[8px]">
                            <Image src="/icons/euro.png" alt="" width={24} height={24} />
                            <span>EUR</span>
                        </div>

                        <Image src="/icons/access.png" alt="" width={24} height={24} />

                    </div>

                </div>

            </div>
        </footer>
    );
}