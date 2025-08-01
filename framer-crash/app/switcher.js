import { useState } from "react";
import { motion } from "motion/react";

export function Switcher() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      className="w-16 h-8 rounded-full bg-gray-500 p-1 cursor-pointer"
      onClick={() => {
        setIsOn(!isOn);
      }}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`w-6 h-6 rounded-full ${
          isOn ? "bg-green-500 ml-auto" : "bg-white"
        }`}
      />
    </button>
  );
}
