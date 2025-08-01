"use client";

import React from "react";
import { motion } from "motion/react";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { BoxInOut } from "./box-in-out";

export function Gestures() {
  return (
    <div>
      <motion.button
      whileHover={
        {scale:2}
      }
      whileTap={{rotate:10}}
      className="bg-amber-900 p-4 rounded-lg">
        {" "}
        Click Me!
      </motion.button>
    </div>
  );
}
