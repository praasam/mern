const Contact = require("../Models/contactModel");

// Controller for adding a contact
const addContact = async (req, res) => {
  const { name, email, phoneNumber, comment } = req.body;
  if (!name || !email || !phoneNumber || !comment) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  // Check if contact already exists based on email
  try {
    const contactExists = await Contact.findOne({ email });
    if (contactExists) {
      return res.status(400).json({ msg: "Contact already exists" });
    }
    const contact = new Contact({
      name,
      email,
      phoneNumber,
      comment,
    });
    await contact.save();
    return res
      .status(201)
      .json({ msg: "Contact added successfully", contact });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// Controller for getting all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    return res
      .status(200)
      .json({ msg: "Contacts fetched successfully", contacts });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// Controller for getting a single contact
const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ msg: "Contact not found" });
    }
    return res
      .status(200)
      .json({ msg: "Contact fetched successfully", contact });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// Controller for updating a contact
const updateContact = async (req, res) => {
  const { name, email, phoneNumber, comment } = req.body;
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ msg: "Contact not found" });
    }
    contact.name = name || contact.name;
    contact.email = email || contact.email;
    contact.phoneNumber = phoneNumber || contact.phoneNumber;
    contact.comment = comment || contact.comment;

    await contact.save();
    return res
      .status(200)
      .json({ msg: "Contact updated successfully", contact });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// Controller for deleting a contact
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ msg: "Contact not found" });
    }
    return res.status(200).json({ msg: "Contact deleted successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  addContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
};
