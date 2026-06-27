import galleryData from "./GalleryData";
import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-zinc-950 text-white">
      <Container>
        <SectionTitle
          title="Gallery"
          center
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryData.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                alt=""
                className="w-full h-80 object-cover hover:scale-110 transition duration-700"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;