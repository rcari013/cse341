import { connectDB } from "../data/connect.js";
import { ObjectId } from "mongodb";

export const getAllContacts = async (req, res) => {
  try {
    const db = await connectDB();
    const contacts = await db.collection("contacts").find().toArray();
    res.json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch contacts" });
  }
};

export const getContactById = async (req, res) => {
  try {
    const db = await connectDB();
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid contact ID" });
    }

    const contact = await db
      .collection("contacts")
      .findOne({ _id: new ObjectId(id) });

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch contact" });
  }
};

export const createContact = async (req, res) => {
  try {
    const db = await connectDB();
    const contact = req.body;

    // All fields required
    if (
      !contact.firstName ||
      !contact.lastName ||
      !contact.email ||
      !contact.favoriteColor ||
      !contact.birthday
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const result = await db.collection("contacts").insertOne(contact);

    res.status(201).json({ id: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create contact" });
  }
};

export const updateContact = async (req, res) => {
  try {
    const db = await connectDB();
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid contact ID" });
    }

    const updatedContact = req.body;

    const result = await db.collection("contacts").replaceOne(
      { _id: new ObjectId(id) },
      updatedContact
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(204).send(); // Success, no content
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update contact" });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const db = await connectDB();
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid contact ID" });
    }

    const result = await db
      .collection("contacts")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(204).send(); // Success, no content
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete contact" });
  }
};