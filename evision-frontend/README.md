# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



---

### **폴더 구조**
```
project-root/
├── public/                  # 정적 파일 (favicon, 이미지 등)
│   └── favicon.ico
├── src/
│   ├── assets/              # 이미지, 폰트, 정적 리소스
│   ├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── pages/               # 페이지별 컴포넌트
│   │   ├── Admin/           # /admin 페이지 관련 컴포넌트
│   │   ├── Login/           # /login 페이지 관련 컴포넌트
│   │   ├── Main/            # /main 페이지 관련 컴포넌트
│   │   ├── Recruiting/      # /recruiting 관련 컴포넌트
│   │   │   └── Apply/       # /recruiting/apply 관련 컴포넌트
│   │   └── NotFound.jsx     # 404 페이지 컴포넌트
│   ├── routes/              # 라우팅 설정
│   ├── styles/              # 글로벌 스타일 시트
│   ├── hooks/               # 커스텀 훅
│   ├── context/             # 전역 상태 관리
│   ├── utils/               # 유틸리티 함수
│   ├── App.jsx              # 메인 앱 컴포넌트
│   └── main.jsx             # 엔트리 포인트
├── index.html                # 기본 HTML 템플릿
├── vite.config.js            # Vite 설정 파일
├── package.json              # 프로젝트 설정 및 의존성 정보
└── README.md                 # 프로젝트 설명 문서
```

---

### **설명**
- **pages/**
  - 각 페이지 경로에 맞는 디렉터리를 생성하여 페이지 컴포넌트를 깔끔하게 분리했습니다.
  - `/recruiting/apply` 페이지는 Recruiting 디렉터리 안에 Apply 서브 디렉터리로 구성했습니다.
  - `NotFound.jsx`는 잘못된 경로 요청을 처리하기 위한 404 페이지입니다.
  
- **routes/**
  - 라우팅 설정을 위한 컴포넌트를 관리합니다. React Router 같은 라이브러리를 사용해 페이지 간 라우팅을 구현합니다.

---

### **Router 예시**
```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import LoginPage from "./pages/Login/LoginPage";
import RecruitingPage from "./pages/Recruiting/RecruitingPage";
import ApplyPage from "./pages/Recruiting/Apply/ApplyPage";
import AdminPage from "./pages/Admin/AdminPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/recruiting" element={<RecruitingPage />} />
        <Route path="/recruiting/apply" element={<ApplyPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
```

이 폴더 구조는 유지보수에 용이하며, 페이지 및 라우팅 확장에도 효율적입니다.   

[더 알아보기](https://gptonline.ai/ko/)