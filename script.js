function closeCustomAlert() {
    const alertBox = document.querySelector('.custom-alert');
    alertBox.style.display = 'none';
    alertBox.remove(); // 알림창을 삭제합니다.
}

document.addEventListener('DOMContentLoaded', () => {
    showCustomAlert('BASKETBALL MANIA는 여러분들의 열정을 응원합니다!');
    showSection('video-section'); // 기본적으로 비디오 섹션을 보여줍니다.
});

function showCustomAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.classList.add('custom-alert');
    alertBox.innerHTML = `
        <span>${message}</span>
        <button class="close-button" onclick="closeCustomAlert()">&times;</button>
    `;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.style.display = 'block';
    }, 500);
}

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';

    if (sectionId === 'video-section') {
        playVideo();
    } else {
        stopVideo();
    }
}

function playVideo() {
    const iframe = document.querySelector('#video-section iframe');
    const currentSrc = iframe.src;
    const autoplaySrc = 'https://www.youtube.com/embed/EYEHUOpwNvE?autoplay=1&mute=0';

    if (!currentSrc.includes('autoplay=1')) {
        iframe.src = autoplaySrc;
    }
}

function stopVideo() {
    const iframe = document.querySelector('#video-section iframe');
    const currentSrc = iframe.src;
    const pausedSrc = 'https://www.youtube.com/embed/EYEHUOpwNvE?autoplay=0&mute=0';

    if (currentSrc.includes('autoplay=1')) {
        iframe.src = pausedSrc;
    }
}

function openVideoPopup() {
    document.querySelector('.video-popup').style.display = 'block';
}

function closeVideoPopup() {
    document.querySelector('.video-popup').style.display = 'none';
}

function toggleSubBanner() {
    const subBanner = document.getElementById('sub-banner');
    subBanner.classList.toggle('active');
}

