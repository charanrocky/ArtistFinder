// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ArtistListing from "./pages/ArtistListing";
import OnboardingForm from "./pages/OnboardingForm";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<ArtistListing />} />
          <Route path="/submit-artist" element={<OnboardingForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  );
}
