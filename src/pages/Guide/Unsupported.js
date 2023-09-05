/**
 * @ File Name: Unsupported.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2023-01-05 17:10
 * @ Description: 비급여진료비 페이지
 */


import React, { memo, useEffect, useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import RegexHelper from "../../helper/RegexHelper";
import Spinner from "../../components/Spinner";
import { Pagination } from '@mui/material';
import TopButton from "../../components/TopButton";
// 이미지
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";
import bgImg from "../../assets/img/bg-pattern.png";
import search from "../../assets/img/ico-search-white.png";
import dropdown from "../../assets/img/ico-chevron-down@2x.png";

// 슬라이스
import { getPayHos } from "../../slices/UnsupportedSlice";

import { useQueryString } from "../../hooks/useQueryString";

const Container = styled.div`
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  h3 {
    padding-left: 18px;
    /* font-family: "NanumSquare", "malgungothic", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; */
    font-size: 24px;
    line-height: 38px;
    position: relative;
    font-weight: bold;
    color: #222;
    margin-bottom: 10px;
  }

  // 안내사항 박스
  .boxGuide {
    max-width: 1280px;
    margin: 0 auto 60px;
    ul {
      li {
        margin-top: 5px;
        font-size: 16px;
        &:before {
          content: "";
          display: block;
          width: 4px;
          height: 4px;
          background-color: #aaa;
          float: left;
          margin: 10px 5px 0 0;
        }
      }
    }
  }

  // 배경사진
  .bg_all {
    background: url(${bgImg}) no-repeat center top;
    background-position-x: 50%;
    background-size: 1920px;
    width: 100% !important;
  }

  // 검색어 유효성검사 팝업창
  .no_keyword,.min_length {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    padding-top: 120px;
    box-sizing: border-box;
    z-index: 99999;
    .popup {
      background-color: #fff;
      width: 350px;
      height: 180px;
      margin: auto;
      transform: translate(0, 50%);
      text-align: center;
      padding-top: 35px;
      box-sizing: border-box;

      // 닫기버튼
      button {
        margin-top: 25px;
        background-color: rgb(0, 148, 251);
        border: none;
        color: white;
        padding: 10px 25px;
        font-size: 15px;
        font-weight: 100;
        border-radius: 3px;
      }
    }
  }
  
  // 검색어입력
  .search_box {
    width: 1280px;
    margin: auto;
    background-color: #f9f9f9;
    padding: 15px 200px 15px;
    box-sizing: border-box;
    &:before {
      content: "";
      display: block;
      clear: both;
    }
    // 검색어 입력란
    .keyword {
      width: 700px;
      height: 46px;
      float: left;
      padding: 0;
      padding-left: 10px;
      margin-right: 10px;
      margin-left: 50px;
      border: 1px solid #e6e6e6;
      &:focus {
        outline: 1px solid rgb(0, 148, 251);
      }
    }
    // 검색버튼
    .searchBtn {
      height: 48px;
      width: 60px;
      border-radius: 2px;
      background-color: #0094fb;
      border: 2px solid #0094fb;
      color: #fff;
      cursor: pointer;
      img {
        margin: auto;
      }
    }
  }

  // 목록수조절
  .list_select {
    width: 1280px;
    margin: auto;
    .label {
      float: left;
      margin: 40px 5px 0 0;
    }
    .list_num {
      float: left;
      width: 100px;
      height: 48px;
      padding-right: 30px;
      padding-left: 20px;
      margin-top: 30px;
      margin-bottom: 10px;
      font-size: 16px;
      background: #fff url(${dropdown}) no-repeat right 12px center;
      background-size: 17px auto;
      border: 1px solid #e6e6e6;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      float: left;
      &:focus {
        outline: 1px solid rgb(0, 148, 251);
      }
    }

    // 수가기준일
    p {
      float: right;
      margin-top: 40px;
    }
  }

  // 테이블
  .table_box {
    width: 1280px;
    margin: auto;
    line-height: 1.625;
    font-size: 16px;
    table {
      width: 100%;
      text-align: center;
      border-top: 1px solid #333;
      border-bottom: 1px solid #333;
      thead {
        tr {
          th {
            background-color: #f9f9f9;
            vertical-align: middle;
            text-align: center;
            border-right: 1px solid #ebebeb;
            border-bottom: 1px solid #ebebeb;
            font-weight: bold;
            vertical-align: middle;
            padding: 13px 15px;
            box-sizing: border-box;
            &:last-child {
              border-right: 0;
            }
          }
          .colspan {
            height: 50px;
            padding: 13px 15px;
            box-sizing: border-box;
          }
          .rowspan {
            height: 160px;
            width: 82px;
            padding: 13px 15px;
            box-sizing: border-box;
          }
        }
        .under {
          width: 950px;
          th {
            height: 160px;
            padding: 13px 15px;
            box-sizing: border-box;
          }
        }
      }
      tbody {
        td {
            border-right: 1px solid #ebebeb;
            border-bottom: 1px solid #ebebeb;
            height: 50px;
            padding: 13px 15px;
            box-sizing: border-box;
            vertical-align: middle;

            &:last-child {
              border-right: 0;
            }
          }
      }
    }
  }

  // 페이지네이션
  .paging {
    width: 500px;
    margin: 30px auto;
  }
`;

const Unsupported = memo(() => {
  // hook을 통해 slice가 관리하는 상태값 가져오기
  const { data, loading, error } = useSelector(
    (state) => state.UnsupportedSlice
  );

  // dispatch함수 생성
  const dispatch = useDispatch();

  // 페이지 강제 이동을 처리하기 위한 navigate함수 생성
  const navigate = useNavigate();

  const [page,setPage] = React.useState(1);

  const handleChange = (e,value) => {
    e.preventDefault();
    setPage(value);
  };
  console.log(page);

  /** QueryString 변수 받기 */
  const { keyword } = useQueryString();

  // 목록수 변수 지정
  const [selected, setSelected] = useState("20");
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };


  useEffect(() => {
    dispatch(getPayHos({
      keyword: keyword,
      pageNo: page,
      numOfRows: selected
    }));
  }, [keyword,page,selected]);


  const clickSearch = useCallback((e) => {
    e.preventDefault();

    const current = e.currentTarget;
    const keyword = current.keyword;

    //입력값에 대한 유효성 검사
    const regex = RegexHelper.getInstance();
    try {
      regex.value(document.querySelector(".keyword"));
    } catch (e) {
      document.querySelector(".no_keyword").style.display = "block";
      return;
    }
    try {
      regex.minLength(document.querySelector(".keyword"), 2);
    } catch (e) {
      document.querySelector(".min_length").style.display = "block";
      return;
    }

    navigate(`/guide/unsupported?keyword=${keyword.value}`);

  }, [navigate]);

  const closeBox = (e) => {
    document.querySelector(".no_keyword").style.display = "none";
    document.querySelector(".min_length").style.display = "none";
  };



  return (
    <Container>
      <TopButton />
      <div className="bg_all">
        <h1>비급여진료비</h1>
        <div className="boxGuide">
          <img src={boxGuideDecor} alt="boxGuideDecor" />
          <ul>
            <li>
              관련근거 : 의료법 제45조 제1항 및 제2항과 동법 시행규칙 제 42조의
              제1항, 제2항 및 제3항에 의하여 비급여 진료비용을 고지하기 위한
              조회 화면입니다.
            </li>
            <li>
              행위료는 단일 개별 항목의 비용으로 시행횟수 및 범위에 따라 달라질
              수 있으며, 치료재료 및 약제가 필요한 경우 별도 산정됩니다.
            </li>
          </ul>
        </div>
        <Spinner loading={loading} />
        <>
          <div className="no_keyword">
            <div className="popup">
              <p>검색어를 입력해주세요.</p>
              <button type="button" className="close" onClick={closeBox}>
                닫기
              </button>
            </div>
          </div>
          <div className="min_length">
            <div className="popup">
              <p>
                항목명칭 또는 구분을 2글자 이상 입력해
                <br />
                주세요.
              </p>
              <button type="button" className="close" onClick={closeBox}>
                닫기
              </button>
            </div>
          </div>
          {/* 검색어 입력창 */}
          <form className="search_box"
                    onSubmit={clickSearch}>
            <fieldset>
              <div className="keyword_input">
                <input
                  type="text"
                  name="keyword"
                  className="keyword"
                  id="srchKwd"
                  placeholder="항목명칭 또는 구분을 입력해주세요"
                  title="항목명칭 또는 구분 입력 검색"
                />
                <span className="search_btn">
                  <button
                    type="submit"
                    className="searchBtn"
                  >
                    <img src={search} alt="search" />
                  </button>
                </span>
              </div>
            </fieldset>
          </form>

          {/* 목록수조절 */}
          <div className="list_select">
            <label htmlFor="pagePerNum" className="label">
              목록수조절
            </label>
            <select name="pagePerNum" id="pagePerNum" className="list_num" onClick={handleSelect}>
              <option value="20">
                20개
              </option>
              <option value="50">50개</option>
              <option value="100">100개</option>
            </select>
            <p>※ 수가 기준일 : 2022.12.19</p>
          </div>

          {error ? (
            <p>에러발생함</p>
          ) : (
            <>
              <div className="table_box">
                <table>
                  <thead>
                    <tr>
                      <th colSpan="2" className="colspan">
                        진료비용항목
                      </th>
                      <th colSpan="6" className="colspan">
                        항목별 가격정보(단위:원)
                      </th>
                      <th rowSpan="2" className="rowspan">
                        최종
                        <br />
                        변경일
                      </th>
                      <th rowSpan="2" className="rowspan">
                        특이사항
                      </th>
                    </tr>
                    <tr className="under">
                      <th>코드</th>
                      <th>명칭</th>
                      <th>구분</th>
                      <th>비용</th>
                      <th>최저비용</th>
                      <th>최고비용</th>
                      <th>
                        치료재료대
                        <br />
                        포함여부
                      </th>
                      <th>
                        약제비
                        <br />
                        포함여부
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.response.body.items.item.map((v, i) => {
                        return (
                          <tr key={i}>
                            <td>{v.npayCd}</td>
                            <td>{v.npayKorNm}</td>
                            <td></td>
                            <td>{Number(v.middAvgAll).toLocaleString()}원</td>
                            <td>0</td>
                            <td>0</td>
                            <td>X</td>
                            <td>X</td>
                            <td>2022-01-01</td>
                            <td></td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <Pagination
                count={data && parseInt(data.response.body.totalCount / data.response.body.numOfRows) + 1}
                showFirstButton
                showLastButton
                className="paging"
                page={page}
                onChange={handleChange}
              />
            </>
          )}
        </>
      </div>
    </Container>
  );
});

export default Unsupported;
