/* -------------------------------------- */
/* MUSIC PREVIEW 3 | JavaScript Setup
/* -------------------------------------- */

/* -------------------------------------- */
/* MUSIC PREVIEW 2 | JavaScript Setup
/* -------------------------------------- */

// Creates variables with actual audio and song path of the array
var currentTime7 = document.getElementById('current-time-7');

var song7 = new Audio('../resources/music-prev/F - Some More.mp3');

// | FUNCTION | - Play/Pause option for the player
function playNPauseSong7() {
    if (song7.paused) {
        song7.play();
        $('#playI-7 i').attr('class', 'icon ion-md-pause music-tab-7__icon');
    } else {
        song7.pause();
        $('#playI-7 i').attr('class', 'icon ion-md-play music-tab-7__icon');
    }
}

// | FUNCTION | - Converts minutes and seconds from decimals to integers
function convertTime7(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime7.textContent = min + ':' + sec;

    totalTime7(Math.round(song7.duration));
}

// | FUNCTION | - Shows Total Duration of the song
function totalTime7(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime7.textContent += ' / ' + min + ':' + sec;
}

// | EVENT LISTENER | Track Bar Setup
song7.addEventListener('timeupdate', function() {
    var position = song7.currentTime / song7.duration;

    convertTime7(Math.round(song7.currentTime));  // Converts decimal numbers to integers
});

// SONG 2 SETUP ----------------------------------------------------------------
var currentTime8 = document.getElementById('current-time-8');

// Creates variables with actual audio and song path of the array
var song8 = new Audio('../resources/music-prev/F - Doh Doh.mp3');

// | FUNCTION | - Play/Pause option for the player
function playNPauseSong8() {
    if (song8.paused) {
        song8.play();
        $('#playI-8 i').attr('class', 'icon ion-md-pause music-tab-8__icon');
    } else {
        song8.pause();
        $('#playI-8 i').attr('class', 'icon ion-md-play music-tab-8__icon');
    }
}

// | FUNCTION | - Converts minutes and seconds from decimals to integers
function convertTime8(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime8.textContent = min + ':' + sec;

    totalTime8(Math.round(song8.duration));
}

// | FUNCTION | - Shows Total Duration of the song
function totalTime8(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime8.textContent += ' / ' + min + ':' + sec;
}

// | EVENT LISTENER | Track Bar Setup
song8.addEventListener('timeupdate', function() {
    var position = song8.currentTime / song8.duration;

    convertTime8(Math.round(song8.currentTime));  // Converts decimal numbers to integers
});

// SONG 3 SETUP ----------------------------------------------------------------
var currentTime9 = document.getElementById('current-time-9');

// Creates variables with actual audio and song path of the array
var song9 = new Audio('../resources/music-prev/F - 31 Days.mp3');

// | FUNCTION | - Play/Pause option for the player
function playNPauseSong9() {
    if (song9.paused) {
        song9.play();
        $('#playI-9 i').attr('class', 'icon ion-md-pause music-tab-9__icon');
    } else {
        song9.pause();
        $('#playI-9 i').attr('class', 'icon ion-md-play music-tab-9__icon');
    }
}

// | FUNCTION | - Converts minutes and seconds from decimals to integers
function convertTime9(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime9.textContent = min + ':' + sec;

    totalTime9(Math.round(song9.duration));
}

// | FUNCTION | - Shows Total Duration of the song
function totalTime9(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime9.textContent += ' / ' + min + ':' + sec;
}

// | EVENT LISTENER | Track Bar Setup
song9.addEventListener('timeupdate', function() {
    var position = song9.currentTime / song9.duration;

    convertTime9(Math.round(song9.currentTime));  // Converts decimal numbers to integers
});