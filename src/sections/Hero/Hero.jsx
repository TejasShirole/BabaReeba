import heroData from "./HeroData";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import AnimatedText from "../../components/ui/AnimatedText";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center"
    >
      {/* Background */}
      <img
        src={heroData.backgroundImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-3xl">

          <span className="uppercase tracking-[8px] text-yellow-400 text-sm">
            Welcome To
          </span>

          <AnimatedText
            text={heroData.title}
            className="
              mt-4
              text-5xl
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-bold
              leading-none
            "
          />

          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            {heroData.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full">
              {heroData.buttonText}
            </Button>

            <a
              href="#about"
              className="
                border
                border-white
                px-8
                py-4
                rounded-full
                text-white
                hover:bg-white
                hover:text-black
                transition
              "
            >
              Explore More
            </a>
          </div>
        </div>
      </Container>

      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about">
          <div className="w-7 h-12 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;