import { useState } from "react";
import { motion } from "motion/react";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useMotionValueEvent } from "motion/react";
import Image from "next/image";

export function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

    useMotionValueEvent(scrollYProgress, "change", (latestValue) => {
    console.log("Progress:", latestValue);
  });

  return (
    <div
      className="relative mb-[8rem] h-[300vh] py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"
      ref={heroRef}
    >
      <motion.div
        style={{ opacity, scale, position, x: "-50%" }}
        className=" flex flex-col items-center "
      >
        <h1 className="text-6xl pb-4 pt-24 font-bold"> TinaDocs </h1>
        <p className="text-xl text-white/50 max-w-xl mx-auto text-center">
          {" "}
          Supercharge your docs today with TinaDocs - the best way to manage
          your content.
        </p>
        <div className="flex gap-4 pt-4 max-w-xl mx-auto">
          <motion.button
            whileHover={{ rotate: -2.5 }}
            className="cursor-pointer border-[0.5px] border-white/50 px-2 py-1 rounded-lg"
          >
            {" "}
            Try Today{" "}
          </motion.button>
          <motion.button
            whileHover={{ rotate: 2.5 }}
            className="cursor-pointer font-bold text-black bg-blue-300 rounded-lg px-2 py-1"
          >
            {" "}
            Contact{" "}
          </motion.button>
        </div>
      </motion.div>
      <div className="sticky top-[30vh] left-1/2 -translate-x-1/2">
        <Image src="/design-system.png" alt="hero" width={1000} height={1000} className='rounded-3xl' />
      </div>
    </div>
  );
}
