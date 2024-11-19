import { Request, Response } from "express";
import db from "../configs/db";

const mainController = {
  getCollections: async (req: Request, res: Response) => {
    try {
      const result = await db.query.collections.findMany({
        with: {
          categories: true,
        },
        orderBy: (collections, { asc }) => asc(collections.name),
      });
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  },
  getCategories: async (req: Request, res: Response) => {
    try {
      const result = await db.query.categories.findMany({
        orderBy: (categories, { asc }) => asc(categories.name),
      });
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  },
  getCategory: async (req: Request, res: Response) => {
    try {
      const categorySlug = req.params.slug;
      const result = await db.query.categories.findFirst({
        where: (categories, { eq }) => eq(categories.slug, categorySlug),
        with: {
          subcollections: {
            with: {
              subcategories: true,
            },
          },
        },
      });
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  },
  getProducts: async (req: Request, res: Response) => {
    try {
      const subcategorySlug = req.params.subcategorySlug;
      const result = await db.query.products.findMany({
        where: (products, { eq, and }) => and(eq(products.subcategory_slug, subcategorySlug)),
        orderBy: (products, { asc }) => asc(products.slug),
      });
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  },
  getProduct: async (req: Request, res: Response) => {
    try {
      const productSlug = req.params.productSlug;
      const result = await db.query.products.findFirst({
        where: (products, { eq }) => eq(products.slug, productSlug),
      });
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  },
};
export default mainController;
