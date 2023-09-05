/**
 * @ File Name: ApptStatusMain.js
 * @ Author: 
 * @ Last Update: 
 * @ Description: 
 */

/** import */
import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

// 헤더 푸터
import Header from "../../components/MainPageHeader";
import Footer from "../../components/Footer";
// 페이지 최상단 이동 버튼
import TopButton from "../../components/TopButton";
// 예약 현황 메인
import AppointmentStatus from "./AppointmentStatus";


const ApptStatusMain = memo(() => {
  return (
    <>
      <TopButton />
      <Header />

      <Routes>
        <Route path="/appointment_status" element={<AppointmentStatus />} />
      </Routes>

      <Footer />
    </>
  );
});

export default ApptStatusMain;
