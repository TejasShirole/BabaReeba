const HoverCard = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-[450px] object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500" />

      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-2 opacity-80">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HoverCard;