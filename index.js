const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", (message) => {
  console.log(message.content);
  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send(client.ws.ping + " ms");
  }
});

client.login(process.env.TOKEN);
