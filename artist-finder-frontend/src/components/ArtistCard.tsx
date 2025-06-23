type Props = {
  name: string;
  category: string;
  feeRange: string;
  location: string;
};

export default function ArtistCard({
  name,
  category,
  feeRange,
  location,
}: Props) {
  return (
    <div className="border p-4 rounded-xl space-y-2 shadow-sm">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm text-muted-foreground">{category}</p>
      <p>Location: {location}</p>
      <p>Fee: {feeRange}</p>
      <button className="text-blue-600 hover:underline text-sm">
        Ask for Quote
      </button>
    </div>
  );
}
