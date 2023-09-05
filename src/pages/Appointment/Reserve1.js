/**
 * @ File Name: Reserve1.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-23 17:33:33
 * @ Description: 예약 페이지의 임시 컴포넌트
 */

/** import */
import React, { memo, useCallback, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

/** 이미지 */
// 회원 예약 이미지
import bgBox02 from "../../assets/img/bg-box-02.png";
import box02 from "../../assets/img/ico-box-02.png";
import radiocheck from "../../assets/img/ico-radio-checked.png";
import chevron from "../../assets/img/ico-chevron-down@2x.png";

/** 임시 cont */
const Cnt = styled.div`
  display: flex;
`;

/** 회원 정보 박스 스타일 */
const MemberDataBox = styled.div`
  width: 305px;
  height: 803px;

  position: relative;
  margin: 0 10px;

  font-size: 14px;
  text-align: center;

  display: block;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;

  /* &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    border: 1px solid #e6e6e6;
  } */

  .title {
    font-size: 20px;
    font-weight: 700;
    padding: 24px 0;
  }

  .username {
    font-size: 18px;
    font-weight: 700;
    line-height: 285px;
    background-color: #f9f9f9;
  }

  .btns {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40px;
    margin: 0 20px;
    box-sizing: border-box;

    a {
      button {
        width: 100%;
        height: 50px;
        margin-top: 20px;

        font-size: 18px;

        border: 2px solid transparent;
        border-color: #959595;
        border-radius: 25px;
        background-color: #fff;
        box-sizing: border-box;

        color: #0094fb;
        border-color: #0094fb;
        background-color: #fff;
      }

      &:first-child button {
        color: #333;
        border-color: #959595;
        background-color: #fff;
      }
    }
  }
`;

/** 회원 예약 박스 스타일 */
const MemberReserveCover = styled.div`
  width: 305px;
  height: 803px;
  position: relative;
  margin: 0 10px;

  background: #f9f9f9 url(${bgBox02}) no-repeat right 34px;
  display: block;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid #e6e6e6;
    box-sizing: border-box;
  }

  a {
    display: block;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    font-size: 20px;
    font-weight: 700;

    .iconCont {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      i {
        width: 80px;
        height: 80px;
        display: block;

        margin: 0 auto 30px;
        background: #f9f9f9 url(${box02}) no-repeat center / cover;
      }

      span {
        height: 50px;
        display: inline-block;

        text-align: center;
        line-height: 1.25;
      }
    }
  }
`;

/** 회원 예약 양식 */
const MemberReserveBox = styled.div`
  width: 305px;
  height: 803px;

  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  background: #fff;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;

  display: none;
  font-size: 14px;
  text-align: center;

  .title {
    font-size: 20px;
    font-weight: 700;
    padding: 24px 0;
  }

  .form {
    text-align: left;

    .radios {
      background-color: #f9f9f9;
      padding: 17px 20px 20px;
      margin-bottom: 14px;
      box-sizing: border-box;

      span {
        line-height: 20px;
        vertical-align: middle;

        &:last-child {
          margin-left: 26px;
        }

        label {
          font-size: 16px;
          font-weight: bold;

          input[type="radio"] {
            width: 20px;
            height: 20px;

            vertical-align: middle;
            appearance: none;
            margin: -2px 5px 0 0;

            background-color: #fff;
            border: 1px solid #aaa;
            border-radius: 50%;
            box-sizing: border-box;
          }

          input[type="radio"]:checked {
            border: 1px solid black;
            background: #fff url(${radiocheck}) no-repeat center;
            background-size: 10px 10px;
          }
        }
      }
    }

    .agree {
      margin: 0 20px;
      font-size: 16px;
      font-weight: bold;
    }

    dl {
      padding: 18px 20px 20px;
      box-sizing: border-box;
      font-size: 14px;

      dt {
        font-size: 16px;
        font-weight: bold;
      }

      .name {
      }
      .tel {
        margin-top: 15px;
      }

      .nameInput {
        margin-top: 6px;

        #userName {
          width: 100%;
          height: 40px;

          font-size: 14px;
          line-height: 27px;
          text-align: center;

          color: #c2c2c2;
          background-color: #f9f9f9;

          opacity: 1;

          border: 1px solid #dadada;
          border-collapse: collapse;

          padding: 8px 15px;
          box-sizing: border-box;

          &:focus {
            outline: none;
          }
        }
      }

      .telInput {
        width: 100%;
        height: 40px;

        font-size: 14px;
        line-height: 27px;
        text-align: center;
        display: flex;

        margin-top: 6px;

        select {
          width: 30%;

          border: 1px solid #dadada;
          border-radius: 0;

          padding: 8px 15px;
          padding-right: 30px;
          box-sizing: border-box;

          text-align: left;
          appearance: none;

          background: #fff url(${chevron}) no-repeat right 12px center;
          background-size: 17px auto;

          &:focus {
            outline: none;
            border: 1px solid #0094fb;
          }
        }

        input {
          width: 30%;

          text-align: left;
          line-height: 27px;
          vertical-align: middle;
          box-sizing: border-box;
          border: 1px solid #dadada;
          border-radius: 0;
          padding: 8px 15px;
          background: #fff;

          &:focus {
            outline: none;
            border: 1px solid #0094fb;
          }
        }

        span {
          width: 5%;
          text-align: center;
          height: 40px;
          line-height: 40px;
          color: #aaaaaa;

          box-sizing: border-box;
        }
      }
    }

    .agreeBox {
      background-color: #f9f9f9;
      padding: 15px 20px;

      p:first-child {
        font-size: 16px;
        font-weight: bold;
        padding-bottom: 15px;
      }
      p:last-child {
        font-size: 14px;
      }

      //동의체크박스
      .agreeSelect {
        padding-top: 40px;

        .agreeRadio:last-child {
          padding-left: 15px;
        }

        label {
          font-size: 14px;
        }

        input[type="radio"] {
          width: 20px;
          height: 20px;

          vertical-align: middle;
          appearance: none;
          margin: -2px 5px 0 0;

          background-color: #fff;
          border: 1px solid #aaa;
          border-radius: 50%;
          box-sizing: border-box;
        }

        input[type="radio"]:checked {
          border: 1px solid black;
          background: #fff url(${radiocheck}) no-repeat center;
          background-size: 10px 10px;
        }
      }
    }
  }

  .btns {
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    margin: 0 20px;

    button {
      width: 100px;
      height: 50px;
      padding: 0 28px;
      font-size: 18px;

      color: #333;
      background-color: #fff;
      border: 2px solid #959595;
      border-radius: 25px;

      &:last-child {
        margin-left: 6px;
        color: #fff;
        background-color: #0094fb;
        border: 2px solid transparent;
      }
    }
  }
`;

/** 팝업 스타일 */
const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.7);
  box-sizing: border-box;

  visibility: hidden;

  .popupCont {
    width: 360px;

    position: relative;
    top: 50%;
    left: 50%;
    z-index: 1100;
    transform: translate(-50%, -50%);

    background-color: #fff;

    p {
      max-height: 570px;
      display: block;
      padding: 30px;
      text-align: center;
    }

    footer {
      text-align: center;

      margin-top: -30px;
      padding: 30px;
      box-sizing: border-box;

      button {
        min-width: 80px;
        height: 40px;

        background-color: #0094fb !important;
        font-size: 16px;
        color: #fff;

        border: 1px solid transparent;
        border-radius: 3px;
        padding: 0 19px;
      }

      .cancelBtn {
        margin-left: 6px;
        background-color: #666 !important;
      }
    }
  }
