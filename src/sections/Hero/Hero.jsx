import heroData from "./HeroData";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import AnimatedText from "../../components/ui/AnimatedText";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center text-white"
      style={{
        backgroundImage: `url(${heroData.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <Container className="relative z-10">
        <AnimatedText
          text={heroData.title}
          className="text-5xl md:text-8xl font-bold"
        />

        <p className="mt-6 max-w-xl text-lg">
          {heroData.subtitle}
        </p>

        <div className="mt-8">
          <Button className="bg-white text-black">
            {heroData.buttonText}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;