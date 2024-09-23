import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createProduct = async (req, res) => {
  const product = await prisma.product.create({
    data: req.body,
  });
  res.status(200).json({
    message: "Ürün Oluşturuldu",
    product,
  });
};

const getAllProducts = async (req, res) => {
  const products = await prisma.product.findMany();
  res.status(200).json({
    products,
  });
};

export { createProduct, getAllProducts };
