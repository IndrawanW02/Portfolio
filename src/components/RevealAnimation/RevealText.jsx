import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function RevealText({ children, delay}) {
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
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: delay }}

      style={{width: "inherit"}}
    >
      {children}
    </motion.div>
  );
}

export default RevealText;
