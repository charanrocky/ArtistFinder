import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <Link to="/" className="text-xl font-bold text-blue-600">
        ArtistFinder
      </Link>
      <ul className="flex gap-4 text-sm font-medium">
        <li>
          <Link to="/artists" className="hover:underline">
            Explore
          </Link>
        </li>
        <li>
          <Link to="/submit-artist" className="hover:underline">
            Submit Artist
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}
