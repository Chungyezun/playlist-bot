const Youtube = require("youtube-node");
const config = require("./config.json");
const youtube = new Youtube();
const apis = [config.youtubeAPI, config.youtubeAPI2];
const random = Math.floor(Math.random() * apis.length);
console.log(apis[random]);
youtube.setKey(apis[random]);
function getMusicInfo(nameInput) {
  musicInfo = [];
  return new Promise(function (resolve, reject) {
    youtube.addParam("order", "relevance");
    youtube.addParam("type", "video");
    youtube.search(nameInput, 1, function (err, result) {
      // 검색 실행
      if (err) {
        console.log(err);
        return;
      } // 에러일 경우 에러공지하고 빠져나감
      // console.log(nameInput);
      console.log(JSON.stringify(result, null, 1)); // 받아온 전체 리스트 출력
      let items = result["items"]; // 결과 중 items 항목만 가져옴
      let it = items[0];
      let title = it["snippet"]["title"];
      let channeltitle = it["snippet"]["channelTitle"];
      let thumbnails = it["snippet"]["thumbnails"]["default"]["url"];
      let video_id = it["id"]["videoId"];
      url = "https://www.youtube.com/watch?v=" + video_id;
      console.log("제목 : " + title);
      console.log("채널 : " + channeltitle);
      console.log("URL : " + url);
      console.log("-----------");
      musicInfo.push(title);
      musicInfo.push(channeltitle);
      musicInfo.push(url);
      musicInfo.push(thumbnails);
      resolve(musicInfo);
    });
  });
}

// console.log(musicInfo);
// return musicInfo;
// return musicInfo;

module.exports = getMusicInfo;
// exports.getMusicInfo = getMusicInfo;
// exports.ret = ret;
