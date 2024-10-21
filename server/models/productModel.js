import { DataTypes } from "sequelize";
import connection from "../dbConnection.js";

//создаем модель товара (описание структуры таблицы для взаимодействия с sequelize)
const Product = connection.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2), // 10 знаков всего, 2 знака после запятой
    allowNull: false, // Цена товара обязательна
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0, // По умолчанию количество товара на складе 0
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false, // Категория товара обязательна
  },
  image: {
    type: DataTypes.STRING, // Хранение ссылки на изображение
  },
}, {
    timestamps: false // Отключаем createdAt и updatedAt (они добавляются автоматически sequelize)
});

export default Product;
