import MediaPlayer from "./mediaPlayer.js"
import AutoPlay from "./plugins/autoPlay.js"

const video = document.querySelector("video")
const button = document.querySelector("button");
const toggleMuteButton = document.querySelector(".toggleMuteButton");

const player = new MediaPlayer({
    media: video,
    plugins: [new AutoPlay(video)]
})

button.onclick = () => {
    player.togglePlay()
}
toggleMuteButton.onclick = () => {
    player.toggleMute()
}
