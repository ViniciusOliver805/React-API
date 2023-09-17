import express from "express";
import cors from 'cors';
import { routes } from "./routes";
import { Request, Response } from "express";
import mysql, { Connection } from 'mysql2/promise'; 
import axios from 'axios';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

let conn: Connection; // Declare a variável conn no escopo global

// Função para conectar ao banco de dados e inserir dados
async function connectAndInsertData() {
  conn = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "dummyjson_db_database",
  });

  try {
    const response = await axios.get("https://dummyjson.com/products");
    const produtos = response.data.products as Array<{
      id: number;
      title: string;
      description: string;
      price: number;
      discountPercentage: number;
      rating: number;
      stock: number;
      brand: string;
      category: string;
      thumbnail: string;
      images: string[];
    }>;

    for (const produto of produtos) {
      const query = `
        INSERT INTO products
        (id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const {
        id,
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        images,
      } = produto;

      const imagesString = JSON.stringify(images);

      const values = [
        id,
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        imagesString,
      ];

      const [rows] = await conn.execute(query, values);
      console.log(`Inserido: ${title}`);
    }
  } catch (error) {
    console.error("Erro ao fazer a requisição para a API externa:", error);
  } finally {
    // Não finalize a conexão aqui
  }
}

// Chamando a função
connectAndInsertData();

// Agora você pode usar a conexão com o banco de dados aqui também
app.get('/products', async (req: Request, res: Response) => {
  try {
    const [rows] = await conn.execute('SELECT * FROM products');
    res.json({ products: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar produtos' });
  } finally {
    // Não finalize a conexão aqui
  }
});

app.listen(3001, () => console.log("🚀 Server started on port 3001 ! Docker container on 5433 🚀 "));
