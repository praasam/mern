const express = require("express");
const router = express.Router();
const auth = require("../Middleware/authMiddleware");
const authorizeRole = require("../Middleware/authorizationMiddleware");
const {
  addContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
} = require("../Controllers/contactController");

/**
 * @description To create a new contact
 * @api /api/contact/create
 * @access Public
 * @type POST
 * @return response
 */
router.post("/create", addContact);

/**
 * @description To get all contacts
 * @api /api/contact/all
 * @access Private
 * @type GET
 * @return response
 */
router.get("/all", auth, authorizeRole("admin"), getContacts);

/**
 * @description To get a single contact by id
 * @api /api/contact/:id
 * @access Private
 * @type GET
 * @return response
 */
router.get("/:id", auth, authorizeRole("admin"), getContact);

/**
 * @description To update contact by id
 * @api /api/contact/update/:id
 * @access Private
 * @type PATCH
 * @return response
 */
router.patch("/update/:id", auth, authorizeRole("admin"), updateContact);

/**
 * @description To delete contact by id
 * @api /api/contact/delete/:id
 * @access Private
 * @type DELETE
 * @return response
 */
router.delete("/delete/:id", auth, authorizeRole("admin"), deleteContact);

module.exports = router;
