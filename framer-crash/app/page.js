"use client";

import React from "react";
import { motion } from "motion/react";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { BoxInOut } from "./box-in-out";
import { Gestures } from "./gestures";
import { Scroller } from "./scroller";
import { Jumper } from "./jumper";
import { Switcher } from "./switcher";
import { Hero } from "./hero";
import { Collaboration } from "./collaboration";
import { Cards } from "./cards";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-20 items-center justify-center">
      {/* <BoxInOut /> */}
      {/* <Gestures/> */}
      {/* <Scroller/> */}
      {/* <Jumper/> */}
      {/* <Switcher/> */}
      {/* <Hero /> */}
      {/* <Collaboration /> */}
      <Cards />
    </div>
  );
}
