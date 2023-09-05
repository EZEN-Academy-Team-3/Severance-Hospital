/**
 * @ File Name: LoginHeader.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-08 17:20
 * @ Description: 로그인센터 헤더 네비게이션
 */

import React, { memo } from "react";
import loginImg from "../assets/img/logo@2x.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  .nav {
    width: 1280px;
    height: 100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      li {
        float: left;
        &:hover {
          a {
            color: #0054d1;
            &:after {
              opacity: 1;
              visibility: visible;
              width: 64px;
              height: 64px;
              margin: -32px 0 0 -32px;
            }
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
            content: "";
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
        &:first-child {
          margin: 30px 173px 0 -30px;
          img {
            width: 210px;
          }
          &:hover {
            a:after {
              visibility: hidden;
            }
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

const LoginHeader = memo(() => {
  return (
    <Container>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">
              <img src={loginImg} alt="통합로그인센터" />
            </Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/join_way">회원가입</Link>
          </li>
          <li>
            <Link to="/">아이디/비밀번호 찾기</Link>
          </li>
          <li>
            <Link to="/">병원등록번호 조회</Link>
          </li>
          <li>
            <Link to="/">이용정책</Link>
          </li>
        </ul>
      </div>
      <hr />
    </Container>
  );
});

export default LoginHeader;
