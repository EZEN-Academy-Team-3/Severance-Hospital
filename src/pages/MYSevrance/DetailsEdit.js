/**
 * @ File Name: DetailsEdit.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-23 14:00
 * @ Description: 개인정보수정 페이지
 */

import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { Link } from "react-router-dom";
import MyPageHeader from "../../components/MyPageHeader";
import LoginFooter from "../../components/LoginFooter";
import styled from "styled-components";
import dropdown from "../../assets/img/ico-chevron-down@2x.png";

const Container = styled.div`
  margin: auto;
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }

  // 폼박스
  .success,.error {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    padding-top: 120px;
    box-sizing: border-box;
    .popup {
      background-color: #fff;
      width: 350px;
      height: 180px;
      margin: auto;
      transform: translate(0, 50%);
      text-align: center;
      padding-top: 35px;
      box-sizing: border-box;
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

  // 테이블
  .info {
    margin-bottom: 60px;
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

    // input 박스
    .telno1_input,
    .telno2_input,
    .telno3_input,
    .pretelno1_input,
    .pretelno2_input,
    .pretelno3_input,
    .email_id_input,
    .email_domain_input,
    .email_domain {
      width: 180px;
      max-width: 100%;
      height: 45px;
      border: 1px solid #dadada;
      padding: 8px 15px;
      box-sizing: border-box;
      text-align: left;
      font-size: 16px;
      vertical-align: middle;
      margin-bottom: 10px;
      margin-top: 5px;
      &:focus {
        outline: 1px solid rgb(0, 148, 251);
      }
    }
    .text {
      margin: 0 8px;
    }
    .password {
      width: 355px;
      max-width: 100%;
      height: 45px;
      border: 1px solid #dadada;
      padding: 8px 15px;
      box-sizing: border-box;
      text-align: left;
      font-size: 16px;
      vertical-align: middle;
      margin-bottom: 10px;
      margin-top: 5px;
      &:focus {
        outline: 1px solid rgb(0, 148, 251);
      }
    }

    // 셀렉트 박스
    select {
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
    .email_domain {
      margin-left: 8px;
    }
    input[type="checkbox"] {
      box-sizing: border-box;
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid #aaa;
      vertical-align: middle;
      border-radius: 0;
      margin: 0 5px 5px 0;
      background-color: #fff;
      content: "";
    }
  }

  // 하단 버튼
  .buttons {
    width: 210px;
    margin: 60px auto;
    .edit {
      width: 100px;
      float: left;
      height: 50px;
      font-size: 18px;
      padding: 5px 15px;
      box-sizing: border-box;
      border-radius: 30px;
      border: 2px solid rgb(0, 148, 251);
      background-color: rgb(0, 148, 251);
      color: white;
      margin-right: 10px;
    }
    .re_input {
      width: 100px;
      float: left;
      height: 50px;
      font-size: 18px;
      padding: 5px 15px;
      box-sizing: border-box;
      border-radius: 30px;
      border: 2px solid rgb(0, 148, 251);
      background-color: white;
      color: rgb(0, 148, 251);
    }
  }
  .cases {
    &:before {
      content: "";
      display: block;
      clear: both;
    }
    width: 1280px;
    margin: 180px auto 0;
    background-color: #f9f9f9;
    padding: 25px;
    ul {
      li {
        margin-top: 5px;
        font-size: 16px;
        b {
          font-weight: bold;
          color: rgb(0, 148, 251);
        }
        &:before {
          content: "";
          display: block;
          width: 4px;
          height: 4px;
          background-color: rgb(0, 148, 251);
          float: left;
          margin: 10px 5px 0 0;
        }
        span {
          margin-left: 1.3%;
        }
      }
    }
  }
`;

