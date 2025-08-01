"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

function shuffle(list) {
  return [list[list.length - 1], ...list.slice(0, -1)];
}

export function Cards() {
  const initialOrder = ["#ff0088", "#dd00ee", "#9911ff"];
  const [order, setOrder] = useState(initialOrder);
  const [lastThreshold, setLastThreshold] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(scrollYProgress);
    // Calculate which 10% segment we're in (0, 1, 2, 3, ..., 10)
    const currentSegment = Math.floor(latest * 10);
    if (currentSegment > lastThreshold && currentSegment > 0) {
      console.log("IM TRYING TO SHUFFLE");
      setOrder(shuffle(order));
      setLastThreshold(currentSegment);
    }
  });

  return (
    <div ref={containerRef} className=" min-h-[200vh]">
      {" "}
      {/* Added height to enable scrolling */}
      <button
        className="p-4 bg-pink-900 rounded-lg my-10 cursor-pointer"
        onClick={() => setOrder(shuffle(order))}
      >
        {" "}
        Next Card{" "}
      </button>
      <div className="flex flex-col gap-5 sticky top-10">
        {order.map((item, index) => (
          <motion.div
            layout
            className={`p-4 rounded-2xl ${index === 1 ? "scale-150" : "opacity-50"}`}
            key={item}
            style={{ backgroundColor: item }}
          >
            {" "}
            {item}{" "}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
