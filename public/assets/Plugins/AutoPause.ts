import MediaPlayer from "../mediaplayer";

class AutoPause {
    private threshold: number;
    player: MediaPlayer

    constructor() {
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
    }

    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold
        });
        observer.observe(this.player.media);
        document.addEventListener('visibilitychange', this.handlerVisibilityChange);
    }

    private handlerIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold;
        if (isVisible) {
            this.player.media.play();
        } else {
            this.player.media.pause();
        }
    }

    private handlerVisibilityChange() {
        console.log("handlerVisibilityChange");
        const isVisible = document.visibilityState === "visible";
        if (isVisible) {
            this.player.media.play();
        } else {
            this.player.media.pause();
        }
    };
}

export default AutoPause;