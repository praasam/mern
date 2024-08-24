const express = require('express');
const createCustomer = require('../Controllers/customerControllers');
const router = express.Router();

router.post("/createCustomer", createCustomer);

module.exports = router;
