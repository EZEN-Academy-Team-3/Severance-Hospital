/**
 * @ File Name: ISevrance.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-12 16:30:00
 * @ Description: 나의 작성글 페이지
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MyPageHeader from '../../components/MyPageHeader';
import LoginFooter from "../../components/LoginFooter";
import mypattern from '../../assets/img/mybg-pattern.png';

const Div = styled.article`
  .content {
    min-height: calc(100vh - 345px);
    min-width: 1025px;
    display: block;
    ${`backGround: url(${mypattern}) no-repeat center top;`}
    overflow: hidden;
    
    .mysevInfo {
      padding: 15px 30px;
      background: #f9f9f9;
      width: 100%;
  
      span:first-child {
        font-size: 24px;
        font-family: 'NanumSquare', 'malgungothic', 'Helvetica Neue', Arial,
          sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji';
        line-height: 38px;
      }
      span:nth-child(2) {
        padding-left: 15px;
      }
    }
  }


`;

const ISevrance = memo(() => {
  return (
    <Div>
      <MyPageHeader />
      <div className="content">
        <div className="pageCont">
          <h1 className="pageTitle">나의 작성글</h1>

          <div className="mysevInfo">
            <span>userID</span>
            <span>님이 작성한 글 내역입니다.</span>
          </div>
        

        {/* 검색결과 */}
        <div className="bbsList">
          <div className="bbsItem">
            <Link className="inner">
              <div className="bbssubjectArea">
                <strong>title</strong>
              </div>
              <div className="infoArea">
                <span className="date">2022-11-30</span>
              </div>
            </Link>
          </div>
        </div>

        {/* 더보기버튼 */}
        {/* <div className="buttonContColumn">
          <Link className="btnMore">더보기</Link>
        </div> */}
      </div>
      </div>
      <LoginFooter />
    </Div>
  );
});

export default ISevrance;
