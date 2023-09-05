/**
 * @ File Name: ScrollToTop.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-04 19:33:33
 * @ Description: 페이지 이동 및 새로고침 시 스크롤 최상단 이동
 */

import React, { memo, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = memo(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
});

export default ScrollToTop;
