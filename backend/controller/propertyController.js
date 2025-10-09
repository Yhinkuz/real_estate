import Property from "../models/Property.js";

// GET all properties
export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ msg: " Server error" });
  }
};

// CREATE property
export const createProperty = async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    res.json(property);
  } catch (err) {
    res.status(500).json({ msg: " Failed to create property" });
  }
};

// UPDATE property
export const updateProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!property) {
      return res.status(404).json({ msg: " Property not found" });
    }

    res.json(property);
  } catch (err) {
    res.status(500).json({ msg: " Failed to update property" });
  }
};

// DELETE property
export const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);

    if (!property) {
      return res.status(404).json({ msg: " Property not found" });
    }

    res.json({ msg: " Property deleted" });
  } catch (err) {
    res.status(500).json({ msg: " Failed to delete property" });
  }
};
