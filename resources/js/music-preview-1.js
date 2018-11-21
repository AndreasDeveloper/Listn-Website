/* -------------------------------------- */
/* MUSIC PREVIEW 1 | JavaScript Setup
/* -------------------------------------- */

// Creates variables with actual audio and song path of the array
var currentTime = document.getElementById('current-time');

var song = new Audio('resources/music-prev/Lucky You.mp3');  // set the source of the first song

// | FUNCTION | - Plays the song
function playSong() {
    song.play();
}

// | FUNCTION | - Play/Pause option for the player
function playNPauseSong() {
    if (song.paused) {
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

// SONG 2 SETUP -----------------------------------------------------------------------------------------------------------------
var currentTime2 = document.getElementById('current-time-2');

// Creates variables with actual audio and song path of the array
var song2 = new Audio('resources/music-prev/Not Alike.mp3'); // set the source of the first song

// | FUNCTION | - Plays the song
function playSong2() {
    song2.play();
}

// | FUNCTION | - Play/Pause option for the player
function playNPauseSong2() {
    if (song2.paused) {
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
var song3 = new Audio('resources/music-prev/Venom.mp3');

// | FUNCTION | - Plays the song
function playSong3() {
    song3.play();
}

// | FUNCTION | - Play/Pause option for the player
function playNPauseSong3() {
    if (song3.paused) {
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