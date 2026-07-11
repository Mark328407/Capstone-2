const express = require('express');
const productController = require('../controllers/product');
const { verify, verifyAdmin } = require("../auth");
const router = express.Router();

//s52
router.post("/", verify, verifyAdmin, productController.createProduct);
router.get("/all", verify, verifyAdmin, productController.getAllProduct);
router.get("/active", productController.getAllActiveProduct);
router.get("/:productId", productController.getProduct);
router.patch("/:productId/update", verify, verifyAdmin, productController.updateProduct);
router.patch("/:productId/archive", verify, verifyAdmin, productController.archiveProduct);
router.patch("/:productId/activate", verify, verifyAdmin, productController.activateProduct);

//s54
router.post("/search-by-name", productController.searchByName);
router.post("/search-by-price", productController.searchByPrice);




module.exports = router;