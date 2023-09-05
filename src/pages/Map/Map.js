/**
 * @ File Name: Map.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-08 15:02:00
 * @ Description: 오시는 길 페이지
 */

/** import */
import React, { memo } from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";

// 헤더 푸터
import Header from "../../components/MainPageHeader";
import Footer from "../../components/Footer";
// 페이지 최상단 이동 버튼
import TopButton from "../../components/TopButton";
// 약도 및 주소 안내
import Content1 from "./Content1";
// 오시는 방법
import Content2 from "./Content2";

/** 이미지 */
// 공지사항 박스 아이콘
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";

/** 리스트 스타일 */
// ul태그
const ListStyleUl = styled.ul`
  margin: 4px 0;

  li {
    padding-left: 12px;
    margin-top: 5px;
    position: relative;

    &:first-child {
      margin-top: 0;
    }

    &::before {
      content: "";
      width: 4px;
      height: 4px;

      position: absolute;
      top: 0.7em;
      left: 0;

      background-color: #0094fb;
    }
  }
`;

/** 탭메뉴 스타일 */
const TabMenuNav = styled.nav`
  width: 100%;
  height: 57px;
  position: relative;
  margin-bottom: 60px;
  overflow: hidden;

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

const Map = memo(() => {
  /** url의 경로 구조분해 */
  const { pathname } = useLocation();

  return (
    <>
      <TopButton />
      <Header />

      {/* 배경 이미지 (GlobalStyles) */}
      <div className="bgAll">
        {/* 페이지 기본 구조 */}
        <div className="pageCont">
          {/* 페이지 타이틀 */}
          <h1 className="pageTitle">위치 및 오시는 방법</h1>
          <div className="boxGuide">
            <img src={boxGuideDecor} alt="boxGuideDecor" />
            <ListStyleUl>
              <li>누구나 쉽게 찾아오시도록 병원 위치 및 교통수단별 안내 드립니다.</li>
              <li>지하철과 연계하여 바로 오실 수 있도록 셔틀버스를 운영하고 있으며, 노약자 및 임산부를 위하여 원내순환 전기차를 운영하고 있습니다.</li>
            </ListStyleUl>
          </div>

          {/* 탭 기본 구조 */}
          <TabMenuNav>
            <ul>
              <li>
                {/* 경로가 /map.do와 /map.do/tab_content1일때, 모두 active 활성화 */}
                <NavLink to={pathname === "/map.do" ? "/map.do" : "/map.do/tab_content1"}>
                  <span>약도 및 주소 안내</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="tab_content2">
                  <span>오시는 방법</span>
                </NavLink>
              </li>
            </ul>
          </TabMenuNav>

          <Routes>
            {/* 경로가 /map.do일때, 기본값 */}
            <Route path="/" element={<Content1 />} />

            {/* 약도 및 주소 안내, 오시는 방법 페이지 */}
            <Route path="tab_content1" element={<Content1 />} />
            <Route path="tab_content2" element={<Content2 />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </>
  );
});

export default Map;
