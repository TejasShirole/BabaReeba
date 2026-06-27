import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <Container>
        <SectionTitle
          title="Get In Touch"
          center
        />

        <form className="max-w-2xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-zinc-900"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-zinc-900"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-4 rounded-xl bg-zinc-900"
          />

          <button
            type="submit"
            className="w-full bg-white text-black py-4 rounded-xl font-semibold"
          >
            Send Message
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Contact;