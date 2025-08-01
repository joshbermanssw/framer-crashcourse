import { useState } from "react";
import { motion } from "motion/react";

function shuffle(list) {
  return list.sort(() => Math.random() - 0.5);
}

export function Jumper() {
  const initialOrder = ["#ff0088", "#dd00ee", "#9911ff", "#0d63f8"];
  const [order, setOrder] = useState(initialOrder);

  return (
    <div>
      <button
        className="p-4 bg-pink-900 rounded-lg my-10"
        onClick={() => setOrder(shuffle(initialOrder))}
      >
        {" "}
        Shuffle{" "}
      </button>

      <div className="grid grid-cols-2 gap-5">
        {order.map((item) => (
          <motion.div layout 
          className='p-4 rounded-2xl'
          key={item}
          style={{ backgroundColor: item }}>
            {" "}
            {item}{" "}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
