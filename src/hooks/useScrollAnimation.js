import { useInView } from "react-intersection-observer";

const useScrollAnimation = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return { ref, inView };
};

export default useScrollAnimation;