import Image from "next/image";

export default function Section1() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[80px] py-[40px] md:py-[80px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[80px] text-[#0F172A]">

        <div className="flex flex-col w-full md:w-[575px] gap-[80px]">

          {/* TOP GROUP */}
          <div className="flex flex-col gap-[32px]">

            <h1 className="font-[800] text-[40px] md:text-[72px] leading-[110%] tracking-[0] text-[#0F172A]">

              <span className="relative inline-block">

                <span className="relative z-10">
                  Teach
                </span>

                {/* VECTOR*/}
                <Image
                  src="/images/vector14.png"
                  alt="underline"
                  width={190.5}
                  height={12.4}
                  className="absolute left-2 bottom-[-3px] z-0"
                />

              </span>

              {" "}students worldwide

            </h1>

            <p className="font-[400] text-[18px] md:text-[24px] leading-[160%] tracking-[0px] text-[#0F172A]">
              Amet nunc diam orci duis ut sit diam arcu, nec.
              Eleifend proin massa tincidunt viverra lectus pulvinar.
              Nunc ipsum est pellentesque turpis ultricies.
            </p>

            {/* Buttons*/}
            <div className="flex flex-row items-center gap-[16px] md:gap-[32px] sm:flex-row items-start sm:items-center gap-[16px] md:gap-[32px]">

              <button className="flex items-center justify-center w-auto sm:w-[239px] h-[64px] px-[34px] py-[20px] bg-[#EA580C] border-[2px] border-[#EA580C] rounded-[8px] text-white font-[500] text-[20px] leading-[24px] tracking-[0.5px]">
                Sign Up Now
              </button>

              <div className="flex items-center gap-[8px] w-auto sm:w-[178px] h-[56px] px-[8px] py-[16px] text-[#2563EB] font-[500] text-[20px] leading-[24px] tracking-[0.5px] cursor-pointer">
                <Image
                  src="/icons/demo.png"
                  alt="demo"
                  width={24}
                  height={24}
                />
                <span>View Demo</span>
              </div>

            </div>

          </div>

          {/* TRUSTED TEXT*/}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[16px] md:gap-[48px] w-full md:w-[575px]">

            <p className="font-[400] text-[16px] leading-[140%] tracking-[0] text-[#475569]">
              Trusted by <br />
              leading companies
            </p>

            <div className="flex items-center gap-[24px] md:gap-[45px] flex-wrap">
              <Image src="/icons/col1.png" alt="" width={32} height={32} />
              <Image src="/icons/col2.png" alt="" width={32} height={32} />
              <Image src="/icons/col3.png" alt="" width={32} height={32} />
              <Image src="/icons/col4.png" alt="" width={32} height={32} />
              <Image src="/icons/col5.png" alt="" width={32} height={32} />
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="w-full max-w-[624px]">
          <Image
            src="/images/group50.png"
            alt="hero visual"
            width={624}
            height={544}
            className="w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
}