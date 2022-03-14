import MediaPlayer from "./mediaplayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const videoElement = document.getElementById("movie");
const button = document.getElementById("playButton");
const mutebutton = document.getElementById("muteButton");

const player = new MediaPlayer({ 
    el: videoElement,
    plugins:[new AutoPlay(), new AutoPause()] });
button.onclick = () => player.play();
mutebutton.onclick = () => player.muteToggle();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/public/sw.js').catch(error => {
        console.log(error.message);
    })
}