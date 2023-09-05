/**
 * @ File Name: Manager.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-02 17:33:33
 * @ Description: 관리자 메인 페이지
 */

/** import */
import React, { memo } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";

// 서브 라우팅
import CustomerBoard from "./CustomerBoard/CustomerBoard";
import News from "./News/News";

import Notice from "./Notice/Notice";
import NoticeAdd from "./Notice/NoticeAdd";
import NoticeEdit from "./Notice/NoticeEdit";
import NoticeView from "./Notice/NoticeView";

import Appointment from "./Appointment/Appointment";
import UserInfo from "./UserInfo/UserInfo";
import UserResult from "./UserResult/UserResult";
import Hospital from "./Hospital/Hospital";
import Doctor from "./Doctor/Doctor";
import CHospitalClinic from "./CHospitalClinic/CHospitalClinic";
import CDoctor from "./CDoctor/CDoctor";
import Department from "./Department/Department";

/** manager */
const Container = styled.div`
  padding: 0 3%;
`;

/** 전체 메뉴 스타일 */
const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 50px 10% 20px;
`;
// 각 메뉴 스타일
const MenuLinkContainer = styled(NavLink)`
  font-size: 18px;
  padding-bottom: 2px;
  color: #ccc;
  transition: 0.3s;
  margin-right: 10px;

  &:hover {
    color: #168;
    font-weight: bold;
  }

  &.active {
    color: #168;
    font-weight: bold;
  }
`;

const Manager = memo(() => {
  /** url의 경로 구조분해 */
  const { pathname } = useLocation();

  return (
    <Container>
      <MenuContainer>
        <MenuLinkContainer to={pathname === "/manager" ? "/manager" : "/manager/customer_board"}>고객의소리</MenuLinkContainer>
        <MenuLinkContainer to="news">뉴스</MenuLinkContainer>
        <MenuLinkContainer to="notice">공지사항</MenuLinkContainer>
        <MenuLinkContainer to="appointment">예약</MenuLinkContainer>
        <MenuLinkContainer to="user_info">회원정보</MenuLinkContainer>
        <MenuLinkContainer to="user_result">회원결과</MenuLinkContainer>
        <MenuLinkContainer to="hospital">병원</MenuLinkContainer>
        <MenuLinkContainer to="doctor">의사</MenuLinkContainer>
        <MenuLinkContainer to="cooperation_hospital_clinic">협력병의원</MenuLinkContainer>
        <MenuLinkContainer to="cooperation_doctor">협력의사</MenuLinkContainer>
        <MenuLinkContainer to="department">진료과</MenuLinkContainer>
      </MenuContainer>

      <Routes>
        <Route path="/" element={<CustomerBoard />} />
        <Route path="/customer_board" element={<CustomerBoard />} />
        <Route path="/news" element={<News />} />

        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/add/:id" element={<NoticeAdd />} />
        <Route path="/notice/edit/:id" element={<NoticeEdit />} />
        <Route path="/notice/view/:id" element={<NoticeView />} />

        <Route path="/appointment" element={<Appointment />} />
        <Route path="/user_info" element={<UserInfo />} />
        <Route path="/user_result" element={<UserResult />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/cooperation_hospital_clinic" element={<CHospitalClinic />} />
        <Route path="/cooperation_doctor" element={<CDoctor />} />
        <Route path="/department" element={<Department />} />
      </Routes>
    </Container>
  );
});

export default Manager;
