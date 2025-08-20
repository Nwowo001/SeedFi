"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  children: React.ReactNode;
  delay?: number;
};

const Animation = ({ children, delay = 0 }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay }}
      variants={{
        hidden: { opacity: 0, y: 40 }, // slide up from below
        visible: { opacity: 1, y: 0 }, // fade in and settle
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
