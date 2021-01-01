// const config = require("./config.json");
const { Client, Attachment } = require("discord.js");
// const axios = require("axios");
// const cheerio = require("cheerio");
const client = new Client();

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", (message) => {
  console.log(message.content);
  //   if (message.content.startsWith(config.prefix + "ping")) {
  if (message.content.startsWith("!ping")) {
    message.channel.send(client.ws.ping + " ms");
  }
  if (message.content === "!랄로해봐") {
    const attachment = new Attachment(
      "https://s3.orbi.kr/data/file/united2/ddfbb85604c94b198f580eb21bf27283.jpeg"
    );
    message.channel.send(attachment);
  }
});

client.login(process.env.TOKEN);
