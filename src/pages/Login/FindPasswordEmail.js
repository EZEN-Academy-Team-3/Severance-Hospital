/**
 * @ File Name: FindPasswordEmail.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-23 11:30
 * @ Description: 비밀번호 찾기 이메일 인증 페이지
 */

import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginHeader from "../../components/LoginHeader";
import LoginFooter from "../../components/LoginFooter";
import dropdown from "../../assets/img/ico-chevron-down@2x.png";

const Container = styled.div`
  position: relative;
  .bgAll {
    hr {
      border: 0;
      border-bottom: 1px solid #e6e6e6;
      width: 800px;
      margin: 30px auto 0;
    }
  }
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  h3 {
    width: 800px;
    margin: 0 auto 30px;
    font-size: 24px;
  }

  // 이메일 정보 입력
  .email_details {
    width: 800px;
    margin: auto;
    margin-bottom: 0;
    .text {
      font-weight: bold;
      margin-right: 10px;
    }
    .text_email {
      font-weight: bold;
      margin-right: 30px;
    }
    /* 인증버튼 */
    .certificate {
      background-color: #666;
      color: #fff;
      height: 45px;
      padding: 0 27px;
      margin-left: 5px;
      font-size: 16px;
      border: none;
      border-radius: 3px;
      font-weight: 100;
      vertical-align: middle;
    }
    input,
    .email_domain {
      width: 210px;
      max-width: 100%;
      height: 45px;
      border: 1px solid #dadada;
      padding: 8px 15px;
      box-sizing: border-box;
      text-align: left;
      font-size: 16px;
      vertical-align: middle;
      margin: 30px 10px 30px 0;
      &:focus {
        outline: 1px solid rgb(0, 148, 251);
      }
    }
    .email_domain {
      width: 150px;
      padding-right: 30px;
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

  // 인증코드
  .code {
    width: 800px;
    margin: 0 auto;
    .text_code {
      font-weight: bold;
      margin-right: 15px;
    }
    // 확인버튼
    .submit {
      background-color: rgb(0, 148, 251);
      color: #fff;
      height: 45px;
      padding: 0 27px;
      margin-left: 5px;
      font-size: 16px;
      border: none;
      border-radius: 3px;
      font-weight: 100;
      vertical-align: middle;
    }
    .code_input {
      width: 295px;
      max-width: 100%;
      height: 45px;
      border: 1px solid #dadada;
      padding: 8px 15px;
      box-sizing: border-box;
      text-align: left;
      font-size: 16px;
      vertical-align: middle;
      margin: 0 10px 0 0;
      &:focus {
        outline: 1px solid rgb(0, 148, 251);
      }
    }
  }
`;

const FindPasswordEmail = memo(() => {
  const navigate = useNavigate();

  const goChange = e => {
    navigate('/change_password_email');
  }

  return (
    <Container>
      <LoginHeader />
      <div className="bgAll">
        <h1>비밀번호 찾기</h1>
        <h3>이메일 인증</h3>
        <hr />
        <div className="email_details">
          <span className="text_email">이메일</span>
          <span className="email_input">
            <input
              type="text"
              name="emailId"
              id="emailId"
              className="email_id_input"
              title="이메일 아이디"
            />
          </span>
          <span className="text">@</span>
          <span className="email_input">
            <input
              type="text"
              name="emailDomainInput"
              id="email_domain_input"
              className="email_domain_input"
              title="이메일 도메인"
            />
          </span>
          <span className="email_input">
            <span className="input_group">
              <select
                name="emailDomain"
                id="emailDomain"
                className="email_domain"
                title="이메일 도메인"
              >
                <option defaultValue="">직접입력</option>
                <option defaultValue="gmail.com">gmail.com</option>
                <option defaultValue="naver.com">naver.com</option>
                <option defaultValue="daum.net">daum.net</option>
                <option defaultValue="nate.com">nate.com</option>
                <option defaultValue="kakao.com">kakao.com</option>
                <option defaultValue="yahoo.com">yahoo.com</option>
              </select>
            </span>
          </span>
          <button className="certificate" type="button">
            인증
          </button>
        </div>
        <div className="code">
          <span className="text_code">인증코드</span>
          <input
            type="text"
            name="codeInput"
            id="codeInput"
            className="code_input"
            title="인증코드"
          />
          <button className="submit" type="button" onClick={goChange}>
            확인
          </button>
          <hr />
        </div>
      </div>
      <LoginFooter />
    </Container>
  );
});

export default FindPasswordEmail;
