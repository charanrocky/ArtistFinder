// src/pages/ArtistListing.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";

export default function ArtistListing() {
  const [artists, setArtists] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios.get("/api/artists", { params: { category } }).then((res) => {
      setArtists(res.data);
    });
  }, [category]);

  return (
    <div className="p-6 space-y-4">
      <div className="flex gap-4 flex-wrap">
        <FilterBlock
          label="Category"
          value={category}
          onChange={setCategory}
          options={["Singers", "Dancers", "Speakers", "DJs"]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {artists.map((artist: any) => (
          <ArtistCard key={artist._id} {...artist} />
        ))}
      </div>
    </div>
  );
}
