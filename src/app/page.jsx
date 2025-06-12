import React from "react";
import Image from "next/image";
import Link from "next/link";

import bikeSec from "../../public/Text-media-static_background.png";
import bikeFifth from "../../public/Text-media-static_background (1).png";
import bikeSix from "../../public/div.text-media-static_background__qGDyA.png";
import bikeSev from "../../public/Featured-bike-new_card.png";

const bikeFist = "/7838d2af982259a96f988a19c294dad5d4ce1148.png";
const bikeSecond = "/Text-media-new_background.png";

const Input = ({ placeholder }) => <input type="text" placeholder={placeholder} className="w-full py-3 rounded-md border border-[#979797] placeholder:text-xl px-4 outline-none" />;

const Page = () => {
  return (
    <main className="max-w-[1900px] mx-auto">
      <section className="md:h-[900px] h-[400px] bg-cover bg-center flex justify-center flex-col px-5" style={{ backgroundImage: `url(${bikeFist})` }}>
        <p className="md:text-xl text-white">VELORETTI BUSINESS</p>
        <h2 className="md:text-7xl text-2xl text-white font-bold">Bike lease plan for employees.</h2>
      </section>

      <section className="my-10 flex flex-col md:flex-row items-center justify-evenly gap-10 px-10">
        <Image src={bikeSec} alt="Bike plan" />
        <aside>
          <h3 className="md:text-7xl text-2xl font-bold mb-4">Bike plans for employees.</h3>
          <p className="md:text-2xl text-[#141615E5]">
            Veloretti Electrics benefit both the environment and your employees' health.
            <br />
            They look good too. Cost-free for the employer and outside of the WKR.
          </p>
          <button className="font-bold my-5 underline">Discover more</button>
        </aside>
      </section>

      <section className="md:h-[900px] h-[400px] bg-cover bg-center flex justify-center gap-5 flex-col px-5" style={{ backgroundImage: `url(${bikeSecond})` }}>
        <h2 className="md:text-7xl text-2xl text-white font-bold">
          Service, <br /> maintenance and <br /> insurance
        </h2>
        <p className="md:text-xl text-white md:w-[500px]">Includes full insurance, maintenance, and roadside assistance for 36 months.</p>
      </section>

      <section className="my-10 flex flex-col md:flex-row items-center justify-evenly gap-10 px-10">
        <Image src={bikeFifth} alt="Free for employers" />
        <aside>
          <h3 className="md:text-7xl text-2xl font-bold mb-4">Free of charge for employers</h3>
          <p className="md:text-2xl text-[#141615E5]">Totally independent of the WKR and free for employers. Employees pay the lease, and employers may contribute.</p>
          <button className="font-bold my-5 underline">Cost example</button>
        </aside>
      </section>

      <section className="my-10 flex flex-col md:flex-row-reverse items-center justify-evenly gap-10 px-10">
        <Image src={bikeSix} alt="How it works" />
        <aside className="flex flex-col items-start gap-5">
          <h3 className="md:text-7xl text-3xl font-bold">How it works</h3>
          {[
            ["Determine the requirements", "Fill in the registration form. Our partner will do a credit check. Response in 24h."],
            ["Register your company", "Access our platform, set requirements, and share the registration link."],
            ["Ride your bike!", "Employees choose their bikes and receive them at home."],
            ["Administration", "Manage everything from a central dashboard for payroll and tracking."],
          ].map(([title, text]) => (
            <div key={title}>
              <h4 className="text-2xl font-semibold">{title}</h4>
              <p className="text-[#141615E5] md:text-xl">{text}</p>
            </div>
          ))}
        </aside>
      </section>

      <section className="flex items-center my-10 justify-evenly flex-col md:flex-row w-[90%] mx-auto gap-5">
        {["/1", "/2"].map((href, i) => (
          <Link href={href} key={i}>
            <Image src={bikeSev} alt={`bike-${i}`} />
          </Link>
        ))}
      </section>

      <section className="my-20 max-w-[1500px] w-[90%] mx-auto flex flex-col gap-4">
        <h3 className="text-5xl text-center font-bold">Get in touch</h3>
        {["First name", "Last name", "Email address", "Phone number", "Company name", "Company Size", "Number of bikes"].map((ph) => (
          <Input placeholder={ph} key={ph} />
        ))}
        <textarea placeholder="How can we help" className="w-full py-3 rounded-md border border-[#979797] placeholder:text-xl h-[300px] px-4 outline-none"></textarea>
        <button className="bg-[#979797] text-white py-3 rounded-2xl font-semibold">Send the request</button>
      </section>

      <hr className="my-10 border-[#1416151A]" />

      <section className="my-20 max-w-[1500px] w-[90%] mx-auto flex flex-col gap-4">
        <h3 className="text-5xl text-center font-bold">Any questions?</h3>
        {["What about the paperwork?", "How does it work with an employee who retires early?", "What does a Veloretti Bike Plan cost for an employer?", "How is the insurance & maintenance arranged when leasing a Veloretti bike?", "What are the legal requirements for the Veloretti bicycle plan?"].map((q, i) => (
          <details key={i} className="border-b py-4 border-[#1416151A]">
            <summary className="cursor-pointer text-xl font-bold">{q}</summary>
            <div className="mt-2 text-base">The bicycle plan requires no administrative effort. Our free platform provides a complete overview and simplifies all paperwork with just a few clicks.</div>
          </details>
        ))}
      </section>
    </main>
  );
};

export default Page;
