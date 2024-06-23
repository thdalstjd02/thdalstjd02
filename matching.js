// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const matchingButton = document.getElementById('matching-button');
    matchingButton.addEventListener('click', function() {
        // 선택된 지역과 포지션을 가져옴
        const region = document.getElementById('region').value;
        const position = document.getElementById('position').value;
        
        // URL에 쿼리 파라미터로 전달할 정보 구성
        const queryParams = new URLSearchParams({
            region: region,
            position: position
        });

        // 새로운 페이지로 이동 (matching-results.html 페이지)
        window.location.href = `matching-results.html?${queryParams.toString()}`;
    });
});
