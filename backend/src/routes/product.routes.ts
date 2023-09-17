import { Router } from "express";
import { ProductCreateController } from "../controller/ProductCreateController";

const productCreateController = new ProductCreateController();

const productRoutes = Router()

// productRoutes.post("/", productCreateController.handle);

export { productRoutes }