/**
 * @ File Name: LoginWay02.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-20 17:40
 * @ Description: 본인인증 로그인 페이지
 */

import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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

  .ways {
    width: 800px;
    margin: auto;
    .ipin,
    .phone,
    .official {
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
          span {
            margin-left: 1.3%;
          }
        }
      }
    }

    // 자주묻는질문
    .qna_button {
      width: 780px;
      height: 50px;
      line-height: 40px;
      text-align: center;
      background-color: white;
      border: 1px solid #e6e6e6;
      font-size: 16px;
      border-radius: 30px;
      color: #333;
    }
  }
`;

const TabMenuNav = styled.nav`
  width: 1280px;
  height: 57px;
  position: relative;
  margin-bottom: 60px;
  overflow: hidden;
  margin: auto;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid #ebebeb;
    background-color: #f9f9f9;
  }

  ul {
    font-size: 18px;
    display: flex;

    li {
      flex: 1;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: 1px;
        height: 55px;

        &::before {
          content: "";
          position: absolute;
          top: -1px;
          right: 0;
          bottom: -1px;
          left: 0;
          z-index: 100;
          border: 1px solid transparent;
          border-bottom: 3px solid transparent;
        }

        &.active {
          background-color: white;
          font-weight: bold;
        }

        &.active::before {
          border-color: #ebebeb;
          border-bottom-color: #ffd553;
        }
      }
    }
  }
`;

const LoginWay02 = memo(() => {
  const navigate = useNavigate();
  const btnClick = (e) => {
    navigate("/");
  };

  return (
    <Container>
      <div>
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
                전자서명법에 따라 병원에서는 범용공인인증서를 사용해 주세요.
                (유료)
              </li>
              <li>
                범용공인인증서로 인한 속도 저하 시 다른 인증방법을 선택해
                주세요.
              </li>
              <li>NICE신용평가 본인인증 콜센터: 1600-1522</li>
            </ul>
          </div>
          <div className="qna">
            <button type="button" className="qna_button">
              본인인증에서 가장 많이 물어보는 질문은?
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
});

export default LoginWay02;
