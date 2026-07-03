import eventsData from "./EventsData";
import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import ImageReveal from "../../components/ui/ImageReveal";

const Events = () => {
  return (
    <section
      id="events"
      className="bg-zinc-950 text-white py-20 md:py-28"
    >
      <Container>
        <SectionTitle title="Upcoming Events" center />

        <p className="text-center text-gray-400 max-w-2xl mx-auto mt-4 mb-16">
          Join us for unforgettable nights featuring world-class DJs,
          live performances, signature cocktails, and luxury experiences.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((event, index) => (
            <div
              key={index}
              className="
                group
                bg-zinc-900
                rounded-3xl
                overflow-hidden
                border
                border-white/10
                hover:border-yellow-500/40
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <ImageReveal
                  src={event.image}
                  alt={event.title}
                  className="h-full"
                />

                {/* Date Badge */}
                <div
                  className="
                    absolute
                    top-5
                    left-5
                    bg-yellow-500
                    text-black
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-semibold
                  "
                >
                  {event.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {event.title}
                </h3>

                <p className="mt-3 text-gray-400 leading-relaxed">
                  {event.description}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-yellow-400 text-sm">
                    {event.time}
                  </span>

                  <a
                    href="#contact"
                    className="
                      px-5
                      py-2.5
                      rounded-full
                      bg-white
                      text-black
                      font-medium
                      hover:bg-yellow-400
                      transition
                    "
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Events;