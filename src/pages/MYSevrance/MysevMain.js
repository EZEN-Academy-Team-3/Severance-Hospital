/**
 * @ File Name: MysevMain.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-12 17:54:00
 * @ Description: 마이세브란스 메인페이지
 */

import React, { memo } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MyPageHeader from "../../components/MyPageHeader";
import LoginFooter from "../../components/LoginFooter";
import TopButton from "../../components/TopButton";
// 서브라우팅
import UserInfo from "./UserInfo";
//이미지 import
import mybgPattern from "../../assets/img/mybg-pattern.png";
import myEdit from "../../assets/img/ico-mypage-edit@2x.png";
import mybtn1 from "../../assets/img/main-ico-btn01@2x.png";
import mybtn2 from "../../assets/img/main-ico-btn02@2x.png";
import mybtn3 from "../../assets/img/main-ico-btn03@2x.png";
import mybtn4 from "../../assets/img/main-ico-btn04@2x.png";

const Div = styled.article`
  .content {
    min-height: calc(100vh - 345px);
    min-width: 1025px;
    display: block;
    ${`background: url(${mybgPattern}) no-repeat center top;`}
    overflow: hidden;
  }
  .pageCont {
    overflow: hidden;
    padding: 40px 0 0 !important;
    position: relative;
  }

  //그리드
  .gridItem {
    float: left;

    width: calc(33% - 9px);
    height: 340px;
    border: 1px solid #e6e6e6;
    margin-bottom: 20px;
    margin-right: 12px;
    background-color: #fff;
    padding: 26px 30px 30px;
    box-sizing: border-box;
    &:first-child {
      background-color: #eef7fc;
    }
    &:nth-child(-n + 3) {
      height: 155px;
      border: none;
    }
    &:nth-child(3) {
      background-color: transparent;
      ::after {
        clear: both;
      }
    }
    &:nth-child(6) {
      height: 584px;
    }
    //후원/자원봉사
    &:nth-child(7) {
      position: absolute;
      left: 0%;
      top: 575px;
      background-color: #f9f9f9;
      border: none;
      height: 224px;
      .btnCont {
        display: flex;
        width: 100%;
      }
      .btn {
        width: 50%;
        height: 110px;
        font-weight: 700;
        padding: 0 19px;
        font-size: 16px;
        box-sizing: border-box;
      }
    }
    //나의작성글
    &:nth-child(8) {
      position: absolute;
      left: 33.3%;
      top: 575px;
      height: 224px;
      .btnCont {
        display: flex;
        width: 100%;
      }
      .btn {
        width: 50%;
        height: 110px;
        font-weight: 700;
        padding: 15px 20px;
        font-size: 16px;
        box-sizing: border-box;
        border: none;
        border-radius: 0;
        background-color: #eef7fc;

        p {
          font-size: 18px;
          margin: 8px 0;
        }
        .count {
          text-align: right;
          font-size: 18px;
          margin: 8px 0;
          a {
            font-size: 30px;
            text-decoration: underline;
            margin-right: 10px;
          }
        }
      }
    }
  }

  .titleWrap {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    color: #333;

    span {
      font-size: 24px;
      font-family: "NanumSquare", "malgungothic", "Helvetica Neue", Arial,
        sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
        "Noto Color Emoji";
      line-height: 38px;
      font-weight: bold;
    }
  }
  //개인정보 개인정보수정,비밀번호변경 버튼
  .btnCont {
    margin-top: 5px;
  }
  .btn {
    &:nth-child(2) {
      margin-left: 8px;
    }
    color: #333;
    border: 1px solid #959595;
    background-color: #fff;
    min-width: 65px;
    height: 30px;
    padding: 0 10px;
    font-size: 14px;
    border-radius: 3px;
    box-sizing: border-box;
    align-items: center;
    overflow: hidden;
  }
  //폼,설정버튼
  .inputGroup {
    display: flex;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, "NanumGothic",
      "malgungothic", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

    .inputAddon {
      padding-left: 10px;
      vertical-align: middle;
      .editBtn {
        color: #fff;
        background-color: #666;
        width: 104.09px;
        height: 45px;
        padding: 0 24px;
        font-size: 16px;
        border: none;
        border-radius: 3px;
        align-items: center;
        box-sizing: border-box;
        display: flex;
        .icoMypageEdit {
          width: 19px;
          height: 19px;
          line-height: 19px;
          ${`background: url(${myEdit});`}
          display: inline-block;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          vertical-align: middle;
          overflow: hidden;
          text-indent: -9999px;
          margin-right: 5px;
        }
      }
    }
    //진료예약, 검진예약
    p {
      margin: 4px 0;
    }
  }
  //나의 건강체크
  .dataWrap {
    margin: 55px 0;
    display: flex;
    .data {
      width: 33.3%;
      display: flex;
      flex-direction: column;
      p {
        padding: 0 10px 25px;
        margin: 4px 0;
        text-align: center;
      }
      .btn {
        margin: auto;
        width: 75%;
      }
    }
  }

  //결과조회
  .bgPrimary {
    .titleWrap {
      color: #fff;
    }
  }
  .linkWrap {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    a {
      color: #fff;
      display: block;
      width: 50%;
      text-align: center;
      margin-top: 20px;
      &:first-child::before {
        ${`background: url(${mybtn1}) no-repeat center top;`}
        background-size: 100%;
      }
      &:nth-child(2)::before {
        ${`background: url(${mybtn2}) no-repeat center top;`}
        background-size: 100%;
      }
      &:nth-child(3)::before {
        ${`background: url(${mybtn3}) no-repeat center top;`}
        background-size: 100%;
      }
      &:nth-child(4)::before {
        ${`background: url(${mybtn4}) no-repeat center top;`}
        background-size: 100%;
      }
      &::before {
        content: "";
        width: 60px;
        height: 60px;
        display: block;
        margin: 0 auto 10px;
      }
    }
  }
`;

