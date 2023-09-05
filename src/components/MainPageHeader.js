/**
 * @ File Name: MainPageHeader.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-11-25 15:02:00
 * @ Description: Sevrance Hospital Header
 */

/** import */
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

/** components */
import SiteMapContainer from "./SiteMap";

/** 이미지 참조 */
// 로고, 아이콘, 이미지
import sevLogo from "../assets/img/sev_logo@2x.png";
import loginIcon from "../assets/img/ico-top-login@2x.png";
import joinIcon from "../assets/img/ico-top-join@2x.png";
import allMenuIcon from "../assets/img/ico-allmenu.png";
import searchIcon from "../assets/img/ico-search.png";
import chevronIcon from "../assets/img/ico-chevron-down-xs-bold@2x.png";
// 검색 모달 -> 검색탭 버튼 아이콘
import totalSearch from "../assets/img/ico-totalsearch-index.png";
// 검색 모달 -> 닫기 버튼 아이콘
import closeWhite from "../assets/img/ico-close-white@2x.png";
// 검색 모달 -> 라디오 버튼 체크 아이콘
import checkboxCheckedBlack from "../assets/img/ico-checkbox-checked-black.png";
import checkboxCheckedWhite from "../assets/img/ico-checkbox-checked-white.png";
// 메뉴 이미지
import menuBG from "../assets/img/bg-lnb.png";
import menuArt from "../assets/img/img-lnb-artwork.png";
import menuClose from "../assets/img/ico-close.png";

/** 검색 모달 스타일 */
const SearchModalDiv = styled.div`
  opacity: 1;
  display: none;
  transition-duration: 0.3s;
  overflow-y: hidden;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;

  background-color: rgba(0, 0, 0, 0.7);

  /* 팝업 배경 */
  .popupBg {
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1100;

    background-color: rgba(0, 84, 209, 0.8);

    /* 팝업 콘텐츠 */
    .popup {
      width: 1000px;
      margin: 0 auto;
      color: #fff;
      padding: 150px 0 90px;

      /* 팝업 닫기 버튼 */
      .modalCloseButton {
        width: 40px;
        height: 40px;

        position: absolute;
        right: 40px;
        top: 40px;

        background: url(${closeWhite}) no-repeat center / cover;
        background-size: 40px 40px;

        border: none;
      }

      /* 라디오탭 */
      .radio {
        display: flex;
        justify-content: space-around;
        position: relative;

        span {
          input {
            &[type="radio"] {
              position: absolute;
              width: 1px;
              height: 1px;
              padding: 0;
              margin: -1px;
              overflow: hidden;
              clip: rect(0, 0, 0, 0);
              border: 0;
            }

            &[type="radio"] + label {
              display: inline-block;
              position: relative;

              padding-left: 36px;
              font-size: 24px;
              cursor: pointer;
            }

            &[type="radio"] + label:before {
              content: "";
              width: 26px;
              height: 26px;

              position: absolute;
              left: 0;
              top: 50%;
              transform: translate(0, -50%);

              background: #959595 url(${checkboxCheckedWhite}) no-repeat center;
              background-size: 13px 10px;
              box-shadow: none;

              border: none;
              border-radius: 50%;
            }

            &[type="radio"]:checked + label:before {
              background: #ffd553 url(${checkboxCheckedBlack}) no-repeat center;
              background-size: 13px 10px;
            }
          }
        }
      }

      /* 검색탭 */
      .search {
        position: relative;
        margin-top: 75px !important;
        box-sizing: border-box;
        color: #fff;

        input {
          width: 100%;
          height: auto;
          font-size: 40px;
          font-weight: bold;

          vertical-align: middle;

          background-color: transparent;
          color: #fff;

          border: none;
          border-bottom: 2px solid #fff;
          box-sizing: border-box;

          padding: 15px 70px 15px 15px;

          &::placeholder {
            text-align: center;
            color: white;
          }

          &:focus {
            outline: none;
          }
        }

        /* 검색 버튼 아이콘 */
        button {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translate(0, -20px);

          background: inherit;
          border: none;
          box-shadow: none;
          overflow: visible;
          cursor: pointer;

          i {
            width: 41px;
            height: 40px;
            line-height: 40px;
            display: block;

            background: url(${totalSearch}) no-repeat center / cover;
            white-space: nowrap;
          }
        }
      }

      /* 해시태그탭 */
      .hashTag {
        text-align: center;
        margin-top: 50px;
        color: #fff;

        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          li {
            height: 50px;
            font-size: 24px;

            border: 2px solid rgba(255, 255, 255, 0.6);
            border-radius: 25px;

            padding: 0 25px;
            margin: 10px 5px;
            box-sizing: border-box;

            a {
              line-height: 50px;
              color: #fff;
            }
          }
        }
      }
    }
  }
`;

