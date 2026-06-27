import aboutData from "./AboutData";
import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import ImageReveal from "../../components/ui/ImageReveal";

const About = () => {
  return (
    <section
      id="about"
      className="
      py-12
      md:py-20
      bg-black
      text-white
      "
    >

      <Container>

        <div
          className="
          grid
          md:grid-cols-2
          gap-10
          md:gap-16
          items-center
          "
        >


          {/* IMAGE */}

          <div>

            <ImageReveal
              src={aboutData.image}
              alt="About Babareeba"
            />

          </div>





          {/* CONTENT */}

          <div>


            <SectionTitle
              title={aboutData.title}
            />



            <p
            className="
            mt-6

            text-gray-300

            leading-relaxed

            text-base

            md:text-lg
            "
            >

              {aboutData.description}

            </p>





            {/* FEATURES */}

            <div
            className="
            grid
            grid-cols-2
            gap-5
            mt-8
            "
            >

              <div>

                <h3 className="text-3xl font-bold">
                  10+
                </h3>

                <p className="text-gray-400">
                  Years Experience
                </p>

              </div>


              <div>

                <h3 className="text-3xl font-bold">
                  500+
                </h3>

                <p className="text-gray-400">
                  Events Hosted
                </p>

              </div>


            </div>






            {/* LINKS */}

            <div
            className="
            mt-10
            flex
            flex-wrap
            gap-4
            "
            >


              <a

              href="#gallery"

              className="
              px-8
              py-3

              bg-white

              text-black

              uppercase

              text-sm

              tracking-widest

              rounded-full

              hover:bg-gray-300

              transition

              "

              >

                View Gallery

              </a>




              <a

              href="#contact"

              className="
              px-8
              py-3

              border

              border-white/30

              text-white

              uppercase

              text-sm

              tracking-widest

              rounded-full

              hover:bg-white

              hover:text-black

              transition

              "

              >

                Contact Us

              </a>


            </div>



          </div>



        </div>


      </Container>


    </section>
  );
};


export default About;