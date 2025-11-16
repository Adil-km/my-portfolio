export default function formatDate(dateStr) {
  const date = new Date(dateStr);

  const options = { month: "short" };
  const month = date.toLocaleString("en-US", options);

  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}, ${day}, ${year}`;
}
