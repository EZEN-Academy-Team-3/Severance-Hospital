/**
 * @ File Name: MainPageLoginHeader.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-19 15:02:00
 * @ Description: 메인 페이지 login header
 */

import React, { useState } from "react";
import styled from "styled-components";

/** 링크 */
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

/** 컴포넌트 참조 */
import SiteMap from "../pages/SiteMap/SiteMap";

/** 로고, 아이콘, 이미지 참조 */
import sevLogo from "../assets/img/sev_logo@2x.png";
import allMenuIcon from "../assets/img/ico-allmenu.png";
import searchIcon from "../assets/img/ico-search.png";
import chevronIcon from "../assets/img/ico-chevron-down-xs-bold@2x.png";
// 로그아웃 시, 최상단 아이콘
import loginIcon from "../assets/img/ico-top-login@2x.png";
import joinIcon from "../assets/img/ico-top-join@2x.png";
// 로그인 시, 최상단 아이콘
import myPageIcon from "../assets/img/ico-top-mypage.png";
import logoutIcon from "../assets/img/ico-top-logout.png";

/** 헤더 스타일 */
const HeaderContainer = styled.header`
  width: 100%;
  height: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/** 사용자, 회원가입 아이콘 스타일 */
const UtilContainer = styled.div`
  width: 1280px;
  height: 41px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 16px;
  box-sizing: border-box;

  ul {
    display: flex;

    li {
      margin-right: 20px;

      img {
        width: 22px;
      }
    }
  }

  div {
    width: 60px;
    height: 26px;
    border-bottom: 1px solid black;
    padding: 0 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 16px;
      font-weight: bold;
    }

    img {
      width: 10px;
      height: 6px;
      cursor: pointer;
    }
  }
`;

/** 메인 네비게이션 스타일 */
const GnbContainer = styled.div`
  width: 1280px;
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    .sevLogo {
      width: 231px;
      height: 40px;
      object-fit: cover;
    }
  }
  ul {
    display: flex;

    li {
      display: flex;
      align-items: center;
      a {
        font-weight: bold;
        img {
        }
        .allMenuIcon {
          height: 20px;
        }
        .searchIcon {
          height: 24px;
        }
      }
      &:nth-child(5) {
        margin-left: 20px;
      }
      &:nth-child(6) {
        margin-left: 20px;
      }
    }
  }
`;

/** 메인 네비게이션 텍스트 스타일 */
const MenuArticle = styled(Link)`
  text-align: center;
  font-size: 26px;
  padding: 0 33px;
  line-height: 84px;
`;

const Header = () => {
  const [onAllMenu, setOnAllMenu] = useState(false);

  const onAllMenuClick = (props) => {
    setOnAllMenu(props);
  };

  return (
    <>
      <HeaderContainer>
        <UtilContainer>
          <ul>
            <li>
              <Link to="mysevrance">
                <img src={myPageIcon} alt="login_icon" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={logoutIcon} alt="join_icon" />
              </Link>
            </li>
          </ul>
          <div>
            <span>KO</span>
            <img src={chevronIcon} alt="dropdown_icon" />
          </div>
        </UtilContainer>

        <GnbContainer>
          <h1>
            <Link to="/">
              <img src={sevLogo} alt="header_logo" className="sevLogo" />
            </Link>
          </h1>
          <ul>
            <li>
              <MenuArticle to="/appointment_main">환자/보호자</MenuArticle>
            </li>
            <li>
              <MenuArticle to="/cooperation/hospital.do">의료인</MenuArticle>
            </li>
            <li>
              <MenuArticle to="/customer.do">공감 Story</MenuArticle>
            </li>
            <li>
              <MenuArticle to="/drug.do">건강정보</MenuArticle>
            </li>
            <li>
              <Link to="/all_menu">
                <img src={allMenuIcon} alt="all_menu_icon" className="allMenuIcon" />
              </Link>
            </li>
            <li>
              <img src={searchIcon} alt="search_icon" className="searchIcon" />
            </li>
          </ul>
        </GnbContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
