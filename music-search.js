const { MessageEmbed, EmbedFieldData, Message } = require("discord.js");
const youtube = require("./youtube.js");
const emptyField = { name: "\u200B", value: "\u200B" };

async function makeEmbedMessage(name) {
  /* Default format */
  let embedMsg = new MessageEmbed()
    .setColor("#FF0000")
    .setURL(`https://www.youtube.com/results?search_query=${encodeURI(name)}`)
    .setAuthor("Youtube", "", "https://www.youtube.com");
  const red = "#FF0000";
  let musicInfo = [];
  //   /* Get information from youtube */
  await youtube(name).then(function (x) {
    console.log(x);
    musicInfo = x;
  });
  const channeltitle = {
    name: "채널",
    value: musicInfo[1],
    inline: true,
  };
  const url = {
    name: "url",
    value: musicInfo[2],
    inline: true,
  };

  //   if (summonerInfo === null) {
  //     /* handle non-existing summoner */
  //     return embedMsg.setTitle("존재하지 않는 소환사").setColor(red);
  //   }

  //   const [mostChamps, recentSolo] = await Promise.all([
  //     opgg.getMostChamps(summonerInfo.summonerID, summonerInfo.season),
  //     opgg.getRecentSolo(summonerInfo.summonerID),
  //   ]);

  //   let tierMedalSrc;
  //   if (summonerInfo.soloTier.toLowerCase() !== "unranked") {
  //     tierMedalSrc = opgg.getTierMedalSrc(summonerInfo.soloTier);
  //   } else {
  //     tierMedalSrc = opgg.getTierMedalSrc(summonerInfo.flexTier);
  //   }

  /* Make a new embed message*/
  embedMsg = embedMsg
    .setColor(red)
    .setTitle(musicInfo[0]) // 노래 제목
    .setThumbnail(musicInfo[3])
    // .addFields(makeTierFields(summonerInfo))
    // .addFields(emptyField)
    .addFields(channeltitle)
    .addFields(url);

  return embedMsg;
}
module.exports = makeEmbedMessage;
