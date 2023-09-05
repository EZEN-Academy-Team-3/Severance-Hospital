/**
 * @ File Name: Withdraw.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-20 18:15
 * @ Description: 회원탈퇴 페이지
 */

import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import MyPageHeader from "../../components/MyPageHeader";
import LoginFooter from "../../components/LoginFooter";
import styled from "styled-components";
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";
import radioChecked from "../../assets/img/ico-radio-checked.png";

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
      }
    }
  }

  // 하단 버튼
  .buttons {
    width: 400px;
    margin: 40px auto;
    .goMain,
    .withdraw {
      padding: 0 30px;
      font-size: 17px;
      width: 130px;
    }
    .goMain {
      margin-left: 10px;
    }
  }

  // 테이블
  .info {
    margin: 60px auto;
  }
  table {
    width: 1280px;
    margin: auto;
    letter-spacing: 0.02em;
    line-height: 1.625;
    font-size: 16px;
    color: #333;
    border-top: 1px solid #ccc;
    width: 1280px;
    text-align: left;
    margin: auto;
    tr {
      border-bottom: 1px solid #e6e6e6;
      padding: 13px 20px;
      th {
        background-color: #f9f9f9;
        padding: 15px 15px;
        font-weight: bold;
        vertical-align: middle;
        width: 180px;
      }
      td {
        padding: 13px 20px;
      }
      &:last-child {
        border-bottom: 1px solid #ccc;
      }
      .require {
        color: #f76117;
        font-weight: bold;
      }
    }
    ul {
      li {
        color: #f76117;
        font-size: 14px;
      }
    }
  }

  // 탈퇴이유 선택
  .select {
    width: 1280px;
    margin: auto;
    h4 {
      margin: 47px 0 22px 0;
      position: relative;
      padding-left: 19px;
      // 제목 앞에 파란 동그라미
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
    p {
      margin-left: 20px;
    }
    // 사유 작성란
    textarea {
      display: none;
      width: 1220px;
      height: 150px;
      margin: 20px 0 60px 20px;
      border: 1px solid #dadada;
      border-radius: 0;
      padding: 8px 15px;
      background: #fff;
      appearance: none;
      text-align: left;
      font-size: 16px;
      vertical-align: middle;
      &:focus {
        outline: 1px solid rgb(0, 148, 251);
      }
    }
    // 라디오 버튼
    input[type="checkbox"] + label:before,
    input[type="radio"] + label:before {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid #aaa;
      vertical-align: middle;
      border-radius: 50%;
      margin: -2px 5px 0 0;
      background-color: #fff;
      content: "";
    }
    input[type="radio"] {
      display: none;
    }
    input[type="radio"]:checked + label:before {
      background: #fff url(${radioChecked}) no-repeat center center;
      background-size: 10px 10px;
    }
  }
  // 확인 폼
  .withdraw_check {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    padding-top: 120px;
    box-sizing: border-box;
    z-index: 9999;
    .popup {
      background-color: #fff;
      width: 350px;
      height: 160px;
      margin: auto;
      transform: translate(0, 50%);
      text-align: center;
      padding-top: 35px;
      box-sizing: border-box;

      // 버튼
      .yes,.no {
        margin-top: 33px;
        border: none;
        color: white;
        padding: 10px 25px;
        font-size: 15px;
        font-weight: 100;
        border-radius: 3px;
      }
      .yes {
        background-color: rgb(0, 148, 251);
        margin-right: 5px;
      }
      .no {
        background-color: #666;
      }
    }
  }
`;

const ChangePassward = memo(() => {
  const navigate = useNavigate();

  const goMain = (e) => {
    navigate("/mysevrance");
  };

  const closeBox = (e) => {
    document.querySelector(".withdraw_check").style.display = "none";
  };

  const goLogin = (e) => {
    navigate("/login");
  }

  const checkWithdraw = (e) => {
    document.querySelector(".withdraw_check").style.display = "block";
  };

  const showReason = (e) => {
    document.querySelector(".etc_reason").style.display = "block";
  }

  const dontShowReason = (e) => {
    document.querySelector(".etc_reason").style.display = "none";
  }

  return (
    <Container>
      <MyPageHeader />
      
      <div className="bgAll">
      <form className="withdraw_check">
            <div className="popup">
              <p>
                정말 탈퇴하시겠습니까?
              </p>
              <button type="button" className="yes" onClick={goLogin}>
                확인
              </button>
              <button type="button" className="no" onClick={closeBox}>
                취소
              </button>
            </div>
          </form>
        <h1>회원탈퇴</h1>
        <div className="boxGuide">
          <img src={boxGuideDecor} alt="boxGuideDecor" />
          <ul>
            <li>
              회원정보삭제 : 연세대학교 의료원 패밀리사이트에서 회원탈퇴가 되어
              회원정보가 삭제됩니다.
            </li>
            <li>
              진료결과조회 및 증명서 발급 등 병원서비스를 이용하실 수 없습니다.
            </li>
          </ul>
        </div>
        <table className="info">
          <tbody>
            {/* 성명 */}
            <tr>
              <th>성명</th>
              <td>김다보미 (1995.08.30 여)</td>
            </tr>
          </tbody>
        </table>
        {/* 탈퇴이유 선택 */}
        <div className="select">
          <h4>탈퇴하시는 이유를 선택해 주십시오</h4>
          <p>
            <input
              type="radio"
              name="secsnResn"
              id="secsnResn1"
              data-parsley-error-message="탈퇴하시는 이유를 선택해 주십시오."
              onClick={dontShowReason}
              required
            />
            <label htmlFor="secsnResn1">아이디변경을 위해서</label>
          </p>
          <p>
            <input type="radio" name="secsnResn" id="secsnResn2" onClick={dontShowReason} />
            <label htmlFor="secsnResn2">필요하고 유용한 정보가 없어서</label>
          </p>
          <p>
            <input type="radio" name="secsnResn" id="secsnResn3" onClick={dontShowReason} />
            <label htmlFor="secsnResn3">
              더 이상 이용하지 않거나, 이용하지 못하게 되어서
            </label>
          </p>
          <p>
            <input type="radio" name="secsnResn" id="secsnResn4" onClick={showReason} />
            <label htmlFor="secsnResn4">
              기타 (간략한 사유를 작성해 주십시오)
            </label>
          </p>
          <textarea
            className='etc_reason'
            rows="5"
            placeholder="60자 이내로 입력해 주세요."
            id="reasonEtc"
            title="기타 (간략한 사유를 작성해 주십시오)"
          ></textarea>
        </div>
        <div className="buttons">
          <button className="withdraw buttonBlue" onClick={checkWithdraw}>회원탈퇴</button>
          <button className="goMain buttonWhite" onClick={goMain}>
            메인으로
          </button>
        </div>
      </div>
      <LoginFooter />
    </Container>
  );
});

export default ChangePassward;
