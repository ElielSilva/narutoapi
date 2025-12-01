// import express from "express";
// // import serverless from "serverless-http";
// import characters from "../database/chatacter.js"

// const app = express();

// app.get("/characters", (req, res) => {
//   res.json(characters);
// });

// app.get("/characters", (req, res) => {
//   const { id } = req.params;
//   res.json(characters[1]);
// });

// app.get("/vilages", (req, res) => {
//   res.json(characters);
// });

// // const port = 3000;
// // app.listen(port, () => console.log("http://localhost:" + port));

// export default serverless(app);

import express from "express";
import serverless from "serverless-http";

const app = express();

// Middleware para JSON
app.use(express.json());

// Exemplo de banco de dados local (substitua pelo seu)
const characters = [
  { id: 1, name: "Naruto Uzumaki", village: "Konoha" },
  { id: 2, name: "Sasuke Uchiha", village: "Konoha" },
  { id: 3, name: "Sakura Haruno", village: "Konoha" }
];

// Rota padrão
app.get("/", (req, res) => {
  res.json({
    message: "API Naruto funcionando via Vercel + Express!",
    total: characters.length
  });
});

// Rota de personagens
app.get("/characters", (req, res) => {
  res.json(characters);
});

// Rota por ID
app.get("/characters/:id", (req, res) => {
  const id = Number(req.params.id);
  const character = characters.find(c => c.id === id);

  if (!character) {
    return res.status(404).json({ error: "Personagem não encontrado" });
  }

  res.json(character);
});

// Exportação obrigatória para a Vercel
export const handler = serverless(app);
export default handler;
