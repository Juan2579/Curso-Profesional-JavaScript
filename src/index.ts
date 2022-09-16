import MediaPlayer from "./mediaPlayer"
import AutoPlay from "./plugins/autoPlay"
import AutoPause from "./plugins/autoPause"
import AdsPlugin from "./plugins/Ads/index"

const video = document.querySelector("video")
const button: HTMLElement = document.querySelector("button") as HTMLElement;
const toggleMuteButton: HTMLElement = document.querySelector(".toggleMuteButton") as HTMLElement;

const player = new MediaPlayer({
    media: video,
    plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()]
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