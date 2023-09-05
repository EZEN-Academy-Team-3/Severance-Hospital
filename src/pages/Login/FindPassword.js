/**
 * @ File Name: FindPassword.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-221 14:30
 * @ Description: 비밀번호 찾기 페이지
 */

import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginHeader from "../../components/LoginHeader";
import LoginFooter from "../../components/LoginFooter";
import ipin from "../../assets/img/img-login-Certified01.png";
import phone from "../../assets/img/img-login-Certified02.png";
import official from "../../assets/img/img-login-Certified03.png";
import certified from "../../assets/img/img-login-Certified04.png";
import RegexHelper from "../../helper/RegexHelper";

const Container = styled.div`
  position: relative;
  .bgAll {
    hr {
      border: 0;
      border-bottom: 1px solid #e6e6e6;
      width: 1050px;
      margin: auto;
    }
  }
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  p {
    width: 1050px;
    margin: auto;
    margin-bottom: 20px;
  }

  // 아이디 입력 인풋
  .id_input {
    width: 1050px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    margin: 30px 0;
    height: 40px;
    border: 1px solid #dadada;
    padding: 8px 15px;
    box-sizing: border-box;
    text-align: left;
    font-size: 16px;
    vertical-align: middle;
    &:focus {
      outline: 1px solid rgb(0, 148, 251);
    }
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }

  // 인증 방법 박스
  .ways {
    width: 1050px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: space-between;
    .ipin,.phone,.official,.certified {
      width: 240px;
      height: 210px;
      border: 1px solid #e6e6e6;
      margin-top: 100px;
      position: relative;
      img {
        height: 90px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    // 인증 버튼
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
    .official_btn,.certified_btn {
      background-color: white;
      color: rgb(0, 148, 251);
      border: 2px solid rgb(0, 148, 251);
    }
    .certified_btn {
      margin-right: 0;
    }
    .notice {
      width: 1280px;
      float: left;
      ul {
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
  }

  // 팝업창
  .no_id {
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
        p {
          text-align: left;
          margin-left: 25%;
        }
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
`;

const FindId = memo(() => {
  const navigate = useNavigate();

  const goEmail = (e) => {
    //입력값에 대한 유효성 검사
    const regex = RegexHelper.getInstance();

    try {
      regex.value(document.querySelector('.id_input'), '이름을 입력해주세요.');
    } catch (e) {
      document.querySelector(".no_id").style.display = "block";
      return;
    }
    navigate("/find_password_email");
  };

  const closeBox = (e) => {
    document.querySelector(".no_id").style.display = "none";
  };



  return (
    <Container>
      <LoginHeader />
      <div className="bgAll">
        <form className="no_id">
          <div className="popup">
            <p>아이디를 입력해 주세요.</p>
            <button type="button" className="close" onClick={closeBox}>닫기</button>
          </div>
        </form>
        <h1>비밀번호 찾기</h1>
        <p>
          회원가입 시 입력한 회원님의 정보를 통해 비밀번호를 재설정해주세요.
        </p>

        <hr />
        <input
          type="text"
          className="id_input"
          placeholder="아이디를 입력해 주세요."
        />
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
          <div className="certified">
            <img src={certified} alt="certified" />
          </div>
          <button type="button" className="ipin_btn" onClick={goEmail}>
            아이핀 인증
          </button>
          <button type="button" className="phone_btn" onClick={goEmail}>
            휴대폰 인증
          </button>
          <button type="button" className="official_btn" onClick={goEmail}>
            범용 공인인증
          </button>
          <button
            type="button"
            className="certified_btn"
            // onClick={!input.includes("id_input") ? notInput : goEmail}
            onClick={goEmail}
          >
            이메일 인증
          </button>
          <div className="notice">
            <ul>
              <li>
                <b>해외거주 외국인 회원</b>은 이메일 인증을 통해 아이디 찾기가
                가능합니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <LoginFooter />
    </Container>
  );
});

export default FindId;
