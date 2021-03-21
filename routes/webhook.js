const express = require("express");
const router = express.Router();
const { Telegraf } = require("telegraf");
const token = process.env.BOT_TOKEN;
if (token === undefined) {
  throw new Error("BOT_TOKEN must be provided!");
}
const bot = new Telegraf(token);
bot.telegram.setWebhook(`${process.env.PROJECT_NAME}/webhook`);

// Set the bot response
bot.on("text", (ctx) => ctx.replyWithHTML("<b>Hello</b>"));

router.get("/webhook", (req, res) => {
  res.status(200).json({ message: "GET request working fine" });
});

router.post("/webhook", (req, res) => {
  bot.handleUpdate(req.body, res.sendStatus(200));
});

module.exports = router;
