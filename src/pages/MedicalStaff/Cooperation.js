/**
 * @ File Name: Cooperation.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-16 15:02:00
 * @ Description: 의료인 > 진료의뢰 페이지
 */

/** import */
import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

// 헤더 푸터
import Header from "../../components/MainPageHeader";
import Footer from "../../components/Footer";
// 페이지 최상단 이동 버튼
import TopButton from "../../components/TopButton";
// 협력병원 현황
import Hospital from "./Hospital";
// 협진병, 의원 현황
import Doctor from "./Doctor";
// 협력병원 현황 상세
import HospitalDetail from "./HospitalDetail";
// 협진병, 의원 현황 상세
import DoctorDetail from "./DoctorDetail";

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
            <Route path="/hospital.do" element={<Hospital />} />
            <Route path="/doctor.do" element={<Doctor />} />
            <Route path="/hospital-detail.do/:id" element={<HospitalDetail />} />
            <Route path="/doctor-detail.do/:id" element={<DoctorDetail />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </>
  );
});

export default Cooperation;
