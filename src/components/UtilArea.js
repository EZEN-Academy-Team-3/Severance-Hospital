/**
 * @ File Name: UtilArea.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-12 16:35:00
 * @ Description: utilArea 헤더 위에 파란색 컴포넌트
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
/** 이미지 참조 */
import logoutimg from '../assets/img/ico-logout-white.png';

const Div = styled.div`
  height: 40px;
  position: relative;
  background-color: #0054d1;
  color: #fff;
  font-size: 15px;
  .utilArea{
    max-width: 1280px;
    margin: auto;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    span{line-height:40px;}
    a{
      display: inline-block;
      color: #fff;
      font-size: 15px;
      line-height:40px;
    }
    #pad{
      padding: 0 10px;
    }
    .icoLogout{
      line-height:40px !important;
      margin-top:7px; 
      margin-right: 7px;
    }
    .icoLogout{
    width: 22px;
    height: 21px;
    line-height: 21px;
    ${`backGround: url(${logoutimg}) no-repeat center /cover;`}
    background-size: cover;
  }
  }
`;

const UtilArea = memo(() => {
  let userInfo = JSON.parse(window.sessionStorage.userInfo);
    return (
        <Div>
            <div className='utilArea'>
              <span><strong>{userInfo.userId}</strong>님 반갑습니다.</span>
              <span id='pad'>&nbsp;|&nbsp;</span>
              <i className='icoLogout'></i>
              <Link to='/login'>
                로그아웃
              </Link>
            </div>
        </Div>
    );
});

export default UtilArea;