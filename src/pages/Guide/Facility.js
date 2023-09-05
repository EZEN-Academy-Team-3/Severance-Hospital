/**
 * @ File Name: Facility.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-12 15:02:00
 * @ Description: 시설안내 페이지
 */

/** import */
import React, { memo, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { useActiveMenu } from "react-active-menu";

/** 이미지 */
// 공지사항 박스 아이콘
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";
// 전체 층별 안내
import floormap from "../../assets/img/img-floormap1_210303.png";
// 1층 ~ 20층
import sev20 from "../../assets/img/sev-20.jpg";
import sev19 from "../../assets/img/sev-19.jpg";
import sev18 from "../../assets/img/sev-18.jpg";
import sev17 from "../../assets/img/sev-17.jpg";
import sev16 from "../../assets/img/sev-16.jpg";
import sev15 from "../../assets/img/sev-15.jpg";
import sev14 from "../../assets/img/sev-14.jpg";
import sev13 from "../../assets/img/sev-13.jpg";
import sev12 from "../../assets/img/sev-12.jpg";
import sev11 from "../../assets/img/sev-11.jpg";
import sev10 from "../../assets/img/sev-10.jpg";
import sev09 from "../../assets/img/sev-09.jpg";
import sev08 from "../../assets/img/sev-08.jpg";
import sev07 from "../../assets/img/sev-07.jpg";
import sev06 from "../../assets/img/sev-06_210303.jpg";
import sev05 from "../../assets/img/sev-05_210303.jpg";
import sev04 from "../../assets/img/sev-04_210303.jpg";
import sev03 from "../../assets/img/sev-03_210303.jpg";
import sev02 from "../../assets/img/sev-02_210303.jpg";
import sev01 from "../../assets/img/sev-01_210303.jpg";

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

    span {
      font-size: 16px;
      line-height: 16px;
      color: #0094fb;
    }
  }
`;

/** 타이틀 h3태그 스타일 */
// 타이틀1
const Title1H3 = styled.h3`
  padding-left: 18px;
  margin: 65px 0 22px;

  font-size: 24px;
  font-weight: bold;
  line-height: 38px;

  color: #222;
  position: relative;

  &.firstTitle {
    margin: 0 0 40px;
  }

  &:before {
    content: "";
    position: absolute;
    width: 6px;
    height: 20px;
    top: 9px;
    left: 0;
    background-color: #0094fb;
    border-radius: 3px;
  }
`;

/** 들여쓰기 스타일 */
// 들여쓰기1
const Indent1 = styled.div`
  margin-left: 18px;
`;

/** 콘텐츠 영역 스타일 */
// section 태그
const FloorSection = styled.section`
  width: 1280px;
  position: relative;
`;
// section 태그
const ContentSection = styled.section`
  width: 1010px;

  img {
    margin-top: 24px;
  }
`;

/** 탭 메뉴 스타일 */
// nav태그
const TabMenuNav = styled.nav`
  margin-bottom: 60px;
  overflow: hidden;
  background-color: #eef7fc;

  ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 18px;

    li {
      width: 20%;
      position: relative;
      z-index: 10;

      a {
        width: 100%;
        height: 55px;
        display: block;

        text-align: center;

        border: 1px solid white;
        box-sizing: border-box;

        span {
          line-height: 55px;
        }
      }

      &.active::before {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        z-index: -10;
        border: 2px solid #0094fb;
        background-color: white;
      }

      &.active a {
        border-color: transparent;

        span {
          font-weight: bold;
          color: #0094fb;
        }
      }
    }
  }
`;

/** 탭 콘텐츠 스타일 */
const TabContent = styled.div`
  display: none;

  &.active {
    display: block;
  }
`;

/** 콘텐츠 바로가기 네비게이션 스타일 */
// nav태그
const ContentNav = styled.nav`
  width: 240px;
  float: right;

  position: sticky;
  top: 10px;

  box-sizing: border-box;

  ul {
    border: 1px solid #e6e6e6;
    background-color: #fff;
    padding: 17px 11px;
    line-height: 1.5;

    li {
      margin-top: 7px;

      &:first-child {
        margin-top: 0;
      }

      a {
        display: block;
        padding: 7px 20px;
        border-radius: 2px;
        cursor: pointer;

        &.active {
          background-color: #0094fb;
          color: white;
        }
      }
      button {
        width: 100%;

        font-size: 16px;
        text-align: left;
        letter-spacing: 0.02em;

        padding: 7px 20px;
        border: none;
        border-radius: 2px;

        background-color: white;

        &.active {
          background-color: #0094fb;
          color: white;
        }
      }
    }
  }
