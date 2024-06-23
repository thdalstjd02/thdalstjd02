document.addEventListener('DOMContentLoaded', () => {
    // 매칭 찾기 버튼을 선택합니다.
    const matchingButton = document.getElementById('matching-button');

    // 매칭 찾기 버튼에 클릭 이벤트를 추가합니다.
    matchingButton.addEventListener('click', () => {
        // 사용자가 선택한 지역과 포지션을 가져옵니다.
        const selectedRegion = document.getElementById('region').value;
        const selectedPosition = document.getElementById('position').value;

        // URL에 파라미터를 추가하여 매칭 결과 페이지를 연다.
        const url = `matching-result.html?region=${selectedRegion}&position=${selectedPosition}`;
        window.open(url, '_blank');
    });
});

