const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bio: String,
    categories: [String],
    languages: [String],
    feeRange: String,
    image: String,
    location: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Artist", ArtistSchema);
