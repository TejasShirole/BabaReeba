import FastMarquee from "react-fast-marquee";

const Marquee = () => {
  return (
    <FastMarquee
      speed={70}
      gradient={false}
      className="py-6 bg-black text-white"
    >
      <span className="mx-10 text-3xl font-bold">
        LIVE MUSIC
      </span>

      <span className="mx-10 text-3xl font-bold">
        NIGHTLIFE
      </span>

      <span className="mx-10 text-3xl font-bold">
        EVENTS
      </span>

      <span className="mx-10 text-3xl font-bold">
        ENTERTAINMENT
      </span>

      <span className="mx-10 text-3xl font-bold">
        PREMIUM EXPERIENCE
      </span>
    </FastMarquee>
  );
};

export default Marquee;