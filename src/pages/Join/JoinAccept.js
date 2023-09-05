/**
 * @ File Name: JoinAccept.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-20 16:20
 * @ Description: 약관동의 페이지
 */

import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginHeader from "../../components/LoginHeader";
import LoginFooter from "../../components/LoginFooter";
import Right from "../../assets/img/ico-arrow-right-gray@2x.png";
import step01 from "../../assets/img/ico-login-step1-on@2x.png";
import step02 from "../../assets/img/ico-login-step2-off@2x.png";
import step03 from "../../assets/img/ico-login-step3-off@2x.png";
import step04 from "../../assets/img/ico-login-step4-off@2x.png";
import warning from "../../assets/img/ico-warning-mark@2x.png";
import checkbox from "../../assets/img/ico-checkbox-checked-white.png";

const Container = styled.div`
  position: relative;

  // 필수 항목 미체크 시 나타나는 폼박스
  .not_check_term,
  .not_check_private {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    padding-top: 120px;
    box-sizing: border-box;
    z-index: 99999;
    .popup {
      background-color: #fff;
      width: 350px;
      height: 180px;
      margin: auto;
      transform: translate(0, 50%);
      text-align: center;
      padding-top: 35px;
      box-sizing: border-box;

      // 닫기버튼
      button {
        margin-top: 25px;
        background-color: rgb(0, 148, 251);
        border: none;
        color: white;
        padding: 10px 25px;
        font-size: 15px;
        font-weight: 100;
        border-radius: 3px;
      }
    }
  }
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  hr {
    width: 98%;
    margin: 0;
    border: 0;
    border-bottom: 1px solid #e6e6e6;
  }

  .accept_content {
    width: 1280px;
    margin: auto;

    // 상단 회원가입 단계
    .steps {
      ol {
        li {
          .box {
            font-size: 15px;
            float: left;
            border: 2px solid #e6e6e6;
            width: 240px;
            height: 50px;
            text-align: left;
            padding: 6px 2px;
            box-sizing: border-box;
            border-radius: 30px;
            img {
              margin: 5px 10px 5px 50px;
              float: left;
              width: 10%;
            }
            p {
              float: left;
              margin-top: 4px;
            }
          }
          &:nth-of-type(1) {
            .box {
              color: rgb(0, 148, 251);
              font-weight: bold;
              border: 2px solid rgb(0, 148, 251);
            }
          }
        }
        .right {
          float: left;
          margin: 12px 3.6%;
          height: 25px;
        }
      }
    }

    .agreementForm {
      float: left;
      margin-top: 50px;

      // 약관 전체 동의
      .agree_all {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 30px;
      }

      // 약관 제목
      .agree_title {
        margin-top: 50px;
        font-size: 16px;
        font-weight: bold;
      }

      // 약관 내용
      .agree_content {
        color: rgb(100, 100, 100);
        height: 240px;
        width: 98%;
        background-color: rgba(249, 249, 249);
        overflow: scroll;
        padding: 0 5% 60px 2%;
        box-sizing: border-box;
        margin-top: 20px;

        h4 {
          font-weight: bold;
          font-size: 16px;
          margin-top: 60px;
        }
        h5 {
          font-weight: bold;
          font-size: 16px;
          margin-bottom: 20px;
          margin-top: 50px;
        }
        p,
        ul,
        li,
        h6 {
          font-size: 16px;
          line-height: 1.5em;
        }
        h6 {
          margin: 5px 0;
        }

        // 약관 내용 중 넘버링 된 것
        .agree_num {
          li {
            font-size: 16px;
            line-height: 1.5em;
          }
        }
        .bold {
          li {
            font-weight: bold;
          }
        }
      }
    }
  }

  // 하단 경고 박스
  .gray_box {
    color: rgb(100, 100, 100);
    height: 140px;
    width: 98%;
    background-color: #f9f9f9;
    padding: 26px 8px 29px 30px;
    box-sizing: border-box;
    margin-top: 20px;
    font-size: 18px;
    line-height: 1.6em;
  }
  .box_tip {
    float: left;
    border: 1px solid #e6e6e6;
    margin-top: 40px;
    padding: 17px 30px 18px;
    box-sizing: border-box;
    line-height: 2em;
    width: 98%;
    dt {
      font-weight: bold;
    }
  }

  // 동의/비동의 버튼
  .btn_section {
    float: left;
    margin-left: 39%;
    margin-top: 80px;

    // 동의합니다 버튼
    .accept_btn {
      font-size: 18px;
      float: left;
      border: 1px solid rgb(0, 148, 251);
      padding: 15px 30px;
      box-sizing: border-box;
      border-radius: 30px;
      background-color: rgb(0, 148, 251);
      color: white;
    }
    // 동의하지 않습니다 버튼
    .not_accept_btn {
      font-size: 18px;
      float: left;
      border: 2px solid rgb(0, 148, 251);
      padding: 15px 30px;
      box-sizing: border-box;
      border-radius: 30px;
      background-color: white;
      color: rgb(0, 148, 251);
      margin-left: 10px;
    }
  }
  .box_tip {
    dl {
      dt {
        img {
          width: 20px;
          float: left;
          margin: 5px 5px 0 0;
        }
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
    /* border: 1px solid #aaa; */
    vertical-align: middle;
    border-radius: 0;
    margin: -2px 5px 0 0;
    background-color: #fff;
    content: "";
    border: 0;
    border-radius: 50%;
    background: #959595 url(${checkbox}) no-repeat 45% center !important;
    background-size: 11px 8px !important;
  }
  .checkBox:checked + label::before {
    background-color: #0094fb !important;
  }
`;

