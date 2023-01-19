/**
 * @ File Name: JoinComplete.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-20 16:20
 * @ Description: 회원가입 완료 페이지
 */

import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginHeader from "../../components/LoginHeader";
import LoginFooter from "../../components/LoginFooter";
import Right from "../../assets/img/ico-arrow-right-gray@2x.png";
import step01 from "../../assets/img/ico-login-step1-off@2x.png";
import step02 from "../../assets/img/ico-login-step2-off@2x.png";
import step03 from "../../assets/img/ico-login-step3-off@2x.png";
import step04 from "../../assets/img/ico-login-step4-on@2x.png";

const Container = styled.div`
  position: relative;
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  hr {
    width: 100%;
    margin: 0;
    border: 0;
    border-bottom: 1px solid #e6e6e6;
  }
  h4 {
    margin: 53px 0 13px 0;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 0.02em;
    line-height: 1.625;
    &:before {
      content: "";
      display: block;
      width: 100px;
      height: 42px;
    }
    .sub_text {
      font-size: 14px;
      color: #999;
      margin-left: 80%;
      .require {
        color: #f76117;
        font-weight: bold;
      }
    }
  }

  // 상단 회원가입 단계
  .steps {
    width: 1280px;
    margin: auto;
    ol {
      li {
        .box {
          font-size: 16px;
          float: left;
          border: 2px solid #e6e6e6;
          width: 240px;
          height: 50px;
          text-align: left;
          padding: 6px 2px;
          box-sizing: border-box;
          border-radius: 30px;
          img {
            margin: 5px 10px 5px 50px;
            float: left;
            width: 10%;
          }
          p {
            float: left;
            margin-top: 4px;
          }
        }
        &:nth-of-type(4) {
          .box {
            color: rgb(0, 148, 251);
            font-weight: bold;
            border: 2px solid rgb(0, 148, 251);
          }
        }
      }
      .right {
        float: left;
        margin: 13px 3.6%;
        height: 25px;
      }
    }
  }

  // 안내 메세지
  .content {
    width: 1280px;
    margin: auto;
    h5 {
      font-size: 20px;
      text-align: center;
      margin: 120px 0 5px 0;
      font-weight: bold;
      .name {
        color: rgb(0, 148, 251);
      }
    }
    p {
      font-size: 16px;
      text-align: center;
      margin-bottom: 80px;
    }

    // 홈으로 이동 버튼
    button {
      margin-left: 45%;
      font-size: 16px;
      font-weight: 100;
      border: 1px solid rgb(0, 148, 251);
      padding: 10px 25px;
      box-sizing: border-box;
      border-radius: 30px;
      background-color: rgb(0, 148, 251);
      color: white;
    }
  }
`;

const JoinComplete = memo(() => {
  const navigate = useNavigate();

  const goHome = (e) => {
    navigate("/");
  };

  return (
    <Container>
      <div>
        <LoginHeader />
        <div className="bgAll">
          <div className="title">
            <h1>회원가입</h1>
          </div>
          <div className="steps">
            <ol>
              <li>
                <div className="box">
                  <img src={step01} alt="step01" />
                  <p>약관동의 하기</p>
                </div>
              </li>
              <img src={Right} alt="right" className="right" />
              <li>
                <div className="box">
                  <img src={step02} alt="step02" />
                  <p>본인인증 하기</p>
                </div>
              </li>
              <img src={Right} alt="right" className="right" />
              <li>
                <div className="box">
                  <img src={step03} alt="step03" />
                  <p>정보입력 하기</p>
                </div>
              </li>
              <img src={Right} alt="right" className="right" />
              <li>
                <div className="box">
                  <img src={step04} alt="step04" />
                  <p>회원가입 완료</p>
                </div>
              </li>
            </ol>
          </div>
          <div className="content">
            <h5>
              환영합니다!
            </h5>
            <p>
              세브란스 통합 계정으로 패밀리 사이트를 모두 이용하실 수 있습니다.
            </p>
            <button type="button" className="go_home" onClick={goHome}>
              홈으로 이동
            </button>
          </div>
        </div>
      </div>
      <LoginFooter />
    </Container>
  );
});

export default JoinComplete;
