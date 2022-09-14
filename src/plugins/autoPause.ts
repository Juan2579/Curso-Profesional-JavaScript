import MediaPlayer from "../mediaPlayer.js"

class AutoPause{
    private threshold: number;
    private pausedByVisibility: boolean;
    player: MediaPlayer
    constructor(){
        this.threshold = 0.25
        this.pausedByVisibility = false
        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }
    run(player: MediaPlayer){
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        })
        observer.observe(this.player.media)

        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }
    private handleIntersection(entries: IntersectionObserverEntry[]){
        const entry = entries[0]
        console.log(entry)

        const isVisible = entry.intersectionRatio >= this.threshold

        if(isVisible){
            this.player.play() 
        }else{
            this.player.pause()
        }
        
    }

    private handleVisibilityChange(){
        const isVisible = document.visibilityState === "visible"

        if(isVisible){
            if(this.pausedByVisibility){
                this.player.play()
            }
        }else{
            if(!this.player.media.paused){
                this.player.pause()
                this.pausedByVisibility = true
            }else{
                this.pausedByVisibility = false
            }
        }
    }
}



export default AutoPause