/**
 * @ File Name: MyPageHeader.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-08 17:1:00
 * @ Description: 마이페이지 헤더
 */

import React, { memo } from 'react';
/** 링크참조 */
import { Link } from 'react-router-dom';
/** 이미지 참조 */
import loginImg from '../assets/img/mylogo@2x.png';
/** 컴포넌트 참조 */
import styled from 'styled-components';
import UtilArea from './UtilArea';

const Container = styled.div`
  /* 세브란스로고 */
  .logo {
    font-size: 16px;
    float: left;
    height: 35px;
    width: 187.76px;
    img {
      width: 100%;
    }
    &::after {
      clear: both;
    }
  }
  /* 네비게이션 */
  .nav {
    max-width: 1280px;
    margin: auto;
    height: 100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      li {
        float: left;
        &::after {
          clear: both;
        }
        &:hover {
          a:after {
            opacity: 1;
            visibility: visible;
            width: 64px;
            height: 64px;
            margin: -32px 0 0 -32px;
          }
        }
        a {
          position: relative;
          font-size: 22px;
          line-height: 100px;
          text-align: center;
          padding: 0 30px;
          font-weight: bold;
          display: block;
          cursor: pointer;
          &:after {
            content: '';
            position: absolute;
            z-index: -1;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            width: 0;
            height: 0;
            margin: 0;
            background-color: #d9edf8;
            opacity: 0;
            visibility: hidden;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
          }
        }
        &:last-child {
          &:hover {
            a:after {
              opacity: 1;
              visibility: visible;
              width: 64px;
              height: 64px;
              margin: -32px 0 0 -16px;
            }
          }
          a {
            padding-right: 0;
          }
        }
      }
    }
  }
  hr {
    border: none;
    border-top: 1px solid #e6e6e6;
    margin: 0;
  }
`;

const MyPageHeader = memo(() => {
  return (
    <div>
      <UtilArea />
      <Container>
        <div className="nav">
          <Link to="/" className="logo">
            <img src={loginImg} alt="MY세브란스" />
          </Link>
          <ul className="gnbRight">
            <li>
              <Link to="/">예약현황</Link>
            </li>
            <li>
              <Link to="/resultinquiry">결과조회</Link>
            </li>
            <li>
              <Link to="/mysevrance">나의 세브란스</Link>
            </li>
            <li>
              <Link to="/">회원정보</Link>
            </li>
          </ul>
        </div>
        <hr />
      </Container>
    </div>
  );
});

export default MyPageHeader;
