import React from "react";
import Image from "next/image";
import sectionImgOne from "../../../public/Image-Wrapper.png";
import sectionImgTwo from "../../../public/Text-media-new_custom-Media.png";
import bikeImgOne from "../../../public/span (1).png";
import bikeImgTwo from "../../../public/span.png";
import spanOne from "../../../public/Span (2).png";
import spanTwo from "../../../public/Span (3).png";

const bikeFirst = "/449ed33759ac77707654c6f5837d4b4dca7add43.png";

const Cities = () => {
  return (
    <main className="overflow-hidden">
      <section className="md:h-[900px] h-[400px] bg-cover bg-center flex flex-col justify-center px-6" style={{ backgroundImage: `url(${bikeFirst})` }}>
        <p className="text-white md:text-2xl text-lg">VELORETTI</p>
        <h2 className="text-white md:text-9xl text-3xl font-bold">City bikes</h2>
        <p className="text-white md:text-2xl text-base">Forever Forward.</p>
      </section>

      <section className="my-16 px-4">
        <h3 className="text-center text-4xl md:text-7xl font-semibold">Forever Forward.</h3>
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
          <div className="max-w-full overflow-hidden">
            <Image src={sectionImgTwo} alt="bike detail left" className="object-contain h-auto" />
          </div>
          <div className="max-w-full overflow-hidden">
            <Image src={sectionImgOne} alt="bike detail right" className="object-contain h-auto" />
          </div>
          <div className="absolute bottom-[-80px] md:bottom-[-100px] bg-white p-6 md:w-[400px] border rounded-md border-[#1416151A] shadow-md">
            <p className="text-[#14161566] text-base md:text-xl">Our women's bicycles are for everyone who likes to combine style with performance. In this range, available are the Café Racer and the Robyn, both frames with a lower tube, making it easy to step through.</p>
          </div>
        </div>
      </section>

      <section className="w-[90%] md:w-full bg-[#B6B6B6] mt-32 mb-16 md:h-[700px] flex flex-col md:flex-row items-center justify-evenly gap-5 md:gap-0 mx-auto px-4">
        <Image src={bikeImgOne} alt="bike angle 1" className="w-[30%] h-auto" />
        <Image src={bikeImgTwo} alt="bike angle 2" className="w-[30%] h-auto" />
        <Image src={bikeImgOne} alt="bike angle 3" className="w-[30%] h-auto" />
      </section>

      <section className="w-[90%] md:max-w-screen-xl my-16 flex flex-col md:flex-row items-start relative gap-6 md:gap-8 mx-auto px-4">
        <Image src={spanOne} alt="bike left" className="max-w-full h-auto" />
        <div className="border border-[#14161566] p-6 md:w-[500px] bg-white rounded-md shadow-sm">
          <p className="text-[#14161566] text-base md:text-2xl">Whether you like it easy or fast, we got both. Our men's range of bicycles combine modern clean design with great quality, so they're perfect for your daily city commute. Our men citybikes are the Caféracer, Caféchaser and the Berlin, but feel free to opt for a women's bike for that easy hop-on-hop-off Amsterdam style.</p>
        </div>
        <Image src={spanTwo} alt="bike right" className="max-w-full h-auto" />
      </section>

      <section className="my-16 text-center px-4">
        <h2 className="text-4xl md:text-8xl font-bold leading-tight">
          City bikes for <br />
          everyone.
        </h2>
      </section>
    </main>
  );
};

export default Cities;
