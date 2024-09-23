import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controller/productController.js";

const router = express.Router();

router.post("/product", createProduct);
router.get("/product", getAllProducts);

export default router;