const JoinAccept = memo(() => {
  const navigate = useNavigate();

  // 동의합니다 버튼을 눌렀을 때 회원가입 페이지로 이동
  const acceptBtnClick = (e) => {
    navigate("/join_certificate");
  };

  // 동의하지 않습니다 버튼을 눌렀을 때 회원가입 방법 선택 페이지로 이동
  const notAcceptBtnClick = (e) => {
    navigate("/join_way");
  };

  const [checkList, setCheckList] = useState([]);

  // 약관 전체 동의 체크박스 이벤트
  const checkAll = (e) => {
    e.target.checked
      ? setCheckList(["agree_term", "agree_private", "agree_marketing"])
      : setCheckList([]);
  };

  // 체크박스 각 항목 이벤트
  const check = (e) => {
    e.target.checked
      ? setCheckList([...checkList, e.target.name])
      : setCheckList(checkList.filter((choice) => choice !== e.target.name));
  };

  // 필수 항목 미체크 시 팝업화면 띄우기
  const notCheckTerm = (e) => {
    document.querySelector(".not_check_term").style.display = "block";
  };

  const notCheckPrivate = (e) => {
    document.querySelector(".not_check_private").style.display = "block";
  };

  // 팝업화면 닫기 버튼 클릭 이벤트
  const closeBox = (e) => {
    document.querySelector(".not_check_term").style.display = "none";
    document.querySelector(".not_check_private").style.display = "none";
  };

  return (
    <Container>
      <div>
        <LoginHeader />
        <div className="bgAll">
          <form className="not_check_term">
            <div className="popup">
              <p>
                이용약관에 동의를 해야 회원가입
                <br />
                진행이 가능합니다.
              </p>
              <button type="button" className="close" onClick={closeBox}>
                닫기
              </button>
            </div>
          </form>
          <form className="not_check_private">
            <div className="popup">
              <p>
                개인정보 수집·이용에 동의를 해야
                <br />
                회원가입 진행이 가능합니다.
              </p>
              <button type="button" className="close" onClick={closeBox}>
                닫기
              </button>
            </div>
          </form>
          <div className="title">
            <h1>회원가입</h1>
          </div>
          <div className="accept_content">
            <div className="steps">
              <ol>
                <li>
                  <div className="box">
                    <img src={step01} alt="step01" />
                    <p>약관동의 하기</p>
                  </div>
                </li>
                <img src={Right} alt="right" className="right" />
                <li>
                  <div className="box">
                    <img src={step02} alt="step02" />
                    <p>본인인증 하기</p>
                  </div>
                </li>
                <img src={Right} alt="right" className="right" />
                <li>
                  <div className="box">
                    <img src={step03} alt="step03" />
                    <p>정보입력 하기</p>
                  </div>
                </li>
                <img src={Right} alt="right" className="right" />
                <li>
                  <div className="box">
                    <img src={step04} alt="step04" />
                    <p>회원가입 완료</p>
                  </div>
                </li>
              </ol>
            </div>
            {/* <div className="steps mq">
                  <ol>
                      <li className="on">
                          <div className="box">약관동의하기</div>
                      </li>
                      <li>
                          <div className="box">2</div>
                      </li>
                      <li>
                          <div className="box">3</div>
                      </li>                        
                      <li>
                          <div className="box">4</div>
                      </li>  
                  </ol>
              </div> */}
            <form name="agreementForm" className="agreementForm">
              <fieldset>
                <input type="hidden" name="joinType" value="normal" />
                {/* <legend className="sr-only">약관동의</legend> */}
                <div className="agreement">
                  <div className="agree_all">
                    <input
                      type="checkbox"
                      name="agree_all"
                      id="agree_all"
                      className="checkBox"
                      onClick={checkAll}
                      checked={checkList.length === 3 ? true : false}
                    />
                    <label htmlFor="agree_all">약관 전체 동의</label>
                  </div>
                  <hr />
                  <div className="agree_title">
                    <input
                      type="checkbox"
                      name="agree_term"
                      id="agree_term"
                      className="checkBox"
                      checked={checkList.includes("agree_term") ? true : false}
                      onClick={check}
                    />
                    <label htmlFor="agree_term">
                      <span>
                        <strong>연세의료원 이용약관</strong>(필수)
                      </span>{" "}
                    </label>
                    {/* <a href="#policy1" className="d-down-sm js-layer-open"><span className="sr-only">연세의료원 이용약관 보기</span></a> */}
                  </div>
                  <div className="custom-scroll">
                    <div className="agree_content">
                      <h4>제 1장 총칙</h4>
                      <h5>제1조 (목적)</h5>
                      <p>
                        본 약관은 회원이 연세대학교 의료원(이하 "의료원")이
                        온라인으로 제공하는 진료예약 및 제반 서비스(이하
                        “서비스”)의 이용과 관련하여 의료원과 회원간의 권리, 의무
                        및 책임사항, 기타 필요한 사항을 규정함을 목적으로
                        합니다.
                      </p>
                      <h5>제2조 (용어의 정의)</h5>
                      <ol className="agree_num">
                        <li>
                          ① 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                          <ol>
                            <li>
                              1. “의료원”이라 함은 온라인을 통하여 서비스를
                              제공하는 사업자를 의미합니다.{" "}
                            </li>
                            <li>
                              2. “회원”이라 함은 본 약관에 동의하고 서비스 이용
                              자격을 부여받은 자를 의미합니다.{" "}
                            </li>
                            <li>
                              3. “서비스”라 함은 의료원이 온라인으로 제공하는
                              서비스를 의미합니다.{" "}
                            </li>
                            <li>
                              4. “가입”이라 함은 사이트에서 제공하는 신청서
                              양식에 해당 정보를 기입하고, 본 약관에 동의하여
                              서비스 이용계약을 완료시키는 행위{" "}
                            </li>
                            <li>
                              5. “계정(ID)”이라 함은 회원의 식별과 서비스 이용을
                              위하여 회원이 선정하고 의료원이 부여하는 문자,
                              숫자 또는 특수문자의 조합을 의미합니다.{" "}
                            </li>
                            <li>
                              6. “계정정보“라 함은 회원의 계정, 비밀번호, 성명
                              등 회원이 의료원에 제공한 일반정보 및
                              병원등록번호등을 통칭합니다.{" "}
                            </li>
                            <li>
                              7. “비밀번호”라 함은 회원이 부여받은 계정과
                              일치되는 회원임을 확인하고 회원의 정보 및
                              권익보호를 위해 회원 자신이 선정하여 비밀로
                              관리하는 문자, 숫자 또는 특수문자의 조합을
                              의미합니다.{" "}
                            </li>
                            <li>
                              8. “고유식별정보”라 함은 주민등록번호,
                              외국인등록번호를 의미합니다.{" "}
                            </li>
                            <li>
                              9. “민감정보”라 함은 건강에 관한 정보를
                              의미합니다.{" "}
                            </li>
                            <li>
                              10. “탈퇴(해지)”라 함은 회원이 이용계약을
                              종료시키는 행위{" "}
                            </li>
                          </ol>
                        </li>
                        <li>
                          ② 이 약관에서 사용하는 용어의 정의는 제1항 각호에서
                          정하는 것을 제외하고는 관계법령 및 기타 일반적인
                          상관례에 의합니다.{" "}
                        </li>
                      </ol>
                      <h5>제3조 (의료원정보의 제공) </h5>
                      <p>
                        의료원은 다음 각 호의 사항을 홈페이지에 게시하여, 회원이
                        이를 쉽게 알 수 있도록 합니다. 다만, 개인정보처리방침과
                        약관은 회원이 연결화면을 통하여 볼 수 있도록 할 수
                        있습니다.
                      </p>
                      <ol className="agree_num">
                        <li>
                          ① 상호 및 소재지 주소(회원의 불만을 처리할 수 있는
                          곳의 주소를 포함한다){" "}
                        </li>
                        <li>② 전화번호 </li>
                        <li>③ 이용약관과 개인정보처리방침 </li>
                        <li>④ 환자권리장전과 의료정보윤리헌장 </li>
                      </ol>
                      <h5>제4조 (서비스의 제공 및 변경)</h5>
                      <ol className="agree_num">
                        <li>
                          ① 의료원은 이용자에게 아래와 같은 서비스를 제공합니다.
                          <ol>
                            <li>
                              &lt;병원 홈페이지&gt;
                              <ol>
                                <li>
                                  1. 본인/대리/비회원 진료 예약 및 내역 조회
                                  서비스{" "}
                                </li>
                                <li>
                                  2. 건강검진 예약 및 조회, 온라인문진 서비스{" "}
                                </li>
                                <li>3. 검사일정 조회 및 결과 조회 서비스 </li>
                                <li>4. 내원, 입퇴원 내역 조회 서비스 </li>
                                <li>5. 증명서발급 서비스 </li>
                                <li>6. 의료진 및 진료일정 안내 </li>
                                <li>
                                  7. 건강정보, 건강동영상 및 통합검색서비스{" "}
                                </li>
                                <li>8. 일부 병원의 건강상담서비스 </li>
                                <li>9. 비급여 진료비 조회서비스 </li>
                                <li>10. 트위터, 페이스북 등 SNS 연계서비스 </li>
                                <li>
                                  11. 회원 본인이 선택한 관심질환에 대한 .
                                  건강정보 및 각종소식{" "}
                                </li>
                                <li>12. 고객의소리 </li>
                                <li>13. 월 1회 건강정보메일 발송 서비스 </li>
                                <li>14. 기타 "의료원"이 정하는 서비스 </li>
                              </ol>
                            </li>
                          </ol>
                          <ol>
                            <li>
                              &lt;의료원 홈페이지&gt;
                              <ol>
                                <li>1. 입사지원 서비스 </li>
                                <li>
                                  2. 후원참여, 후원내역조회 및 영수증발급{" "}
                                </li>
                              </ol>
                            </li>
                          </ol>
                          <ol>
                            <li>
                              &lt;대학 홈페이지&gt;
                              <ol>
                                <li>1. 게시판 및 교직원 검색 </li>
                                <li>2. 교육신청서비스 </li>
                              </ol>
                            </li>
                          </ol>
                        </li>
                        <li>
                          ② "의료원"은 그 변경될 서비스의 내용 및 제공일자를
                          제5조 제5항에서 정한 방법으로 이용자에게 통지하고,
                          제4조에서 정한 서비스를 변경하여 제공할 수 있습니다.{" "}
                        </li>
                        <li>
                          ③ "의료원"은 서비스 내용의 변경으로 인하여 이용자가
                          입은 손해에 대하여 배상하지 아니합니다. 단, 병원의
                          고의 또는 중과실이 있는 경우에는 그러하지 아니합니다.{" "}
                        </li>
                      </ol>
                      <h5>제5조 (약관의 명시와 개정) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 의료원은 이 약관의 내용을 회원이 알 수 있도록
                          사이트의 초기 서비스화면(전면)에 게시하거나 연결화면을
                          제공하는 방법으로 회원에게 공지합니다.{" "}
                        </li>
                        <li>
                          ② 의료원은 회원이 의료원과 이 약관의 내용에 관하여
                          질의 및 응답을 할 수 있도록 조치를 취합니다.{" "}
                        </li>
                        <li>
                          ③ 의료원은 서비스를 이용하고자 하는 자(이하 “이용자”라
                          한다)가 약관의 내용을 쉽게 알 수 있도록 작성하고
                          약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중
                          계약해제ㆍ해지, 의료원의 면책사항 및 회원에 대한
                          피해보상 등과 같은 중요한 내용을 회원이 쉽게 이해할 수
                          있도록 굵은 글씨 등으로 처리하거나 별도의 연결화면
                          또는 팝업화면 등을 제공하고 이용자의 동의를 얻도록
                          합니다.{" "}
                        </li>
                        <li>
                          ④ 의료원은 「약관의 규제에 관한 법률」,
                          「개인정보보호법」등 관련 법령에 위배하지 않는
                          범위에서 이 약관을 개정할 수 있습니다.{" "}
                        </li>
                        <li>
                          ⑤ 의료원이 약관을 개정할 경우에는 적용일자 및
                          개정내용, 개정사유 등을 명시하여 그 적용일자로부터
                          최소한 7일 이전(회원에게 불리하거나 중대한 사항의
                          변경은 30일 이전)부터 그 적용일자 경과 후 상당한
                          기간이 경과할 때까지 초기화면 또는 초기화면과의
                          연결화면을 통해 공지합니다.{" "}
                        </li>
                        <li>
                          ⑥ 의료원은 약관을 개정할 경우에는 개정약관 공지 후
                          개정약관의 적용에 대한 회원의 동의 여부를 확인합니다.
                          개정약관 공지시 회원이 동의 또는 거부의 의사표시를
                          하지 않으면 승낙한 것으로 간주하겠다는 내용도 함께
                          공지한 경우에는 회원이 약관 시행일까지 거부의사를
                          표시하지 않는다면 개정약관에 동의한 것으로 간주할 수
                          있습니다.{" "}
                        </li>
                        <li>
                          ⑦ 회원이 개정약관의 적용에 동의하지 않는 경우 의료원
                          또는 회원은 서비스 이용계약을 해지할 수 있습니다.{" "}
                        </li>
                      </ol>
                      <h5>제6조 (약관 외 준칙) </h5>
                      <p>
                        이 약관에서 정하지 아니한 사항과 이 약관의 해석에
                        관하여는 「약관의 규제에 관한
                        법률」,「개인정보보호법」,「의료법」등 관련 법령에
                        따릅니다.
                      </p>
                      <h4>제2장 이용계약의 체결</h4>
                      <h5>제7조 (이용신청 및 방법)</h5>
                      <ol className="agree_num">
                        <li>
                          ① 의료원이 제공하는 서비스를 이용하고자 하는 자는
                          의료원이 사이트의 초기 화면이나 서비스, 홈페이지에서
                          제공하는 이용신청서를 작성하는 방법으로 이용신청을
                          하여야 합니다.
                        </li>
                        <li>
                          ② 이용자는 이용신청시 의료원에서 요구하는 제반 정보를
                          제공하여야 합니다.{" "}
                        </li>
                        <li>
                          ③ 이용자는 제1항의 이용 신청 시 본인의 실명 및 실제
                          정보를 기재하여야 합니다. 실명 또는 식별정보를 허위로
                          기재하거나 타인의 명의를 도용한 경우 이 약관에 의한
                          회원의 권리를 주장할 수 없고, 의료원은 이용계약을
                          취소하거나 해지할 수 있습니다.{" "}
                        </li>
                        <li>
                          ④ 청소년(14세 미만의 자)이 이용신청을 할 경우에는
                          법정대리인의 동의를 얻어야 하고, 구체적인 동의절차는
                          관련법률 및 시행령에 따라 의료원이 제공하는 방법에
                          따르도록 합니다.{" "}
                        </li>
                      </ol>
                      <h5>제8조 (이용신청의 승낙과 제한) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 의료원은 의료원이 이용자에게 요구하는 정보에 대해
                          이용자가 실명 및 실제 정보를 정확히 기재하여
                          이용신청을 한 경우에 상당한 이유가 없는 한 이용신청을
                          승낙합니다.{" "}
                        </li>
                        <li>
                          ② 의료원은 다음 각 호의 어느 하나에 해당하는
                          이용신청에 대해서는 승낙을 하지 않을 수 있습니다.
                          <ol>
                            <li>1. 제7조에 위반하여 이용신청을 하는 경우 </li>
                            <li>
                              2. 청소년(제7조 제4항의 청소년과 같다)이
                              법정대리인의 동의를 얻지 아니하거나 동의를
                              얻었음을 확인할 수 없는 경우{" "}
                            </li>
                            <li>
                              3. 제3자의 신용카드, 유/무선 전화, 은행 계좌 등을
                              무단으로 이용 또는 도용하여 결제하는 경우{" "}
                            </li>
                            <li>
                              4. 대한민국 이외의 국가 중 의료원에서 아직
                              서비스를 제공할 것으로 결정하지 않은 국가에서
                              서비스를 이용하는 경우로 의료원이 해외 서비스
                              업체와 체결한 계약이나 특정 국가에서 접속하는
                              회원에 대한 서비스 제공과 관련하여 서비스 제공을
                              제한할 필요가 있는 경우{" "}
                            </li>
                            <li>
                              5. 「개인정보보호법」, 「의료법」 및 그 밖의 관계
                              법령에서 금지하는 위법행위를 할 목적으로
                              이용신청을 하는 경우{" "}
                            </li>
                            <li>
                              6. 그 밖에 1호 내지 5호에 준하는 사유로서 승낙이
                              부적절하다고 판단되는 경우{" "}
                            </li>
                          </ol>
                        </li>
                        <li>
                          ③ 의료원은 다음 각 호의 어느 하나에 해당하는 경우에는
                          그 사유가 해소될 때까지 승낙을 유보할 수 있습니다.
                          <ol>
                            <li>
                              1. 의료원의 설비에 여유가 없거나 기술적 장애가
                              있는 경우{" "}
                            </li>
                            <li>
                              2. 서비스 상의 장애 또는 서비스의 결제수단의
                              장애가 발생한 경우{" "}
                            </li>
                            <li>
                              3. 그 밖에 위 각 호에 준하는 사유로서 이용신청의
                              승낙이 곤란한 경우{" "}
                            </li>
                          </ol>
                        </li>
                      </ol>
                      <h5>제9조 (회원 계정(ID) 및 비밀번호) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 의료원은 회원에 대하여 회원의 정보 보호, 서비스
                          이용안내 등의 편의를 위해 회원이 선정한 일정한 문자,
                          숫자 또는 특수문자의 조합을 계정으로 부여합니다.{" "}
                        </li>
                        <li>
                          ② 의료원은 계정정보를 통하여 당해 회원의 서비스
                          이용가능 여부 등의 제반 회원 관리업무를 수행합니다.{" "}
                        </li>
                        <li>
                          ③ 회원은 자신의 계정정보를 선량한 관리자로서의 주의
                          의무를 다하여 관리하여야 합니다. 회원이 본인의
                          계정정보를 소홀히 관리하거나 제3자에게 이용을
                          승낙함으로써 발생하는 손해에 대하여는 회원에게 책임이
                          있습니다.{" "}
                        </li>
                        <li>
                          ④ 비밀번호의 관리책임은 회원에게 있으며, 회원이 원하는
                          경우에는 보안상의 이유 등으로 언제든지 변경이
                          가능합니다.{" "}
                        </li>
                        <li>
                          ⑤ 회원은 정기적으로 비밀번호를 변경하여야 합니다.{" "}
                        </li>
                      </ol>
                      <h5>제10조 (회원 정보의 제공 및 변경) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 회원은 이 약관에 의하여 의료원에 정보를 제공하여야
                          하는 경우에는 진실된 정보를 제공하여야 하며, 허위정보
                          제공으로 인해 발생한 불이익에 대해서는 보호받지
                          못합니다.{" "}
                        </li>
                        <li>
                          ② 회원은 개인정보관리화면을 통하여 언제든지 자신의
                          개인정보를 열람하고 수정할 수 있습니다. 다만, 서비스
                          관리를 위해 필요한 실명, 계정(ID) 등은 수정이
                          불가능합니다.{" "}
                        </li>
                        <li>
                          ③ 회원은 회원가입 신청 시 기재한 사항이 변경되었을
                          경우 온라인으로 수정을 하거나 기타 방법으로 의료원에
                          대하여 그 변경사항을 알려야 합니다.{" "}
                        </li>
                        <li>
                          ④ 제2항의 변경사항을 의료원에 알리지 않아 발생한
                          불이익에 대하여 의료원은 책임을 지지 않습니다.{" "}
                        </li>
                      </ol>
                      <h5>제11조 (개인정보의 보호 및 관리) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 의료원은 관계 법령이 정하는 바에 따라 계정정보를
                          포함한 회원의 개인정보를 보호하기 위해 노력합니다.
                          회원 개인정보의 보호 및 사용에 대해서는 관계법령 및
                          의료원이 별도로 고지하는 개인정보처리방침이
                          적용됩니다.{" "}
                        </li>
                        <li>
                          ② 서비스의 일부로 제공되는 개별 서비스를 제외한
                          것으로서 홈페이지 및 서비스별 웹사이트에서 단순히
                          링크된 제3자 제공의 서비스에 대하여는 의료원의
                          개인정보처리방침이 적용되지 않습니다.{" "}
                        </li>
                        <li>
                          ③ 의료원은 회원의 귀책사유로 인하여 노출된 회원의
                          계정정보를 포함한 모든 정보에 대해서 일체의 책임을
                          지지 않습니다.{" "}
                        </li>
                      </ol>
                      <h4>제3장 계약 당사자의 의무</h4>
                      <h5>제12조 (의료원의 의무) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 의료원은 관련 법령을 준수하고, 이 약관이 정하는
                          권리의 행사와 의무의 이행을 신의에 따라 성실하게
                          합니다.{" "}
                        </li>
                        <li>
                          ② 의료원은 회원이 안전하게 서비스를 이용할 수 있도록
                          개인정보(신용정보 포함)보호를 위해 보안시스템을
                          갖추어야 하며 개인정보처리방침을 공시하고 준수합니다.
                          의료원은 이 약관 및 개인정보처리방침에서 정한 경우를
                          제외하고는 회원의 개인정보가 제3자에게 공개 또는
                          제공되지 않도록 합니다.{" "}
                        </li>
                        <li>
                          ③ 의료원은 계속적이고 안정적인 서비스의 제공을 위하여
                          서비스 개선을 하던 중 설비에 장애가 생기거나 데이터
                          등이 멸실된 때에는 천재지변, 비상사태, 현재의 기술로는
                          해결이 불가능한 결함 및 장애 등 부득이한 사유가 없는
                          한 지체 없이 이를 수리 또는 복구하도록 최선의 노력을
                          다합니다.{" "}
                        </li>
                      </ol>
                      <h5>제13조 (회원의 의무) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 회원은 다음 행위를 하여서는 안 됩니다.
                          <ol>
                            <li>1. 신청 또는 변경 시 허위내용의 기재 </li>
                            <li>2. 타인의 정보도용 </li>
                            <li>
                              3. 의료원의 임직원, 운영자, 기타 관계자를 사칭하는
                              행위{" "}
                            </li>
                            <li>4. 의료원이 게시한 정보의 변경 </li>
                            <li>
                              5. 의료원이 금지한 정보(컴퓨터 프로그램 등)의 송신
                              또는 게시{" "}
                            </li>
                            <li>
                              6. 의료원이 제공 또는 승인하지 아니한 컴퓨터
                              프로그램이나 기기 또는 장치를 제작, 배포, 이용,
                              광고하는 행위{" "}
                            </li>
                            <li>
                              7. 의료원과 기타 제3자의 저작권 등 지적재산권에
                              대한 침해{" "}
                            </li>
                            <li>
                              8. 의료원 및 기타 제3자의 명예를 손상시키거나
                              업무를 방해하는 행위{" "}
                            </li>
                            <li>
                              9. 외설 또는 폭력적인 말이나 글, 화상, 음향, 기타
                              공서양속에 반하는 정보를 공개 또는 게시하는 행위{" "}
                            </li>
                            <li>
                              10. 의료원의 동의 없이 영리, 영업, 광고, 정치활동
                              등을 목적으로 서비스를 사용하는 행위{" "}
                            </li>
                            <li>
                              11. 기타 관련 법령에서 금지하거나 선량한 풍속 기타
                              사회통념상 허용되지 않는 행위{" "}
                            </li>
                          </ol>
                        </li>
                        <li>
                          ② 회원은 이 약관의 규정, 이용안내 및 서비스와 관련하여
                          공지한 주의사항, 의료원이 통지하는 사항 등을 확인하고
                          준수할 의무가 있습니다.{" "}
                        </li>
                      </ol>
                      <h4>제4장 서비스 이용</h4>
                      <h5>제14조 (서비스의 변경 및 내용수정) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 회원은 의료원이 제공하는 서비스를 이 약관, 운영정책
                          및 의료원이 설정한 규칙에 따라 이용할 수 있습니다.{" "}
                        </li>
                        <li>
                          ② 의료원은 서비스를 통하여 회원에게 제공하는 내용의
                          제작, 변경, 유지, 보수에 관한 포괄적인 권한을
                          가집니다.{" "}
                        </li>
                        <li>
                          ③ 의료원이 상당한 이유가 있는 경우에 운영상, 기술상의
                          필요에 따라 서비스 수정을 할 수 있으며, 서비스 수정을
                          하는 경우에는 변경 후 해당 사이트 등을 통하여
                          공지합니다.{" "}
                        </li>
                      </ol>
                      <h5>제15조 (서비스의 제공 및 중단 등) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 의료원의 서비스는 1일 24시간동안 제공하며, 다음 각
                          호의 어느 하나에 해당하는 경우에는 일정한 시간동안
                          서비스가 제공되지 아니할 수 있으며, 해당 시간 동안
                          의료원은 서비스를 제공할 의무가 없습니다.
                          <ol>
                            <li>
                              1. 컴퓨터 등 정보통신설비의 보수점검, 교체,
                              정기점검 또는 서비스의 수정을 위하여 필요한 경우{" "}
                            </li>
                            <li>
                              2. 해킹 등의 전자적 침해사고, 통신사고, 미처
                              예상하지 못한 서비스의 불안정성에 대응하기 위하여
                              필요한 경우{" "}
                            </li>
                            <li>
                              3. 천재지변, 비상사태, 정전, 서비스 설비의 장애
                              또는 서비스 이용의 폭주 등으로 정상적인 서비스
                              제공이 불가능할 경우{" "}
                            </li>
                          </ol>
                        </li>
                        <li>
                          ② 의료원은 제1항 제1호의 경우, 일정 시간을 정하여
                          서비스를 중지할 수 있습니다. 이 경우 의료원은 그
                          사실을 회원에게 초기 화면이나 홈페이지에 고지합니다.{" "}
                        </li>
                        <li>
                          ③ 제1항 제2호의 경우, 의료원은 사전 고지 없이 서비스를
                          일시 중지할 수 있습니다. 의료원은 이러한 경우 그
                          사실을 초기 화면이나 홈페이지에 사후 고지할 수
                          있습니다.{" "}
                        </li>
                        <li>
                          ④ 의료원은 의료원이 제공하는 서비스 이용과 관련하여
                          이용자에게 발생한 어떠한 손해에 대해서도 책임을 지지
                          않습니다. 다만, 의료원의 고의 또는 중대한 과실로
                          인하여 발생한 손해의 경우는 제외합니다.{" "}
                        </li>
                      </ol>
                      <h5>제16조 (정보의 제공) </h5>
                      <p>
                        의료원은 다음의 사항을 초기 화면이나 홈페이지에 회원이
                        알기 쉽게 표시합니다.
                      </p>
                      <ol className="agree_num">
                        <li>① 상호, 주소, 연락처등 </li>
                        <li>② 기타 의료원이 필요하다고 인정하는 사항 </li>
                      </ol>
                      <h5>제17조 (정보의 수집 등) </h5>
                      <p>
                        의료원은 다음의 사항을 초기 화면이나 홈페이지에 회원이
                        알기 쉽게 표시합니다.
                      </p>
                      <ol className="agree_num">
                        <li>
                          ① 의료원은 서비스 내에서 회원의 서비스 이용을 의료원이
                          필요하다고 판단하는 경우에 한하여 본 정보를 열람하도록
                          할 것이며, 본 정보는 의료원만이 보유하고 법령으로
                          권한을 부여 받지 아니한 제3자는 절대로 열람할 수
                          없습니다.{" "}
                        </li>
                        <li>
                          ② 의료원은 서비스 운영 및 프로그램 안정화 등 서비스
                          품질 개선을 위하여 회원 PC 등 단말기 설정 및 사양
                          정보를 수집•활용할 수 있습니다.{" "}
                        </li>
                      </ol>
                      <h5>제18조 (저작권 등의 귀속) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 서비스나 홈페이지 내 의료원이 제작한 콘텐츠에 대한
                          저작권 기타 지적재산권은 의료원의 소유입니다.{" "}
                        </li>
                        <li>
                          ② 회원은 의료원이 제공하는 서비스를 이용함으로써 얻은
                          정보 중 의료원 또는 제공업체에 지적재산권이 귀속된
                          정보를 의료원 또는 제공업체의 사전승낙 없이 복제,
                          전송, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로
                          이용하거나 제3자에게 이용하게 하여서는 안 됩니다.{" "}
                        </li>
                        <li>
                          ③ 의료원은 회원이 게시하거나 등록하는 서비스 내의
                          게시물, 게시 내용에 대해 제 13조에서 규정하는
                          금지행위에 해당된다고 판단되는 경우, 사전통지 없이
                          이를 삭제하거나 이동 또는 등록을 거부할 수 있습니다.{" "}
                        </li>
                        <li>
                          ④ 의료원이 운영하는 게시판 등에 게시된 정보로 인하여
                          법률상 이익이 침해된 회원은 의료원에게 당해 정보의
                          삭제 또는 반박내용의 게재를 요청할 수 있습니다. 이
                          경우 의료원은 신속하게 필요한 조치를 취하고, 이를
                          신청인에게 통지합니다.{" "}
                        </li>
                      </ol>
                      <h4>제5장 계약 해제•해지 및 이용제한</h4>
                      <h5>제19조 (회원의 해제 및 해지) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 회원은 서비스 이용계약을 해지(이하 '회원탈퇴'라
                          한다)할 수 있습니다. 회원이 회원탈퇴를 신청한 경우
                          의료원은 회원 본인 여부를 확인할 수 있으며, 해당
                          회원이 본인으로 확인되는 경우에 회원의 신청에 따른
                          조치를 취합니다.{" "}
                        </li>
                        <li>
                          ② 회원이 회원탈퇴를 원하는 경우에는 서비스 내 회원탈퇴
                          절차를 통하여 회원탈퇴를 할 수 있습니다.{" "}
                        </li>
                      </ol>
                      <h5>제20조 (의료원의 해제 및 해지</h5>
                      <ol className="agree_num">
                        <li>
                          ① 의료원은 회원이 이 약관에서 정한 회원의 의무를
                          위반한 경우에는 회원에 대한 사전 통보 후 계약을 해지할
                          수 있습니다. 다만, 회원이 현행법 위반 및 고의 또는
                          중대한 과실로 의료원에 손해를 입힌 경우에는 사전 통보
                          없이 이용계약을 해지할 수 있습니다.{" "}
                        </li>
                        <li>
                          ② 의료원이 이용계약을 해지하는 경우 의료원은 회원에게
                          서면, 전자우편 또는 이에 준하는 방법으로 다음 각 호의
                          사항을 회원에게 통보합니다.
                          <ol>
                            <li>1. 해지사유 </li>
                            <li>2. 해지일 </li>
                          </ol>
                        </li>
                      </ol>
                      <h5>제21조 (회원에 대한 서비스 이용제한) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 의료원은 회원에게 다음 각 호의 구분에 따라 회원의
                          서비스 이용을 제한할 수 있습니다.
                          <ol>
                            <li>
                              1. 회원 이용제한 : 일정기간 또는 영구히 회원의
                              서비스 이용을 제한{" "}
                            </li>
                          </ol>
                        </li>
                        <li>
                          ② 의료원의 이용제한이 정당한 경우에 의료원은
                          이용제한으로 인하여 회원이 입은 손해를 배상하지
                          않습니다.{" "}
                        </li>
                      </ol>
                      <h5>제22조 (잠정조치로서의 이용제한) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 의료원은 다음 각 호에 해당하는 문제에 대한 조사가
                          완료될 때까지 계정을 정지할 수 있습니다.
                          <ol>
                            <li>
                              1. 계정이 해킹 또는 도용당하였다는 정당한 신고가
                              접수된 경우{" "}
                            </li>
                            <li>
                              2. 불법프로그램 사용자등 위법행위자로 합리적으로
                              의심되는 경우{" "}
                            </li>
                            <li>
                              3. 그 밖에 위 각호에 준하는 사유로 계정의
                              잠정조치가 필요한 경우{" "}
                            </li>
                          </ol>
                        </li>
                        <li>
                          ② 제1항의 경우 의료원은 조사가 완료된 후 회원의 서비스
                          이용을 재개합니다 다만, 제1항에 의한 위법행위자로
                          판명된 경우에는 그러하지 아니합니다.{" "}
                        </li>
                      </ol>
                      <h5>제23조 (이용제한의 사유와 절차) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 의료원은 위반행위의 내용, 정도, 횟수, 결과 등
                          제반사정을 고려하여 이용제한이 이루어지는 구체적인
                          사유 및 절차를 운영정책으로 정합니다.{" "}
                        </li>
                        <li>
                          ② 의료원이 제22조에서 정한 이용제한을 하는 경우에는
                          회원에게 서면 또는 전자우편이나 초기 화면 또는
                          홈페이지에 게재하는 방법으로 다음 각 호의 사항을
                          회원에게 통보합니다.
                          <ol>
                            <li>1. 이용제한 사유 </li>
                            <li>2. 이용제한 유형 및 기간 </li>
                            <li>3. 이용제한에 대한 이의신청 방법 </li>
                          </ol>
                        </li>
                      </ol>
                      <h5>제24조 (이용제한에 대한 이의신청 절차) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 회원이 의료원의 이용제한에 불복하고자 할 때에는
                          통보를 받은 날로부터 15일 이내에 의료원의 이용제한에
                          불복하는 이유를 기재한 이의신청서를 서면, 전자우편
                          또는 이에 준하는 방법으로 의료원에 제출하여야 합니다.{" "}
                        </li>
                        <li>
                          ② 제1항의 이의신청서를 접수한 의료원은 접수한 날로부터
                          15일 이내에 회원의 불복 이유에 대하여 서면, 전자우편
                          또는 이에 준하는 방법으로 답변하여야 합니다. 다만,
                          의료원은 15일 이내에 답변이 곤란한 경우 회원에게 그
                          사유와 처리일정을 통보합니다.{" "}
                        </li>
                        <li>
                          ③ 의료원은 위 답변 내용에 따라 상응하는 조치를
                          취하여야 합니다.{" "}
                        </li>
                      </ol>
                      <h5>제25조 (양도금지) </h5>
                      <p>
                        회원이 서비스의 이용권한, 기타 이용계약 상 지위를
                        타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수
                        없습니다.
                      </p>
                      <h4>제6장 손해배상</h4>
                      <h5>제26조 (손해배상) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 의료원이 고의 또는 중과실로 회원에게 손해를 끼친
                          경우, 손해에 대하여 배상할 책임이 있습니다.{" "}
                        </li>
                        <li>
                          ② 회원이 본 약관을 위반하여 의료원에 손해를 끼친 경우,
                          회원은 의료원에 대하여 그 손해에 대하여 배상할 책임이
                          있습니다.{" "}
                        </li>
                      </ol>
                      <h5>제27조 (의료원의 면책) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 의료원은 전시, 사변, 천재지변, 비상사태, 현재의
                          기술로는 해결이 불가능한 기술적 결함 기타 불가항력적
                          사유로 서비스를 제공할 수 없는 경우에는 책임이
                          면제됩니다.{" "}
                        </li>
                        <li>
                          ② 의료원은 회원의 귀책사유로 인한 서비스의 중지,
                          이용장애 및 계약해지에 대하여 책임이 면제됩니다.{" "}
                        </li>
                        <li>
                          ③ 의료원은 기간통신 사업자가 전기통신서비스를
                          중지하거나 정상적으로 제공하지 아니하여 회원에게
                          손해가 발생한 경우에 대해서 의료원의 고의 또는 중대한
                          과실이 없는 한 책임이 면제됩니다.{" "}
                        </li>
                        <li>
                          ④ 의료원은 사전에 공지된 서비스용 설비의 보수, 교체,
                          정기점검, 공사 등 부득이한 사유로 서비스가 중지되거나
                          장애가 발생한 경우에 대해서 의료원의 고의 또는 중대한
                          과실이 없는 한 책임이 면제됩니다.{" "}
                        </li>
                        <li>
                          ⑤ 의료원은 회원의 컴퓨터 환경으로 인하여 발생하는 제반
                          문제 또는 의료원의 고의 또는 중대한 과실이 없는
                          네트워크 환경으로 인하여 발생하는 문제에 대해서 책임이
                          면제됩니다.{" "}
                        </li>
                        <li>
                          ⑥ 의료원은 회원 또는 제3자가 서비스 내 또는 웹사이트
                          상에 게시 또는 전송한 정보, 자료, 사실의 신뢰도,
                          정확성 등의 내용에 대해서는 의료원의 고의 또는 중대한
                          과실이 없는 한 책임이 면제됩니다.{" "}
                        </li>
                        <li>
                          ⑦ 의료원은 회원 상호간 또는 회원과 제3자간에 서비스를
                          매개로 발생한 분쟁에 대해 개입할 의무가 없으며 이로
                          인한 손해를 배상할 책임도 없습니다.{" "}
                        </li>
                        <li>
                          ⑧ 의료원이 제공하는 서비스 중 무료서비스의 경우에는
                          의료원의 고의 또는 중대한 과실이 없는 한 의료원은
                          손해배상을 하지 않습니다.{" "}
                        </li>
                        <li>
                          ⑨ 의료원은 회원의 컴퓨터 오류에 의한 손해가 발생한
                          경우 또는 신상정보 및 전자우편주소를 부정확하게
                          기재하거나 미기재하여 손해가 발생한 경우에 대하여
                          의료원의 고의 또는 중대한 과실이 없는 한 책임이
                          면제됩니다.{" "}
                        </li>
                      </ol>
                      <h5>제28조 (회원의 고충처리 및 분쟁해결) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 의료원은 회원의 편의를 고려하여 회원의 의견이나
                          불만을 제시하는 방법을 초기화면이나 홈페이지에서
                          안내합니다. 의료원은 이러한 회원의 의견이나 불만을
                          처리하기 위한 전담조직을 운영합니다.{" "}
                        </li>
                        <li>
                          ② 의료원은 회원으로부터 제기되는 의견이나 불만이
                          정당하다고 객관적으로 인정될 경우에는 합리적인 기간
                          내에 이를 신속하게 처리합니다. 다만, 처리에 장기간이
                          소요되는 경우에는 회원에게 장기간이 소요되는 사유와
                          처리일정을 홈페이지에 공지하거나 전자우편, 전화 또는
                          서면 등으로 통보합니다.{" "}
                        </li>
                        <li>
                          ③ 의료원과 회원간에 분쟁이 발생하여 제3의
                          분쟁조정기관이 조정할 경우 의료원은 이용제한 등
                          회원에게 조치한 사항을 성실히 증명하고, 조정기관의
                          조정에 따를 수 있습니다.{" "}
                        </li>
                      </ol>
                      <h5>제29조 (회원에 대한 통지) </h5>
                      <ol className="agree_num">
                        <li>
                          ① 의료원이 회원에게 통지를 하는 경우 회원이 지정한
                          전자우편주소, 휴대폰 문자메시지 등으로 할 수 있습니다.{" "}
                        </li>
                        <li>
                          ② 의료원은 회원 전체에게 통지를 하는 경우 7일 이상
                          의료원의 초기화면에 게시하거나 공지사항등을
                          제시함으로써 제1항의 통지에 갈음할 수 있습니다.{" "}
                        </li>
                      </ol>
                      <h5>제30조 (재판권 및 준거법) </h5>
                      <p>
                        본 약관은 대한민국 법률에 따라 규율되고 해석되며,
                        의료원과 회원간에 발생한 분쟁으로 소송이 제기되는 경우,
                        법령에 정한 절차에 따른 법원을 관할 법원으로 합니다.{" "}
                      </p>
                      <h5>[부칙] </h5>
                      <ol>
                        <li>
                          ① (시행일) 본 약관은 2014년 12월 24일부터 시행됩니다.{" "}
                        </li>
                      </ol>
                    </div>
                  </div>

                  <div className="agree_title">
                    <input
                      type="checkbox"
                      name="agree_private"
                      id="agree_private"
                      className="checkBox"
                      checked={
                        checkList.includes("agree_private") ? true : false
                      }
                      onClick={check}
                    />
                    <label htmlFor="agree_private">
                      <span>
                        <strong>개인정보 수집&middot;이용</strong>(필수)
                      </span>
                    </label>
                    {/* <a href="#policy2" className="d-down-sm js-layer-open"><span className="sr-only">개인정보 수집·이용 보기</span></a> */}
                  </div>
                  <div className="custom-scroll">
                    <div className="agree_content">
                      <h5>개인정보의 수집 및 이용목적</h5>
                      <p>
                        연세대학교 의료원(이하 “의료원”)에서 개인정보를 수집하고
                        이용하는 목적은 홈페이지 회원의 가입 및 관리를
                        위함입니다. <br />
                        의료원 산하병원(세브란스병원, 강남세브란스병원,
                        용인세브란스병원, 치과대학병원)의 홈페이지는
                        통합회원제로 운영되고 있으며, 한 번의 로그인으로 모든
                        사이트 이용이 가능합니다.
                        <br />
                        <br />
                        수집된 개인정보는 다음과 같이 활용됩니다.{" "}
                      </p>
                      <ol className="agree_num bold">
                        <li>
                          1. 진료/건강검진 예약, 예약조회 및 회원제 서비스
                          이용에 따른 본인 확인 절차에 사용
                        </li>
                        <li>
                          2. 공지사항 전달, 불만처리등을 위한 의사소통 경로
                        </li>
                        <li>3. 건강검진 관련 물품 발송</li>
                        <li>4. 진료의뢰 환자의 예약을 위한 자료</li>
                        <li>5. 교육 신청자의 교육진행을 위한 자료</li>
                      </ol>
                      <p>
                        (위항의 원활한 업무처리를 위하여 개인정보 처리(취급)
                        업무(DM등)를 외부 전문업체에 위탁할 수 있으며 해당내용은
                        홈페이지에 공개합니다.)
                      </p>
                      <h5>개인정보의 수집항목</h5>
                      <p>
                        연세의료원에서 수집하는 개인정보 항목은 다음과 같습니다.
                      </p>
                      <h6>&lt;회원가입 처리항목&gt;</h6>
                      <ul className="agree_num bold">
                        <li>
                          1) 내/외국인(만14세 이상 국내거주 내/외국인)
                          <ul>
                            <li>
                              - 필수항목 : 성명, 아이디, 비밀번호, 이메일,
                              연락처{" "}
                            </li>
                            <li>- 선택항목 : 예비연락처 </li>
                          </ul>
                        </li>
                        <li>
                          2) 소아/청소년(만14세 미만 내/외국인)
                          <ul>
                            <li>
                              - 필수항목 : 성명, 아이디, 비밀번호, 이메일,
                              연락처, 법정대리인 성명, 법정대리인성별,
                              법정대리인 생년월일, 법정대리인
                              인증(휴대폰인증/아이폰인증/범용 공인인증서){" "}
                            </li>
                            <li>- 선택항목 : 예비연락처 </li>
                          </ul>
                        </li>
                        <li>
                          3) 해외거주외국인
                          <ul>
                            <li>
                              - 필수항목 : 국적, 거주국가, 이름, 성별, 생년월일,
                              아이디, 비밀번호, 현지연락처, 이메일{" "}
                            </li>
                            <li>- 선택항목 : 한국내 연락처 </li>
                          </ul>
                        </li>
                        <li>
                          4) SNS(네이버)
                          <ul>
                            <li>- 필수항목 : 이용자 고유 식별자 </li>
                            <li>
                              - 선택항목 : 이름, 이메일, 프로필사진, 성별,
                              생년월일, 생일, 연령대, CI{" "}
                            </li>
                          </ul>
                        </li>
                        <li>
                          5) SNS(카카오톡)
                          <ul>
                            <li>- 필수항목 : 닉네임, 프로필 사진 </li>
                            <li>- 선택항목 : 성별 </li>
                          </ul>
                        </li>
                        <li>
                          6) 간편예약
                          <ul>
                            <li>- 필수항목 : 전화번호 </li>
                          </ul>
                        </li>
                        <li>
                          7) 비회원 예약(주민등록번호 예약 시)
                          <ul>
                            <li>
                              - 필수항목 : 성명, 주민등록번호, 전화번호,
                              인증(휴대폰인증/아이폰인증/범용 공인인증서){" "}
                            </li>
                          </ul>
                        </li>
                        <li>
                          8) 비회원 예약(대리 예약)
                          <ul>
                            <li>- 필수항목 : 성명, 전화번호 </li>
                            <li>
                              - 필수정보 : 성명, 아이디, 비밀번호, 연락처,
                              이메일{" "}
                            </li>
                            <li>- 선택정보 : 예비연락처, 관심질병 </li>
                          </ul>
                        </li>
                      </ul>
                      <h6>&lt;진료/건강검진 예약시 수집정보&gt;</h6>
                      <ul className="agree_num">
                        <li>- 필수정보 : 고유식별정보 또는 병원등록번호 </li>
                      </ul>
                      <h6 className="h6-subtitle">
                        &lt;진료/건강검진/검사예약조회 및 결과 조회,
                        증명서발급시 수집정보&gt;
                      </h6>
                      <ul className="agree_num">
                        <li>- 필수정보 : 병원등록번호 </li>
                      </ul>
                      <h6>&lt;교육비, 발전기금 결재시 수집정보&gt;</h6>
                      <ul className="agree-num">
                        <li>
                          - 필수정보 : 고유식별정보, 신용카드, 은행 계좌 등{" "}
                        </li>
                      </ul>
                      <p>
                        귀하는 선택정보에 대한 개인정보 수집․이용에 동의하지
                        않으실 수 있습니다. <br />
                        선택정보 수집‧이용에 동의하지 않을 경우에도 홈페이지
                        회원가입은 가능하나, 예약에 관련된 연락등 일부 서비스의
                        이용이 제한될 수 있습니다.{" "}
                      </p>
                      <p>
                        다만, 홈페이지 개선 지원을 위한 최소한의 정보인
                        필수항목의 개인정보 미제공시에는 홈페이지 회원가입이
                        거부될 수 있습니다.{" "}
                      </p>
                      <br />

                      <h5>개인정보의 수집방법 </h5>
                      <p>
                        연세의료원은 홈페이지 회원가입, 예약및 조회/결과조회,
                        증명서 발급, 신청 양식, 전화, 팩스, 상담게시판, 이메일,
                        이벤트 응모등을 통해 개인정보를 수집합니다.{" "}
                      </p>
                      <p>
                        개인정보 수집 시에는 별도로 동의 받아야할
                        사항(고유식별정보, 민감정보, 목적 외 이용 및 제 3자
                        제공, 마케팅목적 활용)은 가입신청서등을 통하여 각각
                        동의를 받은 후 수집합니다.{" "}
                      </p>

                      <h5>개인정보의 보유 및 이용기간</h5>
                      <p>
                        개인정보는 연세대학교의료원이 고객에게 서비스를 제공하는
                        기간에 한하여 보유 및 이용되며 회원 탈퇴시에는 즉시
                        파기합니다.
                      </p>
                      <ol className="bold">
                        <li>1. 이용기간 : 회원 가입기간 (탈퇴 후 즉시 파기)</li>
                        <li>
                          2. 설문조사, 행사등의 목적으로 수집된 경우 : 설문조사,
                          행사등이 종료된 때
                        </li>
                        <li>
                          3. 진료서비스의 제공을 위하여 수집된 경우 : 의료법
                          기준에 준함
                        </li>
                      </ol>
                      <p>
                        수집목적 또는 제공받은 목적이 달성된 경우에도 상법 등
                        법령의 규정에 의하여 보존할 필요성이 있는 경우에는
                        귀하의 개인정보를 보유할 수 있습니다
                      </p>
                    </div>
                  </div>

                  <div className="agree_title">
                    <input
                      type="checkbox"
                      name="agree_marketing"
                      id="agree_marketing"
                      className="checkBox"
                      checked={
                        checkList.includes("agree_marketing") ? true : false
                      }
                      onClick={check}
                    />
                    <label htmlFor="agree_marketing">
                      <span>
                        <strong>
                          의학정보 및 홍보 마케팅 제공 수집&middot;이용
                        </strong>
                        (선택)
                      </span>
                    </label>
                    {/* <a href="#" className="d-down-sm js-layer-open"><span className="sr-only">의학정보 및 홍보 마케팅 제공 수집·이용 보기</span></a> */}
                  </div>
                  <div className="gray_box">
                    <p>
                      목적 : 위 진료외 의학정보 안내 및 홍보 마케팅 자료 제공
                    </p>
                    <p>항목 : 회원정보 (성명, 성별, 연락처, 이메일)</p>
                    <p>
                      기간 : 해당목적 달성 시까지 (의료법 및 관계법령상 의무기간
                      포함)
                    </p>
                  </div>
                </div>
              </fieldset>
            </form>

            <div className="box_tip">
              <dl>
                <dt className="text-warning-mark">
                  <img src={warning} alt="warning" />
                  동의 거부 시 불이익에 관한 사항
                </dt>
                <dd>
                  귀하는 위 항목에 대하여 동의를 거부할 수 있으며, 동의 후에도
                  언제든지 철회 가능합니다.
                </dd>
              </dl>
            </div>
            <div className="btn_section">
              <button
                type="button"
                id="agreeBtn"
                className="accept_btn"
                data-url="over"
                onClick={
                  !checkList.includes("agree_term")
                    ? notCheckTerm
                    : !checkList.includes("agree_private")
                    ? notCheckPrivate
                    : acceptBtnClick
                }
              >
                동의합니다
              </button>
              <button
                type="button"
                id="notAgreeBtn"
                className="not_accept_btn"
                onClick={notAcceptBtnClick}
              >
                동의하지 않습니다
              </button>
            </div>
          </div>
        </div>
        <LoginFooter />
      </div>
    </Container>
  );
});

export default JoinAccept;
