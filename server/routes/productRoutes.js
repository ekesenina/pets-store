import express from "express";
import { getAllProducts, createProduct } from "../controllers/productController.js";

const router = express.Router();

//получаем товары
router.get('/products', getAllProducts);

//добавляем товар
router.post('products', createProduct);

export default router;