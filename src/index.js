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

if ('serviceWorker' in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register(
      new URL('/sw.js', import.meta.url),{type: 'module'})
        .then(function(registration) {
          console.log('Service worker registration succeeded:', registration);
        }).catch(function(error) {
          console.log('Service worker registration failed:', error);
        });
  } else {
    console.log('Service workers are not supported.');
  }