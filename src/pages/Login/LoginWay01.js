/**
 * @ File Name: LoginWay01.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2023-01-18 15:40
 * @ Description: 세브란스 로그인 페이지
 */

import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import {  Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import naver from "../../assets/img/ico-sns-naver@2x.png";
import kakao from "../../assets/img/ico-sns-kakao@2x.png";
import facebook from "../../assets/img/ico-sns-facebook@2x.png";
import checkBox from "../../assets/img/ico-checkbox-checked-white.png";

const Container = styled.div`
  position: relative;
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }

  // 로그인 인풋
  .login_ways {
    width: 1280px;
    margin: auto;
    position: relative;
    .login_input {
      width: 640px;
      margin-top: 120px;
      position: relative;

      .id_input,
      .password_input {
        width: 58%;
        height: 50px;
        margin: 2% 0 0 9%;
        border: 1px solid #ebebeb;
        padding-left: 3%;
        box-sizing: border-box;
        font-size: 18px;
        &:focus {
          outline: 1px solid rgb(0, 148, 251);
        }
      }
      button {
        width: 20%;
        height: 113px;
        position: absolute;
        top: 9.5%;
        right: 9%;
        background-color: rgb(0, 148, 251);
        color: white;
        border: 0;
        font-size: 22px;
        border-radius: 4%;
      }
    }
    .remember {
      margin: 1% 0 0 5%;
      font-size: 16px;
      color: rgba(100, 100, 100);
    }
    .find {
      padding: 4% 0 0 5%;
      a {
        border: 1px solid rgb(100, 100, 100);
        padding: 15px 6.4%;
        box-sizing: border-box;
        border-radius: 4%;
        font-size: 16px;
        color: rgba(100, 100, 100);

        &:first-child {
          margin-right: 15px;
        }
      }
    }
    .sns_login {
      width: 550px;
      position: absolute;
      right: 2%;
      top: 0;
      h3 {
        font-size: 18px;
      }
      ul {
        border-radius: 2px;
        background-color: rgb(249, 249, 249);
        width: 94%;
        height: 85px;
        padding: 3% 27%;
        margin-top: 20px;
        box-sizing: border-box;
        li {
          margin-right: 10%;
          float: left;
          a {
            img {
              width: 50px;
            }
          }
        }
      }
    }
    .go_join {
      width: 550px;
      position: absolute;
      right: 2%;
      top: 65%;
      h3 {
        font-size: 18px;
      }
      p {
        margin-top: 10px;
        line-height: 1.5em;
        font-size: 16px;
        float: left;
      }
      button {
        background-color: white;
        border: 1px solid rgb(0, 148, 251);
        color: rgb(0, 148, 251);
        border-radius: 4%;
        padding: 2% 3%;
        font-size: 18px;
        margin: 20px 0 0 26%;
      }
    }
  }

  // 파란색 동그라미 체크박스
  .checkBox {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
  }
  .checkBox + label {
    position: relative;
    height: 20px;
  }
  .checkBox + label::before {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    border-radius: 0;
    margin: -2px 5px 0 0;
    background-color: #fff;
    content: "";
    border: 0;
    border-radius: 50%;
    background: #959595 url(${checkBox}) no-repeat 45%
      center !important;
    background-size: 11px 8px !important;
  }
  .checkBox:checked + label::before {
    background-color: #0094fb !important;
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

const LoginWay01 = memo(() => {
  const navigate = useNavigate();


  const onSubmit = (async (e) => {
      e.preventDefault();

      const user_id = e.currentTarget.id_input.value;
      const user_pw = e.currentTarget.password_input.value;

      try {
          // Ajax 요청 보내기 -> 백엔드가 전달한 결과값이 response.data에 저장된다.
          const response = await axios.post('/api/login', { userid: user_id, userpw: user_pw });
          console.log(response.data);
          window.sessionStorage.userInfo = JSON.stringify(response.data.userInfo);
          navigate('/mysevrance');
      } catch (error) {
          if (error.response?.data?.rtmsg) {
            alert(error.response?.data?.rtmsg);
          } else {
            const errorMsg = '[' + error.response.status + '] ' + error.response.statusText;
            console.error(errorMsg);
            alert("로그인에 실패했습니다. 회원정보를 확인하세요.");
          }
      }
  });


  const joinBtnClick = (e) => {
    navigate("/join_way");
  };


  return (
    <Container>
      <div>
        <div className="login_ways">
          <form className="login_input"  method="post" action="/api/login" onSubmit={onSubmit}>
            <input
              name="id_input"
              type="text"
              placeholder="아이디를 입력해 주세요."
              className="id_input"
            />
            <input
              name="password_input"
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              className="password_input"
            />
            <button type="submit" className="login_button">
              로그인
            </button>
          </form>
          <form className="remember">
            <input
              type="checkbox"
              name="remember_id"
              id="remember_id"
              className="checkBox"
            />
            <label htmlFor="remember_id">아이디를 기억합니다.</label>
          </form>
          <div className="find">
            <Link to="/find_id">아이디 찾기</Link>
            <Link to="/find_password">비밀번호 찾기</Link>
          </div>
          <div className="sns_login">
            <h3>SNS 계정으로 로그인</h3>
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
          <div className="go_join">
            <h3>아직 세브란스 회원이 아니신가요?</h3>
            <p>
              지금 바로 회원가입을 하고 <br />
              나에게 딱 맞는 정보를 확인해 보세요!
            </p>
            <button type="button" onClick={joinBtnClick}>
              회원가입
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
});

export default LoginWay01;
