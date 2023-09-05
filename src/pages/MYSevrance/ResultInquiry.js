/**
 * @ File Name: ResultInquiry.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-16 14:50
 * @ Description: 결과조회 본인인증 페이지
 */

import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import MyPageHeader from "../../components/MyPageHeader";
import LoginFooter from "../../components/LoginFooter";
import styled from "styled-components";
import ipin from "../../assets/img/img-login-Certified01.png";
import phone from "../../assets/img/img-login-Certified02.png";
import official from "../../assets/img/img-login-Certified03.png";

const Container = styled.div`
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  h4 {
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
    margin-bottom: 20px !important;
  }
  p {
    text-align: center;
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
          background-color: rgb(0, 148, 251);
          float: left;
          margin: 10px 5px 0 0;
        }
        &:first-child {
          color: rgb(0, 148, 251);
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
      margin: 30px 30px 0 0;
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
      margin-right: 15px;
    }
  }
  .notice,
  .information {
    width: 700px;
    margin: auto;
    ul {
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
      }
    }
    .qna_button {
      float: right;
      width: 700px;
      background-color: white;
      border: 1px solid #e6e6e6;
      padding: 10px 25px;
      font-size: 16px;
      border-radius: 30px;
      margin: 40px auto;
    }
  }
  .information {
    h4 {
      margin: 47px 0 22px 0;
      position: relative;
      padding-left: 19px;
      &:before {
        position: absolute;
        width: 11px;
        height: 11px;
        border: 3px solid #0094fb;
        border-radius: 50%;
        box-sizing: border-box;
        content: "";
        margin: 10px 18px 0 0;
        left: 0;
      }
    }
    ul {
      background-color: #f9f9f9;
      margin-left: 20px;
      padding: 20px;
    }
  }
`;

const ResultInquiry = memo(() => {
  const navigate = useNavigate();

  const goLogin = (e) => {
    navigate("/login");
  };

  const goResult = (e) => {
    navigate('/user_info/result');
  };

  return (
    <Container>
      <MyPageHeader />
      <div className="bgAll">
        <h1>본인인증</h1>
        <p>
          개인 의료 정보가 포함된 병원정보 이용을 위해서는 본인인증이
          필요합니다.
        </p>
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
          <button type="button" className="ipin_btn" onClick={goResult}>
            아이핀 인증
          </button>
          <button type="button" className="phone_btn" onClick={goResult}>
            휴대폰 인증
          </button>
          <button type="button" className="official_btn" onClick={goResult}>
            범용 공인인증서
          </button>
        </div>
        <div className="notice">
          <ul>
            <li>
              전자서명법에 따라 병원에서는 범용공인인증서를 사용해 주세요.
              (유료)
            </li>
            <li>
              범용공인인증서로 인한 속도 저하 시 다른 인증방법을 선택해 주세요.
            </li>
            <li>NICE신용평가 본인인증 콜센터: 1600-1522</li>
          </ul>
          <button type="button" className="qna_button" onClick={goLogin}>
            범용 공인인증서 발급 안내?
          </button>
        </div>
        <div className="information">
          <h4>본인인증이 필요한 서비스 안내</h4>
          <ul>
            <li>예약조회 : 검사일정</li>
            <li>결과조회 : 내원일자, 입퇴원내역, 진료결과, 검사결과</li>
            <li>증명서발급 : 입퇴원 증명서, 통원증명서, 납입증명서 등</li>
            <li>
              진료예약 및 조회, 건강검진예약 및 조회 메뉴는 인증없이 이용
              가능합니다.
            </li>
          </ul>
        </div>
      </div>
      <LoginFooter />
    </Container>
  );
});

export default ResultInquiry;
