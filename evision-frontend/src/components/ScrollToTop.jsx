import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    
    // 스크롤 최상단으로 이동
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50); // 약간의 딜레이 추가 (비동기 렌더링 문제 방지)
    
  }, [pathname]);

  return null;
};

export default ScrollToTop;
