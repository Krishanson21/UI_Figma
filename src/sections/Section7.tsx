import Image from "next/image";
import Card from "@/components/Card"
export default function Section7() {
  return (
    <section className="w-full bg-white overflow-hidden px-[20px] md:px-[80px] py-[20px] md:py-[80px]">

      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-[40px] md:gap-[80px]">

        {/* LEFT */}
        <div className="w-full md:w-[594px] flex flex-col gap-[32px] text-[#0F172A]">

          {/* HEADING */}
          <h2 className="font-[800] text-[32px] md:text-[56px] leading-[110%]">

            All the cool{" "}
            <span className="relative inline-block">
              <span className="relative z-10">features</span>

              {/* underline */}
              <Image
                src="/images/vector14.png"
                alt=""
                width={190}
                height={12}
                className="absolute left-0 bottom-[-6px] z-0"
              />
            </span>

          </h2>

          {/* TEXT */}
          <p className="font-[400] text-[16px] md:text-[20px] leading-[180%]">
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
            In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
            quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non
            viverra a, neque orci.
          </p>

          {/* LINK */}
          <div className="flex items-center gap-[8px] text-[#2563EB] font-[500] text-[16px] md:text-[20px] cursor-pointer">
            <span>View all the features</span>
            <span>→</span>
          </div>

        </div>

        {/* RIGHT */}
        <div className="relative w-full md:w-[600px] h-auto md:h-[500px]">
          {/* ICON STRIP */}
          <Image
            src="/images/icons.png"
            alt=""
            width={139}
            height={582}
            className="absolute left-[100px] top-[-160px] md:left-[320px] md:top-[-70px] md:w-[139px] md:h-[582px] rotate-[190deg] z-10"
          />

          {/* BLOB */}
          <Image
            src="/images/Blob3.png"
            alt=""
            width={446}
            height={378}
            className="object-contain z-0 rotate-[-15deg]"
          />

          {/* TOP CARD */}
          <div className="flex relative md:absolute bottom-[420px] md:bottom-[240px] w-full justify-start px-[20px] md:px-[40px] z-20">

            <Card
              type="popular"
              title="Design for how people think"
              description="Aliquam ut euismod condimentum elementum ultrices volutpat sit non."
              className=" w-[200px] lg:w-[220px]"
            />

          </div>

          {/* TOP RIGHT IMAGE */}
          <Image
            src="/images/Picture1.png"
            alt=""
            width={226}
            height={238}
            className="absolute top-[120px] right-[-60px] md:top-[95px] md:right-[110px] z-10"
          />

          {/* BOTTOM LEFT IMAGE */}
          <Image
            src="/images/Picture2.png"
            alt=""
            width={360}
            height={160}
            className="absolute bottom-[170px] left-[-20px] md:bottom-[-10px] md:left-[20px] rounded-[12px] z-10"
          />

          {/* BOTTOM RIGHT IMAGE */}
          <Image
            src="/images/Picture3.png"
            alt=""
            width={290}
            height={160}
            className="absolute bottom-[170px] right-[-210px] md:bottom-[-15px] md:right-[-50px] rounded-[12px] z-10"
          />

          {/* SMALL AVATAR */}
          <Image
            src="/images/Avatar.png"
            alt=""
            width={100}
            height={100}
            className="absolute top-[0px] right-[-200px] md:top-[160px] md:right-[85px] z-20"
          />

        </div>

      </div>

    </section>
  );
}