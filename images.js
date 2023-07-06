const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach(container => {
        const image = container.querySelectorAll('img');
        const video = container.querySelectorAll('video');

        image.addEventListener('click', () => {
            video.play();
        });

        image.addEventListener('mouseout', () => {
            video.pause();
            video.currentTime = 0;
        });
    });