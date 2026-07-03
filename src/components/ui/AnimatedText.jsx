import { motion } from "framer-motion";

const AnimatedText = ({ text, className = "" }) => {
  return (
    <h1 className={className}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-3 text-white"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
          }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
};

export default AnimatedText;