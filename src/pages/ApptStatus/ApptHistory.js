/**
 * @ File Name: Result.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-19 16:30
 * @ Description: 결과조회 페이지
 */

import React, { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyPageHeader from "../../components/MyPageHeader";
import LoginFooter from "../../components/LoginFooter";
import styled from "styled-components";
import noResult from "../../assets/img/ico-nodata@2x.png";
import dropdown from "../../assets/img/ico-chevron-down@2x.png";

// 캘린더
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css"; // css import
import prev from "../../assets/img/ico-arrow-left-white@2x.png";
import next from "../../assets/img/ico-arrow-right-white@2x.png";

const Container = styled.div`
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  .title_box {
    width: 1280px;
    margin: 0 auto 40px;
    background-color: #f9f9f9;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    .title {
      .name {
        font-size: 24px;
        line-height: 38px;
        font-weight: bold;
        margin-right: 20px;
      }
      .text {
        font-size: 16px;
        color: #333;
        letter-spacing: 0.02em;
        line-height: 1.625;
      }
    }
    // 병원번호 드롭다운
    .dropdown {
      .hosp_no_list {
        font-size: 16px;
        color: #333;
        letter-spacing: 0.02em;
        line-height: 1.625;
        width: 260px;
        padding: 8px 20px;
        border: 1px solid #ccc;
        background: #fff url(${dropdown}) no-repeat right 12px center;
        background-size: 17px auto;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        &:focus {
          outline: 1px solid rgb(0, 148, 251);
        }
      }
    }
  }
  .content {
    width: 1280px;
    margin: auto;
    border: 1px solid #e6e6e6;
    display: flex;

    // 왼쪽 캘린더 박스
    .left {
      width: 640px;
      border-right: 1px solid #e6e6e6;
      padding: 20px 10px;
      box-sizing: border-box;

      .calendar_box {
        .checkBox {
          margin-left: 30px;
          margin-top: 20px;

          span {
            margin-right: 25px;
          }
        }

        // 캘린더
        .calendar {
          width: 640px;
          height: 360px;
          border: none;
          // 오늘 날짜
          .react-calendar__tile--now {
            background-color: #e6e6e6 !important;
            border-radius: 40px;
            max-width: 40px;
            height: 40px;
            margin: 0 23px 0 25px;
          }
          // 상단 년월
          .react-calendar__navigation__label {
            span {
              font-size: 24px;
              font-weight: bold;
              padding: 0;
            }
            &:hover {
              background-color: #fff;
              cursor: text;
            }
          }
          .react-calendar__navigation {
            display: block;
            text-align: center;
            position: relative;
          }

          // 요일섹션
          .react-calendar__month-view__weekdays {
            margin-bottom: 15px;

            abbr {
              font-size: 16px;
              text-decoration: none;
            }
          }
          // 주말
          .react-calendar__month-view__weekdays__weekday {
            &:last-child {
              color: rgb(0, 148, 251);
            }
            &:first-child {
              color: #f76117;
            }
          }
          .react-calendar__month-view__days__day--weekend {
            color: rgb(0, 148, 251) !important;
            &:first-child,
            &:nth-child(8),
            &:nth-child(15),
            &:nth-child(22),
            &:nth-child(29) {
              color: #f76117 !important;
            }
          }

          // 날짜 하나하나  모양
          .react-calendar__tile {
            margin-bottom: 15px;
            font-size: 16px;
          }
          .react-calendar__month-view__days__day {
            width: 50px;
          }
          // 날짜 hover,focus
          .react-calendar__tile:enabled:hover,
          .react-calendar__tile:enabled:focus,
          .react-calendar__tile--active {
            background-color: transparent;
            color: #333;
          }
          // 년도 이동 버튼 삭제
          .react-calendar__navigation__prev2-button,
          .react-calendar__navigation__next2-button {
            display: none;
          }
          // 월 이동 버튼
          .react-calendar__navigation__prev-button {
            display: inline-block;
            width: 25px;
            margin: 0 5px;
            height: 25px;
            border-radius: 50%;
            text-indent: -9999px;
            position: absolute;
            left: 31%;
            bottom: 35%;
            display: block;
            background: url(${prev}) right / cover;
            background-color: #dadada;
            overflow: hidden;
            min-width: 25px;
          }
          .react-calendar__navigation__next-button {
            display: inline-block;
            width: 25px;
            margin: 0 5px;
            height: 25px;
            border-radius: 50%;
            text-indent: -9999px;
            position: absolute;
            right: 31%;
            bottom: 35%;
            display: block;
            background: url(${next}) left / cover;
            background-color: #dadada;
            min-width: 25px;
          }
        }
      }
    }

    // 오른쪽 결과 박스 표시 박스
    .right {
      width: 640px;
      background-color: #f9f9f9;
      .inner {
        p {
          text-align: center;
        }

        .buttonBlue {
          margin-top: 50px;
          margin-left: 41%;
        }

        .no-data {
          background: url(${noResult}) no-repeat center top;
          background-size: 66px;
          padding-top: 80px;
          margin: 138px 0 43px;
        }
      }
    }
  }
  .info {
    width: 1280px;
    margin: 50px auto;
    h4 {
      margin-bottom: 20px;
      position: relative;
      padding-left: 19px;
      font-size: 20px;
      font-weight: bold;

      // 제목 앞에 파란 동그라미
      &:before {
        position: absolute;
        width: 11px;
        height: 11px;
        border: 3px solid #0094fb;
        border-radius: 50%;
        box-sizing: border-box;
        content: "";
        margin: 10px 18px 0 0;
        left: 0;
      }
    }
    ul {
      padding-left: 19px;
      li {
        margin-top: 5px;
        font-size: 16px;
        b {
          font-weight: bold;
        }
        &:before {
          content: "";
          display: block;
          width: 4px;
          height: 4px;
          background-color: rgb(0, 148, 251);
          float: left;
          margin: 10px 5px 0 0;
        }
        span {
          margin-left: 1.3%;
        }
      }
    }
  }
`;

const Isdata = styled.div`
  width: 600px;
  height: 224px;
  margin: 20px 30px;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  display: flex;

    div:nth-of-type(1) {
      font-size: 18px;
      width: 20%;
      padding: 30px 40px;
      
      p{
        
        height: 100%;
        font-weight: bold;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        margin: 4px 0;

        span {
          text-align: left;
          color: #0094fb;
        }
      }
    } 

    div:nth-of-type(2) {
      font-size: 16px;
      width: 65%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      padding: 25px 10px 25px 30px;
      border-left: 1px solid #e6e6e6;

      ul {
        margin: 5px 0;

        li {
          padding-left: 12px;
          margin-top: 5px;
          position: relative;

          &:first-child {
            margin-top: 0;
          }

          &:before {
            content: "";
            width: 4px;
            height: 4px;

            position: absolute;
            top: 0.7em;
            left: 0;

            background-color: #0094fb;
          }
        }
      }

      button {
        margin-top: 15px;
        color: #333;
        border-color: #959595;
        background-color: #fff;
        border: 1px solid;
        border-radius: 3px;
        min-width: 65px;
        height: 30px;
        padding: 0 14px;
        font-size: 14px;
      }
    } 
`;

const ApptHistory = memo(() => {
  const navigate = useNavigate();

  const onApptButton = () => {
    navigate("/apptSelect");
  };

  const onApptDetail = () => {
    navigate("/appt_detail");
  };

  const [value, onChange] = useState(new Date());

  return (
    <Container>
      <MyPageHeader />
      <div className="bgAll">
        <h1>진료예약내역</h1>
        {/* 제목 박스, 드롭다운 */}
        <div className="title_box">
          <div className="title">
            <span className="name">오태원님</span>
            <span className="text">진료예약내역입니다.</span>
          </div>
          <div className="dropdown">
            <select className="hosp_no_list" title="병원등록 번호">
              <option defaultValue="2" data-id="10722356" selected="">
                세브란스병원: 10722356
              </option>
            </select>
          </div>
        </div>
        <div className="content">
          {/* 왼쪽박스 */}
          <div className="left">
            <div className="calendar_box">
              <Calendar
                onChange={onChange}
                value={value}
                className="calendar"
                formatDay={(locale, date) => moment(date).format("D")}
                calendarType="US"
              />
              <div className="checkBox">
                <span>
                  <input
                    type="radio"
                    name="res_type"
                    value="all"
                    className=""
                  />
                  <label for="ch-all">전체</label>
                </span>
                <span>
                  <input type="radio" name="res_type" value="1" className="" />
                  <label for="ch-1">본인</label>
                </span>
                <span>
                  <input type="radio" name="res_type" value="2" className="" />
                  <label for="ch-2">대리</label>
                </span>
              </div>
            </div>
          </div>
          {/* 오른쪽 박스 */}
          <div className="right">
            <div className="inner">
              {/* 예약데이터가 있는가 ? 예약상태 : 예약없음 */}
              {/* 현재 임시로 true로 넣어둠 */}
              {true ? (
                /* 데이터 있을 때 박스 */
                <Isdata>
                  <div>
                    <p>예약일
                    <br />
                      <span>
                        {/* 예약날짜 + 예약시간 데이터 */}2022-12-25 15:30
                      </span>
                    </p>
                  </div>
                  
                  <div>
                    <ul>
                      <li>
                        예약구분 : 진료예약 {/* 데이터 */}
                      </li>
                      <li>
                        환자성명 : 오태원(1234567) {/* 데이터(데이터) */}
                      </li>
                      <li>
                        진료과 : 가정의학과(HM), 김지혜(의사) {/* 데이터 */}
                      </li>
                      <li>진료장소 : 본관 4층 가정의학과 {/* 데이터 */}</li>
                    </ul>
                    <button type="button" onClick={onApptDetail}>위치 및 상세</button>
                  </div>
                </Isdata>
              ) : (
                /* 데이터 없을 때 박스 */
                <div className="no-data">
                  <p>예약내역이 없습니다.</p>
                  <br />
                  <button
                    type="button"
                    className="buttonBlue"
                    onClick={onApptButton}
                  >
                    진료예약
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="info">
          <h4>이용안내</h4>
          <ul>
            <li>
              인터넷으로 진료예약을 하셨거나, 진료비 수납이 안된 경우, 예약변경
              및 취소가 가능합니다.
            </li>
            <li>
              예약과 관련된 검사가 있거나 기타 사유로 인터넷예약변경이 불가능할
              경우, 전화예약센터를 이용해 주십시오.
            </li>
            <li>
              인터넷진료예약의 예약변경 및 취소는 예약일전일까지 가능합니다.
            </li>
            <li>
              예약시간 20분전까지 내원하시어 원무과에 접수해야 합니다.
              (진료비수납*접수창구)
            </li>
            <li>진료예약조회 및 변경/취소는 본인인 경우만 가능합니다.</li>
            <li>
              치과대학병원 재진의 예약/예약변경은 진료과로 전화 문의바랍니다.
            </li>
            <li>세브란스병원 · 연세암병원 · 치과대학병원 : 1599-1004</li>
          </ul>
        </div>
      </div>
      <LoginFooter />
    </Container>
  );
});

export default ApptHistory;
