const Artist = require("../models/Artist.js");

// @desc Get all artists (with optional filtering)
exports.getArtists = async (req, res) => {
  try {
    const { category, location, minPrice, maxPrice } = req.query;
    let filter = {};

    if (category) filter.categories = category;
    if (location) filter.location = { $regex: location, $options: "i" };
    if (minPrice || maxPrice) {
      filter.feeRange = {
        $gte: minPrice || "0",
        $lte: maxPrice || "100000",
      };
    }

    const artists = await Artist.find(filter);
    res.json(artists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Add new artist
exports.createArtist = async (req, res) => {
  try {
    const newArtist = new Artist(req.body);
    const savedArtist = await newArtist.save();
    res.status(201).json(savedArtist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
