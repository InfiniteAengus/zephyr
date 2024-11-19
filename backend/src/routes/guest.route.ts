import express from "express";
import mainController from "../controllers/main.controller";

const router = express.Router();
router.get("/hello", (req, res) => {
  res.send("hello world");
});

router.get("/collections", mainController.getCollections);
router.get("/categories", mainController.getCategories);
router.get("/category/:slug", mainController.getCategory);
router.get("/products/:subcategorySlug", mainController.getProducts);
router.get("/product/:productSlug", mainController.getProduct);

export default router;
