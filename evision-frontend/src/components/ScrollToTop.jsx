import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // 현재 경로 가져오기

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 변경될 때마다 최상단 이동
  }, [pathname]);

  return null;
};

export default ScrollToTop;