`;

/** 콘텐츠 스타일 */
// article태그
const ContentArticle = styled.article``;

const Facility = memo(() => {
  // 탭메뉴 선택한 탭 인덱스 상태값
  const [selectTab, setSelectTab] = useState(19);

  // 선택한 네비게이션 인덱스 상태값
  const [selectNav, setSelectNav] = useState();

  // 탭메뉴
  const tabMenu = () => {
    const result = [];
    for (let i = 19; i >= 10; i--) {
      result.push(
        <li key={i} className={selectTab === i ? "active" : ""} onClick={() => setSelectTab(i)}>
          <a href={`#floor${i}`}>
            <span>{i}층</span>
          </a>
        </li>
      );
    }
    return result;
  };

  // 탭메뉴 콘텐츠 JSON
  const textArr = {
    "191병동, 192병동": sev19,
    "181병동, 182병동": sev18,
    "171병동, 172병동": sev17,
    "161병동, 162병동": sev16,
    "151병동, 152병동": sev15,
    "141병동, 142병동": sev14,
    "131병동, 132병동": sev13,
    "121병동, 122병동": sev12
  };

  // 스크롤
  const { activeId, registerContainer, registerSection, registerTrigger } = useActiveMenu({ smooth: true });

  return (
    <>
      {/* 배경 이미지 (GlobalStyles) */}
      <div className="bgAll">
        {/* 페이지 기본 구조 */}
        <div className="pageCont">
          {/* 페이지 타이틀 */}
          <h1 className="pageTitle">층별 시설</h1>
          {/* 페이지 공지사항 */}
          <div className="boxGuide">
            <img src={boxGuideDecor} alt="boxGuideDecor" />
            <ListStyleUl>
              <li>세브란스병원 본관 각 층별 시설을 보고 싶으시면, 원하시는 층을 클릭해 주시기 바랍니다.</li>
            </ListStyleUl>
          </div>

          {/* @todo: 네비게이션 만들기 */}
          {/* @todo: 이미지 alt 속성 모두 적용하기 */}
          <FloorSection>
            {/* 콘텐츠 바로가기 네비게이션 */}
            <ContentNav>
              <ul>
                <li>
                  <button ref={registerTrigger("content1")} type="button">
                    <span>전체 층별 안내</span>
                  </button>
                </li>
                <li>
                  <button ref={registerTrigger("content2")} type="button">
                    <span>20층</span>
                  </button>
                </li>
                <li>
                  <button ref={registerTrigger("content3")} type="button">
                    <span>19~10층</span>
                  </button>
                </li>
                <li>
                  <button ref={registerTrigger("content4")} type="button">
                    <span>9층</span>
                  </button>
                </li>
                <li>
                  <button ref={registerTrigger("content5")} type="button">
                    <span>8층</span>
                  </button>
                </li>
                <li>
                  <button ref={registerTrigger("content6")} type="button">
                    <span>7층</span>
                  </button>
                </li>
                <li>
                  <button ref={registerTrigger("content7")} type="button">
                    <span>6층</span>
                  </button>
                </li>
                <li>
                  <button ref={registerTrigger("content8")} type="button">
                    <span>5층</span>
                  </button>
                </li>
                <li>
                  <button ref={registerTrigger("content9")} type="button">
                    <span>4층</span>
                  </button>
                </li>
                <li>
                  <button ref={registerTrigger("content10")} type="button">
                    <span>3층</span>
                  </button>
                </li>
                <li>
                  <button ref={registerTrigger("content11")} type="button">
                    <span>2층</span>
                  </button>
                </li>
                <li>
                  <button ref={registerTrigger("content12")} type="button">
                    <span>1층</span>
                  </button>
                </li>
              </ul>
            </ContentNav>

            <ContentSection>
              <ContentArticle ref={registerSection("content1")}>
                <Title1H3 className="firstTitle">전체 층별 안내</Title1H3>
                <Indent1>
                  <img src={floormap} alt="전체 층별 안내" />
                </Indent1>
              </ContentArticle>

              <ContentArticle ref={registerSection("content2")}>
                <Title1H3>20층</Title1H3>
                <Indent1>
                  <ListStyleUl>
                    <li>200병동, 세브란스 VIP 건강증진센터</li>
                  </ListStyleUl>
                  <img src={sev20} alt="20층" />
                </Indent1>
              </ContentArticle>

              <ContentArticle ref={registerSection("content3")}>
                <Title1H3>19~10층</Title1H3>
                <Indent1>
                  <TabMenuNav>
                    <ul>{tabMenu()}</ul>
                  </TabMenuNav>

                  {/* 탭메뉴 콘텐츠 JSON을 통해 태그 생성 */}
                  {Object.entries(textArr).map((floor, i) => {
                    return (
                      <TabContent key={i} ref={registerSection("content3")} className={19 - selectTab === i ? "active" : ""}>
                        <ListStyleUl>
                          <li>{floor[0]}</li>
                        </ListStyleUl>
                        <img src={floor[1]} alt={`${19 - i}층`} />
                      </TabContent>
                    );
                  })}

                  {/* 탭메뉴 콘텐츠 JSON에 없는 나머지 콘텐츠 */}
                  <TabContent ref={registerSection("content3")} className={selectTab === 11 ? "active" : ""}>
                    <ListStyleUl>
                      <li>
                        111병동, 112병동, <span>수면다원검사실, 뇌전증검사실, 뇌졸중집중치료실</span>
                      </li>
                    </ListStyleUl>
                    <img src={sev11} alt="11층" />
                  </TabContent>
                  <TabContent ref={registerSection("content3")} className={selectTab === 10 ? "active" : ""}>
                    <ListStyleUl>
                      <li>101병동, 102병동</li>
                    </ListStyleUl>
                    <img src={sev10} alt="10층" />
                  </TabContent>
                </Indent1>
              </ContentArticle>

              <ContentArticle ref={registerSection("content4")}>
                <Title1H3>9층</Title1H3>
                <Indent1>
                  <ListStyleUl>
                    <li>191병동, 192병동</li>
                  </ListStyleUl>
                  <img src={sev09} alt="9층" />
                </Indent1>
              </ContentArticle>

              <ContentArticle ref={registerSection("content5")}>
                <Title1H3>8층</Title1H3>
                <Indent1>
                  <ListStyleUl>
                    <li>191병동, 192병동</li>
                  </ListStyleUl>
                  <img src={sev08} alt="8층" />
                </Indent1>
              </ContentArticle>

              <ContentArticle ref={registerSection("content6")}>
                <Title1H3>7층</Title1H3>
                <Indent1>
                  <ListStyleUl>
                    <li>191병동, 192병동</li>
                  </ListStyleUl>
                  <img src={sev07} alt="7층" />
                </Indent1>
              </ContentArticle>

              <ContentArticle ref={registerSection("content7")}>
                <Title1H3>6층</Title1H3>
                <Indent1>
                  <ListStyleUl>
                    <li>191병동, 192병동</li>
                  </ListStyleUl>
                  <img src={sev06} alt="6층" />
                </Indent1>
              </ContentArticle>

              <ContentArticle ref={registerSection("content8")}>
                <Title1H3>5층</Title1H3>
                <Indent1>
                  <ListStyleUl>
                    <li>191병동, 192병동</li>
                  </ListStyleUl>
                  <img src={sev05} alt="5층" />
                </Indent1>
              </ContentArticle>

              <ContentArticle ref={registerSection("content9")}>
                <Title1H3>4층</Title1H3>
                <Indent1>
                  <ListStyleUl>
                    <li>191병동, 192병동</li>
                  </ListStyleUl>
                  <img src={sev04} alt="4층" />
                </Indent1>
              </ContentArticle>

              <ContentArticle ref={registerSection("content10")}>
                <Title1H3>3층</Title1H3>
                <Indent1>
                  <ListStyleUl>
                    <li>191병동, 192병동</li>
                  </ListStyleUl>
                  <img src={sev03} alt="3층" />
                </Indent1>
              </ContentArticle>

              <ContentArticle ref={registerSection("content11")}>
                <Title1H3>2층</Title1H3>
                <Indent1>
                  <ListStyleUl>
                    <li>191병동, 192병동</li>
                  </ListStyleUl>
                  <img src={sev02} alt="2층" />
                </Indent1>
              </ContentArticle>

              <ContentArticle ref={registerSection("content12")}>
                <Title1H3>1층</Title1H3>
                <Indent1>
                  <ListStyleUl>
                    <li>191병동, 192병동</li>
                  </ListStyleUl>
                  <img src={sev01} alt="1층" />
                </Indent1>
              </ContentArticle>
            </ContentSection>
          </FloorSection>
        </div>
      </div>
    </>
  );
});

export default Facility;