const MysevMain = memo(() => {

  let userInfo = JSON.parse(window.sessionStorage.userInfo);

  // if (!window.sessionStorage.userInfo) {
  //   // 로그인 아님
  // } else {
  //   // 로그인 ok

  //   // 로그인 정보
  //   userInfo = JSON.parse(window.sessionStorage.userInfo);
  //   console.log(userInfo);
  // }

  /** 페이지 강제 이동을 처리하기 위한 navigate함수 생성 */
  const navigate = useNavigate();

  const goDetailsEdit = (e) => {
    navigate("/details_edit");
  };

  const goChangePw = (e) => {
    navigate("/change_password");
  };

  return (
    <Div>
      {/* 서브라우팅 */}
      <Routes>
        <Route path="/user_info/*" element={<UserInfo />} />
      </Routes>
      <TopButton />
      <MyPageHeader />
      <div className="content">
        <div className="pageCont">
          {/* 개인정보 */}
          <div className="gridItem">
            <div className="titleWrap">
              <span>{userInfo.userName}님</span>
              <div className="btnCont">
                <button type="button" className="btn">
                  <Link to='/user_info/details_edit'>개인정보수정</Link>
                </button>
                <button type="button" className="btn">
                  <Link to='/user_info/change_password'>비밀번호변경</Link>
                </button>
              </div>
            </div>
            <div className="inputGroup">
              <select className="formControl selectCss" title="병원등록번호">
                <option value="3840864" defaultValue>
                  세브란스병원: 3840864
                </option>
              </select>
              <span className="inputAddon">
                <button type="button" className="editBtn">
                  <i className="icoMypageEdit"></i>설정
                </button>
              </span>
            </div>
          </div>
          {/* 진료예약 */}
          <div className="gridItem">
            <div className="titleWrap">
              <span>진료예약</span>
            </div>
            <div className="inputGroup">
              <p>예약된 진료가 없습니다.</p>
            </div>
          </div>
          {/* 검진예약 */}
          <div className="gridItem">
            <div className="titleWrap">
              <span>검진예약</span>
            </div>
            <div className="inputGroup">
              <p>예약된 검사가 없습니다.</p>
            </div>
          </div>
          {/* 나의 건강체크 */}
          <div className="gridItem">
            <div className="titleWrap">
              <span>나의 건강체크</span>
              <div className="btnCont">
                <button type="button" className="btn">
                  Today 등록
                </button>
              </div>
            </div>
            <div className="dataWrap">
              <div className="data">
                <p>등록된 데이터가 없습니다.</p>
                <button type="button" className="btn">
                  체중 등록
                </button>
              </div>
              <div className="data">
                <p>등록된 데이터가 없습니다.</p>
                <button type="button" className="btn">
                  혈압 등록
                </button>
              </div>
              <div className="data">
                <p>등록된 데이터가 없습니다.</p>
                <button type="button" className="btn">
                  혈당 등록
                </button>
              </div>
            </div>
          </div>
          {/* 결과조회 */}
          <div className="gridItem bgPrimary">
            <div className="titleWrap">
              <span>결과조회</span>
              <div className="btnCont">
                <p>본인인증이 필요한 서비스입니다.</p>
              </div>
            </div>
            <div className="linkWrap">
              <Link to="/user_info/resultinquiry">검사결과</Link>
              <Link to="/user_info/resultinquiry">약처방정보</Link>
              <Link to="/user_info/resultinquiry">내원일자</Link>
              <Link to="/user_info/resultinquiry">입퇴원내역</Link>
            </div>
          </div>
          {/* 진료 및 검진예약 일정*/}
          <div className="gridItem">
            <div className="titleWrap">
              <span>결과조회</span>
            </div>
            <div className="resDataCont">
              <div className="nodata">
                <i className="nodataIcon"></i>
                <p>예약된 일정이 없습니다.</p>
              </div>
            </div>
          </div>
          {/* 후원 자원봉사 */}
          <div className="gridItem">
            <div className="titleWrap">
              <span>나의 후원/자원봉사</span>
            </div>
            <div className="inputGroup">
              <div className="btnCont">
                <button type="button" className="btn">
                  <a
                    href="https://secure.donus.org/severance/pay/step1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    후원하기
                  </a>
                </button>
                <button type="button" className="btn">
                  <a>
                    자원봉사<br></br>신청내역
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* 나의 작성글 */}
          <div className="gridItem">
            <div className="titleWrap">
              <span>나의 작성글</span>
            </div>
            <div className="inputGroup">
              <div className="btnCont">
                <div className="btn">
                  <p>칭찬합니다</p>
                  <div className="count">
                    <Link
                      to="/mysevrance/iseverance/mywriting"
                      className="textPrimary"
                    >
                      0
                    </Link>
                    <span>건</span>
                  </div>
                </div>
                <div className="btn">
                  <p>건의합니다</p>
                  <div className="count">
                    <Link
                      to="/mysevrance/iseverance/mywriting"
                      className="textPrimary"
                    >
                      0
                    </Link>
                    <span>건</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginFooter />
    </Div>
  );
});

export default MysevMain;
