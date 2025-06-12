import React from "react";
import Image from "next/image";
import bikeImgOne from "../../../public/Text-media-static_background (3).png";
import bikeImgTwo from "../../../public/Text-media-static_background (1).png";
import bikeImgThree from "../../../public/Image Span.png";

const bg = "/Image.jpeg.png";

const AboutUs = () => {
  return (
    <main className="overflow-hidden">
      <section className="md:h-[900px] h-[400px] bg-cover bg-center flex justify-center flex-col px-6" style={{ backgroundImage: `url(${bg})` }}>
        <p className="text-white md:text-2xl text-lg">VELORETTI</p>
        <h2 className="text-white md:text-7xl text-3xl font-bold">About Us</h2>
        <p className="text-white md:text-2xl text-base">Forever Forward.</p>
      </section>

      <section className="my-16 px-4 flex flex-col md:flex-row items-center justify-evenly gap-10">
        <div className="max-w-full overflow-hidden">
          <Image src={bikeImgOne} alt="bike second" className="object-contain w-full h-auto" />
        </div>
        <aside className="max-w-xl">
          <h3 className="md:text-5xl text-3xl font-semibold mb-4">Forever forward</h3>
          <p className="md:text-xl text-base text-[#141615E5] leading-relaxed">Our bikes are made to stand the test of time, both aesthetically and practically. Whether you’re after a state-of-the-art electric bike, a classic city bike, or a kids bike for the school run, we want to help make your commute the best part of your day.</p>
        </aside>
      </section>

      <section className="my-16 px-4 flex flex-col md:flex-row-reverse items-center justify-evenly gap-10">
        <div className="max-w-full overflow-hidden">
          <Image src={bikeImgTwo} alt="bike third" className="object-contain w-full h-auto" />
        </div>
        <aside className="max-w-xl">
          <h3 className="md:text-5xl text-3xl font-semibold mb-4">Part of Pon.Bike</h3>
          <p className="md:text-xl text-base text-[#141615E5] leading-relaxed">Veloretti was founded in Amsterdam in 2012 with a mission to make clean, timeless bikes that are great quality and delivered to your door at a fair price. We are proud to now be part of Pon.Bike, the world-leading family of bike brands. With this support, we can continue to evolve our designs, take care of our riders, and help keep their bikes on the road.</p>
        </aside>
      </section>

      <section className="text-center px-4 my-16">
        <h2 className="text-4xl md:text-6xl font-bold leading-snug">
          Designed in <br />
          Amsterdam, <br />
          handmade <br />
          in Europe, <br />
          personal in <br />
          all cities.
        </h2>
      </section>

      <section className="md:h-[700px] h-[400px] bg-cover bg-center flex justify-end px-6 items-center my-10" style={{ backgroundImage: `url(${bg})` }}>
        <div className="max-w-xl text-right">
          <h2 className="text-white md:text-6xl text-3xl font-bold mb-4">Made for you</h2>
          <p className="text-white md:text-xl text-base leading-relaxed">Elevate your ride with a bicycle that mirrors your unique style and personality. From an Ace Two electric bike with the latest technology packed into a minimalist design, or a bright yellow Berlin for those who like to ride light and have a craving for nostalgia. Our diverse range of models and colours cater to riders of all kinds.</p>
        </div>
      </section>

      <section className="max-w-screen-xl w-[90%] mx-auto my-16 px-4">
        <h2 className="text-3xl font-semibold mb-6">Explore our bikes</h2>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {[1, 2, 3].map((_, i) => (
            <article key={i} className="bg-[#EBEDEE] rounded-xl p-5 flex flex-col justify-between md:w-[32%] w-full">
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold">City Bikes</h3>
                  <p className="text-[#141615] text-lg">From €399</p>
                </div>
                <div className="flex gap-3 mt-3">
                  <h2 className="underline">Women</h2>
                  <h2 className="text-[#C4C4C4]">Men</h2>
                </div>
              </div>
              <Image src={bikeImgThree} alt="bike card" className="my-5 object-contain w-full h-auto" />
              <div className="flex items-center gap-3">
                <button className="bg-white py-2 px-5 rounded-full">Buy Now</button>
                <button className="underline">Learn more</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
