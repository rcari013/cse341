import dotenv from "dotenv";
dotenv.config();

import express from "express";
import contactsRoutes from "./routes/contacts.js";

const app = express();

app.use(express.json());

// ✅ Root route
app.get("/", (req, res) => {
  res.send("First CSE341 project API by Romel Carino");
});

app.use("/contacts", contactsRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