const DetailsEdit = memo(() => {
  const navigate = useNavigate();

  const clickReInput = (e) => {
    navigate("/mysevrance");
  };

  const closeBox = (e) => {
    document.querySelector(".success").style.display = "none";
    navigate("/mysevrance");
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    control,
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    console.log(data);
    document.querySelector('.success').style.display = 'block';
  };

  const onError = (error) => {
    console.log(error);
  };

  const watching = useWatch({
    control,
    name: ["password", "tel2", "tel3"],
  });

  console.log(watching);

  return (
    <Container>
      <MyPageHeader />
      <div className="bgAll">
        <h1>개인정보수정</h1>
        <form className="success">
          <div className="popup">
            <p>성공하였습니다.</p>
            <button type="button" className="close" onClick={closeBox}>
              닫기
            </button>
          </div>
        </form>
        <table className="info">
          <tbody>
            <tr>
              <th>성명</th>
              <td>김다보미 (1995.08.30 여)</td>
            </tr>
            <tr>
              <th>아이디</th>
              <td>cdabomi60</td>
            </tr>
            <tr>
              <th>회원구분</th>
              <td>일반 회원</td>
            </tr>
          </tbody>
        </table>
        <form className="input" onSubmit={handleSubmit(onSubmit, onError)}>
          <table>
            <tbody>
              {/* 연락처 입력 */}
              <tr>
                <th>
                  <span className="require">*</span>연락처
                </th>
                <td>
                  <div>
                    <span className="tel_input">
                      <select
                        name="telno1"
                        id="telno1"
                        className="telno1_input"
                        title="연락처 맨 앞자리"
                        data-parsley-group="phone"
                        required=""
                        data-parsley-id="11"
                      >
                        <option defaultValue="010">010</option>
                        <option defaultValue="011">011</option>
                        <option defaultValue="016">016</option>
                        <option defaultValue="017">017</option>
                        <option defaultValue="018">018</option>
                        <option defaultValue="019">019</option>
                        <option defaultValue="044">044(세종)</option>
                        <option defaultValue="070">070</option>
                        <option defaultValue="02">02(서울)</option>
                        <option defaultValue="031">031(경기)</option>
                        <option defaultValue="032">032(인천)</option>
                        <option defaultValue="033">033(강원)</option>
                        <option defaultValue="041">041(충남)</option>
                        <option defaultValue="042">042(대전)</option>
                        <option defaultValue="043">043(충북)</option>
                        <option defaultValue="051">051(부산)</option>
                        <option defaultValue="052">052(울산)</option>
                        <option defaultValue="053">053(대구)</option>
                        <option defaultValue="054">054(경북)</option>
                        <option defaultValue="055">055(경남)</option>
                        <option defaultValue="061">061(전남)</option>
                        <option defaultValue="062">062(광주)</option>
                        <option defaultValue="063">063(전북)</option>
                        <option defaultValue="064">064(제주)</option>
                      </select>
                    </span>
                    <span className="text">-</span>
                    <span className="tel_input">
                      <input
                        type="text"
                        name="telno2"
                        id="telno2"
                        className="telno2_input"
                        {...register("tel2", {
                          required: true
                        })}
                      />
                    </span>
                    <span className="text">-</span>
                    <span className="tel_input">
                      <input
                        type="text"
                        name="telno3"
                        id="telno3"
                        className="telno3_input"
                        {...register("tel3", {
                          required: true
                        })}
                      />
                    </span>
                  </div>
                  <ul>
                    <li>※ 온라인 진료예약 및 비밀번호 찾기에 사용됩니다.</li>
                  </ul>
                </td>
              </tr>

              {/* 예비연락처 입력 */}
              <tr>
                <th>예비연락처</th>
                <td>
                  <div>
                    <span className="pretel_input">
                      <select
                        name="pretelno1"
                        id="pretelno1"
                        className="pretelno1_input"
                        title="예비연락처 맨 앞자리"
                        data-parsley-group="phone"
                        required=""
                        data-parsley-id="11"
                      >
                        <option defaultValue="010">010</option>
                        <option defaultValue="011">011</option>
                        <option defaultValue="016">016</option>
                        <option defaultValue="017">017</option>
                        <option defaultValue="018">018</option>
                        <option defaultValue="019">019</option>
                        <option defaultValue="044">044(세종)</option>
                        <option defaultValue="070">070</option>
                        <option defaultValue="02">02(서울)</option>
                        <option defaultValue="031">031(경기)</option>
                        <option defaultValue="032">032(인천)</option>
                        <option defaultValue="033">033(강원)</option>
                        <option defaultValue="041">041(충남)</option>
                        <option defaultValue="042">042(대전)</option>
                        <option defaultValue="043">043(충북)</option>
                        <option defaultValue="051">051(부산)</option>
                        <option defaultValue="052">052(울산)</option>
                        <option defaultValue="053">053(대구)</option>
                        <option defaultValue="054">054(경북)</option>
                        <option defaultValue="055">055(경남)</option>
                        <option defaultValue="061">061(전남)</option>
                        <option defaultValue="062">062(광주)</option>
                        <option defaultValue="063">063(전북)</option>
                        <option defaultValue="064">064(제주)</option>
                      </select>
                    </span>
                    <span className="text">-</span>
                    <span className="pretel_input">
                      <input
                        type="text"
                        name="pretelno2"
                        id="pretelno2"
                        className="pretelno2_input"
                        title="예비연락처 가운데 네자리"
                        maxLength="4"
                        data-parsley-type="number"
                      />
                    </span>
                    <span className="text">-</span>
                    <span className="pretel_input">
                      <input
                        type="text"
                        name="pretelno3"
                        id="pretelno3"
                        className="pretelno3_input"
                        title="예비연락처 마지막 네자리"
                        maxLength="4"
                        data-parsley-type="number"
                      />
                    </span>
                  </div>
                </td>
              </tr>

              {/* 현재비밀번호 입력 */}
              <tr>
                <th>
                  <span className="require">*</span>비밀번호
                </th>
                <td>
                  <input
                    type="password"
                    className="password"
                    placeholder="비밀번호를 입력해주세요."
                    {...register("password", {
                      required: true
                    })}
                  />
                  <ul>
                    <li>※ 현재 사용중인 비밀번호를 입력해 주세요.</li>
                  </ul>
                </td>
              </tr>
              {/* 이메일 입력 */}
              <tr>
                <th>E-mail</th>
                <td>
                  <div>
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
                  </div>
                  <div className="ckeckBox">
                    <label htmlFor="emailRecptnAgreAt">
                      <input
                        type="checkbox"
                        name="emailRecptnAgreAt"
                        id="emailRecptnAgreAt"
                        className="emailRecptnAgreAt"
                        value="Y"
                        data-parsley-multiple="emailRecptnAgreAt"
                      />
                      이메일 수신동의합니다.
                    </label>
                    <ul>
                      <li>
                        ※ 회원가입 완료 및 예약 관련정보는 수신 동의 여부와
                        관계없이 발송됩니다.
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="buttons">
            <button type="submit" className="edit" disabled={isSubmitting}>
              수정
            </button>
            <button type="button" className="re_input" onClick={clickReInput}>
              재입력
            </button>
          </div>
        </form>
        <div className="cases">
          <ul>
            <li>
              비밀번호를 변경하려면{" "}
              <Link to="/user_info/change_password">
                <b>비밀번호 변경하기&#62;</b>
              </Link>
            </li>
            <li>
              세브란스를 더 이상 이용하지 않는다면{" "}
              <Link to="/user_info/withdraw">
                <b>회원탈퇴 바로가기&#62;</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <LoginFooter />
    </Container>
  );
});

export default DetailsEdit;
