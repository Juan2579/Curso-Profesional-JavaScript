class AutoPlay {
    constructor(video){
        this.player = video;
    }
    
    run(){
        if(!this.player.muted){
            this.player.muted = true
        
        }
        this.player.play()
    }
}

export default AutoPlay