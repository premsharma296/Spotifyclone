console.log("Welcome to Spotify");
//initialize the variables
let songIndex=0
let audioElement = new Audio('1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar');

let songs =[
    {songName: "Salam-e-Ishq", FilePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", FilePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", FilePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", FilePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", FilePath: "song/1.mp3",coverPath: "covers/1.jpg"},

 
]

//Handle Play/Pause click 
masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); 


 
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle'); 
    }
})
//Listen to Events//
documents.addEvent.Listener('timeupdate',()=>{
console.log('timeupdate')
}) 
//update seekbar//  
