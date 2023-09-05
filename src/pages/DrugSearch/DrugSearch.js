/**
 * @ File Name: DrugSearch.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-13 16:1:00
 * @ Description: 의약품 검색 메인페이지
 */

import React, { memo } from 'react';
import { NavLink, Routes, Route, useLocation } from 'react-router-dom';

import TabShape from './TabShape';
import TabInfo from './TabInfo';

const DrugSearch = memo(() => {
  /** url의 경로 구조분해 */
  const { pathname } = useLocation();

  return (
    <div>
          <h1 className="pageTitle">의약품</h1>

          <nav className="tabMenu">
            <NavLink
              to={pathname == '/drug.do' ? '/drug.do' : '/drug.do/tab-shape'}
            >
              약모양으로 찾기
            </NavLink>
            <NavLink to="tab-info">약정보 찾기</NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<TabShape />} />
            <Route path="tab-shape" element={<TabShape />} />
            <Route path="tab-info" element={<TabInfo />} />
          </Routes>
    </div>
  );
});

export default DrugSearch;
