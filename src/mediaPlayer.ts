class MediaPlayer{
    media: HTMLMediaElement;
    plugins: Array<any>
    container: HTMLElement
    constructor({
        media,
        plugins,
    }){
        this.media = media;
        this.plugins = plugins || [];
        this.initPlayer()
        this.initPlugins()
    }

    initPlayer(){
        this.container = document.createElement("div");
        this.container.style.position = "relative"
        this.media.parentNode?.insertBefore(this.container, this.media);
        this.container.appendChild(this.media)
    }

    play(){
        this.media.play()
    }
    pause(){
        this.media.pause()
    }
    toggleMute(){
        if(this.media.muted == true){
            this.media.muted = false
        }else if(this.media.muted == false){
            this.media.muted = true
        }
    }
    togglePlay(){
        if(this.media.paused){
            this.play();
        }else{
            this.pause()
        }
    }
    private initPlugins(){
        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
    }
    
}
// MediaPlayer.prototype.play = function(){
//         this.media.play()
//     }

export default MediaPlayer;