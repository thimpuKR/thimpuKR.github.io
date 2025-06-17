// 하단 네비게이션 컴포넌트 (bottom-nav.js)
// 모든 페이지에서 공통으로 사용할 수 있는 하단 네비게이션 바 컴포넌트

// 하단 네비게이션 스타일을 문서에 추가
function addBottomNavStyles() {
  // 이미 스타일이 추가되어 있는지 확인
  if (document.getElementById('bottom-nav-styles')) return;
  
  const styleElement = document.createElement('style');
  styleElement.id = 'bottom-nav-styles';
  styleElement.textContent = `
    /* 하단 네비게이션 스타일 */
    .bottom-nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: white;
      display: flex;
      border-top: 1px solid #e5e7eb;
      box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05);
      z-index: 100;
      padding-bottom: env(safe-area-inset-bottom, 0px); /* iOS 안전 영역 대응 */
    }
    
    .nav-item {
      flex: 1;
      padding: 0.75rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #6b7280;
      font-size: 0.75rem;
      transition: all 0.2s ease;
    }
    
    .nav-item i {
      font-size: 1.25rem;
      margin-bottom: 0.25rem;
    }
    
    .nav-item.active {
      color: #3A5A40;
    }
    
    .nav-item.touchable {
      cursor: pointer;
      transition: opacity 0.2s;
    }
    
    .nav-item.touchable:hover {
      opacity: 0.7;
    }
    
    .nav-item.touchable:active {
      opacity: 0.5;
    }
    
    /* 하단 네비게이션을 위한 본문 여백 설정 */
    body {
      padding-bottom: calc(4rem + env(safe-area-inset-bottom, 0px));
    }
  `;
  
  document.head.appendChild(styleElement);
}

// 현재 페이지 경로에 따라 활성화할 메뉴 아이템 결정
function determineActivePage() {
  const currentPath = window.location.pathname;
  
  if (currentPath.includes('dashboard') || currentPath.endsWith('/main/') || currentPath.endsWith('/main')) {
    return 'home';
  } else if (currentPath.includes('matches')) {
    return 'matches';
  } else if (currentPath.includes('messages') || currentPath.includes('chat')) {
    return 'messages';
  } else if (currentPath.includes('notifications')) {
    return 'notifications';
  } else if (currentPath.includes('profile') || currentPath.includes('settings')) {
    return 'profile';
  }
  
  return ''; // 활성화된 메뉴 없음
}

// 하단 네비게이션 바 생성 및 삽입
function createBottomNav() {
  // 이미 존재하는 하단 네비게이션 제거
  const existingNav = document.querySelector('.bottom-nav');
  if (existingNav) {
    existingNav.remove();
  }
  
  // 새 하단 네비게이션 생성
  const bottomNav = document.createElement('nav');
  bottomNav.className = 'bottom-nav';
  
  const activePage = determineActivePage();
  
  // 네비게이션 아이템 정의
  const navItems = [
    { id: 'home', icon: 'fa-home', text: '홈', href: '../main/dashboard.html' },
    { id: 'matches', icon: 'fa-heart', text: '매칭', href: '../main/matches.html' },
    { id: 'messages', icon: 'fa-comment', text: '메시지', href: '../main/messages.html' },
    { id: 'notifications', icon: 'fa-book', text: '피드', href: '../main/feed.html' },
    { id: 'profile', icon: 'fa-user', text: '프로필', href: '../main/profile.html' }
  ];
  
  // 네비게이션 아이템 생성 및 추가
  navItems.forEach(item => {
    const navItem = document.createElement('a');
    navItem.href = item.href;
    navItem.className = `nav-item touchable${item.id === activePage ? ' active' : ''}`;
    
    navItem.innerHTML = `
      <i class="fas ${item.icon} text-xl"></i>
      <span class="text-xs mt-1">${item.text}</span>
    `;
    
    bottomNav.appendChild(navItem);
  });
  
  // 페이지에 추가
  document.body.appendChild(bottomNav);
  
  // 이미 페이지에 .pb-20 등의 클래스가 있다면 제거
  const appContainer = document.getElementById('app');
  if (appContainer) {
    appContainer.classList.remove('pb-20');
  }
}

// 문서가 로드된 후 하단 네비게이션 초기화
document.addEventListener('DOMContentLoaded', function() {
  addBottomNavStyles();
  createBottomNav();
});

// 다른 페이지에서 사용할 수 있도록 전역으로 노출
window.initBottomNav = function() {
  addBottomNavStyles();
  createBottomNav();
}; 