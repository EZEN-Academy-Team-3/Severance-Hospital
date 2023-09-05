/**
 * @ File Name: NewPassword.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-23 11:20
 * @ Description: 비밀번호 변경완료 페이지
 */

import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginHeader from "../../components/LoginHeader";
import LoginFooter from "../../components/LoginFooter";
import chpw from '../../assets/img/img-change-pw@2x.png';

const Container = styled.div`
  position: relative;
  .bgAll {
    hr {
      border: 0;
      border-bottom: 1px solid #e6e6e6;
      width: 800px;
      margin: 20px auto 0;
    }
  }
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }

  .box_tip {
    border: 1px solid #e6e6e6;
    margin-top: 40px;
    padding: 45px 0 50px 230px;
    box-sizing: border-box;
    line-height: 2em;
    width: 800px;
    margin: 0 auto 40px;
    img {
        height: 40px;
        float: left;
        margin-right: 15px;
    }
    p {
        margin-top: 10px;
        font-size: 14px;
    }
  }
  .go_login {
    width: 130px;
    display: block;
    margin: auto;
  }
`;

const NewPassword = memo(() => {
  const navigate = useNavigate();

  const goLogin = e => {
    navigate('/login');
  }

  return (
    <Container>
      <LoginHeader />
      <div className="bgAll">
        <h1>비밀번호 변경</h1>
        <div className='box_tip'>
            <img src={chpw} alt="change_password" />
            <p>비밀번호가 성공적으로 변경되었습니다.</p>
        </div>
        <button type='button' className='go_login buttonBlue' onClick={goLogin}>로그인하기</button>
      </div>
      <LoginFooter />
    </Container>
  );
});

export default NewPassword;
