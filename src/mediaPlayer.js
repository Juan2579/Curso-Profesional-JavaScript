class MediaPlayer{
    constructor({
        media,
        plugins
    }){
        this.media = media;
        this.plugins = plugins || [];
        this.initPlugins()
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
    initPlugins(){
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted(){
                return this.media.muted
            },
            set muted(value){
                this.media.muted = value
            }
        }
        this.plugins.forEach(plugin => {
            plugin.run(player)
        })
    }
    
}
// MediaPlayer.prototype.play = function(){
//         this.media.play()
//     }

export default MediaPlayer;