const Brand = require("../Models/brandModel");

// Controller for adding a brand
const addBrand = async (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  // Check if brand already exists
  try {
    const brandExists = await Brand.findOne({ name });
    if (brandExists) {
      return res.status(400).json({ msg: "Brand already exists" });
    }
    const brand = new Brand({
      name,
      description,
    });
    await brand.save();
    return res
      .status(201)
      .json({ msg: "Brand added successfully", brand: brand });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// Controller for getting all brands
const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    return res
      .status(200)
      .json({ msg: "Brands fetched successfully", brands });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// Controller for getting a single brand
const getBrand = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) {
      return res.status(404).json({ msg: "Brand not found" });
    }
    return res
      .status(200)
      .json({ msg: "Brand fetched successfully", brand });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// Controller for updating a brand
const updateBrand = async (req, res) => {
  const { name, description } = req.body;
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) {
      return res.status(404).json({ msg: "Brand not found" });
    }
    brand.name = name || brand.name;
    brand.description = description || brand.description;

    await brand.save();
    return res
      .status(200)
      .json({ msg: "Brand updated successfully", brand });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// Controller for deleting a brand
const deleteBrand = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndDelete(req.params.id);
    if (!brand) {
      return res.status(404).json({ msg: "Brand not found" });
    }
    return res.status(200).json({ msg: "Brand deleted successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  addBrand,
  getBrands,
  getBrand,
  updateBrand,
  deleteBrand,
};
