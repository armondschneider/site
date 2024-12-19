import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LogoHoverEffectProps {
  text: string;
  logoSrc: string;
}

const LogoHoverEffect: React.FC<LogoHoverEffectProps> = ({ text, logoSrc }) => {
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <span
      ref={textRef}
      className="inline cursor-alias relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {text}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 5,
              x: mousePosition.x + 10,
              y: mousePosition.y + 10,
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="pointer-events-none w-24 h-24 rounded-xl shadow-xl bg-white flex items-center justify-center"
            style={{
              position: "absolute",
              transformOrigin: "top left",
            }}
          >
            <img
              src={logoSrc}
              alt={`${text} Logo`}
              className="object-fill rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default LogoHoverEffect;