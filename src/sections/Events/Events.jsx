import eventsData from "./EventsData";
import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import HoverCard from "../../components/ui/HoverCard";

const Events = () => {
  return (
    <section id="events" className="py-24 bg-black text-white">
      <Container>
        <SectionTitle
          title="Upcoming Events"
          center
        />

        <div className="grid md:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <HoverCard
              key={index}
              image={event.image}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Events;