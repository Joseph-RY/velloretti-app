import React from "react";
import Image from "next/image";
import Link from "next/link";
import BikeImgOne from "../../../public/Featured-bike-new_card.png";
import BikeImgTwo from "../../../public/Image Span.png";
import BikeImgThree from "../../../public/Text-media-static_background (1).png";
import collectionOne from "../../../public/Collection-item-info-testimonial_icon-Wrapper.png";
import collectionTwo from "../../../public/Collection-item-info-testimonial_icon-Wrapper (1).png";
import collectionThree from "../../../public/Collection-item-info-testimonial_icon-Wrapper (2).png";

const bikeForth = "/8d508d7b28e187efd3830842dfec9b4217475967.png";
const bikeFirst = "/d8bd60d643dceee9776b69c267697cea79e2ef7c.png";
const bikeSev = "/4e372e2a8d9aa1ba38d541172e20bb57512e6032.png";

const Product = () => {
  return (
    <main>
      <section className="md:h-[900px] h-[400px] bg-cover bg-center flex justify-center flex-col px-5" style={{ backgroundImage: `url(${bikeFirst})` }}>
        <p className="md:text-xl text-white">VELORETTI ELECTRIC</p>
        <h2 className="md:text-7xl text-2xl text-white">This is Two.</h2>
        <p className="md:text-xl text-white">Introducing the all-new Ivy and Ace</p>
      </section>
      <section className="flex items-center my-10 justify-evenly md:flex-row flex-col md:w-[100%] w-[90%] m-auto md:gap-0 gap-5">
        <Link href={"/1"}>
          <Image src={BikeImgOne} alt="bike" className="" />
        </Link>
        <Link href={"/2"}>
          <Image src={BikeImgOne} alt="bike" className="" />
        </Link>
      </section>
      <section className="md:max-w-[1800px] w-[90%] m-auto my-8">
        <h2 className="text-2xl my-5">Explore our bikes</h2>
        <div className="flex justify-between md:flex-row flex-col md:gap-0 gap-4">
          <article className="bg-[#EBEDEE] md:h-[480px] md:w-[350px] rounded-xl p-5">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl">City Bikes</h3>
              <p className="text-[#141615] text-xl">From €399</p>
            </div>
            <div className="flex gap-3">
              <h2 className="underline my-2">Women</h2>
              <h2 className="my-2 text-[#C4C4C4]">Men</h2>
            </div>
            <Image src={BikeImgTwo} alt="third" className="my-5" />
            <div className="mt-7 flex items-center gap-3">
              <button className="bg-white py-2 px-5 rounded-[100px] cursor-pointer">Buy Now</button>
              <button className="underline cursor-pointer">Learn more</button>
            </div>
          </article>
          <article className="bg-[#EBEDEE] md:h-[480px] md:w-[350px] rounded-xl p-5">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl">City Bikes</h3>
              <p className="text-[#141615] text-xl">From €399</p>
            </div>
            <div className="flex gap-3">
              <h2 className="underline my-2">Women</h2>
              <h2 className="my-2 text-[#C4C4C4]">Men</h2>
            </div>
            <Image src={BikeImgTwo} alt="third" className="my-5" />
            <div className="mt-7 flex items-center gap-3">
              <button className="bg-white py-2 px-5 rounded-[100px] cursor-pointer">Buy Now</button>
              <button className="underline cursor-pointer">Learn more</button>
            </div>
          </article>
          <article className="bg-[#EBEDEE] md:h-[480px] md:w-[350px] rounded-xl p-5">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl">City Bikes</h3>
              <p className="text-[#141615] text-xl">From €399</p>
            </div>
            <div className="flex gap-3">
              <h2 className="underline my-2">Women</h2>
              <h2 className="my-2 text-[#C4C4C4]">Men</h2>
            </div>
            <Image src={BikeImgTwo} alt="third" className="my-5" />
            <div className="mt-7 flex items-center gap-3">
              <button className="bg-white py-2 px-5 rounded-[100px] cursor-pointer">Buy Now</button>
              <button className="underline cursor-pointer">Learn more</button>
            </div>
          </article>
        </div>
        <h2 className="md:text-5xl text-4xl my-20">
          Make your commute <br /> the best part of your day.
        </h2>
      </section>
      <section className="max-w-[1700px] m-auto my-10">
        <h1>
          Clean and timeless designs that make every ride a thrill. <br /> Wherever you're heading, our bikes are made to make your daily <br /> commute a joy.
        </h1>
      </section>
      <section className="md:h-[900px] h-[400px] bg-cover bg-center flex justify-center items-start flex-col px-10" style={{ backgroundImage: `url(${bikeForth})` }}>
        <h2 className="md:text-7xl text-2xl text-white">
          Discover your <br />
          local Veloretti <br />
          partner store
        </h2>
        <p className="md:text-xl text-white my-5">
          Our partner stores across the Netherlands <br />
          are there for you. Whether you're looking to <br />
          pick up a newly ordered bike, need a fix, or <br />
          want to take a test ride on our Ivy or Ace Two, <br />
          your ideal biking experience is closer than you think.
        </p>
        <button className="px-6 rounded-4xl py-3 bg-white">Find a partner store near you</button>
      </section>
      <section className="my-10 md:flex-row flex-col flex items-center px-10 justify-evenly gap-10">
        <Image src={BikeImgThree} alt="second image" />
        <aside>
          <h3 className="md:text-7xl text-2xl">Leasing</h3>
          <p className="md:text-2xl text-[#141615E5]">
            Want to provide your organisation with mobility in a unique and <br />
            creative way? Our Electric and City bikes are the perfect solution for <br />
            healthier employees. So whether it's customised employee bicycles <br />
            or standout promotional rides, both small and big organisations <br />
            share the love of our Veloretti designs. Depending on the number of <br />
            bikes, we will give you a customised quote.
          </p>
          <button className="font-bold my-5">Learn more</button>
        </aside>
      </section>
      <section className="md:max-w-[1700px] w-[90%] m-auto my-10">
        <h2 className="text-5xl">They talked about us</h2>
        <div className="my-10 flex justify-between md:flex-row flex-col md:gap-0 gap-5">
          <article className="md:w-[31%] h-[300px] border-1 p-10 rounded-xl border-[#1416151A] flex flex-col justify-center gap-5">
            <h2 className="text-2xl">"One of the best e-bikes available at any price and far and away my favourite ride of the year."</h2>
            <Image className="w-[200px]" src={collectionOne} alt="first image" />
          </article>
          <article className="md:w-[31%] h-[300px] border-1 p-10 rounded-xl border-[#1416151A] flex flex-col justify-center gap-5">
            <h2 className="text-2xl">“This second-generation Ace is a superhero amongst urban e- bikes… 9/10.”</h2>
            <Image className="w-[200px]" src={collectionTwo} alt="first image" />
          </article>
          <article className="md:w-[31%] h-[300px] border-1 p-10 rounded-xl border-[#1416151A] flex flex-col justify-center gap-5">
            <h2 className="text-2xl">"The timeless, chic design and stunning craftsmanship make them the perfect way to get around the city."</h2>
            <Image className="w-[200px]" src={collectionThree} alt="first image" />
          </article>
        </div>
      </section>
      <section className="md:h-[900px] h-[400px] bg-cover bg-center flex justify-center items-start flex-col px-10" style={{ backgroundImage: `url(${bikeSev})` }}>
        <h2 className="md:text-7xl text-2xl text-white">Red Dot Award</h2>
        <p className="md:text-xl text-white my-5">
          Good design is what drives us, and we're <br />
          proud to share that Veloretti Electric Two has <br />
          already won the prestigious Red Dot Design <br />
          Award 2023, as judged by the world's best product designers.
        </p>
      </section>
      <section className="my-20 md:flex-row-reverse flex-col flex items-center px-10 justify-evenly gap-10">
        <Image src={BikeImgThree} alt="second image" />
        <aside>
          <h3 className="md:text-7xl text-2xl">Ride carefree</h3>
          <p className="md:text-2xl text-[#141615E5]">
            Our Qover x Veloretti insurance plan has got you covered. It offers <br />
            comprehensive coverage against theft, provides assistance in case <br />
            of any issues, and covers any damages to your bike.
          </p>
          <button className="font-bold my-5">Learn more</button>
        </aside>
      </section>
    </main>
  );
};

export default Product;
