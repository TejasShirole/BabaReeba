import galleryData from "./GalleryData";
import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import ImageReveal from "../../components/ui/ImageReveal";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="bg-black text-white py-20 md:py-28"
    >
      <Container>
        <SectionTitle title="Our Gallery" center />

        <p className="text-center text-gray-400 max-w-2xl mx-auto mt-4 mb-16">
          Experience unforgettable nights, premium interiors, live music,
          signature cocktails and luxury experiences at Babareeba Club.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">

          {galleryData.map((item, index) => (
            <div
              key={index}
              className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                ${
                  index === 0 || index === 5
                    ? "lg:row-span-2"
                    : ""
                }
              `}
            >
              <ImageReveal
                src={item.image}
                alt={item.title}
                className="h-full"
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/30
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              />

              {/* Content */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  p-6
                  translate-y-8
                  opacity-0
                  group-hover:translate-y-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              >
                <h3 className="text-xl md:text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-300">
                  {item.subtitle}
                </p>
              </div>

            </div>
          ))}

        </div>
      </Container>
    </section>
  );
};

export default Gallery;