import Container from "../common/Container";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <Container>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Babareeba
            </h3>

            <p className="text-gray-400">
              Premium nightlife experiences,
              unforgettable events and world-class
              entertainment.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#gallery">Gallery</a>
              </li>

              <li>
                <a href="#events">Events</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">
              <FaInstagram />
              <FaFacebookF />
              <FaYoutube />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500">
          © 2026 Babareeba. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;