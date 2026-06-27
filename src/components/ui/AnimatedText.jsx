import { motion } from "framer-motion";

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-3"
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
    </div>
  );
};

export default AnimatedText;