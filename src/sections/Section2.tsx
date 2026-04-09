import Image from "next/image";

export default function Section2() {
  return (
    <section className="bg-[#F1F5F9] overflow-hidden">

      <div className="relative max-w-[1440px] mx-auto px-[20px] md:px-[80px] pt-[60px] md:pt-[80px] pb-[120px] md:pb-[160px] gap-[48px] md:gap-[80px] flex flex-col items-center gap-[80px] text-center">

        {/* HEADING */}
        <div className="flex flex-col items-center gap-[32px] text-center max-w-[1280px] mx-auto ">

          <h2 className="font-extrabold text-[32px] md:text-[56px] leading-[1.2] md:leading-[1.1] tracking-[0] text-[#0F172A]">
            All the{" "}
            <span className="relative inline-block">
              <span className="relative z-10">tools</span>
              <Image
                src="/images/vector14.png"
                alt="underline"
                width={140}
                height={10}
                className="absolute left-0 bottom-[-6px] z-0"
              />
            </span>{" "}
            that you need
          </h2>

          <p className="font-normal text-[16px] md:text-[20px] leading-[1.6] md:leading-[1.8] max-w-[90%] md:max-w-[900px] tracking-[0] text-[#0F172A]">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. <br />
            Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
          </p>

        </div>

        {/* IMAGE GROUP */}
        <div className="relative w-full flex justify-center">

          {/* LEFT BLOB */}
          <Image
            src="/images/Blob1.png"
            alt=""
            width={250.28}
            height={500.21}
            className="absolute md:left-[-60px] md:bottom-[35px] md:w-[200px] md:h-[450px]
            lg:left-[-40px] lg:bottom-[110px] z-0 lg:w-[550px] lg:h-auto
            left-[-75px] bottom-[10px]"
          />

          {/* RIGHT BLOB */}
          <Image
            src="/images/Blob2.png"
            alt=""
            width={223}
            height={468.65}
            className=" md:block absolute top-[-100px] left-[320px] z-0
            lg:top-[-280px] lg:left-[980px] lg:w-[523px] lg:h-[868.65]
            md:top-[-75px] md:left-[460px] md:w-[423px] md:h-[528.65]"
          />

          <div className="relative inline-block">

            <Image
              src="/images/screen.png"
              alt="screen"
              width={1100}
              height={640}
              className="relative z-10 rounded-[20px]"
            />

            <Image
              src="/images/Lines.png"
              alt="lines"
              width={1093}
              height={78}
              className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 z-0"
            />

            <div className="absolute bottom-[-80px] left-0 w-full flex justify-between z-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <Image
                  key={i}
                  src={`/icons/app${i}.png`}
                  alt=""
                  width={64}
                  height={64}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}