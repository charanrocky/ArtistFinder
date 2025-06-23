type Props = {
  title: string;
  description?: string;
};

export default function CategoryCard({ title, description }: Props) {
  return (
    <div className="border rounded-lg p-4 text-center shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
