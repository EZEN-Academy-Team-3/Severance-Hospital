/**
 * @ File Name: NewsMain.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-20
 * @ Description: 뉴스 메인 페이지
 */

import React, { memo, useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import Header from '../../components/MainPageHeader';
import Footer from '../../components/Footer';
import TopButton from '../../components/TopButton';
import NewsView from "./NewsView";
import NewsMain from './NewsMain'
import NoticeView from "./NoticeView";
import NoticeInfo from './NoticeInfo';

const NewsAllMain = memo(() => {

  return (
    <div>
      <TopButton />
      <Header />
      <div className='bgAll'>
        <Routes>
            <Route path="/*" element={<NewsMain />} />
            <Route path="media.do" element={<NewsView />} />
            <Route path="notice.do" element={<NoticeView />} />
            <Route path="notice.do/:id" element={<NoticeInfo />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
});

export default NewsAllMain;
