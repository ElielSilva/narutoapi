import express from "express";
// import serverless from "serverless-http";
import characters from "./database/chatacter.js"

const app = express();

app.get("/characters", (req, res) => {
  res.json(characters);
});

app.get("/characters", (req, res) => {
  const { id } = req.params;
  res.json(characters[1]);
});

app.get("/vilages", (req, res) => {
  res.json(characters);
});

// const port = 3000;
// app.listen(port, () => console.log("http://localhost:" + port));

export default serverless(app);