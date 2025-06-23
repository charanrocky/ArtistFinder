import { Button } from "../components/ui/button";
import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router-dom";

const categories = ["Singers", "Dancers", "Speakers", "DJs"];

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Welcome to ArtistFinder</h1>
        <p className="text-muted-foreground">Find and book top artists</p>
        <Link to="/artists">
          <Button>Explore Artists</Button>
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <CategoryCard
            key={cat}
            title={cat}
            description={`Explore top ${cat}`}
          />
        ))}
      </section>
    </div>
  );
}
