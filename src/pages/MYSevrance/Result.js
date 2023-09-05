/**
 * @ File Name: Result.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-28 16:50
 * @ Description: 결과조회 페이지
 */

import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyPageHeader from "../../components/MyPageHeader";
import LoginFooter from "../../components/LoginFooter";
import styled from "styled-components";
import noResult from "../../assets/img/ico-nodata@2x.png";

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

      // 색깔별 표시 설명
      .disc {
        ul {
          li {
            float: left;
            margin-left: 30px;
            span {
              font-size: 16px;
              color: #333;
              letter-spacing: 0.02em;
              line-height: 1.625;
              &:before {
                content: "";
                display: inline-block;
                margin-top: 7px;
                margin-right: 8px;
                width: 15px;
                height: 14px;
                border-radius: 50%;
                vertical-align: top;
                background-color: #e6e6e6;
              }
            }
          }
          .choice {
            span {
              &:before {
                background-color: #ffd553;
              }
            }
          }
          .pos {
            span {
              &:before {
                background-color: rgb(0, 148, 251);
              }
            }
          }
        }
      }
    }

    // 오른쪽 결과 박스 표시 박스
    .right {
      width: 640px;
      background-color: #f9f9f9;
      .inner {
        background: url(${noResult}) no-repeat center top;
        background-size: 66px;
        padding-top: 80px;
        margin: 138px 0 43px;
        p {
          text-align: center;
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

const ResultInquiry = memo(() => {
  const navigate = useNavigate();

  const [value, onChange] = useState(new Date());

  return (
    <Container>
      <MyPageHeader />
      <div className="bgAll">
        <h1>결과</h1>
        {/* 제목 박스, 드롭다운 */}
        <div className="title_box">
          <div className="title">
            <span className="name">김다보미님</span>
            <span className="text">검사결과입니다.</span>
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
              <div className="disc">
                <ul>
                  <li className="today">
                    <span>오늘</span>
                  </li>
                  <li className="choice">
                    <span>선택</span>
                  </li>
                  <li className="pos">
                    <span>내역</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 오른쪽 박스 */}
          <div className="right">
            <div className="inner">
              <div className="no-data">
                <p>결과내역이 없습니다.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="info">
          <h4>이용안내</h4>
          <ul>
            <li>세브란스병원 2004.1월 이후 확인 가능합니다.</li>
            <li>강남세브란스병원 2005.6월 이후 확인 가능합니다.</li>
            <li>용인세브란스병원: 2011.12월 이후 확인 가능합니다.</li>
          </ul>
        </div>
      </div>
      <LoginFooter />
    </Container>
  );
});

export default ResultInquiry;