`;

const Reserve1 = memo(() => {
  // 경로 변경 시, useEffect 동작을 위한 location
  const location = useLocation();

  /** ref */
  const agreePopup = useRef();
  const memberReserveBox = useRef();
  const memberReserveCover = useRef();
  const memberDataBox = useRef();

  /** 회원 예약 커버의 display를 변경한다. */
  const offCover = useCallback((e) => {
    memberReserveCover.current.style.display = "none";
    memberReserveBox.current.style.display = "block";
  }, []);

  /** 회원 예약 커버의 display를 변경한다. */
  const onCover = useCallback((e) => {
    memberReserveCover.current.style.display = "block";
    memberReserveBox.current.style.display = "none";
  }, []);
  

  /** 팝업 */
  // 팝업 열기 
  // 다음 버튼 클릭시 회원예약정보 이동
  const openPopup = useCallback((e) => {
    // agreePopup.current.style.visibility = "visible";
    memberDataBox.current.style.display = "none";
    memberReserveBox.current.style.opacity = "0.6";
    memberReserveBox.current.style.pointerEvents = "none";
  }, []);

  // 팝업 닫기
  const closePopup = useCallback((e) => {
    agreePopup.current.style.visibility = "hidden";
  }, []);

  // URL 경로 이동 시, 팝업을 닫는다.
  useEffect(() => {
    agreePopup.current.style.visibility = "hidden";
  }, [location.pathname]);

  return (
    <Cnt>
      {/* 회원 정보 박스 */}
      <MemberDataBox ref={memberDataBox}>
        <p className="title">회원 정보</p>
        <p className="username">
          <span>박다윗</span> 님
        </p>
        <div className="btns">
          <Link to="/">
            <button type="button">로그아웃</button>
          </Link>
          <Link to="/mysevrance">
            <button type="button">MY세브란스</button>
          </Link>
          <Link to="/reserve-status">
            <button type="button">예약 현황 조회</button>
          </Link>
          <Link to="/user_info/resultinquiry">
            <button type="button">과거 진료이력 확인</button>
          </Link>
        </div>
      </MemberDataBox>

      {/* 회원 예약 커버 */}
      <MemberReserveCover>
        <div ref={memberReserveCover}>
          <a href="#reserve" data-intro="cover" onClick={offCover}>
            <div className="iconCont">
              <i />
              <span>회원 예약</span>
            </div>
          </a>
        </div>

        {/* 회원 예약 양식 */}
        <MemberReserveBox ref={memberReserveBox}>
          <p className="title">회원 예약</p>
          <div className="form">
            <div className="radios">
              <span>
                <label htmlFor="radio1">
                  <input type="radio" name="radio" id="radio1" />
                  본인 예약
                </label>
              </span>
              <span>
                <label htmlFor="radio2">
                  <input type="radio" name="radio" id="radio2" />
                  대리 예약
                </label>
              </span>
            </div>

            {/* 본인 정보 입력 */}
            <p className="agree">1. 본인 정보 입력</p>
            <dl>
              <dt className="name">
                <label>성명</label>
              </dt>
              <dd className="nameInput">
                <input type="text" name="certForm_rsvctmNm" id="userName" data-error-message="성명을 입력해주세요." defaultValue="박다윗" readOnly />
              </dd>
              <dt className="tel">
                <label>연락처</label>
              </dt>
              <dd className="telInput">
                <select>
                  <option selected>010</option>
                  <option>011</option>
                  <option>016</option>
                  <option>017</option>
                  <option>018</option>
                  <option>019</option>
                  <option>070</option>
                  <option>02(서울)</option>
                  <option>031(경기)</option>
                  <option>032(인천)</option>
                  <option>033(강원)</option>
                  <option>041(충남)</option>
                  <option>042(대전)</option>
                  <option>043(충북)</option>
                  <option>051(부산)</option>
                  <option>052(울산)</option>
                  <option>053(대구)</option>
                  <option>054(경북)</option>
                  <option>055(경남)</option>
                  <option>061(전남)</option>
                  <option>062(광주)</option>
                  <option>063(전북)</option>
                  <option>064(제주)</option>
                </select>
                <span>-</span>
                <input type="tel" title="연락처 두번째 3자리 또는 4자리 입력" name="certForm_rsvctmCttpc_m" maxlength="4" data-minlength="3" />
                <span>-</span>
                <input type="tel" title="연락처 마지막 4자리 입력" name="certForm_rsvctmCttpc_m" maxlength="4" data-minlength="4" />
              </dd>
            </dl>

            {/* 개인정보 동의 */}
            <div className="agreeBox">
              <p>개인정보 수집·이용 동의</p>
              <p>개인정보는 병원정보 조회를 위해서만 사용합니다. 개인정보 이용에 동의합니다.</p>

              <form className="agreeSelect">
                <span className="agreeRadio">
                  <label>
                    <input type="radio" id="agree1" name="agree" />
                    동의합니다.
                  </label>
                </span>
                <span className="agreeRadio">
                  <label>
                    <input type="radio" id="agree2" name="agree" />
                    동의하지 않습니다.
                  </label>
                </span>
              </form>
            </div>
          </div>

          {/* 이전, 다음 버튼 */}
          <div className="btns">
            <button type="button" onClick={onCover}>
              이전
            </button>
            <button type="button" onClick={openPopup}>
              다음
            </button>
          </div>
        </MemberReserveBox>
      </MemberReserveCover>

      {/* 회원가입 팝업 */}
      <Popup ref={agreePopup}>
        <div className="popupCont">
          <p>개인정보 수집·이용 조회 제공에 동의해야 예약이 가능합니다.</p>
          <footer>
            <button type="button" onClick={closePopup}>
              닫기
            </button>
          </footer>
        </div>
      </Popup>
    </Cnt>
  );
});

export default Reserve1;
