import React from "react";
import Image from "next/image";
import firstImg from "../../../public/Container.png";
import colorImg from "../../../public/Product-view_color-Swatches.png";
import productImg from "../../../public/Product-view_bike-Selector-Container.png";
import ImgThree from "../../../public/Text-media-static_background__qGDyA.png";
import ImgFour from "../../../public/Text-media-static_background__qGDyA (1).png";
import ImgSeven from "../../../public/Text-media-static_background (4).png";
import ImgEight from "../../../public/Text-media-static_background (5).png";
import ImgNine from "../../../public/Text-media-static_background (6).png";
import ImgEleven from "../../../public/Text-media-static_background (7).png";
import forTve from "../../../public/Text-media-static_background (8).png";
import bike from "../../../public/Bike-highlights_background.png";
const sixSec = "/7a42111c52733388fa69d69e37f403230c1f95a4.png";
const tenSec = "/bfc42dbf6e765e21a4a3aa473c96874e358cad6f.png";

const ProductById = () => {
  return (
    <main className="max-w-[1900px] mx-auto">
      <section className="flex flex-col md:flex-row">
        <Image src={firstImg} alt="product preview" className="w-full md:w-1/2 object-cover" />
        <aside className="p-6 md:p-10 md:w-1/2 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-semibold">Electric Ivy</h1>
            <p className="text-4xl md:text-5xl font-semibold">€ 3.299</p>
          </div>

          <div className="flex gap-4 overflow-x-auto">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="min-w-[150px]">
                <Image src={productImg} alt={`variant ${i}`} className="w-full rounded-lg" />
                <h2 className="text-lg text-center mt-2">{i === 0 ? "Electric Ace" : "Electric Ivy"}</h2>
              </div>
            ))}
          </div>

          <hr className="border-[#F0F0F0]" />

          <div>
            <h2 className="text-xl font-medium mb-2">Ivy Two Matte Black</h2>
            <Image src={colorImg} alt="color preview" />
          </div>

          <hr className="border-[#F0F0F0]" />

          <div>
            <h3 className="text-xl underline mb-2">3 interest-free payments with</h3>
            <p className="text-base md:text-lg text-[#14161599] leading-relaxed">The Ivy Two is a step-through frame electric bike combining design, advanced technology, and safety features. Rider height: between 164 and 184cm.</p>
          </div>

          <button className="bg-[#F0F0F0] py-2 px-6 rounded-3xl text-base font-medium">Scroll to Specifications</button>

          <button className="bg-black text-white w-full py-4 rounded-3xl text-lg font-semibold">Customise now</button>

          <hr className="border-[#F0F0F0]" />

          <p className="text-base md:text-lg">Shipping to the Netherlands, Belgium & Germany only.</p>
        </aside>
      </section>

      <section className="flex flex-col md:flex-row items-center">
        <aside className="md:w-1/2 p-6 md:p-10 flex items-center justify-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">Ivy Two</h2>
            <p className="text-base md:text-2xl text-[#14161566] leading-relaxed">Introducing the Ivy Two, the electric bike that takes your daily commute to the next level. With an accessible lower frame, the latest technology, and safety features, the Ivy delivers instant power, convenience, and peace of mind. Bright LED brake light and safety tracking add security.</p>
          </div>
        </aside>
        <Image src={ImgThree} alt="Ivy Two" className="md:w-1/2 w-full object-cover" />
      </section>

      <section className="flex flex-col md:flex-row-reverse items-center">
        <aside className="md:w-1/2 p-6 md:p-10 flex items-center justify-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Silent and <br /> powerful mid-motor
            </h2>
            <p className="text-base md:text-2xl text-[#14161566] leading-relaxed">The 65Nm torque mid-engine delivers natural, smooth power. It adjusts automatically to your torque, not speed — for the most intuitive electric biking experience.</p>
          </div>
        </aside>
        <Image src={ImgFour} alt="Mid Motor" className="md:w-1/2 w-full object-cover" />
      </section>

      <section className="h-[400px] md:h-[900px] bg-cover bg-center flex flex-col justify-center px-6 md:px-20 text-white" style={{ backgroundImage: `url(${sixSec})` }}>
        <h2 className="text-2xl md:text-6xl font-bold leading-snug">Built-in display</h2>
        <p className="mt-4 text-base md:text-xl leading-relaxed">Experience elegant control with our integrated display. Customize your ride, navigate the city, and sync seamlessly with our app for full access to your data.</p>
      </section>

      <section className="flex flex-col md:flex-row items-center">
        <aside className="md:w-1/2 p-6 md:p-10 flex items-center justify-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Enviolo® <br /> automated gears
            </h2>
            <p className="text-base md:text-2xl text-[#14161566] leading-relaxed">Automated gear shifting with Enviolo® makes commuting effortless. Enjoy optimal cadence, enhanced visibility, and a seamless riding experience.</p>
          </div>
        </aside>
        <Image src={ImgSeven} alt="Gears" className="md:w-1/2 w-full object-cover" />
      </section>

      <section className="flex flex-col md:flex-row-reverse justify-between">
        <aside className="md:w-1/2 flex justify-center items-center p-6">
          <div>
            <h2 className="text-5xl font-semibold leading-tight">
              Gates® <br />
              belt drive
            </h2>
            <p className="text-2xl text-[#14161566] mt-4 whitespace-pre-line">Introducing the Ivy Two, the electric bike that takes your daily commute to the next level. With an accessible lower frame, the latest technology, and safety features, the Ivy delivers instant power, convenience, and peace of mind at every turn, making it the go-to bike for any commute. Equipped with a bright LED brake light for enhanced visibility and safety tracking for added security, the Ivy Two is the perfect combination of design, technology, and safety.</p>
          </div>
        </aside>
        <Image className="md:w-1/2 w-full object-cover" src={ImgEight} alt="Gates belt drive" />
      </section>

      <section className="flex flex-col md:flex-row justify-between mt-20">
        <aside className="md:w-1/2 flex justify-center items-center p-6">
          <div>
            <h2 className="text-5xl font-semibold leading-tight">LED brake light</h2>
            <p className="text-2xl text-[#14161566] mt-4 whitespace-pre-line">Introducing the Ivy Two, the electric bike that takes your daily commute to the next level. With an accessible lower frame, the latest technology, and safety features, the Ivy delivers instant power, convenience, and peace of mind at every turn, making it the go-to bike for any commute. Equipped with a bright LED brake light for enhanced visibility and safety tracking for added security, the Ivy Two is the perfect combination of design, technology, and safety.</p>
          </div>
        </aside>
        <Image className="md:w-1/2 w-full object-cover" src={ImgNine} alt="LED brake light" />
      </section>

      <section className="h-[400px] md:h-[900px] bg-cover bg-center flex flex-col justify-center px-10 md:px-20 mt-20 text-white" style={{ backgroundImage: `url(${tenSec})` }}>
        <h2 className="text-2xl md:text-7xl font-bold leading-tight">
          Osram® <br /> precision light
        </h2>
        <p className="mt-6 md:text-xl leading-relaxed max-w-3xl">Safety is fundamental when it comes to biking. We've designed the precision front light with precision and clarity in mind. From dark roads to challenging city terrain, the precision front light, with its strong beam, is designed to help you navigate with ease and safety. No matter the environment, we make sure we provide you with the visibility you need.</p>
      </section>

      <section className="my-20 flex flex-col md:flex-row items-center justify-evenly gap-10 px-10">
        <Image src={ImgEleven} alt="Safety tracking" className="w-full md:w-auto" />
        <aside className="max-w-xl">
          <h3 className="text-2xl md:text-7xl font-semibold mb-6">Safety tracking</h3>
          <p className="text-[#141615E5] md:text-2xl mb-6 leading-relaxed">The Electric Two comes with safety tracking. In case you find yourself in an uncertain situation, simply press the button on your handlebar to alert your loved ones of your live location and feel more secure.</p>
          <p className="text-[#141615E5] md:text-2xl leading-relaxed">Whether you're commuting in the city or exploring the countryside, you can have peace of mind knowing that notifying is just a button press away. Moreover, the tracking feature automatically deactivates after an hour, allowing you to enjoy your rides with complete privacy and security.</p>
        </aside>
      </section>

      <section className="my-20 flex flex-col md:flex-row-reverse items-center justify-evenly gap-10 px-10">
        <Image src={forTve} alt="Shimano hydraulic discbrakes" className="w-full md:w-auto" />
        <aside className="max-w-xl">
          <h3 className="text-2xl md:text-7xl font-semibold mb-6">
            Shimano® <br />
            hydraulic <br />
            discbrakes
          </h3>
          <p className="text-[#141615E5] md:text-2xl leading-relaxed">The Shimano® discbrakes are premium hydraulic disc brakes designed to deliver lightning-fast stopping power, so you can ride with complete confidence and control. Rest assured, you'll feel the difference in the moments you need it most.</p>
        </aside>
      </section>

      <section className="my-10 flex justify-center items-center">
        <Image src={bike} alt="Highlighted bike" className="max-w-full h-auto" />
      </section>

      <section className="md:max-w-[1700px] w-[90%] mx-auto my-10">
        <h1 className="text-5xl font-bold mb-10">All in the details.</h1>
        <div className="flex flex-col md:flex-row md:gap-10 gap-5 justify-between">
          <article className="md:w-1/3">
            <h2 className="text-4xl font-semibold mb-6">Frame</h2>
            <div className="space-y-4 text-[#14161599] text-xl">
              <div>
                <h3 className="text-2xl font-medium">Frame</h3>
                <p>Coated aluminium with integrated battery case</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Paint</h3>
                <p>PPG Powder Coating 2K</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Weight</h3>
                <p>
                  Frame 26 kg <br />
                  Battery 3 kg
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Rider Height</h3>
                <p>164-184cm</p>
              </div>
            </div>
          </article>

          <article className="md:w-1/3">
            <h2 className="text-4xl font-semibold mb-6">Components</h2>
            <div className="space-y-4 text-[#14161599] text-xl">
              <div>
                <h3 className="text-2xl font-medium">Motor</h3>
                <p>Bafang® 36v 250W / Torq + Rotation Sensor w/ a maximum torque of 65 Nm</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Battery</h3>
                <p>Removable Smart Battery / 36Vdc, 540 WH, 60-120 km range</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Gears</h3>
                <p>Enviolo® TR / Pro 44T Stepless Automatic Shifting / Ratio 310%</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Display</h3>
                <p>Veloretti built-in display</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Brakes</h3>
                <p>Shimano® MT200 hydraulic disc brakes</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Tires</h3>
                <p>Performance Plus tire / 50-622 / Anti Puncture level 2</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Belt</h3>
                <p>Osram® Precision front light LED, StVZO approved</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Light front</h3>
                <p>Gates® Carbon Beltdrive / 122T CDX</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Light rear</h3>
                <p>COB Hyperbolic LED</p>
              </div>
            </div>
          </article>

          <article className="md:w-1/3">
            <h2 className="text-4xl font-semibold mb-6">Accessories</h2>
            <div className="space-y-4 text-[#14161599] text-xl">
              <div>
                <h3 className="text-2xl font-medium">Abus plug</h3>
                <p>In-chain lock 140 cm</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Front carrier</h3>
                <p>AVS front carrier 480g, Carrying Capacity: 10 kg (22 lb)</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Rear carrier</h3>
                <p>TBA</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Basket</h3>
                <p>AVS basket 1.33kg, Carrying Capacity: 10 kg (22 lb)</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Cargo basket</h3>
                <p>AVS cargo basket 1.7kg, Carrying Capacity: 10 kg (22 lb)</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default ProductById;
