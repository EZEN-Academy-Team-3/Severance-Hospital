/**
 * @ File Name: CustomerBoardView.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-20 16:1:00
 * @ Description: 의약품 검색 메인페이지
 */

import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import DrugSearch from './DrugSearch';
import DrugInfo from './DrugInfo';
import DrugShape from './DrugShape';
import Header from '../../components/MainPageHeader';
import Footer from '../../components/Footer';
import TopButton from '../../components/TopButton';

const DrugSearchMain = memo(() => {
  return (
    <div>
      <TopButton />
      <Header />
      <div className="bgAll">
        <div className="pageCont">
          <Routes>
            <Route path="/*" element={<DrugSearch />} />
            <Route path="/tab-info/:id" element={<DrugInfo />} />
            <Route path="/tab-shape/:id" element={<DrugShape />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default DrugSearchMain;
