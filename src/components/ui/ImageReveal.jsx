import { motion } from "framer-motion";

const ImageReveal = ({
  src,
  alt,
  className = "",
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
      className={`overflow-hidden rounded-3xl ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default ImageReveal;