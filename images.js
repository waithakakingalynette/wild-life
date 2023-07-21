const videoContainers = document.querySelectorAll('.video-container');

videoContainers.forEach(container => {
    const video = container.querySelector('video');

    video.addEventListener('click', () => {
        video.play();
    });

    video.addEventListener('ended', () => {
        video.pause();
        video.currentTime = 0;
    });
});

