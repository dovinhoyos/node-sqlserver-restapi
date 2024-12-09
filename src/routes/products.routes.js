import { Router } from "express";
import { ProductsControllers } from '../controllers/products.controller.js'

const router = Router();
const productsControllers = new ProductsControllers

router.get("/", productsControllers.getProducts);
router.get("/:id");
router.post("/");
router.put("/:id");
router.delete("/:id");

export default router;
