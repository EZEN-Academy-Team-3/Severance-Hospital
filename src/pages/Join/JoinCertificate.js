/*
 * @ File Name: JoinCertificate.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-07 15:30
 * @ Description: 본인인증 페이지
 */
import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginHeader from "../../components/LoginHeader";
import LoginFooter from "../../components/LoginFooter";
import Right from "../../assets/img/ico-arrow-right-gray@2x.png";
import step01 from "../../assets/img/ico-login-step1-off@2x.png";
import step02 from "../../assets/img/ico-login-step2-on@2x.png";
import step03 from "../../assets/img/ico-login-step3-off@2x.png";
import step04 from "../../assets/img/ico-login-step4-off@2x.png";
import ipin from "../../assets/img/img-login-Certified01.png";
import phone from "../../assets/img/img-login-Certified02.png";
import official from "../../assets/img/img-login-Certified03.png";

const Container = styled.div`
  position: relative;
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  hr {
    width: 98%;
    margin: 0;
    border: 0;
    border-bottom: 1px solid #e6e6e6;
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
        &:nth-of-type(2) {
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

  // 인증방법
  .ways {
    width: 800px;
    margin: auto;
    .ipin,.phone,.official {
      width: 240px;
      height: 210px;
      border: 1px solid #e6e6e6;
      float: left;
      margin: 60px 30px 0 0;
      position: relative;
      img {
        height: 90px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .official {
      margin-right: 0;
    }

    // 인증 방법 버튼
    button {
      float: left;
      width: 240px;
      height: 50px;
      line-height: 20px;
      margin: 30px 30px 40px 0;
      font-size: 18px;
      padding: 5px 0;
      box-sizing: border-box;
      border-radius: 30px;
      border: 2px solid rgb(0, 148, 251);
      background-color: rgb(0, 148, 251);
      color: white;
    }
    .ipin_btn {
      margin-left: 0;
    }
    .official_btn {
      background-color: white;
      color: rgb(0, 148, 251);
      border: 2px solid rgb(0, 148, 251);
      margin-right: 0;
    }

    // 하단 주의사항
    .notice {
      width: 800px;
      margin: auto;
      float: left;
      ul {
        margin: 0 auto 50px;
        li {
          margin-top: 5px;
          font-size: 14px;
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
  }
`;

const JoinCertificate = memo(() => {
  const navigate = useNavigate();
  const btnClick = (e) => {
    navigate("/join_us");
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
          <div className="ways">
            <div className="ipin">
              <img src={ipin} alt="ipin" />
            </div>
            <div className="phone">
              <img src={phone} alt="phone" />
            </div>
            <div className="official">
              <img src={official} alt="officail" />
            </div>
            <button type="button" className="ipin_btn" onClick={btnClick}>
              아이핀 인증
            </button>
            <button type="button" className="phone_btn" onClick={btnClick}>
              휴대폰 인증
            </button>
            <button type="button" className="official_btn" onClick={btnClick}>
              범용 공인인증서
            </button>
            <div className="notice">
              <ul>
                <li>
                  아이디 또는 비밀번호 분실 등 본인 여부 확인이 필요한 경우를
                  위해 꼭 필요한 절차입니다.
                </li>
                <li>
                  허위 정보를 입력하시는 경우 추 후 정확한 본인확인이 불가능하며
                  아이디/비밀번호 분실 시 도움을 드리기가
                  <br />
                  <span>어렵습니다.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <LoginFooter />
      </div>
    </Container>
  );
});

export default JoinCertificate;
