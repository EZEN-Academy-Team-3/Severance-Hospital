/**
 * @ File Name: Guide.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-11 15:02:00
 * @ Description: 이용안내 페이지
 */

/** import */
import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

// 헤더 푸터
import Header from "../../components/MainPageHeader";
import Footer from "../../components/Footer";
// 페이지 최상단 이동 버튼
import TopButton from "../../components/TopButton";
// 주요전화번호
import Number from "./Number";
// 층별시설안내
import Facility from "./Facility";
// 입원생활
import Hospitalization from "./Hospitalization";
// 수술실 이용안내
import OperatingRoom from "./OperatingRoom";
// 외래이용안내
import OutpatientInfo from "./OutpatientInfo";
// 진료비 수납 및 환불
import PaymentRefund from "./PaymentRefund";
// 비급여진료비 조회
import Unsupported from "./Unsupported";

const Guide = memo(() => {
  return (
    <>
      <TopButton />
      <Header />

      <Routes>
        <Route path="/number.do" element={<Number />} />
        <Route path="/facility.do" element={<Facility />} />
        <Route path="/outpatient_info" element={<OutpatientInfo />} />
        <Route path="/hospitalization.do" element={<Hospitalization />} />
        <Route path="/operating-room.do" element={<OperatingRoom />} />
        <Route path="/payment_refund" element={<PaymentRefund />} />
        <Route path="/unsupported/*" element={<Unsupported />} />
      </Routes>

      <Footer />
    </>
  );
});

export default Guide;
