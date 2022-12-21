/**
 * @ File Name: Tab03.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-21 16:45
 * @ Description: 비급여진료비-약제 페이지
 */

import React, { memo } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
// 이미지
import search from "../../assets/img/ico-search-white.png";
import dropdown from "../../assets/img/ico-chevron-down@2x.png";

const Container = styled.div`
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
    // 셀렉트 박스
    select {
      width: 150px;
      height: 48px;
      padding-right: 30px;
      padding-left: 10px;
      margin-right: 10px;
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
    // 검색어 입력란
    .keyword {
      width: 620px;
      height: 46px;
      float: left;
      padding: 0;
      padding-left: 10px;
      margin-right: 10px;
      border: 1px solid #e6e6e6;
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
    clear: both;
    table {
      width: 1280px;
      margin: auto;
      thead {
        tr {
          th {
            background-color: #f9f9f9;
            vertical-align: middle;
            text-align: center;
            border-right: 1px solid #fff;
            border-bottom: 1px solid #fff;
            font-weight: bold;
          }
        }
      }
    }
  }
`;


const Unsupported = memo(() => {
  const today = dayjs(new Date());
  const today1 = today.format("YYYY. MM. DD");

  return (
    <Container>
      <div className="bgAll">
        

        {/* 검색어 입력창 */}
        <div className="search_box">
          <div className="dropdown">
            <select
              className="category"
              title="검색 카테고리"
              data-id="상세항목 전체보기"
            >
              <option data-id="전체" data-code="">
                전체
              </option>
              <option data-id="제1장 기본진료료" data-code="NF020100">
                제1장 기본진료료
              </option>
              <option data-id="제2장 검사료" data-code="NF020200">
                제2장 검사료
              </option>
              <option
                data-id="제3장 영상진단 및 방사선 치료료"
                data-code="NF020300"
              >
                제3장 영상진단 및 방사선 치료료
              </option>
              <option data-id="제6장 마취료" data-code="NF020600">
                제6장 마취료
              </option>
              <option
                data-id="제7장 이학요법료(물리치료료)"
                data-code="NF020700"
              >
                제7장 이학요법료(물리치료료)
              </option>
              <option data-id="제8장 정신요법료" data-code="NF020800">
                제8장 정신요법료
              </option>
              <option data-id="제9장 처치 및 수술료 등" data-code="NF020900">
                제9장 처치 및 수술료 등
              </option>
              <option data-id="제10장 치과처치, 수술료" data-code="NF021000">
                제10장 치과처치, 수술료
              </option>
              <option data-id="제18장 치과의 보철료" data-code="NF021800">
                제18장 치과의 보철료
              </option>
              <option data-id="제20장 치과의 교정치료료" data-code="NF022000">
                제20장 치과의 교정치료료
              </option>
              <option data-id="기타" data-code="NF029900">
                기타
              </option>
            </select>
          </div>
          <div className="keyword_input">
            <input
              type="text"
              className="keyword"
              id="srchKwd"
              placeholder="항목명칭 또는 구분을 입력해주세요"
              title="항목명칭 또는 구분 입력 검색"
            />
            <span className="search_btn">
              <button type="button" className="searchBtn">
                <img src={search} alt="search" />
              </button>
            </span>
          </div>
        </div>

        {/* 목록수조절 */}
        <div className="list_select">
          <label htmlFor="pagePerNum" className="label">
            목록수조절
          </label>
          <select name="pagePerNum" id="pagePerNum" className="list_num">
            <option defaultValue="20" selected="">
              20개
            </option>
            <option defaultValue="50">50개</option>
            <option defaultValue="100">100개</option>
          </select>
          <p>{`※ 수가 기준일 : ${today1}`} </p>
        </div>

        {/* 테이블 */}
        <div className="table_box">
          <table>
            <thead>
              <tr>
                <th rowSpan="2">중분류</th>
                <th rowSpan="2">소분류</th>
                <th colSpan="2">진료비용항목</th>
                <th colSpan="6">항목별 가격정보(단위:원)</th>
                <th rowSpan="2">
                  최종
                  <br />
                  변경일
                </th>
                <th rowSpan="2">특이사항</th>
              </tr>
              <tr>
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
            <tbody className="bbs-data">
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
});

export default Unsupported;