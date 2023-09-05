import React, { memo, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

import apptCalendar from "../../assets/img/icon-appt-calendar.png";

const InternetApptCont = styled.div`
  padding-bottom: 95px;
  // h4 스타일 적용 + 가상 선택자
  h4 {
    padding-left: 18px;
    margin: 65px 0 22px;
    font-size: 24px;
    font-weight: bold;
    line-height: 38px;
    position: relative;

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
  }
  div {
    margin-left: 10px;

    div {
      float: left;
    }

    ul {
      li {
        padding-left: 12px;
        position: relative;

        &:before {
          content: "";
          position: absolute;
          width: 4px;
          height: 4px;
          top: 0.7em;
          left: 0;
          background-color: #0094fb;
        }

        &:after {
          display: block;
          clear: both;
          content: "";
        }
      }
    }

    .appt-btn {
      float: right;

      button {
        color: #fff;
        background-color: #0094fb;
        border-radius: 25px;
        border: 2px solid transparent;
        min-width: 100px;
        height: 50px;
        padding: 0 28px 0 60px;
        font-size: 18px;
        cursor: pointer;
        position: relative;
        padding-left: px;

        i {
          position: absolute;
          width: 26px;
          height: 26px;
          line-height: 26px;
          left: 30px;
          background: url(${apptCalendar}) no-repeat center / cover;
        }
      }
    }
  }
`;

const InternetAppt = memo(() => {
  const navigate = useNavigate();
  
  const apptBtn = useCallback((e) => {
    e.preventDefault();



    navigate("/apptSelect")
  });

  return (
    <InternetApptCont>
      <h4 className="h4title">인터넷 진료예약 안내</h4>
      <div>
        <div>
          <ul>
            <li>회원 및 비회원 모두 예약이 가능합니다.</li>
            <li>대리 예약은 환자 정보 추가 입력 후 이용하시기 바랍니다.</li>
          </ul>
        </div>
        <div className="appt-btn">
          <button type="button" onClick={apptBtn}>
            <i></i>&nbsp;인터넷 예약 바로가기&nbsp;
          </button>
        </div>
      </div>
    </InternetApptCont>
  );
});

export default InternetAppt;
