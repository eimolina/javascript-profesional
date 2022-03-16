class MediaPlayer {
    media: HTMLVideoElement
    plugins: Array<any>

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    mute() {
        this.media.muted = true;
    }
    muteToggle() {
        this.media.muted = !this.media.muted;
    }
    unmute() {
        this.media.muted = false;
    }
    play() {
        if (this.media.paused) {
            this.media.play();
        } else {
            this.media.pause();
        }
    }
}


export default MediaPlayer;