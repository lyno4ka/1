const videoEl = document.getElementsByTagName('video')[0],
    playBtn = document.getElementById('playBtn'),
    videoControls = document.getElementById('controls'),
    videoTrack = document.getElementById('video-track'),
    volumeControl = document.getElementById('volume'),
    timePicker = document.getElementById('timer'),
    sizeScreen = document.getElementById('size-screen');

videoEl.addEventListener('click', function () {
    if (videoEl.paused) {
        videoEl.play();
    } else {
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
        <i class="fa fa-play play-ic" aria-hidden="true"></i>
    `;
}, false);

videoEl.addEventListener('pause', function () {
    playBtn.innerHTML = `
        <i class="fa fa-pause pause-ic" aria-hidden="true"></i>
    `;
}, false);
         
volumeControl.addEventListener('input', function () {
    videoEl.volume = volumeControl.value;
}, false);

videoEl.addEventListener('ended', function () {
    videoEl.currentTime = 0;
}, false);

videoEl.addEventListener('timeupdate', function () {
    timePicker.innerHTML = secondsToTime(videoEl.currentTime);
}, false);

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

function videoChangeTime(e) { //Перематываем

    let mouseX = Math.floor(e.pageX - videoTrack.offsetLeft);
    
    let progress = mouseX / (videoTrack.offsetWidth / 100);
    
    videoEl.currentTime  = videoEl.duration * (progress / 100);
}

videoTrack.addEventListener('click', videoChangeTime);

sizeScreen.addEventListener('click', function() {
    document.fullScreen;
});


// function onPlayerClickPlay(event) {
// 	let videoPlayer = document.querySelector('video'),
// 		btnPlay = document.querySelector('#btnPlay'),
// 		iconEl = btnPlay.querySelector('i');

// 	if (videoPlayer.timerId) {
// 		videoPlayer.pause();

// 		clearInterval(videoPlayer.timerId);
// 		videoPlayer.timerId = null;

// 		iconEl.classList.add('glyphicon-play');
// 		iconEl.classList.remove('glyphicon-pause');
// 	} else {
// 		videoPlayer.play();

// 		videoPlayer.timerId = setInterval(setPlayedTime, 100, videoPlayer);

// 		iconEl.classList.add('glyphicon-pause');
// 		iconEl.classList.remove('glyphicon-play');
// 	}	

// 	btnPlay.blur();
// }

// function setPlayedTime(videoPlayer) {
// 	let progress = (videoPlayer.currentTime / videoPlayer.duration * 100);
// 		durBar = document.querySelector('#durationBar'),
// 		posBar = document.querySelector('#positionBar'),
// 		btnPlay = document.querySelector('#btnPlay'),
// 		iconEl = btnPlay.querySelector('i');;

// 	durBar.style.width = progress  + "%";
// 	posBar.style.marginLeft = progress  + "%";

// 	if (progress >= 100) {
// 		clearInterval(videoPlayer.timerId);
// 		videoPlayer.timerId = null;
// 		iconEl.classList.add('glyphicon-play');
// 		iconEl.classList.remove('glyphicon-pause');
// 	}
// }