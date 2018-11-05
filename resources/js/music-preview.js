/// Music Preview JS Setup
/*
// Creating Array with songs
var songs1 = ['resources/music-prev/Lucky You.mp3', 'resources/music-prev/Not Alike.mp3', 'resources/music-prev/Venom.mp3'];

// Creating Array for poster of each song (same in this case for each song)
var poster = ['resources/images/kamikaze-bk-2.jpg'];

// DOM | Getting song title and fill bar elements
var songTitle = document.getElementById('song-title');
var fillBar = document.getElementById('fill');

var currentTime = document.getElementById('current-time');

var song = new Audio();
var currentSong = 0;    // Points to the current song

//window.onload = playSong(); // Calling the function playSong when window is loaded

// | FUNCTION | - Plays the song
function playSong() {
    song.src = songs1[currentSong];  // set the source of the first song
    //songTitle.textContent = songs1[currentSong]; // Set the title of the song
    song.play(); // Plays the song
}

// | FUNCTION | - Play/Pause option for the player
function playNPauseSong() {
    if (song.paused) {
        song.play();
        $('#playI i').attr('class', 'icon ion-md-pause buttons__play');
    } else {
        song.pause();
        $('#playI i').attr('class', 'icon ion-md-play buttons__play');
    }
}

// | FUNCTION | - Next Song
function next() {
    currentSong++;
    if (currentSong > 2) {
        currentSong = 0;
    }
    playNPauseSong();
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
*/

// EXPERIMENTAL

// Creates variables with actual audio and song path of the array
var currentTime = document.getElementById('current-time');

var song = new Audio();

// | FUNCTION | - Plays the song
function playSong() {
    song.src = 'resources/music-prev/Lucky You.mp3';  // set the source of the first song
}

// | FUNCTION | - Play/Pause option for the player
function playNPauseSong() {
    if (song.paused) {
        playSong();
        song.play();
        $('#playI i').attr('class', 'icon ion-md-pause music-tab-1__icon');
    } else {
        song.pause();
        $('#playI i').attr('class', 'icon ion-md-play music-tab-1__icon');
    }
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

    convertTime(Math.round(song.currentTime));  // Converts decimal numbers to integers
});

// SONG 2 SETUP ----------------------------------------------------------------
var currentTime2 = document.getElementById('current-time-2');

// Creates variables with actual audio and song path of the array
var song2 = new Audio();

// | FUNCTION | - Plays the song
function playSong2() {
    song2.src = 'resources/music-prev/Not Alike.mp3';  // set the source of the first song
    song2.play();
}

// | FUNCTION | - Play/Pause option for the player
function playNPauseSong2() {
    if (song2.paused) {
        playSong2();
        song2.play();
        $('#playI-2 i').attr('class', 'icon ion-md-pause music-tab-2__icon');
    } else {
        song2.pause();
        $('#playI-2 i').attr('class', 'icon ion-md-play music-tab-2__icon');
    }
}

// | FUNCTION | - Converts minutes and seconds from decimals to integers
function convertTime2(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime2.textContent = min + ':' + sec;

    totalTime2(Math.round(song2.duration));
}

// | FUNCTION | - Shows Total Duration of the song
function totalTime2(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime2.textContent += ' / ' + min + ':' + sec;
}

// | EVENT LISTENER | Track Bar Setup
song2.addEventListener('timeupdate', function() {
    var position = song2.currentTime2 / song2.duration;

    convertTime2(Math.round(song2.currentTime2));  // Converts decimal numbers to integers
});

// SONG 3 SETUP ----------------------------------------------------------------
var currentTime3 = document.getElementById('current-time-3');

// Creates variables with actual audio and song path of the array
var song3 = new Audio();

// | FUNCTION | - Plays the song
function playSong3() {
    song3.src = 'resources/music-prev/Venom.mp3';  // set the source of the first song
    song3.play();
}

// | FUNCTION | - Play/Pause option for the player
function playNPauseSong3() {
    if (song3.paused) {
        playSong3();
        song3.play();
        $('#playI-3 i').attr('class', 'icon ion-md-pause music-tab-3__icon');
    } else {
        song3.pause();
        $('#playI-3 i').attr('class', 'icon ion-md-play music-tab-3__icon');
    }
}

// | FUNCTION | - Converts minutes and seconds from decimals to integers
function convertTime3(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime3.textContent = min + ':' + sec;

    totalTime3(Math.round(song3.duration));
}

// | FUNCTION | - Shows Total Duration of the song
function totalTime3(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime3.textContent += ' / ' + min + ':' + sec;
}

// | EVENT LISTENER | Track Bar Setup
song3.addEventListener('timeupdate', function() {
    var position = song3.currentTime3 / song3.duration;

    convertTime3(Math.round(song3.currentTime3));  // Converts decimal numbers to integers
});