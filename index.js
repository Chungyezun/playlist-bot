const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const music_search = require("./music-search.js");

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", (message) => {
  console.log(message.content);
  /* Message prefix */
  if (message.content[0] !== config.prefix) return;

  /* Message Request */
  const request = message.content.substr(1).split(" ")[0];

  if (request === "ping") {
    message.channel.send(client.ws.ping + " ms");
  }
  if (request === "랄로해봐") {
    message.channel.send({ files: ["./ralo.jpg"] });
    message.channel.send("랄로");
  }
  if (request === "play") {
    const arg = message.content.split(" ")[1];
    music_search(arg).then((embedMsg) => {
      message.channel.send(embedMsg);
    });
    //   .catch((error) => {
    //     console.log(error.message);
    //     message.channel.send("error");
    //   });
  }
});
client.login(config.token);
// client.login(process.env.TOKEN); // 헤로쿠 전용
