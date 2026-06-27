const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3
        rounded-full
        font-semibold
        transition-all
        duration-300
        hover:scale-105
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;