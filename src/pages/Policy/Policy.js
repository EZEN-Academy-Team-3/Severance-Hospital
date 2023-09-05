/**
 * @ File Name: Policy.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-16 15:02:00
 * @ Description: 이용약관, 개인정보처리방침 페이지
 */

/** import */
import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

/** components */
// 헤더 푸터
import Header from "../../components/MainPageHeader";
import Footer from "../../components/Footer";
// 페이지 최상단 이동 버튼
import TopButton from "../../components/TopButton";
// 이용약관 페이지
import Agreement from "./Agreement";
// 개인정보처리방침 페이지
import Privacy from "./Privacy";

const Cooperation = memo(() => {
  return (
    <>
      <TopButton />
      <Header />

      {/* 배경 이미지 (GlobalStyles) */}
      <div className="bgAll">
        {/* 페이지 기본 구조 */}
        <div className="pageCont">
          <Routes>
            <Route path="/agreement.do" element={<Agreement />} />
            <Route path="/privacy.do" element={<Privacy />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </>
  );
});

export default Cooperation;
