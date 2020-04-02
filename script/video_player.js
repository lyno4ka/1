const videoEl = document.getElementsByTagName('video')[0],
    playBtn = document.getElementById('playBtn'),
    videoControls = document.getElementById('controls'),
    seekSlider = document.getElementById('seekslider'),
    volumeControl = document.getElementById('volume'),
    timePicker = document.getElementById('timer'),
    sizeScreen = document.getElementById('size-screen');


function secondsToTime(time){

    let h = Math.floor(time / (60 * 60)),
        dm = time % (60 * 60),
        m = Math.floor(dm / 60),
        ds = dm % 60,
        s = Math.ceil(ds);

    if (s === 60) {
        s = 0;
        m = m + 1;
    }

    if (s < 10) {
        s = '0' + s;
    }

    if (m === 60) {
        m = 0;
        h = h + 1;
    }

    if (m < 10) {
        m = '0' + m;
    }

    if (h === 0) {
        fulltime = m + ':' + s;
    } else {
        fulltime = h + ':' + m + ':' + s;
    }

    return fulltime;
}

function videoSeek(){
	let seekto = videoEl.duration * (seekSlider.value / 100);
	videoEl.currentTime = seekto;
}

function seekTimeUpdate(){
	let nt = videoEl.currentTime * (100 / videoEl.duration);
    seekSlider.value = nt;
}

function openFullscreen() {
    if (videoEl.requestFullscreen) {
        videoEl.requestFullscreen();
    } else if (videoEl.mozRequestFullScreen) { /* Firefox */
        videoEl.mozRequestFullScreen();
    } else if (videoEl.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        videoEl.webkitRequestFullscreen();
    } else if (videoEl.msRequestFullscreen) { /* IE/Edge */
        videoEl.msRequestFullscreen();
    }
}


videoEl.addEventListener('click', function (event) {
    if (videoEl.paused) {
        videoEl.play();
    } else {
        videoEl.pause();
    }

    if (event.keyCode === 32) {
        videoEl.pause();
    } 
}, false);

playBtn.addEventListener('click', function () {
    if (videoEl.paused) {
        videoEl.play();
    } else {
        videoEl.pause();
    }
}, false);

videoEl.addEventListener('play', function () {
    playBtn.innerHTML = `
        <i class="fa fa-pause pause-ic" aria-hidden="true"></i>
    `;
}, false);

videoEl.addEventListener('pause', function () {
    playBtn.innerHTML = `
        <i class="fa fa-play play-ic" aria-hidden="true"></i>
    `;
}, false);

seekSlider.addEventListener('change', videoSeek, false);

videoEl.addEventListener('timeupdate', seekTimeUpdate, false);

videoEl.addEventListener('ended', function () {
    videoEl.currentTime = 0;
}, false);

videoEl.addEventListener('timeupdate', function () {
    timePicker.innerHTML = secondsToTime(videoEl.currentTime);
}, false);

volumeControl.addEventListener('input', function () {
    videoEl.volume = volumeControl.value;
}, false);

sizeScreen.addEventListener('click', function() {
    openFullscreen();
});