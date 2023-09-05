/**
 * @ File Name: OutpatientInfo.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-21 21:00
 * @ Description: 외래이용안내 페이지
 */

import React, { memo } from "react";
import styled from "styled-components";
import TopButton from "../../components/TopButton";

// 이미지
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";
import ambulatoryInfo from "../../assets/img/img-outpatient.png";
import contRight from "../../assets/img/ico-pdf-down@2x.png";


const Container = styled.div`
  width: 1280px;
  margin: auto;
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
    margin-bottom: 30px;

    // 제목 앞에 파란색 띠
    &:before {
      position: absolute;
      left: 0;
      width: 6px;
      height: 20px;
      background-color: #0094fb;
      border-radius: 3px;
      top: 9px;
      margin-right: 12px;
      content: "";
    }
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

  // 세브란스병원 이용안내, 접수방법, 예약확인
  .sevrance_info,.reservation_check,.reception {
    margin-bottom: 60px;
    position: relative;
    ul {
      float: left;
      li {
        margin-top: 5px;
        margin-left: 20px;
        font-size: 16px;
        &:before {
          content: "";
          display: block;
          width: 4px;
          height: 4px;
          background-color: rgb(0, 148, 251);
          float: left;
          margin: 10px 5px 0 0;
        }
      }
    }
    span {
      color: rgb(0,148,251);
    }
    .cont_right {
      float: left;
      font-size: 18px;
      padding: 0 30px;
      position: absolute;
      right: 0;
      top: 0;
      .cont_right_img {
        width: 24px;
        height: 26px;
        margin-right: 10px;
      }
    }
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }

  // 외래진료절차
  .ambulatory_info_img {
    background-color: #f9f9f9;
    padding: 40px 80px;
    width: 1100px;
    margin-left: 20px;
    margin-bottom: 80px;
  }

  // 진료접수시간 테이블
  table {
    width: 1110px;
    margin-left: 20px;
    font-size: 16px;
    color: #333;
    letter-spacing: 0.02em;
    line-height: 1.625;
    text-align: center;
    margin-bottom: 80px;
    border-top: 1px solid #aaa;
    tr {
      border-bottom: 1px solid #e6e6e6;
      padding: 13px 20px;
      &:last-child {
        border-bottom: 1px solid #aaa;
      }
      th {
        background-color: #f9f9f9;
        padding: 15px 15px;
        font-weight: bold;
        vertical-align: middle;
        &:first-child {
          border-right: 1px solid #e6e6e6;
        }
      }
      td {
        padding: 13px 20px;
        &:first-child {
          border-right: 1px solid #e6e6e6;
        }
      }
    }
  }
`;
const OutpatientInfo = memo(() => {
  return (
    <Container>
      <TopButton />
      <div className="bgAll">
        <h1>외래이용안내</h1>
        <div className="boxGuide">
          <img src={boxGuideDecor} alt="boxGuideDecor" />
          <ul>
            <li>
              2007년 10월 1일(월)부터 외래진료는 진료예약을 원칙으로 하오니 진료
              예약(1599-1004, 평일 08:00~18:30, 토요일 08:00~13:00)을 하고
              내원하시기 바랍니다.
            </li>
            <li>
              예약없이 내원하시면 진료를 못 받으실 수 있으며, 진료가
              가능하더라도 대기시간이 상당히 길어질 수 있습니다.
            </li>
            <li>
              병원에 처음으로 내원하시는 분은 건강보험증과
              요양급여의뢰서(진료의뢰서)를 지참하셔야 합니다.
            </li>
          </ul>
        </div>

        <h3>세브란스병원 이용안내</h3>
        <div className="sevrance_info">
          <ul>
            <li>
              외래환자 및 입원환자에게 쉽고 편안한 병원 이용을 위하여
              "외래이용안내 책자"를 PDF 서비스로 제공하고 있습니다.
            </li>
            <li>"외래이용안내 책자 PDF 보기"를 클릭하시면 보실 수 있습니다.</li>
          </ul>
          <button className="cont_right buttonBlue">
            <img src={contRight} alt="contRight" className="cont_right_img" />
            외래이용안내 책자 PDF 보기
          </button>
        </div>

        <h3>외래진료절차</h3>
        <img
          src={ambulatoryInfo}
          alt="ambulatoryInfo"
          className="ambulatory_info_img"
        />

        <h3>진료접수시간</h3>
        <table>
          <thead>
            <tr>
              <th scope="col">날짜</th>
              <th scope="col">시간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>오전</td>
              <td>08:00 ~ 11:30</td>
            </tr>
            <tr>
              <td>오후</td>
              <td>13:30 ~ 15:30</td>
            </tr>
            <tr>
              <td>토요일</td>
              <td>
                토요일은 오전진료만 하며, 분만 및 응급환자는 응급진료센터에서
                24시간 접수 가능합니다.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>접수방법</h3>
        <div className="reception">
          <ul>
            <li>
            병원에 처음으로 내원하시는 분은 신분증과 요양급여의뢰서(진료의뢰서)를 지참하셔야 합니다.
            </li>
            <li>2007년 10월 1일(월)부터 외래진료는 진료예약을 원칙으로 하오니 진료 예약<span>(진료예약1599-1004, 평일 08:00~18:30, 토요일 08:00~13:00)</span>을 하고 내원하시기 바랍니다.</li>
            <li>예약 없이 내원하시면 진료를 못 받으실 수 있으며, 진료가 가능하더라도 대기시간이 상당히 길어질 수 있습니다.</li>
            <li>진료예약을 하신 분은 예약시간 전에 원무수납창구에서 진찰료를 수납하시고 해당 진료과에서 진료를 받으시면 됩니다.</li>
            <li>재진예약을 하신 분은 스마트진찰카드를 무인도착확인기에 대시어 내원확인후 무인도착확인기 화면의 안내에 따라 진료를 받으시면 됩니다.</li>
          </ul>
        </div>

        <h3>예약확인</h3>
        <div className="reservation_check">
          <ul>
            <li>
            예약증을 분실한 경우에도 해당날짜에 지장없이 진료 받을 수 있습니다.
            </li>
            <li>예약날짜 문의는 진료예약센터(1599-1004) 전화, 모바일 앱을 사용하시어 확인하시기 바랍니다.</li>
          </ul>
        </div>
      </div>
    </Container>
  );
});

export default OutpatientInfo;
