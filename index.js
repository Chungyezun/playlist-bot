const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const music_search = require("./music-search.js");
async function playMusic(message, url) {
  if (message.member.voice.channel) {
    // console.log(message.member.voice.channel);
    connection = await message.member.voice.channel.join();
  } else {
    message.reply("You need to join a voice channel first!");
  }
  const ytdl = require("ytdl-core");
  const dispatcher = connection.play(
    ytdl(url, {
      filter: "audioonly",
    })
  );
  // dispatcher.on("end", () => message.member.voice.channel.leave());
}
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
    const arg = message.content.substr(6);
    console.log(arg);
    music_search(arg)
      .then((embedMsg) => {
        message.channel.send(embedMsg);
        playMusic(message, embedMsg.fields[1].value);
      })
      .catch((error) => {
        console.log(error.message);
        message.channel.send("error");
      });
  }
});
client.login(config.token);
// client.login(process.env.TOKEN); // 헤로쿠 전용
