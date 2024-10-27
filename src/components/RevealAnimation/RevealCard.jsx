import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function RevealCard({ children, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.1*index }}
      style={{ width: "inherit", display: "flex", justifyContent: "center" }}
    >
      {children}
    </motion.div>
  );
}

export default RevealCard;
