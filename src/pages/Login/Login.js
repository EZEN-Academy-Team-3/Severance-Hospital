/**
 * @ File Name: Login.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-20 17:10
 * @ Description: 로그인 첫 페이지
 */

import React, { memo } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import LoginHeader from "../../components/LoginHeader";
import LoginFooter from "../../components/LoginFooter";
import Way01 from "./LoginWay01";
import Way02 from "./LoginWay02";

const Container = styled.div`
  position: relative;
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
`;

const TabMenuNav = styled.nav`
  width: 1280px;
  height: 57px;
  position: relative;
  margin-bottom: 60px;
  overflow: hidden;
  margin: auto;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid #ebebeb;
    background-color: #f9f9f9;
  }

  ul {
    font-size: 18px;
    display: flex;

    li {
      flex: 1;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: 1px;
        height: 55px;

        &::before {
          content: "";
          position: absolute;
          top: -1px;
          right: 0;
          bottom: -1px;
          left: 0;
          z-index: 100;
          border: 1px solid transparent;
          border-bottom: 3px solid transparent;
        }

        &.active {
          background-color: white;
          font-weight: bold;
        }

        &.active::before {
          border-color: #ebebeb;
          border-bottom-color: #ffd553;
        }
      }
    }
  }
`;

const Login = memo(() => {
  const { pathname } = useLocation();

  return (
    <Container>
      <LoginHeader />
      <div className="bgAll">
        <div className="title">
          <h1>로그인</h1>
        </div>
        <div className="login_section">
          <TabMenuNav>
            <ul>
              <li>
                <NavLink to={pathname === "/login" ? "/login" : "/login/way01"}>
                  <span>세브란스 로그인</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="way02">
                  <span>본인인증 로그인</span>
                </NavLink>
              </li>
            </ul>
          </TabMenuNav>
        </div>
        <Routes>
          <Route path="/" element={<Way01 />} />
          <Route path="way01" element={<Way01 />} />
          <Route path="way02" element={<Way02 />} />
        </Routes>
        <LoginFooter />
      </div>
    </Container>
  );
});

export default Login;
