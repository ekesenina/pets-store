import Product from "../models/productModel.js";

// Получить все товары
export const getAllProducts = async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: 'Ошибка при получении товаров' });
    }
  };
  
  // Добавить новый товар
  export const createProduct = async (req, res) => {
    const { name, description, price, stock, category, image } = req.body;
    try {
      const newProduct = await Product.create({ name, description, price, stock, category, image });
      res.json(newProduct);
    } catch (err) {
      res.status(500).json({ error: 'Ошибка при добавлении товара' });
    }
  };