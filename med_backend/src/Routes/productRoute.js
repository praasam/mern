const express = require('express');
const createProduct = require('../Controllers/productControllers');
const router = express.Router();


router.post("/createProduct", createProduct);

module.exports = router;