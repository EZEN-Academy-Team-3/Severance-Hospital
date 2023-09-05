/**
 * @ File Name: Doctor.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-18 15:02:00
 * @ Description: 협진병, 의원 현황 페이지
 */

/** import */
import React, { memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import dayjs from "dayjs";

// helper, hooks
import { useQueryString } from "../../hooks/useQueryString";

/** Redux */
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../slices/CDoctorSlice";

/** components */
import Spinner from "../../components/Spinner";
import PaginationCustom from "../Manager/common/PaginationCustom";

/** 이미지 */
// 공지사항 박스 아이콘
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";
// 지도 전체
import Region from "../../assets/img/img-region.png";
import Blank from "../../assets/img/blank.png";
// 검색 아이콘
import Search from "../../assets/img/ico-search-white.png";

/** 리스트 스타일 */
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

/** 지도, 리스트 박스 스타일 */
const PartnerHospitalBoxSection = styled.section`
  width: 100%;
  height: 640px;
  border: 1px solid #e6e6e6;
  display: flex;
`;
// 지도
const MapArticle = styled.article`
  width: 50%;
  height: 640px;
  background-color: #f9f9f9;
  position: relative;

  p {
    font-size: 16px;
    padding: 21px 30px 10px;
    margin: 4px 0;
  }

  img {
    width: 365px;
    height: 553px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -192.5px;
    margin-top: -254px;
  }

  map {
    area {
      cursor: pointer;
    }
  }

  &::before {
    content: "";
    width: 365px;
    height: 553px;
    display: block;

    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -182.5px;
    margin-top: -254px;

    background: url(${Region}) no-repeat;
    /* props로 useState 상태값을 가져와 position을 적용한다. */
    background-position: 0 ${(props) => props.position}px;
  }
`;
// 리스트
const MapListArticle = styled.article`
  width: 50%;
  height: 640px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    width: 440px;
    height: 504px;
    margin: 4px 0;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      width: 39%; // 170px
      height: 26px;
      margin: 15px 0 !important;
      padding-left: 12px;

      &:hover a {
        color: #0094fb;
        font-weight: bold;
      }

      a {
        &.active {
          color: #0094fb;
          font-weight: bold;
        }
      }

      &:nth-child(${(props) => props.num}) a {
        color: #0094fb;
        font-weight: bold;
      }
    }
  }

  p {
    position: absolute;
    bottom: 24px;
    right: 30px;
    margin: 4px 0;
  }
`;

/** 검색 스타일 */
const SearchForm = styled.form`
  width: 100%;
  margin-top: 20px;
  display: flex;

  input {
    width: 100%;
    height: 45px;

    border: 1px solid #dadada;
    padding: 8px 15px;
    box-sizing: border-box;

    font-size: 16px;
    line-height: 27px;

    &:focus {
      border: none;
      outline: 1px solid #0094fb;
    }
  }

  button {
    width: 60px;
    height: 45px;

    font-size: 16px;
    margin-left: 10px;

    color: #fff;
    background-color: #0094fb;

    border: 1px solid transparent;
    border-radius: 3px;

    display: flex;
    justify-content: center;
    align-items: center;

    i {
      width: 22px;
      height: 26px;
      background: url(${Search}) no-repeat;
    }
  }
`;

/** 검색 결과 블록 스타일 */
const PartnerListBoxSection = styled.section`
  margin-top: 30px;

  ul {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px 2.3437%;

    li {
      width: 31.7708%;

      border: 1px solid #c2c2c2;
      border-radius: 8px;
      box-sizing: border-box;

      &:hover {
        border-color: #0094fb;
      }

      &:hover a {
        font-weight: bold;
        color: #0094fb;
      }
    }

    a {
      width: 100%;
      height: 60px;
      display: block;

      padding: 16px 20px;
      box-sizing: border-box;

      text-align: center;
      color: #333;
    }
  }
`;

/** 페이지 블록 스타일 */
const PaginationNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Doctor = memo(() => {
  /** 페이지 강제 이동을 처리하기 위한 navigate함수 생성 */
  const navigate = useNavigate();

  // background 이미지의 위치 변경을 위한 상태값
  const [bgPosition, setBgPosition] = useState(-9168);
  // active
  const [activeList, setActiveList] = useState(1);
  // 지역 상태값
  const [aeraStatus, setAeraStatus] = useState("");

  /** QueryString 값 가져오기 */
  const { query, page = 1 } = useQueryString();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { areaCount, pagenation, data, loading, error } = useSelector((state) => state.CDoctorSlice);

  /** 최초마운트시 리덕스를 통해 목록을 조회한다. */
  useEffect(() => {
    dispatch(getList({ query: query, areaQuery: aeraStatus, page: page, rows: 12 }));
  }, [query, page, aeraStatus]);

  /** 검색 */
  const onSearchSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // 검색어
      const search = e.currentTarget.search.value;

      // 검색어에 따라 URL을 구성한다.
      let redirectUrl = search ? `/cooperation/doctor.do?query=${search}&page=1` : "/cooperation/doctor.do";
      navigate(redirectUrl);
    },
    [navigate]
  );

  /** 각 지역 총 개수 표시 */
  const displayAreaCount = useCallback((e) => {
    const result = !areaCount
      ? false
      : e === "전국"
      ? areaCount.reduce((acc, cur) => {
          return (acc += cur.areaCount);
        }, 0)
      : areaCount.find((v) => v.area === e)?.areaCount;
    return result ? `(${result})` : "(0)";
  });

  return (
    <>
      {/* 로딩 */}
      <Spinner loading={loading} />

      {/* 페이지 타이틀 */}
      <h1 className="pageTitle">협진병, 의원 현황</h1>
      <section className="boxGuide">
        <img src={boxGuideDecor} alt="boxGuideDecor" />
        <ListStyleUl>
          <li>전국 세브란스병원 협진병, 의원 회원 현황입니다.</li>
        </ListStyleUl>
      </section>

      {/* 협력 의사 */}
      <PartnerHospitalBoxSection>
        {/* props에 useState 상태값을 적용한다. */}
        <MapArticle position={bgPosition}>
          <p>※지역 선택 시 병원 리스트를 보실 수 있습니다.</p>
          {/* useMap과 <map>태그의 name속성은 같아야 한다. */}
          <img src={Blank} alt="전국 병원리스트 보기" useMap="#image-map1" />

          <map name="image-map1" onClick={() => navigate("/cooperation/doctor.do?page=1")}>
            {/* @todo: onFocus="this.blur();" 속성 관련 찾기 */}
            {/* 이미지 영역 */}
            <area shape="poly" alt="전국 병원리스트 보기" nohref="true" />

            <area
              shape="poly"
              alt="강원도 병원리스트 보기"
              nohref="true" // 링크가 없을 때, 적용한다.
              coords="145,26,136,33,139,40,143,46,149,50,156,55,165,58,168,68,173,71,180,81,173,83,170,95,170,102,176,112,189,118,194,123,188,128,188,136,188,153,186,164,198,169,208,160,214,162,222,163,239,162,234,171,246,175,256,181,267,184,282,186,292,186,306,185,318,187,328,182,334,181,335,170,328,154,311,128,310,119,290,86,280,75,278,67,273,50,267,36,260,19,257,5,248,7,240,26,229,32,216,34,201,33,191,31,169,29,144,27,141,29,142,26,141,29,132,30,133,35" // 이미지의 좌표값
              onClick={() => {
                setBgPosition(0);
                setActiveList(2);
                setAeraStatus("강원도");
              }} // 이미지 클릭 시, 해당 이미지의 포지션 값과, 맵리스트의 active props 셋팅
            />

            <area
              shape="poly"
              alt="경기도 병원리스트 보기"
              nohref="true"
              coords="105,185,95,176,90,163,78,151,77,140,90,143,91,130,94,125,97,117,113,124,124,125,132,120,127,105,124,98,115,99,104,105,93,103,86,96,91,87,94,76,92,69,93,61,103,61,107,56,112,50,102,36,118,33,126,35,136,34,140,43,146,46,154,53,162,58,169,71,174,77,170,84,170,97,172,111,188,118,186,127,184,133,185,153,185,159,160,169,155,175,148,178,140,187,126,184"
              onClick={() => {
                setBgPosition(-573);
                setActiveList(3);
                setAeraStatus("경기도");
              }}
            />

            <area
              shape="poly"
              alt="경상남도 병원리스트 보기"
              nohref="true"
              coords="185,309,177,316,167,318,160,329,160,337,160,348,161,357,158,367,157,375,158,387,164,396,170,408,164,414,163,421,179,419,190,409,196,418,198,427,217,430,223,442,229,437,230,420,234,406,248,411,254,404,264,407,270,397,292,384,304,374,287,362,287,349,276,349,259,350,248,351,241,339,230,346,210,343,210,331,204,322,199,316"
              onClick={() => {
                setBgPosition(-1146);
                setActiveList(4);
                setAeraStatus("경상남도");
              }}
            />

            <area
              shape="poly"
              alt="경상북도 병원리스트 보기"
              nohref="true"
              coords="333,178,322,184,312,184,299,186,286,189,279,180,274,186,266,182,259,185,257,190,250,192,246,199,247,206,238,209,231,202,224,204,218,204,212,207,210,217,203,214,194,222,196,230,188,224,186,232,190,240,191,248,188,255,186,261,189,265,198,267,205,274,198,277,194,286,188,293,186,299,186,307,202,318,210,323,214,331,212,338,225,339,229,331,232,323,231,311,244,310,254,302,263,300,268,304,268,311,268,317,263,322,261,330,258,336,249,334,243,338,250,347,257,347,267,350,280,345,292,346,300,338,311,340,317,345,328,343,336,328,342,316,341,303,332,310,326,303,328,295,324,285,325,271,335,259,334,243,337,233,343,223,335,210,336,202,339,195,336,184"
              onClick={() => {
                setBgPosition(-1719);
                setActiveList(5);
                setAeraStatus("경상북도");
              }}
            />

            <area
              shape="poly"
              alt="광주광역시 병원리스트 보기"
              nohref="true"
              coords="74,378,67,373,63,380,62,385,67,391,74,396,82,396,89,396,95,390,92,382,85,375,79,376"
              onClick={() => {
                setBgPosition(-2292);
                setActiveList(6);
                setAeraStatus("광주광역시");
              }}
            />

            <area
              shape="poly"
              alt="대구광역시 병원리스트 보기"
              nohref="true"
              coords="263,303,253,303,247,308,244,313,238,310,232,317,235,322,229,328,229,335,230,341,240,337,246,333,252,333,258,334,262,324,268,315"
              onClick={() => {
                setBgPosition(-2865);
                setActiveList(7);
                setAeraStatus("대구광역시");
              }}
            />

            <area
              shape="poly"
              alt="대전광역시 병원리스트 보기"
              nohref="true"
              coords="141,239,137,244,131,250,129,259,133,266,139,263,142,268,152,266,154,258,155,251,152,243,144,244"
              onClick={() => {
                setBgPosition(-3438);
                setActiveList(8);
                setAeraStatus("대전광역시");
              }}
            />

            <area
              shape="poly"
              alt="부산광역시 병원리스트 보기"
              nohref="true"
              coords="316,383,310,375,302,377,289,386,278,393,270,395,267,407,263,412,279,413,285,416,296,412,304,407,311,391"
              onClick={() => {
                setBgPosition(-4011);
                setActiveList(9);
                setAeraStatus("부산광역시");
              }}
            />

            <area
              shape="poly"
              alt="서울특별시 병원리스트 보기"
              nohref="true"
              coords="119,100,112,104,104,107,95,109,99,116,106,120,116,124,124,125,132,121,129,108,125,100"
              onClick={() => {
                setBgPosition(-4584);
                setActiveList(10);
                setAeraStatus("서울특별시");
              }}
            />

            <area
              shape="poly"
              alt="울산광역시 병원리스트 보기"
              nohref="true"
              coords="333,350,326,345,315,347,311,340,302,339,293,346,287,357,294,365,300,370,305,374,311,375,315,380,320,372,331,369"
              onClick={() => {
                setBgPosition(-5157);
                setActiveList(11);
                setAeraStatus("울산광역시");
              }}
            />

            <area
              shape="poly"
              alt="인천광역시 병원리스트 보기"
              nohref="true"
              coords="88,132,83,123,84,112,83,103,89,100,99,105,99,112,98,121,96,129,78,125,67,128,62,121,66,110,60,104,49,103,50,95,53,87,52,78,59,75,64,79,71,75,79,84,90,87,79,98,77,109"
              onClick={() => {
                setBgPosition(-5730);
                setActiveList(12);
                setAeraStatus("인천광역시");
              }}
            />

            <area
              shape="poly"
              alt="전라남도 병원리스트 보기"
              nohref="true"
              coords="90,361,84,351,73,351,70,357,64,364,59,366,52,365,49,358,46,350,41,356,36,366,30,373,35,384,42,391,37,402,28,396,26,410,34,413,32,419,30,427,34,432,21,433,20,441,25,456,35,458,40,469,39,481,51,476,57,470,65,462,69,454,67,468,78,471,90,457,99,449,113,441,119,444,109,452,102,458,102,465,114,470,126,466,133,458,132,444,131,434,138,433,145,441,143,455,152,450,156,445,165,438,163,426,158,418,164,406,159,396,158,391,151,384,151,375,143,369,136,368,124,372,108,369,99,369,93,376,96,387,90,395,77,396,68,393,62,385,66,373,75,376,86,375,92,369,102,363,100,353"
              onClick={() => {
                setBgPosition(-6303);
                setActiveList(13);
                setAeraStatus("전라남도");
              }}
            />

            <area
              shape="poly"
              alt="전라북도 병원리스트 보기"
              nohref="true"
              coords="178,296,186,305,177,315,165,319,158,336,156,347,159,362,154,365,151,372,137,368,125,370,112,368,99,369,103,361,100,351,91,358,86,350,75,350,69,357,63,362,55,365,47,348,57,341,50,336,50,330,56,323,66,316,74,309,65,305,60,297,61,288,75,288,86,286,98,275,104,275,113,283,121,282,131,280,138,280,140,289,145,296,154,293,161,291,173,291,177,293"
              onClick={() => {
                setBgPosition(-6876);
                setActiveList(14);
                setAeraStatus("전라북도");
              }}
            />

            <area
              shape="poly"
              alt="제주도 병원리스트 보기"
              nohref="true"
              coords="115,499,89,506,73,507,60,519,56,537,71,540,94,539,116,536,126,526,129,509"
              onClick={() => {
                setBgPosition(-7449);
                setActiveList(15);
                setAeraStatus("제주도");
              }}
            />

            <area
              shape="poly"
              alt="충청남도 병원리스트 보기"
              nohref="true"
              coords="92,180,70,168,58,171,56,186,47,180,38,183,29,197,42,215,58,218,63,227,63,255,58,272,65,280,73,289,85,285,98,276,112,281,133,279,143,296,158,291,157,272,140,269,125,258,143,239,137,213,149,211,139,190,127,186,104,189"
              onClick={() => {
                setBgPosition(-8022);
                setActiveList(16);
                setAeraStatus("충청남도");
              }}
            />

            <area
              shape="poly"
              alt="충청북도 병원리스트 보기"
              nohref="true"
              coords="200,168,182,159,169,165,159,175,152,178,142,187,149,208,142,215,144,235,152,244,156,265,161,279,169,289,186,289,198,277,202,271,193,267,184,255,190,242,184,233,189,221,201,213,213,205,228,200,235,206,245,206,245,195,253,188,257,180,233,172,236,165,210,160"
              onClick={() => {
                setBgPosition(-8595);
                setActiveList(17);
                setAeraStatus("충청북도");
              }}
            />
          </map>
        </MapArticle>

        <MapListArticle>
          <ListStyleUl num={activeList} onClick={() => navigate("/cooperation/doctor.do?page=1")}>
            <li>
              <a
                href="#!"
                className={activeList === 1 ? "active" : ""}
                onClick={(e) => {
                  setActiveList(1);
                  setBgPosition(-9168);
                  setAeraStatus("");
                  e.preventDefault();
                }}
              >
                <span>전국</span>
                <span>{displayAreaCount("전국")}</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeList === 2 ? "active" : ""}
                onClick={(e) => {
                  setActiveList(2);
                  setBgPosition(0);
                  setAeraStatus("강원도");
                  e.preventDefault();
                }}
              >
                <span>강원도</span>
                <span>{displayAreaCount("강원도")}</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeList === 3 ? "active" : ""}
                onClick={(e) => {
                  setActiveList(3);
                  setBgPosition(-573);
                  setAeraStatus("경기도");
                  e.preventDefault();
                }}
              >
                <span>경기도</span>
                <span>{displayAreaCount("경기도")}</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeList === 4 ? "active" : ""}
                onClick={(e) => {
                  setActiveList(4);
                  setBgPosition(-1146);
                  setAeraStatus("경상남도");
                  e.preventDefault();
                }}
              >
                <span>경상남도</span>
                <span>{displayAreaCount("경상남도")}</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeList === 5 ? "active" : ""}
                onClick={(e) => {
                  setActiveList(5);
                  setBgPosition(-1719);
                  setAeraStatus("경상북도");
                  e.preventDefault();
                }}
              >
                <span>경상북도</span>
                <span>{displayAreaCount("경상북도")}</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeList === 6 ? "active" : ""}
                onClick={(e) => {
                  setActiveList(6);
                  setBgPosition(-2292);
                  setAeraStatus("광주광역시");
                  e.preventDefault();
                }}
              >
                <span>광주광역시</span>
                <span>{displayAreaCount("광주광역시")}</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeList === 7 ? "active" : ""}
                onClick={(e) => {
                  setActiveList(7);
                  setBgPosition(-2865);
                  setAeraStatus("대구광역시");
                  e.preventDefault();
                }}
              >
                <span>대구광역시</span>
                <span>{displayAreaCount("대구광역시")}</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeList === 8 ? "active" : ""}
                onClick={(e) => {
                  setActiveList(8);
                  setBgPosition(-3438);
                  setAeraStatus("대전광역시");
                  e.preventDefault();
                }}
              >
                <span>대전광역시</span>
                <span>{displayAreaCount("대전광역시")}</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeList === 9 ? "active" : ""}
                onClick={(e) => {
                  setActiveList(9);
                  setBgPosition(-4011);
                  setAeraStatus("부산광역시");
                  e.preventDefault();
                }}
              >
                <span>부산광역시</span>
                <span>{displayAreaCount("부산광역시")}</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeList === 10 ? "active" : ""}
                onClick={(e) => {
                  setActiveList(10);
                  setBgPosition(-4584);
                  setAeraStatus("서울특별시");
                  e.preventDefault();
                }}
              >
                <span>서울특별시</span>
                <span>{displayAreaCount("서울특별시")}</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeList === 11 ? "active" : ""}
                onClick={(e) => {
                  setActiveList(11);
                  setBgPosition(-5157);
                  setAeraStatus("울산광역시");
                  e.preventDefault();
                }}
              >
                <span>울산광역시</span>
                <span>{displayAreaCount("울산광역시")}</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeList === 12 ? "active" : ""}
                onClick={(e) => {
                  setActiveList(12);
                  setBgPosition(-5730);
                  setAeraStatus("인천광역시");
                  e.preventDefault();
                }}
              >
                <span>인천광역시</span>
                <span>{displayAreaCount("인천광역시")}</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeList === 13 ? "active" : ""}
                onClick={(e) => {
                  setActiveList(13);
                  setBgPosition(-6303);
                  setAeraStatus("전라남도");
                  e.preventDefault();
                }}
              >
                <span>전라남도</span>
                <span>{displayAreaCount("전라남도")}</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeList === 14 ? "active" : ""}
                onClick={(e) => {
                  setActiveList(14);
                  setBgPosition(-6876);
                  setAeraStatus("전라북도");
                  e.preventDefault();
                }}
              >
                <span>전라북도</span>
                <span>{displayAreaCount("전라북도")}</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeList === 15 ? "active" : ""}
                onClick={(e) => {
                  setActiveList(15);
                  setBgPosition(-7449);
                  setAeraStatus("제주도");
                  e.preventDefault();
                }}
              >
                <span>제주도</span>
                <span>{displayAreaCount("제주도")}</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeList === 16 ? "active" : ""}
                onClick={(e) => {
                  setActiveList(16);
                  setBgPosition(-8022);
                  setAeraStatus("충남/세종시");
                  e.preventDefault();
                }}
              >
                <span>충남/세종시</span>
                <span>{displayAreaCount("충남/세종시")}</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={activeList === 17 ? "active" : ""}
                onClick={(e) => {
                  setActiveList(17);
                  setBgPosition(-8595);
                  setAeraStatus("충청북도");
                  e.preventDefault();
                }}
              >
                <span>충청북도</span>
                <span>{displayAreaCount("충청북도")}</span>
              </a>
            </li>
          </ListStyleUl>

          <p>
            기준 : {dayjs().format("YYYY-MM-DD")} {displayAreaCount("전국").replace("(", "(총 ")}
          </p>
        </MapListArticle>
      </PartnerHospitalBoxSection>

      {/* 검색 */}
      <SearchForm onSubmit={onSearchSubmit}>
        <input
          type="text"
          id="srchKwd"
          name="search"
          defaultValue={query}
          key={query}
          placeholder="협진병의원명 또는 지역을 입력해주세요."
          title="협진병의원명 또는 지역을 검색"
        ></input>
        <button type="submit">
          <i></i>
        </button>
      </SearchForm>

      {/* 검색 결과 리스트 */}
      <PartnerListBoxSection>
        <ul>
          {data && pagenation && !error
            ? data.map((v, i) => {
                return (
                  <li key={v.id}>
                    <Link to={`/cooperation/doctor-detail.do/${v.id}`}>
                      {v.name}
                      {v.doctorName}
                    </Link>
                  </li>
                );
              })
            : "조회된 데이터가 없습니다."}
        </ul>
      </PartnerListBoxSection>

      {/* Pagination */}
      {data && pagenation && !error && (
        <PaginationNav>
          <PaginationCustom page={page} pagenation={pagenation} pageQueryPath="/cooperation/doctor.do" query={query} />
        </PaginationNav>
      )}
    </>
  );
});

export default Doctor;
