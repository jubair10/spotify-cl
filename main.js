async function getsongs() {
  //    console.log("getting songs");
  let api = "http://127.0.0.1:3000/songs/";
  //   api = `C:\\Users\\mdnah\\OneDrive\\Desktop\\spotify-clsongs\\songs`;
  let req = await fetch("/songs");
  let res = await req.text();
  console.log(window.location.origin);

  console.log(res);
  let div = document.createElement("div");
  div.innerHTML = res;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]);
    }
  }
  return songs;
}
async function main() {
  // get the lidst  of all songs
  let songs = await getsongs();
  console.log(songs);
  let songUL = document
    .querySelector(".songList")
    .getElementsByTagName("ul")[0];
  console.log(songUL);

  for (const song of songs) {
    songUL.innerHTML =
      songUL.innerHTML +
      `<li>
    
                <img src="assets/music.svg" alt="" />
                <div class="info">
                  <div>${song.replaceAll("%20", " ").split(".mp3")[0]}</div>
                  <div>${"Jubair"}</div>
                </div>
                <div class="playnow">
                  <img src="assets/play.svg" alt="" />
                </div>    
    </li>`;
  }

  // play the first song
  let audio = new Audio(songs[1]);
  // audio.play();
  audio.addEventListener("loadeddata", () => {
    console.log(audio.duration, audio.currentTime);
  });
}
main();
