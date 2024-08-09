"use client";

import { Tilt } from "react-tilt";




const Hero = () => {

    const tiltOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            30,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          0.95,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

  return (
    <section className="bg-background relative w-full h-screen mx-auto">
      <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex md:flex-row flex-col justify-between items-start gap-5">
        <div className="flex flex-col justify-center items-start mt-5">
          <h1 className="font-black text-white lg:text-[60px] sm:text-[40px] xs:text-[40px] text-[40px] lg:leading-[98px] md:mt-28 mt-0">
            Hello, I'm Ben.
          </h1>
          <p className="font-medium lg:text-[25px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            A computer science student at NYU Shanghai
          </p>
        </div>
        <Tilt options={tiltOptions}>
        <div className="md:w-[500px] w-fit">
          <img className="rounded-xl" src="/profilepic.jpg" />
        </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Hero;
