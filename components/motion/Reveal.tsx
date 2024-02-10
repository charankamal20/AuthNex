import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

function Reveal({ children, width = "fit-content" }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if(isInView){
        animation.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative" style={{ width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.5, delay: 0.5}}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
