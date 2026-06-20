// 1. 메인 메뉴 스위칭 (Works, About, News, Contact)
const mainLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('.content-section');
const subLinks = document.querySelectorAll('.sub-link');
const workItems = document.querySelectorAll('.work-item');

mainLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        mainLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        link.classList.add('active');
        const targetId = link.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');

        // 사용자가 메인 메뉴에서 works를 누를 때마다 내부 필터를 'all'로 초기화
        if (targetId === 'works') {
            subLinks.forEach(sl => sl.classList.remove('active'));
            const allButton = document.querySelector('.sub-link[data-filter="all"]');
            if (allButton) allButton.classList.add('active');
            
            workItems.forEach(item => {
                item.style.display = 'block';
            });
        }
    });
});

// 2. Works 내부 아티스트 필터링 시스템 (하상철, 모토코, 김익)
subLinks.forEach(subLink => {
    subLink.addEventListener('click', () => {
        subLinks.forEach(sl => sl.classList.remove('active'));
        subLink.classList.add('active');

        const filterValue = subLink.getAttribute('data-filter');

        workItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-artist') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
