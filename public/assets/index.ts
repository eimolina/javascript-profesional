import MediaPlayer from "./mediaplayer";
import AutoPlay from "./Plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const videoElement = document.getElementById("movie");
const button: HTMLElement = document.getElementById("playButton");
const mutebutton: HTMLElement = document.getElementById("muteButton");
const SW = "sw.js";

const player = new MediaPlayer({ 
    el: videoElement,
    plugins:[new AutoPlay(), new AutoPause()] });

button.onclick = () => player.play();

mutebutton.onclick = () => player.muteToggle();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register(SW).catch(error => {
        console.log(error.message);
    })
}