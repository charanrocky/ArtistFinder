import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get("/api/artists").then((res) => setArtists(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Artist Submissions</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Name</th>
            <th>Category</th>
            <th>City</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          {artists.map((a: any) => (
            <tr key={a._id}>
              <td className="p-2">{a.name}</td>
              <td>{a.category}</td>
              <td>{a.location}</td>
              <td>{a.feeRange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
