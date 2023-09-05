/**
 * @ File Name: HJ_step3.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-22
 * @ Description: 온라인예약페이지 예약step3
 */

import React, { memo, useState } from "react";
import styled from "styled-components";

// 캘린더
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css"; // css import
import prev from "../../assets/img/ico-arrow-left-white@2x.png";
import next from "../../assets/img/ico-arrow-right-white@2x.png";

const Div = styled.div`
  display: none;

  .reserveBox {
    width: 305px;
    height: 803px;
    background: #fff;
    margin: 0 10px;
    position: relative;
    border: 1px solid #e6e6e6;
    background-color: #f9f9f9;
    box-sizing: border-box;

    .boxsTop {
      padding: 24px 0;
      background-color: #fff;
    }
  }

  .tit {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    font-family: "NanumSquare", "malgungothic", "Helvetica Neue", Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
  }

  // 캘린더
  .calendar_box {
    width: 100%;
    /* height: 50%; */
  }
  .calendar {
    font-size: 14px;
    width: 100%;
    border: none;
    // 오늘 날짜
    .react-calendar__tile--now {
      background-color: #e6e6e6 !important;
      border-radius: 40px;
      max-width: 40px;
      height: 40px;
      /* margin: 0 23px 0 25px; */
    }
    // 상단 년월
    .react-calendar__navigation__label {
      span {
        font-size: 15px;
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
      margin: 0;
    }

    // 요일섹션
    .react-calendar__month-view__days {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    .react-calendar__month-view__weekdays {
      margin-bottom: 15px;

      abbr {
        font-size: 14px;
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
      /* margin-bottom: 15px; */
      font-size: 14px;
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
      left: 20%;
      bottom: 50%;
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
      right: 20%;
      bottom: 50%;
      display: block;
      background: url(${next}) left / cover;
      background-color: #dadada;
      min-width: 25px;
    }
  }

  // 색깔별 표시 설명
  .disc {
    ul {
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      padding: 20px 20px;
      border-bottom: 1px solid #e6e6e6;
      box-sizing: border-box;
      color: #666;
      li {
        span {
          font-size: 14px;
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
  //예약가능시간
  .timeResults {
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    /* overflow: hidden; */

    .radios {
      width: 60px;
      height: 30px;
      margin: 4px;
      text-align: center;
      position: relative;

      label {
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        line-height: 29px;
      }

      input:checked + label {
        color: white;
      }

      [type="radio"] {
        appearance: none;
        position: absolute;
        display: block;
        border: 1px solid #e6e6e6;
        height: 30px;
        width: 60px;

        border-radius: 3px;
        font-size: 14px;
        text-align: center;
        margin: 0;
        background: #fff;

        //라디오 선택됐을 때
        &:checked {
          border-color: #0094fb;
          background: #0094fb;
        }
      }
    }
  }

  /* 예약가능시간없을 떄 */
  .timeNoResults {
    background-color: #fff;
    align-items: center;
    min-height: 167px;
    margin: 20px;
    padding: 20px;
    border: 1px solid #e6e6e6;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    p {
      font-size: 16px;
    }
  }

  //이전다음 버튼
  .buttonCont {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding-bottom: 30px;
  }
  .buttonWhite {
    border-color: #959595 !important;
    color: #333 !important;
  }
`;

const HJstep3 = memo(() => {
  const [value, onChange] = useState(new Date());

  return (
    <Div>
      <div className="reserveBox">
        <div className="boxsTop">
          <p className="tit textTitle">진료예약 - STEP3</p>
        </div>

        {/* 캘린더 */}
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
                <span>예약가능날짜</span>
              </li>
              <li className="pos">
                <span>선택</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 예약 가능한 시간이 있을 때 */}
        <div className="timeResults">
          <span className="radios">
            <input
              type="radio"
              name="certFormResTime"
              value="15:20"
              id="Time1"
            />
            <label htmlFor="Time1">15:20</label>
          </span>
          <span className="radios">
            <input
              type="radio"
              name="certFormResTime"
              value="15:20"
              id="Time1"
            />
            <label htmlFor="Time1">15:20</label>
          </span>
        </div>

        {/* 예약가능한 시간이 없을 때 */}
        <div className="timeNoResults">
          <p>
            선택하신 월에는 모든 예약이 완료 되었습니다. 다음달을 확인해 주세요.
          </p>
        </div>

        {/* 이전 다음 버튼 */}
        <div className="buttonCont">
          <button type="submit" className="buttonWhite">
            이전
          </button>
          <button type="reset" className="buttonBlue marginleft">
            다음
          </button>
        </div>
      </div>
    </Div>
  );
});

export default HJstep3;
