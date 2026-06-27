export const truncateText = (
  text,
  maxLength
) => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength) + "...";
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};