/* -------------------------------------- */
/* MUSIC PREVIEW 2 | JavaScript Setup
/* -------------------------------------- */

// Creates variables with actual audio and song path of the array
var currentTime4 = document.getElementById('current-time-4');

var song4 = new Audio('../resources/music-prev/KL - Humble.mp3');

// | FUNCTION | - Play/Pause option for the player
function playNPauseSong4() {
    if (song4.paused) {
        song4.play();
        $('#playI-4 i').attr('class', 'icon ion-md-pause music-tab-4__icon');
    } else {
        song4.pause();
        $('#playI-4 i').attr('class', 'icon ion-md-play music-tab-4__icon');
    }
}

// | FUNCTION | - Converts minutes and seconds from decimals to integers
function convertTime4(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime4.textContent = min + ':' + sec;

    totalTime4(Math.round(song4.duration));
}

// | FUNCTION | - Shows Total Duration of the song
function totalTime4(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime4.textContent += ' / ' + min + ':' + sec;
}

// | EVENT LISTENER | Track Bar Setup
song4.addEventListener('timeupdate', function() {
    var position = song4.currentTime / song4.duration;

    convertTime4(Math.round(song4.currentTime));  // Converts decimal numbers to integers
});

// SONG 2 SETUP ----------------------------------------------------------------
var currentTime5 = document.getElementById('current-time-5');

// Creates variables with actual audio and song path of the array
var song5 = new Audio('../resources/music-prev/KL - Element.mp3');

// | FUNCTION | - Play/Pause option for the player
function playNPauseSong5() {
    if (song5.paused) {
        song5.play();
        $('#playI-5 i').attr('class', 'icon ion-md-pause music-tab-5__icon');
    } else {
        song5.pause();
        $('#playI-5 i').attr('class', 'icon ion-md-play music-tab-5__icon');
    }
}

// | FUNCTION | - Converts minutes and seconds from decimals to integers
function convertTime5(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime5.textContent = min + ':' + sec;

    totalTime5(Math.round(song5.duration));
}

// | FUNCTION | - Shows Total Duration of the song
function totalTime5(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime5.textContent += ' / ' + min + ':' + sec;
}

// | EVENT LISTENER | Track Bar Setup
song5.addEventListener('timeupdate', function() {
    var position = song5.currentTime / song5.duration;

    convertTime5(Math.round(song5.currentTime));  // Converts decimal numbers to integers
});

// SONG 3 SETUP ----------------------------------------------------------------
var currentTime6 = document.getElementById('current-time-6');

// Creates variables with actual audio and song path of the array
var song6 = new Audio('../resources/music-prev/KL - DNA.mp3');

// | FUNCTION | - Play/Pause option for the player
function playNPauseSong6() {
    if (song6.paused) {
        song6.play();
        $('#playI-6 i').attr('class', 'icon ion-md-pause music-tab-6__icon');
    } else {
        song6.pause();
        $('#playI-6 i').attr('class', 'icon ion-md-play music-tab-6__icon');
    }
}

// | FUNCTION | - Converts minutes and seconds from decimals to integers
function convertTime6(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime6.textContent = min + ':' + sec;

    totalTime6(Math.round(song6.duration));
}

// | FUNCTION | - Shows Total Duration of the song
function totalTime6(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime6.textContent += ' / ' + min + ':' + sec;
}

// | EVENT LISTENER | Track Bar Setup
song6.addEventListener('timeupdate', function() {
    var position = song6.currentTime / song6.duration;

    convertTime6(Math.round(song6.currentTime));  // Converts decimal numbers to integers
});