/**
 * @ File Name: CustomerBoardList.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-20 15:1:00
 * @ Description: 고객의 소리 페이지
 */

import React, { memo, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import CustomerBoardList from "./CustomerBoardList";
import CustomerBoardAdd from "./CustomerBoardAdd";
import CustomerBoardView from "./CustomerBoardView";

import Header from "../../components/MainPageHeader";
import Footer from "../../components/Footer";
import TopButton from "../../components/TopButton";

const CustomerBoardCont = styled.div`
  .pageCont {
    /* padding-bottom: 0 !important; */
  }
`;

const CustomerBoardMain = memo(() => {
  return (
    <div>
      <TopButton />
      <CustomerBoardCont>
        <Header />
        <Routes>
          <Route path="/" element={<CustomerBoardList />} />
          <Route path="suggest.do" element={<CustomerBoardAdd />} />
          <Route path="suggestion/:id" element={<CustomerBoardView />} />
        </Routes>
      </CustomerBoardCont>
      <Footer />
    </div>
  );
});

export default CustomerBoardMain;