/** 헤더 컨테이너 스타일 */
const Container = styled.div`
  position: relative;
  z-index: 5000;

  background-color: #fff;
`;

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

      img {
        cursor: pointer;
      }

      a {
        position: relative;
        font-weight: bold;

        &:hover {
          color: #0054d1;
        }

        &::after {
          content: "";
          width: 8px;
          height: 8px;

          position: absolute;
          top: 24px;

          display: inline-block;
          margin-left: 7px;

          background-color: #ffd553;
          border-radius: 50%;

          opacity: 0;
          visibility: hidden;

          transform: translateY(20px);
          transition-duration: 0.3s;
        }

        &:hover::after {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        &.active {
          color: #0054d1;
        }

        &.active::after {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
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

/** 메인 네비게이션 텍스트 링크 스타일 */
const MenuLink = styled(Link)`
  text-align: center;
  font-size: 26px;
  padding: 0 33px;
  line-height: 84px;
`;

/** 메인 네비게이션 텍스트 스타일 */
const MenuA = styled.a`
  text-align: center;
  font-size: 26px;
  padding: 0 33px;
  line-height: 84px;
`;

/** 메뉴 스타일 */
// 메뉴 뒷 배경
const Background = styled.div`
  width: 100%;

  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 450;

  background-color: #000;

  transition-duration: 0.3s;
  transition-property: opacity;

  visibility: hidden;
  opacity: 0.7;

  &.active {
    visibility: visible;
  }
`;
// 메뉴 박스
const MenuContainer = styled.div`
  height: 380px;

  position: absolute;
  left: 0;
  right: 0;
  z-index: 200;

  border-top: 1px solid #eee;
  box-sizing: border-box;

  display: flex;
  justify-content: center;

  visibility: hidden;
  overflow-x: hidden;

  &.active {
    visibility: visible;
  }

  .menu {
    width: 1280px;

    position: relative;
    top: 0;
    bottom: 0;
  }
`;
// 메뉴 이미지 섹션
const MenuImgSection = styled.section`
  width: 294px;

  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 300;

  padding-top: 50px;
  box-sizing: border-box;

  font-size: 18px;
  line-height: 30px;

  &::before {
    content: "";
    width: 6000px;

    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    background: #f9f9f9 url(${menuBG}) no-repeat right 0;
  }

  img {
    position: relative;
    z-index: 400;
  }

  p {
    font-size: 17px;
    line-height: 30px;

    position: relative;

    &:nth-child(2) {
      font-size: 24px;
      margin-top: 30px;
    }

    span {
      color: #0054d1;
    }
  }

  &::after {
    content: "";
    width: 6000px;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 100%;
    background-color: #fff;
  }
`;
// 메뉴 큰 항목 리스트 섹션
const MenuListSection = styled.section`
  position: relative;
  z-index: 500;

  margin-left: 294px;
  padding: 30px 0 40px 26px;

  font-size: 20px;
`;
// 메뉴 ul태그
const MenuUl = styled.ul`
  display: flex;
`;
// 메뉴 각 리스트
const MenuList = styled.li`
  width: 20%;
  padding: 30px 0 0 30px;
  font-size: 20px;
`;
// 메뉴 메인 제목
const MenuTitle = styled.h4`
  font-weight: bold;
  line-height: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
`;
// 서브 메뉴 ul태그
const SubMenuUl = styled.ul`
  margin-top: 15px;
  font-size: 17px;
  box-sizing: border-box;
`;
// 서브 메뉴 각 리스트
const SubMenuList = styled.li`
  line-height: 22px;
  color: #444;
  padding: 4px 0;
  padding-right: 20px;
  box-sizing: border-box;
  cursor: pointer;
`;
// 서브 메뉴 제목
const SubMenuTitlte = styled.h4``;
// 메뉴 닫기 버튼
const MenuCloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 12px;
  padding: 2px;
  z-index: 500;
  border: 0;
  background-color: transparent;

  i {
    width: 22px;
    height: 22px;
    line-height: 22px;
    display: block;
    background: url(${menuClose}) no-repeat center / cover;
  }
`;

const Header = () => {
  // 경로 변경 시, useEffect 동작을 위한 location
  const location = useLocation();

  // 선택한 메뉴 카테고리 상태값
  const [menuContent, setMenuContent] = useState("환자/보호자");

  /** ref */
  // 메뉴
  const menu = useRef();
  // 메뉴 배경
  const menuBG = useRef();
  // 메뉴 환자/보호자 카테고리
  const menuFirst = useRef();
  // 메뉴 의료인 카테고리
  const menuSecond = useRef();
  // 사이트맵
  const siteMap = useRef();
  // 검색 모달
  const searchModal = useRef();

  /** 이벤트 */
  // 메뉴 열기 (임시)
  const menuToggle = useCallback((e) => {
    // console.log(e.target.innerHTML);
    // console.log(menu.current.classList[2]);
    // console.log(menuChose1.current.innerHTML);
    // console.log(menuChose1.current.classList[2]);
    // console.log(menuBG);

    menu.current.classList.add("active");
    menuBG.current.classList.add("active");

    if (e === "환자/보호자") {
      menuFirst.current.classList.toggle("active");
      menuSecond.current.classList.remove("active");

      if (menuFirst.current.classList[2] !== "active") {
        menu.current.classList.remove("active");
        menuBG.current.classList.remove("active");
      }
    } else if (e === "close") {
      menu.current.classList.remove("active");
      menuBG.current.classList.remove("active");
      menuFirst.current.classList.remove("active");
      menuSecond.current.classList.remove("active");
    } else {
      menuSecond.current.classList.toggle("active");
      menuFirst.current.classList.remove("active");

      if (menuSecond.current.classList[2] !== "active") {
        menu.current.classList.remove("active");
        menuBG.current.classList.remove("active");
      }
    }
  }, []);

  // 사이트맵 열기
  const showSiteMap = useCallback((e) => {
    siteMap.current.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
  }, []);

  // 검색 모달 열기
  const showModal = useCallback((e) => {
    searchModal.current.style.display = "block";
  }, []);

  // 검색 모달 닫기
  const closeModal = useCallback((e) => {
    searchModal.current.style.display = "none";
  }, []);

  // URL 경로 이동 시, 사이트맵을 닫고 해당 페이지의 스크롤을 활성화 시킨다.
  // 또한, 메뉴관련 태그의 className 'active'를 모두 제거한다.
  useEffect(() => {
    siteMap.current.style.display = "none";
    document.querySelector("body").style.overflow = "visible";
    menu.current.classList.remove("active");
    menuBG.current.classList.remove("active");
    menuFirst.current.classList.remove("active");
    menuSecond.current.classList.remove("active");
  }, [location.pathname]);

  return (
    <>
      <SiteMapContainer ref={siteMap} />
      <Container>
        <SearchModalDiv ref={searchModal}>
          <div className="popupBg">
            <div className="popup">
              <button type="button" className="modalCloseButton" onClick={closeModal}></button>

              <div className="radio">
                <span>
                  <input type="radio" name="radio" id="radio1" defaultChecked="checked" />
                  <label htmlFor="radio1">통합검색</label>
                </span>
                <span>
                  <input type="radio" name="radio" id="radio2" />
                  <label htmlFor="radio2">의료진 검색</label>
                </span>
                <span>
                  <input type="radio" name="radio" id="radio3" />
                  <label htmlFor="radio3">진료과 탐색</label>
                </span>
              </div>

              <div className="search">
                <input type="text" placeholder="검색어를 입력해주세요" title="검색어 입력"></input>
                <button>
                  <i />
                </button>
              </div>

              <div className="hashTag">
                <ul>
                  <li>
                    <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                      #코로나
                    </a>
                  </li>
                  <li>
                    <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                      #면회제한
                    </a>
                  </li>
                  <li>
                    <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                      #오시는 길
                    </a>
                  </li>
                  <li>
                    <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                      #비급여진료비
                    </a>
                  </li>
                  <li>
                    <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                      #증명서발급
                    </a>
                  </li>
                  <li>
                    <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                      #제중원
                    </a>
                  </li>
                  <li>
                    <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                      #건강검진
                    </a>
                  </li>
                  <li>
                    <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                      #입찰
                    </a>
                  </li>
                  <li>
                    <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                      #채용
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SearchModalDiv>

        <HeaderContainer>
          <UtilContainer>
            <ul>
              <li>
                <Link to="/login">
                  <img src={loginIcon} alt="login_icon" />
                </Link>
              </li>
              <li>
                <Link to="/join_way">
                  <img src={joinIcon} alt="join_icon" />
                </Link>
              </li>
            </ul>
            <div>
              <span>KO</span>
              <img src={chevronIcon} />
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
                <MenuA
                  href="#"
                  onClick={() => {
                    menuToggle("환자/보호자");
                    setMenuContent("환자/보호자");
                  }}
                  ref={menuFirst}
                >
                  환자/보호자
                </MenuA>
              </li>
              <li>
                <MenuA
                  href="#"
                  onClick={() => {
                    menuToggle("의료인");
                    setMenuContent("의료인");
                  }}
                  ref={menuSecond}
                >
                  의료인
                </MenuA>
              </li>
              <li>
                <MenuLink to="/customer.do">공감 Story</MenuLink>
              </li>
              <li>
                <MenuLink to="/drug.do">건강정보</MenuLink>
              </li>
              <li>
                <img src={allMenuIcon} alt="all_menu_icon" className="allMenuIcon" onClick={showSiteMap} />
              </li>
              <li>
                <img src={searchIcon} alt="search_icon" className="searchIcon" onClick={showModal} />
              </li>
            </ul>
          </GnbContainer>
        </HeaderContainer>

        <MenuContainer ref={menu}>
          <div className="menu">
            <MenuImgSection>
              <img src={menuArt} alt="artwork" />
              <p>
                THE <strong>FIRST</strong>, THE <strong>BEST</strong>
              </p>
              <p>
                환자가 만족하는 병원 <span>세브란스</span>입니다.
              </p>
            </MenuImgSection>

            <MenuListSection>
              {menuContent === "환자/보호자" ? (
                <MenuUl>
                  <MenuList>
                    <MenuTitle>
                      <Link to="/appointment_main">예약</Link>
                    </MenuTitle>
                    <SubMenuUl>
                      <SubMenuList>
                        <SubMenuTitlte>
                          <Link to="/appointment_main">진료예약</Link>
                        </SubMenuTitlte>
                      </SubMenuList>
                      <SubMenuList>
                        <SubMenuTitlte>예약현황</SubMenuTitlte>
                      </SubMenuList>
                    </SubMenuUl>
                  </MenuList>
                  <MenuList>
                    <MenuTitle>
                      <Link to="/user_info/resultinquiry">결과</Link>
                    </MenuTitle>
                  </MenuList>
                  <MenuList>
                    <MenuTitle>
                      <Link to="/guide/number.do">이용안내</Link>
                    </MenuTitle>
                    <SubMenuUl>
                      <SubMenuList>
                        <SubMenuTitlte>
                          <Link to="/guide/facility.do">병원시설</Link>
                        </SubMenuTitlte>
                      </SubMenuList>
                      <SubMenuList>
                        <SubMenuTitlte>
                          <Link to="/guide/outpatient_info">외래이용</Link>
                        </SubMenuTitlte>
                      </SubMenuList>
                      <SubMenuList>
                        <SubMenuTitlte>
                          <Link to="/guide/hospitalization.do">입원생활</Link>
                        </SubMenuTitlte>
                      </SubMenuList>
                      <SubMenuList>
                        <SubMenuTitlte>
                          <Link to="/guide/operating-room.do">수술실 이용</Link>
                        </SubMenuTitlte>
                      </SubMenuList>
                      <SubMenuList>
                        <SubMenuTitlte>
                          <Link to="/guide/unsupported">비급여진료비</Link>
                        </SubMenuTitlte>
                      </SubMenuList>
                    </SubMenuUl>
                  </MenuList>
                </MenuUl>
              ) : (
                <MenuUl>
                  <MenuList>
                    <MenuTitle>
                      <Link to="/cooperation/hospital.do">진료의뢰</Link>
                    </MenuTitle>
                    <SubMenuUl>
                      <SubMenuList>
                        <SubMenuTitlte>
                          <Link to="/cooperation/hospital.do">협력병원 현황</Link>
                        </SubMenuTitlte>
                      </SubMenuList>
                      <SubMenuList>
                        <SubMenuTitlte>
                          <Link to="/cooperation/doctor.do">협진병, 의원 현황</Link>
                        </SubMenuTitlte>
                      </SubMenuList>
                    </SubMenuUl>
                  </MenuList>
                </MenuUl>
              )}
            </MenuListSection>

            <MenuCloseButton
              type="button"
              onClick={() => {
                menuToggle("close");
              }}
            >
              <i />
            </MenuCloseButton>
          </div>
        </MenuContainer>
      </Container>

      <Background ref={menuBG} />
    </>
  );
};

export default Header;
