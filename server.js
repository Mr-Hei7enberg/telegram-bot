require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { Telegraf } = require("telegraf");

app.use(express.json());
// app.use(express.urlencoded({}));
app.use("/", require(path.join(__dirname, "./routes/webhook")));
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
