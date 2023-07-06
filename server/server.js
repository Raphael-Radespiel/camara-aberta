const axios = require('axios'); 
const express = require("express");
const app = express();
app.use(express.json());

const path = require("path");

// MIDDLEWARE THAT ALLOWS CORS 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// DEPUTADOS ROUTE
app.get("/deputados", (_req, res) => {
  axios.get("https://dadosabertos.camara.leg.br/api/v2/deputados?nome&ordem=ASC&ordenarPor=nome")
    .then(e => {
      console.log("THIS SENT THE RESPONSE");
      res.send(e.data);
    })
    .catch(err => {
      console.log(err);
    });
});

// BASE ROUTE
app.use("/", express.static(path.join(__dirname, "../client")));

app.get("/*", (_req, res) => {
  console.log("I WAS CALLED");
  res.sendFile(path.join(__dirname, "../client", "index.html"));
});
 
const { PORT = 5000 } = process.env;
 
app.listen(PORT, () => {
  console.log(`  App running in port ${PORT}`);
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});

process.on('exit', () => {
  console.log("About to close");
});
