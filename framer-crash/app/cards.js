"use client";
import { useState } from "react";
import { motion } from "motion/react";

function shuffle(list) {
  return [list[list.length - 1], ...list.slice(0, -1)];
}

export function Cards() {
  const initialOrder = ["#ff0088", "#dd00ee", "#9911ff"];
  const [order, setOrder] = useState(initialOrder);

  return (
    <div>
      <button
        className="p-4 bg-pink-900 rounded-lg my-10 cursor-pointer"
        onClick={() => setOrder(shuffle(order))}
      >
        {" "}
        Next Card{" "}
      </button>

      <div className="flex flex-col gap-5">
        {order.map((item, index) => (
          <motion.div
            layout
            className={`p-4 rounded-2xl ${index === 1 ? "scale-150" : ""}`}
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
