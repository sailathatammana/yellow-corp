export default function Date({ dateString }) {
  // Constants
  const readableDate = dateString.split("T")[0];

  return <span className="Date">{readableDate}</span>;
}
