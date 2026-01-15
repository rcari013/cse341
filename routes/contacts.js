import express from "express";
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} from "../controllers/contacts.js";

const router = express.Router();

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Get all contacts
 *     responses:
 *       200:
 *         description: Successfully retrieved contacts
 */
router.get("/", getAllContacts);

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Get contact by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: MongoDB contact ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact found
 *       404:
 *         description: Contact not found
 */
router.get("/:id", getContactById);

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a new contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - favoriteColor
 *               - birthday
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               favoriteColor:
 *                 type: string
 *               birthday:
 *                 type: string
 *     responses:
 *       201:
 *         description: Contact created
 */
router.post("/", createContact);

/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     summary: Update a contact
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       204:
 *         description: Contact updated successfully
 */
router.put("/:id", updateContact);

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete a contact
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Contact deleted successfully
 */
router.delete("/:id", deleteContact);

export default router;