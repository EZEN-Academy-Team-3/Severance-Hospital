/**
 * @ File Name: Result.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-16 14:50
 * @ Description: 결과조회 페이지
 */

import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyPageHeader from "../../components/MyPageHeader";
import LoginFooter from "../../components/LoginFooter";
import styled from "styled-components";
import noResult from "../../assets/img/ico-nodata@2x.png";
import dropdown from "../../assets/img/ico-chevron-down@2x.png";

// 캘린더
import Calendar from "react-calendar";
import moment from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import

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

      // 캘린더
      .calendar {
        width: 640px;
        height: 360px;
        border: none;
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
              <Calendar onChange={onChange} value={value} className='calendar' />
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