import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("페이지 이동 감지됨, 최상단으로 스크롤");
    window.scrollTo(0, 0);
  }, [pathname]); // pathname 변경될 때 실행

  return null;
};

export default ScrollToTop;
