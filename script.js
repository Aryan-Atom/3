var arr=[
    {songname : "Mero Radha Raman" , url : "./Songs/Mero Radha Ramana.mp3" , img : "./Images/1.jpg"},
    {songname : "Namaste Narasimhaya" , url : "./Songs/Namaste Narasimhaya.mp3" , img : "./Images/2.jpg"},
    {songname : "Radha Raman Hare Hare" , url : "./Songs/Radha Ramanam Hare Hare .mp3" , img : "./Images/3.jpg"},
    {songname : "Sri Vitthala Giridhari Parabrahmane Namaha " , url : "./Songs/Sri Vitthala Giridhari Parabrahmane Namaha .mp3" , img : "./Images/4.jpg"}
]
var flag = 0 ;
var audio = new Audio();
var selectedSong=0;
var poster = document.querySelector("#left");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

function sonCards(){
var clutter='';
arr.forEach(function(obj, idx){
    clutter+=`<div class="song-card" id="${idx}">
                    <div class="part1">
                        <img src="${obj.img}" alt="${obj.songname}">
                        <h2>${obj.songname}</h2>
                    </div>
                     <h6>3:56</h6>
                </div>`
});
document.querySelector('#all-songs').innerHTML = clutter;


audio.src = arr[selectedSong].url;
poster.style.backgroundImage = `url(${arr[selectedSong].img})`

}

sonCards();


document.querySelector('#all-songs').addEventListener("click" , function(details){
    selectedSong=details.target.id;
     play.innerHTML = `<i class="ri-pause-line"></i>`
     
     flag =1;
    sonCards();
    audio.play();
    })



play.addEventListener("click" , function(){
    if(flag == 0 ){
        play.innerHTML = `<i class="ri-pause-line"></i>`
        sonCards();
        audio.play();
        flag =1;
    }
    else{
        play.innerHTML = `<i class="ri-play-fill"></i>`
        sonCards();
        audio.pause();
        flag =0;
    }
})


forward.addEventListener("click" , function(){
    if(selectedSong < arr.length-1){
        selectedSong++;
        sonCards();
        audio.play();

    }
    else{
        forward.style.opacity= 0.4;
    }
})

backward.addEventListener("click" , function(){
    if(selectedSong > 0){
        selectedSong--;
        sonCards();
        audio.play();

    }
    else{
        backward.style.opacity= 0.4;
    }
})