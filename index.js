        function enterSite() {
            const splash = document.getElementById('splash');
            splash.classList.add('fade-out');
            
            // 0.6초 페이드아웃 애니메이션 연출 후 메인 페이지로 이동
            setTimeout(() => {
                window.location.href = 'main.html';
            }, 600);
        }
