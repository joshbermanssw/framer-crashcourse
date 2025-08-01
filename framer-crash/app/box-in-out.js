"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

// In motion to use the exit prop in the motion.div we need to
// wrap the entire thing that is unMounting in the <AnimatePresence/>

export function BoxInOut() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <motion.button
        className="bg-purple-500 p-4 rounded-lg text-lg cursor-pointer"
        onClick={() => setIsVisible(!isVisible)}
        layout="position"
      >
        {" "}
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ rotate: 0, scale: 0, y: 0 }}
            animate={{ rotate: 360, scale: 2, y:[0, 150, -150, -150, 0] }}
            exit={{ rotate: 0, scale: 0 }}
            transition={{ duration: 2 }}
            className="box w-20 bg-blue-300 h-20 rounded-lg"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
