import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";

const Testimonials = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white">
      <Container>
        <SectionTitle
          title="What People Say"
          center
        />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-zinc-900 rounded-3xl">
            Amazing atmosphere and events.
          </div>

          <div className="p-6 bg-zinc-900 rounded-3xl">
            One of the best nightlife experiences.
          </div>

          <div className="p-6 bg-zinc-900 rounded-3xl">
            Great music and premium service.
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;