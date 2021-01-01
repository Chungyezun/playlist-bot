// const config = require("./config.json");
const Discord = require("discord.js");
const axios = require("axios");
const cheerio = require("cheerio");
const client = new Discord.Client();

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", (message) => {
  console.log(message.content);
  //   if (message.content.startsWith(config.prefix + "ping")) {
  if (message.content.startsWith("!ping")) {
    message.channel.send(client.ws.ping + " ms");
  }
  //   if (message.content.startsWith(config.prefix + "랄로해봐")) {
  //     var path = "./ralo.jpg";
  //     const attachment = new Attachment(path);
  //     msg.channel.send(attachment);
  //   }
});

client.login(process.env.TOKEN);
