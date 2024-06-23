document.addEventListener('DOMContentLoaded', () => {
    showSection('representative'); // 대표자 소개 섹션을 보여줍니다.
});

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}