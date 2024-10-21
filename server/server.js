import express from "express";
import cors from "cors";
import productRoutes from './routes/productRoutes.js'
import Product from "./models/productModel.js";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const app = express();
app.use(cors());
app.use(express.json());

//подключаем маршруты
app.use('/api', productRoutes); 

const PORT = process.env.PORT || 5001;

Product.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Сервер запущен на порту ${PORT}`);
    });
  })
  .catch((err) =>
    console.error("Ошибка при синхронизации с базой данных в server.js:", err)
  );
