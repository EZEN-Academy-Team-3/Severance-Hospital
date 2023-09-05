/** import */
import React from "react";
import { Routes, Route } from "react-router-dom";

/** 메인 */
import MainPage from "./pages/main/MainPage";
/** 오시는 길 */
import Map from "./pages/Map/Map";
/** 이용안내 */
import Guide from "./pages/Guide/Guide";
/** 의료인 */
import Cooperation from "./pages/MedicalStaff/Cooperation";
/** 이용약관, 개인정보처리방침 */
import Policy from "./pages/Policy/Policy";
/** 관리자 */
import Manager from "./pages/Manager/Manager";
// 관리자 로그인
import ManagerLogin from "./pages/Manager/ManagerLogin";

// 로그인, 아이디/비밀번호 찾기
import StaffSearch from "./pages/staff/StaffSearch";
import Login from "./pages/Login/Login";
import FindId from "./pages/Login/FindId";
import FindIdEmail from "./pages/Login/FindIdEmail";
import FindPassword from "./pages/Login/FindPassword";
import FindPasswordEmail from "./pages/Login/FindPasswordEmail";
import ChangePasswordEmail from "./pages/Login/ChangePasswordEmail";
import NewPassword from "./pages/Login/NewPassword";

// 회원가입
import JoinWay from "./pages/Join/JoinWay";
import JoinAccept from "./pages/Join/JoinAccept";
import JoinAcceptGlobal from "./pages/Join/JoinAcceptGlobal";
import JoinCertificate from "./pages/Join/JoinCertificate";
import JoinUs from "./pages/Join/JoinUs";
import JoinComplete from "./pages/Join/JoinComplete";
import JoinAlready from "./pages/Join/JoinAlready";

//고객의소리
import CustomerBoardMain from "./pages/CustomerBoard/CustomerMain";

//의약품검색
import DrugSearchMain from "./pages/DrugSearch/DrugSearchMain";

//뉴스홈
import NewsAllMain from "./pages/NewsHome/NewsAllMain";

//마이페이지
import MysevMain from "./pages/MYSevrance/MysevMain";
import ISevrance from "./pages/MYSevrance/ISevrance";
import UserInfo from "./pages/MYSevrance/UserInfo";

// 의료인 정보
import StaffProfile from "./pages/staff/StaffProfile";

// 진료 예약
import AppointmentMain from "./pages/Appointment/AppointmentMain";
import ApptSelect from "./pages/Appointment/ApptSelect";
// 의료진 예약
import Drstep1 from "./pages/Appointment/Drstep1";
import Drstep2 from "./pages/Appointment/Drstep2";

import HJAttp from "./pages/Appointment/HJAppt";
import HJstep3 from "./pages/Appointment/HJstep3";
import HJstep4 from "./pages/Appointment/HJstep4";

// 예약 현황
import ApptStatusMain from "./pages/ApptStatus/ApptStatusMain";
import ApptHistory from "./pages/ApptStatus/ApptHistory";
import ApptDetail from "./pages/ApptStatus/ApptDetail";

// 병원개요
import AboutSev from "./pages/AboutSevrance/AboutSev";
import Introduction from "./pages/AboutSevrance/Introduction";

// 예약 페이지 테스트 컴포턴트 페이지
import Member1 from "./pages/Appointment/Member1";
import Reserve1 from "./pages/Appointment/Reserve1";

function App() {
  return (
    <div>
      <Routes>
        {/* 메인 */}
        <Route path="/" exapt={true} element={<MainPage />} />
        {/* 이용안내 */}
        <Route path="/guide/*" element={<Guide />} />
        {/* 오시는 길 */}
        <Route path="/map.do/*" element={<Map />} />
        {/* 의료인 */}
        <Route path="/cooperation/*" element={<Cooperation />} />
        {/* 이용약관, 개인정보처리방침 */}
        <Route path="/policy/*" element={<Policy />} />
        {/* 관리자 */}
        <Route path="/manager/*" element={<Manager />} />
        {/* 관리자 로그인 */}
        <Route path="/manager_login" element={<ManagerLogin />} />

        {/* 예약 페이지 컴포턴트 */}
        <Route path="/member1" exapt={true} element={<Member1 />} />
        <Route path="/reserve1" exapt={true} element={<Reserve1 />} />

        {/* 회원가입 */}
        <Route path="/join_way" element={<JoinWay />} />
        <Route path="/join_accept" element={<JoinAccept />} />
        <Route path="/join_accept_global" element={<JoinAcceptGlobal />} />
        <Route path="/join_certificate" element={<JoinCertificate />} />
        <Route path="/join_us" element={<JoinUs />} />
        <Route path="/join_complete" element={<JoinComplete />} />
        <Route path="/join_already" element={<JoinAlready />} />

        {/* 로그인, 아이디/비밀번호 찾기 */}
        <Route path="/login/*" element={<Login />} />
        <Route path="/find_id" element={<FindId />} />
        <Route path="/find_id_email" element={<FindIdEmail />} />
        <Route path="/find_password" element={<FindPassword />} />
        <Route path="/find_password_email" element={<FindPasswordEmail />} />
        <Route path="/change_password_email" element={<ChangePasswordEmail />} />
        <Route path="/new_password" element={<NewPassword />} />

        {/* 고객의소리 페이지 라우팅*/}
        <Route path="/customer.do/*" element={<CustomerBoardMain />} />

        <Route path="/staff" element={<StaffSearch />} />
        <Route path="/staff/*" element={<StaffProfile />} />

        {/* 의약품검색 페이지 라우팅 */}
        <Route path="/drug.do/*" element={<DrugSearchMain />} />

        {/* 뉴스홈 페이지 라우팅 */}
        <Route path="/news/*" element={<NewsAllMain />} />
        {/* <Route path="/news/media.do" element={<NewsView />} />
        <Route path="/news/notice.do" element={<NoticeView />} /> */}

        {/* 마이페이지 라우팅 */}
        <Route path="/mysevrance/*" element={<MysevMain />} />
        <Route path="/mysevrance/iseverance/mywriting" element={<ISevrance />} />
        <Route path="/user_info/*" element={<UserInfo />} />

        {/* 진료 예약 */}
        <Route path="/appointment_main/*" element={<AppointmentMain />} />
        {/* 온라인 예약 */}
        <Route path="/apptSelect" element={<ApptSelect />} />

        {/* 온라인 예약 - 다보미, 의료진 예약 스텝1,2 */}
        <Route path="/drstep1" element={<Drstep1 />} />
        <Route path="/drstep2" element={<Drstep2 />} />

        {/* 온라인 예약 - 혜지 */}
        <Route path="/hjattp" element={<HJAttp />} />
        <Route path="/hjstep3" element={<HJstep3 />} />
        <Route path="/hjstep4" element={<HJstep4 />} />

        {/* 예약 현황 */}
        <Route path="/appt_status_main/*" element={<ApptStatusMain />} />
        <Route path="/appt_history" element={<ApptHistory />} />
        <Route path="/appt_detail" element={<ApptDetail />} />

        {/* 병원개요 */}
        <Route path="/about_sev" element={<AboutSev />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </div>
  );
}

export default App;
