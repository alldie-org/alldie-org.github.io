function enterSite() {
    const splash = document.getElementById('splash');
    
    if (!splash) return;

    // 중복 클릭 방지 (클릭하는 순간 추가 클릭 차단)
    splash.style.pointerEvents = 'none'; 
    splash.classList.add('fade-out');
    
    // CSS transition 시간(0.6초)에 맞춰 메인 페이지로 이동
    setTimeout(() => {
        window.location.href = 'main.html';
    }, 600);
}
