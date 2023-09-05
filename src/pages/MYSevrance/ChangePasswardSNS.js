/**
 * @ File Name: ChangePassward.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-12 18:05
 * @ Description: SNS 회원 비밀번호변경 페이지
 */

import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import MyPageHeader from "../../components/MyPageHeader";
import LoginFooter from "../../components/LoginFooter";
import styled from "styled-components";
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";

const Container = styled.div`

  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  h4 {
    width: 1280px;
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
    margin-bottom: 20px !important;
    margin: auto;
  }
  .boxGuide {
    max-width: 1280px;
    margin: auto;
    ul {
      li {
        margin-top: 5px;
        font-size: 16px;
        &:before {
          content: "";
          display: block;
          width: 4px;
          height: 4px;
          background-color: #aaa;
          float: left;
          margin: 10px 5px 0 0;
        }
        &:first-child {
          color: rgb(0,148,251);
        }
      }
    }
  }
  .goMain {
    padding: 0 30px;
    font-size: 17px;
    width: 130px;
    margin: 30px 50% 0 50%;
    transform: translate(-50%);
  }
`;

const ChangePassward = memo(() => {
  const navigate = useNavigate();
  
  const goMain = e => {
    navigate('/mysevrance');
  };

  return (
    <Container>
      <MyPageHeader />
      <div className="bgAll">
        <h1>비밀번호변경</h1>
        <h4>네이버 등 SNS로그인 연동계정 회원 안내</h4>
        <div className="boxGuide">
          <img src={boxGuideDecor} alt="boxGuideDecor" />
          <ul>
            <li>회원님은 SNS 아이디로 로그인 연동중인 회원입니다.</li>
            <li>
              SNS 연동계정 비밀번호 변경은 SNS 홈페이지 &#62; 내정보에서
              비밀번호를 변경해 주시기 바랍니다.
            </li>
            <li>
              개인정보 도용으로 인한 피해를 방지하기 위하여 비밀번호를
              주기적으로 변경하시는 것이 좋습니다.
            </li>
          </ul>
        </div>
        <button className='goMain buttonBlue' onClick={goMain}>메인으로</button>
      </div>
      <LoginFooter />
    </Container>
  );
});

export default ChangePassward;
