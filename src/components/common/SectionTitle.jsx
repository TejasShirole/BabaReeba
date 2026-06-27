const SectionTitle = ({
  subtitle,
  title,
  center = false,
}) => {
  return (
    <div
      className={`mb-12 ${
        center ? "text-center" : ""
      }`}
    >
      {subtitle && (
        <span className="uppercase tracking-widest text-sm text-gray-400">
          {subtitle}
        </span>
      )}

      <h2 className="text-4xl md:text-6xl font-bold mt-3">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;