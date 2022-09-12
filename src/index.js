import MediaPlayer from "./mediaPlayer.js"
import AutoPlay from "./plugins/autoPlay.js"
import AutoPause from "./plugins/autoPause.js"

const video = document.querySelector("video")
const button = document.querySelector("button");
const toggleMuteButton = document.querySelector(".toggleMuteButton");

const player = new MediaPlayer({
    media: video,
    plugins: [new AutoPlay(), new AutoPause()]
})

button.onclick = () => {
    player.togglePlay()
}
toggleMuteButton.onclick = () => {
    player.toggleMute()
}

if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(error => {
        console.log(error)
    })
}
