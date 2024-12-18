import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageModalProps {
  imageSrc: string | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageSrc, onClose }) => {
  if (!imageSrc) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.img
          src={imageSrc}
          alt="Enlarged"
          className="rounded-xl shadow-lg pointer-events-none max-w-[90vw] max-h-[80vh] sm:max-w-[80vw] sm:max-h-[70vh] md:max-w-[60vw] md:max-h-[60vh]"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;