import { X } from "lucide-react";

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed inset-0 bg-black z-[999] flex flex-col">
      <div className="flex justify-end p-6">
        <button
          onClick={onClose}
          className="text-white"
        >
          <X size={32} />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 gap-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={onClose}
            className="text-white text-3xl font-semibold"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;