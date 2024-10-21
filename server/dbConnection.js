import dotenv from "dotenv";
import Sequelize from "sequelize";

dotenv.config({ path: "../.env" });

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

connection
  .authenticate()
  .then(() => console.log("Успешное подключение к базе данных!!!"))
  .catch((err) =>
    console.error("Ты лошара, и у тебя ничего не подключилось(((", err)
  );

export default connection;
