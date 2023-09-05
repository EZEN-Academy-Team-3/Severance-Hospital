/* 
이미지 버튼 누르면 diplay:none 처리후, 로그인/회원가입 버튼css diplay:block 처리
이전 버튼 누르면 로그인/회원가입 버튼css display:none처리후 다시 이미지 버튼 diplay:block
*/
/** import */
import React, { memo, useCallback, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Collapse from '../../components/Collpase';
import logoappt from '../../assets/img/logo-appt.png';

/** 이미지 */
// 회원 예약 이미지
import bgBox02 from "../../assets/img/bg-box-02.png";
import box02 from "../../assets/img/ico-box-02.png";
import radiocheck from "../../assets/img/ico-radio-checked.png";
import chevron from "../../assets/img/ico-chevron-down@2x.png";
//진료과아이콘
import ico1 from '../../assets/img/ico-online-method01.png';
import ico2 from '../../assets/img/ico-online-method02.png';
// 진료예약 이미지
import DrChoice from "../../assets/img/img-doctor-search-default.png";
import search from "../../assets/img/ico-search-white.png";
import profile from "../../assets/img/442888.png";

import Step1 from './Reserve1';
import Step2 from './HJAppt';
import Step3 from './Drstep1';
import Step4 from './Drstep2';
import Step5 from './HJstep3';
import Step6 from './HJstep4';


/**
 * 병원선택 박스 styled components
 */ 
const ApptHeader = styled.div`
    width: 1280px;
    height: 97px;
    margin-left: 20px;

    
    .apptHeaderDiv1 {
    
        display: flex;
        justify-content: space-between;
        div {
            &:first-child {
            width: 370px;
        }
            padding: 31px 0 28px 28px;

            img {
                width: 370px;
                height: 40px;
                object-fit: cover;
            }
        }


        div {
            width: 180px;

            button {
                margin-top: 15px;
                background-color: rgba(0, 0, 0, 0);
                border: 1px solid rgba(0, 0, 0, 0);
                height: 26px;
                font-size: 16px;
                padding: 0px;
            }

            span {
                color: #dadada;
                margin: 0 5px;
            }
        }
    }
    
`;

const ApptSelectCont = styled.div`
    display: flex;
    height: 803px;
    .step1Cont {
        margin-left: 50px;
        /* margin-top: 50px; */
        width: 305px;
        height: 100%;
        background: #fff;
        border: 1px solid #e6e6e6;

        h1 {
            padding: 24px 0;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
        }

        .selectCont {
            padding: 24px 0;
            margin: 0 20px;
            background-color: #f9f9f9;
        }

        .telInfo {
            padding-top: 16px;
            padding-bottom: 16px;
            text-align: center;
            dt {
                font-weight: bold;
            }

            dd {
                a {
                    font-size: 40px;
                    color: #0094fb;
                    font-weight: 700;
                }
            }
        }

        .listInfo {
            padding-top: 21px;
            margin: 0 20px;
            border-top: 1px solid #ededed;

            ul {
                /* 리스트 스타일 ListStyleUl > li */
                li {
                padding-left: 12px;
                margin-top: 5px;
                position: relative;

                    &:first-child {
                        margin-top: 0;
                    }

                    &::before {
                        content: "";
                        width: 4px;
                        height: 4px;

                        position: absolute;
                        top: 0.7em;
                        left: 0;

                        background-color: #0094fb;
                    }
                }
            }
        }
    }
`;

const content = [{
    title: '세브란스병원',
    department: ['연세암병원','심장혈관병원','어린이병원','안과병원','재활병원'],
},
]


/**
 * Reserve1.js
 * 회원정보, 회원예약정보 박스 styled components
 */  
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

  /* &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid #e6e6e6;
    box-sizing: border-box;
  } */

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


/**
 * HJAppt.js
 * 예약 방법 선택 박스 styled components
 */ 
const Div = styled.div`
  display: none;

  .reserveBox {
    width: 305px;
    height: 803px;
    background: #fff;
    margin: 0 10px;
    position: relative;
    border: 1px solid #e6e6e6;
    /* background-color: #f9f9f9; */
    box-sizing: border-box;

    .boxsTop {
      padding: 24px 0;
      background-color: #fff;
    }
  }

  .tit {
    text-align: center;
    background: #fff;
    font-family: 'NanumSquare', 'malgungothic', 'Helvetica Neue', Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
  }
  .textTitle {
    font-size: 20px;
    font-weight: 700;
  }
  .boxsCF {
    margin: 0 20px;
  }

  .text-md {
    font-weight: bold;
    margin: 0 20px;
  }

  //예약 선택 버튼
  .apptBtn {
    width: 100%;
    height: 100px;
    background-color: #fff;
    margin-top: 15px;
    border-radius: 10px;
    border: 1px solid #e6e6e6;

    span {
      img {
        margin: auto;
        height: 26px;
        width: 26px;
      }

      p {
        font-size: 16px;
        margin-top: 5px;
      }
    }

    //버튼 클릭했을 때
    &:active{
        border: 2px solid #0094fb;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        p{color: #0094fb}
    }
  }

  //이전다음 버튼
  .buttonCont {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding-bottom: 30px;
  }
  .buttonWhite {
    border-color: #959595 !important;
    color: #333 !important;
  }
`;


/**
 * Drstep1.js
 * 진료 예약 박스 styled components
 */ 
const Container = styled.div`
  display: none;

  width: 630px;
  color: #333;
  letter-spacing: 0.02em;
  line-height: 1.625;
  background-color: #f9f9f9;
  border: 1px solid #e6e6e6;
  padding: 20px;
  box-sizing: border-box;
  .title {
    p {
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 20px;
    }
  }

  // 검색어 입력 인풋
  .search_input {
    width: 515px;
    height: 42px;
    float: left;
    padding: 0;
    padding-left: 10px;
    margin-right: 10px;
    border: 1px solid #e6e6e6;
    &:focus {
      outline: 1px solid rgb(0, 148, 251);
    }
  }

  // 검색버튼
  .search_btn {
    height: 42px;
    width: 50px;
    border-radius: 2px;
    background-color: #0094fb;
    border: 2px solid #0094fb;
    color: #fff;
    cursor: pointer;
    img {
      margin: auto;
    }
  }

  // 초성 버튼
  .search_doctor {
    margin: 15px -2.4px;
    ul {
      display: flex;
      flex-wrap: wrap;
      font-size: 14px;
      li {
        margin: 5px 4.5px;
        float: left;
        input[type="radio"] + label {
          display: inline-block;
          border-radius: 24px;
          background: #fff;
          text-align: center;
          line-height: 24px;
          font-size: 14px;
          min-width: 28px;
          height: 28px;
          border: 1px solid #e6e6e6;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          color: #ccc;
        }
        input[type="radio"] {
          display: none;
        }
        input[type="radio"]:checked + label {
          background-color: #0094fb;
          color: #fff;
          border-color: #0094fb;
        }
      }
      .all input[type="radio"] + label {
        width: 65px;
      }
    }
  }

  // 처음 의료진 성명 검색 안내 박스
  .intro {
    display: none;
    .dr_choice {
      width: 100%;
      height: 470px;
      background-color: #fff;
      font-size: 14px;
      box-sizing: border-box;
      padding-top: 25%;
      border: 1px solid #dadada;
      p {
        text-align: center;
        span {
          color: #0094fb;
        }
      }
      img {
        margin: 0 auto 30px;
      }
    }
    button {
      display: block;
      background-color: #fff;
      color: #333;
      border: 2px solid #959595;
      width: 100px;
      height: 50px;
      padding: 0 28px;
      font-size: 18px;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      margin: 40px auto 20px;
      border-radius: 50px;
    }
  }

  // 검색결과 의사목록
  .doctor_list_wrap {
    height: 470px;
    position: relative;
    .card {
      li {
        a {
          &:focus {
            outline: 1px solid #0094fb;
            border-radius: 10px;
          }
          .doctor_profile {
            float: left;
            width: 170px;
            height: 200px;
            background-color: #fff;
            border: 1px solid #e6e6e6;
            border-radius: 10px;
            text-align: center;
            padding: 20px 10px;
            position: relative;
            overflow: hidden;
            margin-right: 10px;
            img {
              position: absolute;
              top: 10%;
              left: 20%;
              width: 115px;
              height: 115px;
              border-radius: 50%;
              display: block;
              float: left;
            }
            dl {
              position: absolute;
              top: 60%;
              dt {
                font-size: 18px;
                font-weight: bold;

                margin-bottom: 10px;
              }
              dd {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
    .buttons {
      clear: both;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      .pre_btn {
        display: block;
        background-color: #fff;
        color: #333;
        border: 2px solid #959595;
        width: 100px;
        height: 50px;
        padding: 0 28px;
        font-size: 18px;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        margin: 40px auto 20px;
        border-radius: 50px;
      }
    }
  }

  // 검색결과 없을 때
  .no_data {
    display: none;
    width: 100%;
    height: 470px;
    font-size: 14px;
    padding-top: 150px;
    box-sizing: border-box;
    p {
      padding-bottom: 180px;
      text-align: center;
    }
    button {
      display: block;
      background-color: #fff;
      color: #333;
      border: 2px solid #959595;
      width: 100px;
      height: 50px;
      padding: 0 28px;
      font-size: 18px;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      margin: 40px auto 20px;
      border-radius: 50px;
    }
  }
`;



const ApptSelect = memo(() => {
/**
 * 병원선택 박스
 */ 
    const navigate = useNavigate();

    /** 로그아웃 버튼 */
    const onClickLogout = useCallback((e) => {
        e.preventDefault();



        navigate("/apptSelect")
    });


/**
 * Reserve1.js
 * 회원정보, 회원예약정보 박스
 */    
  // 경로 변경 시, useEffect 동작을 위한 location
  const location = useLocation();

  /** ref */
  const agreePopup = useRef();
  const memberReserveBox = useRef();
  const memberReserveCover = useRef();
  const memberDataBox = useRef();
  const memberData = useRef();
  const diagnoseAppt = useRef();

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
  // 다음 버튼 클릭시 회원예약정보 이동, 예약 방법 선택 박스 등장
  const openPopup = useCallback((e) => {
    // agreePopup.current.style.visibility = "visible";
    memberDataBox.current.style.display = "none";
    memberReserveBox.current.style.opacity = "0.6";
    memberReserveBox.current.style.pointerEvents = "none";
    departmentAppt.current.style.display = "block";
  }, []);

  // 팝업 닫기
  const closePopup = useCallback((e) => {
    agreePopup.current.style.visibility = "hidden";
  }, []);

  // URL 경로 이동 시, 팝업을 닫는다.
  useEffect(() => {
    agreePopup.current.style.visibility = "hidden";
  }, [location.pathname]);


/**
 * HJAppt.js
 * 예약 방법 선택 박스
 */ 
  const departmentAppt = useRef();

  /** 예약 방법 선택 이전 버튼(회원예약정보 등장) */
  const onMemberInfo = useCallback((e) => {
    departmentAppt.current.style.display = "none";
    memberReserveBox.current.style.opacity = "1.0";
    memberReserveBox.current.style.pointerEvents = "auto";
    memberDataBox.current.style.display = "block";
  }, []);

  /** 의사 예약 버튼 */
  const onStaffBtn = useCallback((e) => {
    departmentAppt.current.style.display = "none";
    memberReserveBox.current.style.display = "none";
    memberData.current.style.display = "none";
    diagnoseAppt.current.style.display = "block";
  }, []);


/**
 * Drstep1.js
 * 진료 예약 박스
 */ 
  /** 진료예약 이전 버튼 */
  const offDiagnose = useCallback((e) => {
    departmentAppt.current.style.display = "block";
    memberReserveBox.current.style.display = "block";
    memberData.current.style.display = "block";
    diagnoseAppt.current.style.display = "none";
  }, []);

    return (
        <>
        <ApptHeader>
            <div className='apptHeaderDiv1'>
                <div>
                    <Link to='/apptSelect'>
                        <img src={logoappt} alt="온라인예약 로고" />
                    </Link>
                </div>
                <div>
                    <button onClick={onClickLogout}>로그아웃</button>
                    <span>|</span>
                    <Link to='/mysevrance'>
                        MY세브란스
                    </Link>
                </div>
            </div>
        </ApptHeader>
        <ApptSelectCont>
{/* 
* 병원 선택 박스
*/}
            <div className='step1Cont'>
                <h1>병원선택</h1>
                <div className='selectCont'>
                    {content.map(({title, department}, i) => <Collapse 
                        key={i} title={title} department={department}
                    />)}
                </div>
                <div className='telInfo'>
                    <dl>
                        <dt>진료예약</dt>
                        <dd><a href="tel:1599-1004" id="hospitalTel">1599-1004</a></dd>
                        <dd>평일 08:00~18:00</dd>
                        <dd>토요일 08:00~13:00</dd>
                        <dd></dd>
                    </dl>
                </div>
                <div className='listInfo'>
                    <ul>
                        <li>회원 및 비회원 모두 예약이 가능합니다.</li>
                        <li>
                        대리예약은 환자 정보 추가 입력 후 예약을 이용하시면 됩니다.
                        </li>
                    </ul>
                </div>
            </div>

{/* 
* 회원정보, 회원예약정보 박스
*/}
    <Cnt ref={memberData}>
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


{/* 
* 예약 방법 선택 박스
*/}
    <Div ref={departmentAppt}>
      <div className="reserveBox">
        <div className="boxsTop">
          <p className="tit textTitle">회원 예약</p>
        </div>

        <div className="boxsCont">
          <p className="text-md">3.예약 방법 선택</p>

          <div className="boxsCF">
            <button className='apptBtn'>
              <span>
                <img src={ico1} alt="아이콘"></img>
                <p>진료과/센터/클리닉으로 예약</p>
              </span>
            </button>
            <button  className='apptBtn' onClick={onStaffBtn}>
              <span>
                <img src={ico2} alt="아이콘"></img>
                <p>의료진으로 예약</p>
              </span>
            </button>
          </div>
        </div>

        {/* 이전 다음 버튼 */}
        <div className="buttonCont">
          <button type="submit" className="buttonWhite" onClick={onMemberInfo}>
            이전
          </button>
        </div>
      </div>
    </Div>


{/* 
* 진료예약 박스
*/}
    <Container ref={diagnoseAppt}>
      <div className="title">
        <p>진료예약 - STEP1</p>
      </div>
      <div className="content">
        {/* 검색창 */}
        <div>
          <input
            type="text"
            id="search_input"
            className="search_input"
            placeholder="의료진 성명을 2자 이상 입력해주세요."
            title="의료진 성명을 2자 이상 입력해주세요"
          />
          <span>
            <button type="submit" className="search_btn">
              <img src={search} alt="search" />
            </button>
          </span>
        </div>
        {/* 자음선택 */}
        <div className="search_doctor">
          <ul className="doctor_fstName">
            <li className="all">
              <input
                type="radio"
                name="choSung"
                id="sortAll2"
                defaultValue=""
                defaultChecked="checked"
                data-ignore=""
              />
              <label htmlFor="sortAll2">ALL</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-1"
                defaultValue="ㄱ"
                data-ignore=""
                disabled=""
              />
              <label htmlFor="sort2-1">ㄱ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-2"
                defaultValue="ㄴ"
                data-ignore=""
                disabled=""
              />
              <label htmlFor="sort2-2">ㄴ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-3"
                defaultValue="ㄷ"
                data-ignore=""
                disabled=""
              />
              <label htmlFor="sort2-3">ㄷ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-4"
                defaultValue="ㄹ"
                data-ignore=""
                disabled=""
              />
              <label htmlFor="sort2-4">ㄹ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-5"
                defaultValue="ㅁ"
                data-ignore=""
                disabled=""
              />
              <label htmlFor="sort2-5">ㅁ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-6"
                defaultValue="ㅂ"
                data-ignore=""
                disabled=""
              />
              <label htmlFor="sort2-6">ㅂ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-7"
                defaultValue="ㅅ"
                data-ignore=""
                disabled=""
              />
              <label htmlFor="sort2-7">ㅅ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-8"
                defaultValue="ㅇ"
                data-ignore=""
                disabled=""
              />
              <label htmlFor="sort2-8">ㅇ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-9"
                defaultValue="ㅈ"
                data-ignore=""
                disabled=""
              />
              <label htmlFor="sort2-9">ㅈ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-10"
                defaultValue="ㅊ"
                data-ignore=""
                disabled=""
              />
              <label htmlFor="sort2-10">ㅊ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-11"
                defaultValue="ㅋ"
                data-ignore=""
                disabled=""
              />
              <label htmlFor="sort2-11">ㅋ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-12"
                defaultValue="ㅌ"
                data-ignore=""
                disabled=""
              />
              <label htmlFor="sort2-12">ㅌ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-13"
                defaultValue="ㅍ"
                data-ignore=""
                disabled=""
              />
              <label htmlFor="sort2-13">ㅍ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-14"
                defaultValue="ㅎ"
                data-ignore=""
                disabled=""
              />
              <label htmlFor="sort2-14">ㅎ</label>
            </li>
          </ul>
        </div>
        {/* 검색 전 화면 */}
        <div className="intro">
          <div className="dr_choice">
            <img src={DrChoice} alt="DrChoice" />
            <p>
              찾으시려는 <span>의료진의 성명</span>을 검색해주세요.
            </p>
          </div>
          <button type="button" className="pre_btn" data-view="choose-type" onClick={offDiagnose}>
            이전
          </button>
        </div>
        {/* 검색 후 화면 */}
        <div className="doctor_list_wrap">
          <ul className="card">
            <li>
              <a href="#" title="자세히 보기">
                <div
                  className="doctor_profile"
                  data-empno="0116821"
                  data-nm="김다함"
                >
                  <img src={profile} alt="프로필 사진" />
                  <dl>
                    <dt>김다함</dt>
                    <dd className="decs-multi">
                      <span>
                        갑상선 결절 및 암, 갑상선 기능 이상 및 관련 대사 이상{" "}
                      </span>
                    </dd>
                  </dl>
                </div>
              </a>
            </li>
            <li>
              <a href="#" title="자세히 보기">
                <div
                  className="doctor_profile"
                  data-empno="0115442"
                  data-nm="김다희"
                >
                  <img src={profile} alt="김다희 닥터 프로필 사진" />
                  <dl>
                    <dt>김다희</dt>
                    <dd className="decs-multi">
                      <span>
                        후두 및 음성질환, 소아 이비인후과, 침샘종양두경부질환,
                        두경부암
                      </span>
                    </dd>
                  </dl>
                </div>
              </a>
            </li>
          </ul>
          {/* 버튼그룹 */}
          <div className="buttons">
            <button type="button" className="pre_btn" data-view="choose-type" onClick={offDiagnose}>
              이전
            </button>
          </div>
        </div>

        {/* 검색 결과 없을 때 */}
        <div className="no_data">
          <p>검색 결과가 존재하지 않습니다.</p>
          <button type="button" className="pre_btn" data-view="choose-type">
            이전
          </button>
        </div>
      </div>
    </Container>
            <Step4 />
            <Step5 />
            <Step6 />
        </ApptSelectCont>

        </>
    );
});

export default ApptSelect;
