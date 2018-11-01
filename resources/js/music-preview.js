/// Music Preview JS Setup

// Creating Array with songs
var songs = ['resources/music-prev/Lucky You.mp3', 'resources/music-prev/Not Alike.mp3', 'resources/music-prev/Venom.mp3'];

// Creating Array for poster of each song (same in this case for each song)
var poster = ['resources/images/kamikaze-bk-2.jpg'];

// DOM | Getting song title and fill bar elements
var songTitle = document.getElementById('song-title');
var fillBar = document.getElementById('fill');

var currentTime = document.getElementById('current-time');

var song = new Audio();
var currentSong = 0;    // Points to the current song

//window.onload = playSong; // Calling the function playSong when window is loaded

// | FUNCTION | - Plays the song
function playSong() {
    song.src = songs[currentSong];  // set the source of the first song
    //songTitle.textContent = songs[currentSong]; // Set the title of the song
    song.play(); // Plays the song
}

// | FUNCTION | - Play/Pause option for the player
function playNPauseSong() {
    if(song.paused) {
        song.play();
        $('#play').attr('class', 'icon ion-md-pause buttons__play');
    } else {
        song.pause();
        $('#play').attr('class', 'icon ion-md-play buttons__play');
    }
}

// | FUNCTION | - Next Song
function next() {
    currentSong++;
    if (currentSong > 2) {
        currentSong = 0;
    }
    playSong();
    $('#play').attr();
}

// | FUNCTION | - Previous Song
function prev() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = 2;
    }
    playSong();
    $('#play i').attr('class', 'icon ion-md-pause');
}

// | FUNCTION | - Converts minutes and seconds from decimals to integers
function convertTime(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime.textContent = min + ':' + sec;

    totalTime(Math.round(song.duration));
}

// | FUNCTION | - Shows Total Duration of the song
function totalTime(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime.textContent += ' / ' + min + ':' + sec;
}

// | EVENT LISTENER | Track Bar Setup
song.addEventListener('timeupdate', function() {
    var position = song.currentTime / song.duration;
    fillBar.style.width = position * 100 + '%';

    convertTime(Math.round(song.currentTime));  // Converts decimal numbers to integers
});