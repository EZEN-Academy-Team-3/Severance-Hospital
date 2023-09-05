/**
 * @ File Name: FindId.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-20 18:00
 * @ Description: 아이디 찾기 페이지
 */

import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginHeader from "../../components/LoginHeader";
import LoginFooter from "../../components/LoginFooter";
import ipin from "../../assets/img/img-login-Certified01.png";
import phone from "../../assets/img/img-login-Certified02.png";
import official from "../../assets/img/img-login-Certified03.png";
import certified from "../../assets/img/img-login-Certified04.png";

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
      float: left;
      margin: 60px 15px 0 0;
      position: relative;
      img {
        height: 90px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .certified {
      margin-right: 0;
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
`;

const FindId = memo(() => {
  const navigate = useNavigate();

  const goEmail = e => {
    navigate('/find_id_email');
  };

  return (
    <Container>
      <LoginHeader />
      <div className="bgAll">
        <h1>아이디 찾기</h1>
        <p>
          회원가입 시 입력한 회원님의 정보를 통해 아이디를 찾으실 수 있습니다.
        </p>

        <hr />
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
          <button type="button" className="certified_btn" onClick={goEmail}>
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
