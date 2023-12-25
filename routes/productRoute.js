const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductID,
  updateProduct,
  createProduct,
  deleteProduct,
} = require("../controller/productContoller");

router.post("/product/create", createProduct);

router.get("/:id", getProductID);

router.get("/", getProducts);

// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
