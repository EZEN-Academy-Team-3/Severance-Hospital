/**
 * @ File Name: JoinWay.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-05 22:44
 * @ Description: 회원가입 방법 선택 페이지
 */

import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginHeader from "../../components/LoginHeader";
import LoginFooter from "../../components/LoginFooter";
import localImg from "../../assets/img/ico-login1@2x.png";
import childImg from "../../assets/img/ico-login2@2x.png";
import globalImg from "../../assets/img/ico-login3@2x.png";
import naver from "../../assets/img/ico-sns-naver@2x.png";
import kakao from "../../assets/img/ico-sns-kakao@2x.png";
import facebook from "../../assets/img/ico-sns-facebook@2x.png";

const Container = styled.div`
  position: relative;
  letter-spacing: 0.02em;
  line-height: 1.625;
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  p {
    text-align: center;
    font-size: 16px;
  }

  // 회원가입 방법 박스
  .ways {
    width: 1280px;
    margin: auto;
    .root_box {
      margin-top: 30px;
      margin-right: 32.3px;
      padding: 2% 0;
      box-sizing: border-box;
      float: left;
      width: 23.1%;
      height: 235px;
      border: 1px solid #e6e6e6;
      text-align: center;
      &:nth-child(4) {
        margin-right: 0;
      }
      h2 {
        font-size: 22px;
        margin-bottom: 5px;
        font-weight: bold;
      }
      p {
        margin-bottom: 2px;
      }
      img {
        margin: auto;
        margin-top: 20px;
        width: 20%;
      }
      
      &:nth-child(3) {
        p {
          margin-bottom: 50px;
        }
      }
      &:nth-child(4) {
        p {
          margin-bottom: 25px;
          line-height: 1.5em;
        }
        ul {
          li {
            a {
              img {
                float: left;
                width: 17%;
                margin-left: 7%;
              }
            }
            &:first-child {
              a {
                img {
                  margin-left: 18%;
                }
              }
            }
          }
        }
      }
      &:hover {
        border: 1px solid rgb(0, 148, 251);
      }
    }
  }

  // 자주 묻는 질문 버튼
  .qna {
    margin-right: 28.5%;
    height: 50px;
    line-height: 50px;
    p {
      margin: 50px 0 0 0;
      float: right;
      button {
        float: right;
        margin-left: 10px;
        background-color: white;
        border: 1px solid #e6e6e6;
        padding: 10px 25px;
        font-size: 16px;
        border-radius: 30px;
      }
    }
  }
`;

const JoinWay = memo(() => {
  return (
    <Container>
      <div>
        <LoginHeader />
        <div className='bgAll'>
          <div className='title'>
            <h1>회원가입</h1>
          </div>
          <p>
            세브란스 홈페이지에 방문해주셔서 감사 드립니다. 통합 계정으로 모든
            패밀리사이트를 이용할 수 있습니다.
          </p>
          <div className="ways">
            <Link to="/join_accept" className="root_box">
              <h2>내/외국인</h2>
              <p>14세 이상</p>
              <p>국내거주 내/외국인</p>
              <img src={localImg} alt="내/외국인" />
            </Link>
            <Link to="/join_accept" className="root_box">
              <h2>소아/청소년</h2>
              <p>14세 미만</p>
              <p>내/외국인</p>
              <img src={childImg} alt="소아/청소년" />
            </Link>
            <Link to="/join_accept_global" className="root_box">
              <h2>해외거주 외국인</h2>
              <p>Foreign membership</p>
              <img src={globalImg} alt="해외거주외국인" />
            </Link>
            <div className="root_box">
              <h2>SNS 회원가입</h2>
              <p>
                기존 사용하는 계정으로
                <br />
                간단하게 가입
              </p>
              <ul>
                <li>
                  <Link to="/">
                    <img src={naver} alt="naver" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={kakao} alt="kakao" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={facebook} alt="facebook" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="qna">
              <p>
                회원가입이 잘 안되나요?
                <button type="button" className="qna_button">
                  회원가입 할 때 가장 많이 물어보는 질문은?
                </button>
              </p>
            </div>
          </div>
        </div>
        <LoginFooter />
      </div>
    </Container>
  );
});

export default JoinWay;
