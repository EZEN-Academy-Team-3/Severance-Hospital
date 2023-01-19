/**
 * @ File Name: JoinUs.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2023-01-18 16:00
 * @ Description: 회원가입 정보 입력 페이지
 */

import React, { memo,useDispatch } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import styled from "styled-components";
import axios from "axios";
import LoginHeader from "../../components/LoginHeader";
import LoginFooter from "../../components/LoginFooter";

// 이미지
import Right from "../../assets/img/ico-arrow-right-gray@2x.png";
import step01 from "../../assets/img/ico-login-step1-off@2x.png";
import step02 from "../../assets/img/ico-login-step2-off@2x.png";
import step03 from "../../assets/img/ico-login-step3-on@2x.png";
import step04 from "../../assets/img/ico-login-step4-off@2x.png";
import check from "../../assets/img/ico-check-primary@2x.png";
import warning from "../../assets/img/ico-warning-mark@2x.png";
import dropdown from "../../assets/img/ico-chevron-down@2x.png";

const Container = styled.div`
  width: 100%;
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  hr {
    width: 100%;
    margin: 0;
    border: 0;
    border-bottom: 1px solid #e6e6e6;
  }
  h4 {
    margin: 53px 0 13px 0;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 0.02em;
    line-height: 1.625;
    &:before {
      content: "";
      display: block;
      width: 100px;
      height: 42px;
    }
    .sub_text {
      font-size: 14px;
      color: #999;
      margin-left: 80%;
      .require {
        color: #f76117;
        font-weight: bold;
      }
    }
  }
  table {
    tr {
      td {
        ul {
          li {
            color: #f76117;
            font-size: 14px;
          }
        }
        img {
          width: 20px;
          float: left;
          margin: 5px 8px 0 0;
        }
      }
    }
  }

  // 상단 회원가입 단계
  .steps {
    width: 1280px;
    margin: auto;
    ol {
      li {
        .box {
          font-size: 16px;
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
        &:nth-of-type(3) {
          .box {
            color: rgb(0, 148, 251);
            font-weight: bold;
            border: 2px solid rgb(0, 148, 251);
          }
        }
      }
      .right {
        float: left;
        margin: 13px 3.6%;
        height: 25px;
      }
    }
  }

  // 유효성 검사 부적합 메세지
  .warn {
    line-height: 2em;
    color: #f76117;
    font-weight: bold;
    img {
      margin-top: 6px;
    }
  }

  // 유효성 검사 적합 메세지
  .check {
    line-height: 2em;
    color: rgb(0, 148, 251);
    font-weight: bold;
    img {
      margin-top: 10px;
    }
  }

  // 예약메일 무조건 발송 메세지
  .no_excep {
    color: black;
    font-weight: normal;
  }

  // 인풋박스
  .id_input,
  .password_input,
  .repassword_input,
  .username_input,
  .name_input {
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
  }
  .telno1_input,
  .telno2_input,
  .telno3_input,
  .pretelno1_input,
  .pretelno2_input,
  .pretelno3_input,
  .email_id_input,
  .email_domain_input,
  .email_domain,
  .year_input,
  .month_input,
  .date_input {
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
  }
  .text {
    margin: 0 8px;
  }

  // 셀렉트박스
  .telno1_input,
  .pretelno1_input,
  .email_domain,
  .year_input,
  .month_input,
  .date_input {
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
  .year_input,
  .month_input,
  .date_input {
    margin-right: 8px;
  }
  input[type="checkbox"] {
    box-sizing: border-box;
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #aaa;
    vertical-align: middle;
    border-radius: 0;
    margin: 0 5px 0 0;
    background-color: #fff;
    content: "";
  }

  // 라디오 버튼
  input[type="radio"] {
    box-sizing: border-box;
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #aaa;
    vertical-align: middle;
    border-radius: 0;
    margin: 0 5px 0 0;
    background-color: #fff;
    content: "";
  }
  .radioList {
    label {
      margin-right: 30px;
    }
  }

  // 인풋 포커스 효과
  input:focus {
    outline: 1px solid rgb(0, 148, 251);
  }

  // 버튼
  .phone_btn,
  .ipin_btn,
  .submit_btn {
    float: left;
    height: 50px;
    font-size: 18px;
    padding: 5px 25px;
    box-sizing: border-box;
    border-radius: 30px;
    border: 2px solid rgb(0, 148, 251);
    background-color: rgb(0, 148, 251);
    color: white;
    margin-right: 10px;
  }
  .official_btn {
    float: left;
    height: 50px;
    font-size: 18px;
    padding: 5px 25px;
    box-sizing: border-box;
    border-radius: 30px;
    border: 2px solid rgb(0, 148, 251);
    background-color: white;
    color: rgb(0, 148, 251);
  }
  .submit_btn {
    margin-top: 70px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }

  // 테이블 레이아웃
  .default_info {
    width: 1280px;
    margin: auto;
    table {
      letter-spacing: 0.02em;
      line-height: 1.625;
      font-size: 16px;
      color: #333;
      border-top: 1px solid #aaa;
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
        }
        td {
          padding: 13px 20px;
        }
        &:last-child {
          border-bottom: 1px solid #aaa;
        }
        .require {
          color: #f76117;
          font-weight: bold;
        }
      }
    }
  }

  // 중복확인 버튼
  .dub_btn {
    background-color: #666;
    color: #fff;
    height: 45px;
    padding: 0 24px;
    margin-left: 9px;
    font-size: 16px;
    border: none;
    border-radius: 3px;
    font-weight: 100;
  }
`;

const JoinUs = memo(() => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (async (e) => {
    const userId = e.userid;
    const userPassword = e.password;
    const userName = e.name;
    const userSex = (e.userSex==='남') ? 'M' : 'F';
    const userTel = e.telno1 + e.tel2 + e.tel3;
    const userPreTel = e.pretelno1 + e.pretelno2 + e.pretelno3;
    const userEmail = e.emailId + "@" + e.emailDomainInput;
    const prtctorName = e.prtctorNm;
    const prtctorSex = e.prtctorSexdstnCode;
    const prtctorBirth = e.year_input + e.month_input + e.date_input;
    const regDate = dayjs(new Date()).format('YYYY-MM-DD hh:mm:ss');
    const userCategory = "N";
    const withdrawalStatus = "N";
    // const withdrawalDate = "";
    // const withdrawalReason = "";
    // const editDate = "";
    // const pwEditDate = "";
    // const authCode = "";
    const termsAgree = "Y";
    const privateAgree = "Y";
    const marketingAgree = "Y";

    try {
      // Ajax 요청 보내기 -> 백엔드가 전달한 결과값이 response.data에 저장된다.
      const response = await axios.post("/userinfo", {
        userId: userId,
        userPassword: userPassword,
        userName: userName,
        userSex: userSex,
        userTel: userTel,
        userPreTel: userPreTel,
        userEmail: userEmail,
        prtctorName: prtctorName,
        prtctorSex: prtctorSex,
        prtctorBirth: prtctorBirth,
        regDate: regDate,
        userCategory: userCategory,
        withdrawalStatus: withdrawalStatus,
        termsAgree: termsAgree,
        privateAgree: privateAgree,
        marketingAgree: marketingAgree,
      });
      console.log(response.data);
      navigate("/join_complete");
    } catch (error) {
      if (error.response?.data?.rtmsg) {
        alert(error.response?.data?.rtmsg);
      } else {
        const errorMsg = '[' + error.response.status + '] ' + error.response.statusText;
        console.error(errorMsg);
        alert("회원가입에 실패했습니다. 입력정보를 확인하세요.");
      }
    }
  });

  const onError = (error) => {
    console.log(error);
  };

  const userIdValue = watch("userid");
  const passwordValue = watch("password");
  const repasswordValue = watch("repassword");

  return (
    <Container>
      <LoginHeader />
      <div className="bgAll">
        <div className="title">
          <h1>회원가입</h1>
        </div>
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
        <form
          className="default_info"
          onSubmit={handleSubmit(onSubmit, onError)}
          id="default_info"
          method="post"
        >
          <h4>
            기본정보입력
            <span className="sub_text">
              <span className="require">*</span>는 필수항목입니다.
            </span>
          </h4>
          <table>
            <tbody>
              {/* 아이디 입력 */}
              <tr>
                <th>
                  <span className="require">*</span>아이디
                </th>
                <td>
                  <div>
                    <input
                      type="text"
                      name="userid"
                      id="userid"
                      className="id_input"
                      {...register("userid", {
                        required: "아이디를 입력해주세요.",
                        minLength: {
                          value: 6,
                          message:
                            "아이디는 6자 이상 20자 이내로 입력해주세요.",
                        },
                        maxLength: {
                          value: 20,
                          message:
                            "아이디는 6자 이상 20자 이내로 입력해주세요.",
                        },
                        pattern: {
                          value: /^[a-zA-Z0-9]*$/,
                          message: "한글/특수문자는 입력이 불가능합니다.",
                        },
                      })}
                    />
                    <button
                      type="button"
                      className="dub_btn"
                      // {...register("dubBtn", {
                      //   required: "아이디 중복확인을 해주세요."
                      // })}
                    >
                      중복확인
                    </button>
                  </div>
                  <ul>
                    <li>※ 6자 이상, 20자 이내로 설정이 가능합니다.</li>
                    <li>※ 한글/특수문자는 입력이 불가능합니다.</li>
                  </ul>
                  {errors.userid ? (
                    <p className="warn">
                      <img src={warning} alt="warning" />
                      {errors.userid.message}
                    </p>
                  ) : (
                    userIdValue && (
                      <p className="check">
                        <img src={check} alt="check" />
                        사용이 가능한 아이디입니다.
                      </p>
                    )
                  )}
                </td>
              </tr>

              {/* 비밀번호 입력 */}
              <tr>
                <th>
                  <span className="require">*</span>비밀번호
                </th>
                <td>
                  <div>
                    <input
                      type="password"
                      autoComplete="new-password"
                      name="password"
                      id="password"
                      className="password_input"
                      {...register("password", {
                        required: "비밀번호를 입력해주세요.",
                        minLength: {
                          value: 8,
                          message: "비밀번호 규격에 맞춰 입력해주세요.",
                        },
                        maxLength: {
                          value: 20,
                          message: "비밀번호 규격에 맞춰 입력해주세요.",
                        },
                        pattern: {
                          value:
                            /(?=.*\d{1,20})(?=.*[~`!@#$%\^&*()-+=]{1,20})(?=.*[a-zA-Z]{2,20}).{8,20}$/,
                          message: "비밀번호 규격에 맞춰 입력해주세요.",
                        },
                      })}
                    />
                  </div>
                  <ul>
                    <li>※ 8자 이상 ~ 20자 이내로 설정해주세요.</li>
                    <li>※ 영문, 숫자, 특수문자를 모두 포함해주세요.</li>
                    <li>※ 비밀번호 예시: password121!</li>
                    <li>
                      ※ 문자열이 3자리 이상 연속되거나 동일하지 않게 해주세요.
                      (ex. 111, 123, 321, aaa, abc 등)
                    </li>
                  </ul>
                  {errors.password ? (
                    <p className="warn">
                      <img src={warning} alt="warning" />
                      {errors.password.message}
                    </p>
                  ) : (
                    passwordValue && (
                      <p className="check">
                        <img src={check} alt="check" />
                        안전한 비밀번호입니다.
                      </p>
                    )
                  )}
                </td>
              </tr>

              {/* 비밀번호 확인 */}
              <tr>
                <th>
                  <span className="require">*</span>비밀번호 확인
                </th>
                <td>
                  <div>
                    <input
                      type="password"
                      autoComplete="new-password"
                      name="repassword"
                      id="repassword"
                      className="repassword_input"
                      {...register("repassword", {
                        required: "비밀번호를 다시 한번 입력해주세요.",
                        validate: (val) => {
                          if (watch("password") !== val) {
                            return "비밀번호가 일치하지 않습니다.";
                          }
                        },
                      })}
                    />
                    {errors.repassword ? (
                      passwordValue ? (
                        errors.password ? (
                          <p className="warn">
                            <img src={warning} alt="warning" />
                            {errors.password.message}
                          </p>
                        ) : (
                          <p className="warn">
                            <img src={warning} alt="warning" />
                            {errors.repassword.message}
                          </p>
                        )
                      ) : (
                        <p className="warn">
                          <img src={warning} alt="warning" />
                          비밀번호를 입력해주세요.
                        </p>
                      )
                    ) : passwordValue === repasswordValue &&
                      repasswordValue &&
                      !errors.password &&
                      !errors.repassword ? (
                      <p className="check">
                        <img src={check} alt="check" />
                        비밀번호가 일치합니다.
                      </p>
                    ) : repasswordValue && errors.password ? (
                      <p className="warn">
                        <img src={warning} alt="warning" />
                        {errors.password.message}
                      </p>
                    ) : (
                      repasswordValue && (
                        <p className="warn">
                          <img src={warning} alt="warning" />
                          비밀번호가 일치하지 않습니다.
                        </p>
                      )
                    )}
                  </div>
                </td>
              </tr>

              {/* 이름 */}
              <tr>
                <th>
                  <span className="require">*</span>성명
                </th>
                <td>
                  <div>
                    <input
                      type="text"
                      autoComplete="username"
                      name="name"
                      id="username"
                      className="username_input"
                      {...register("name", {
                        required: "성명을 입력해주세요.",
                      })}
                    />
                  </div>
                  {errors.name && (
                    <p className="warn">
                      <img src={warning} alt="warning" />
                      {errors.name.message}
                    </p>
                  )}
                </td>
              </tr>

              {/* 성별 */}
              <tr>
                <th>
                  <span className="require">*</span>성별
                </th>
                <td>
                  <span className="radioList">
                    <input type="radio" id="male" value="M" name="userSex" />
                    <label htmlFor="male">남</label>
                  </span>
                  <span className="radioList">
                    <input
                      type="radio"
                      id="female"
                      value="F"
                      name="userSex"
                      readOnly="readOnly"
                      data-parsley-multiple="prtctorSexdstnCode"
                    />
                    <label htmlFor="female">여</label>
                  </span>
                </td>
              </tr>

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
                        name="tel2"
                        id="telno2"
                        className="telno2_input"
                        {...register("tel2", {
                          required: "연락처를 입력해주세요.",
                        })}
                      />
                    </span>
                    <span className="text">-</span>
                    <span className="tel_input">
                      <input
                        type="text"
                        name="tel3"
                        id="telno3"
                        className="telno3_input"
                        {...register("tel3", {
                          required: "연락처를 입력해주세요.",
                        })}
                      />
                    </span>
                  </div>
                  <p className="no_excep">
                    예약 관련정보는 수신동의 여부와 관계없이 발송됩니다.
                  </p>
                  {errors.tel3 && (
                    <p className="warn">
                      <img src={warning} alt="warning" />
                      {errors.tel3.message}
                    </p>
                  )}
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
          <h4>법정대리인 정보입력</h4>
          <table>
            <tbody>
              {/* 법정대리인 성명 */}
              <tr>
                <th>성명</th>
                <td>
                  <div>
                    <input
                      type="text"
                      id="prtctorNm"
                      name="prtctorNm"
                      className="name_input"
                    />
                  </div>
                </td>
              </tr>
              {/* 법정대리인 성별 */}
              <tr>
                <th>성별</th>
                <td>
                  <span className="radioList">
                    <input
                      type="radio"
                      id="male"
                      value="M"
                      name="prtctorSexdstnCode"
                      data-parsley-error-message="성별을 선택해주세요."
                      required=""
                      readOnly="readOnly"
                      data-parsley-multiple="prtctorSexdstnCode"
                    />
                    <label htmlFor="male">남</label>
                  </span>
                  <span className="radioList">
                    <input
                      type="radio"
                      id="female"
                      value="F"
                      name="prtctorSexdstnCode"
                      readOnly="readOnly"
                      data-parsley-multiple="prtctorSexdstnCode"
                    />
                    <label htmlFor="female">여</label>
                  </span>
                </td>
              </tr>
              {/* 법정대리인 생년월일 */}
              <tr>
                <th>생년월일</th>
                <td>
                  <div>
                    <span className="birthdate_input">
                      <select
                        className="year_input"
                        id="birthYear"
                        title="년"
                        name="year_input"
                      >
                        <option defaultValue="1900">1900년</option>
                        <option defaultValue="1901">1901년</option>
                        <option defaultValue="1902">1902년</option>
                        <option defaultValue="1903">1903년</option>
                        <option defaultValue="1904">1904년</option>
                        <option defaultValue="1905">1905년</option>
                        <option defaultValue="1906">1906년</option>
                        <option defaultValue="1907">1907년</option>
                        <option defaultValue="1908">1908년</option>
                        <option defaultValue="1909">1909년</option>
                        <option defaultValue="1910">1910년</option>
                        <option defaultValue="1911">1911년</option>
                        <option defaultValue="1912">1912년</option>
                        <option defaultValue="1913">1913년</option>
                        <option defaultValue="1914">1914년</option>
                        <option defaultValue="1915">1915년</option>
                        <option defaultValue="1916">1916년</option>
                        <option defaultValue="1917">1917년</option>
                        <option defaultValue="1918">1918년</option>
                        <option defaultValue="1919">1919년</option>
                        <option defaultValue="1920">1920년</option>
                        <option defaultValue="1921">1921년</option>
                        <option defaultValue="1922">1922년</option>
                        <option defaultValue="1923">1923년</option>
                        <option defaultValue="1924">1924년</option>
                        <option defaultValue="1925">1925년</option>
                        <option defaultValue="1926">1926년</option>
                        <option defaultValue="1927">1927년</option>
                        <option defaultValue="1928">1928년</option>
                        <option defaultValue="1929">1929년</option>
                        <option defaultValue="1930">1930년</option>
                        <option defaultValue="1931">1931년</option>
                        <option defaultValue="1932">1932년</option>
                        <option defaultValue="1933">1933년</option>
                        <option defaultValue="1934">1934년</option>
                        <option defaultValue="1935">1935년</option>
                        <option defaultValue="1936">1936년</option>
                        <option defaultValue="1937">1937년</option>
                        <option defaultValue="1938">1938년</option>
                        <option defaultValue="1939">1939년</option>
                        <option defaultValue="1940">1940년</option>
                        <option defaultValue="1941">1941년</option>
                        <option defaultValue="1942">1942년</option>
                        <option defaultValue="1943">1943년</option>
                        <option defaultValue="1944">1944년</option>
                        <option defaultValue="1945">1945년</option>
                        <option defaultValue="1946">1946년</option>
                        <option defaultValue="1947">1947년</option>
                        <option defaultValue="1948">1948년</option>
                        <option defaultValue="1949">1949년</option>
                        <option defaultValue="1950">1950년</option>
                        <option defaultValue="1951">1951년</option>
                        <option defaultValue="1952">1952년</option>
                        <option defaultValue="1953">1953년</option>
                        <option defaultValue="1954">1954년</option>
                        <option defaultValue="1955">1955년</option>
                        <option defaultValue="1956">1956년</option>
                        <option defaultValue="1957">1957년</option>
                        <option defaultValue="1958">1958년</option>
                        <option defaultValue="1959">1959년</option>
                        <option defaultValue="1960">1960년</option>
                        <option defaultValue="1961">1961년</option>
                        <option defaultValue="1962">1962년</option>
                        <option defaultValue="1963">1963년</option>
                        <option defaultValue="1964">1964년</option>
                        <option defaultValue="1965">1965년</option>
                        <option defaultValue="1966">1966년</option>
                        <option defaultValue="1967">1967년</option>
                        <option defaultValue="1968">1968년</option>
                        <option defaultValue="1969">1969년</option>
                        <option defaultValue="1970">1970년</option>
                        <option defaultValue="1971">1971년</option>
                        <option defaultValue="1972">1972년</option>
                        <option defaultValue="1973">1973년</option>
                        <option defaultValue="1974">1974년</option>
                        <option defaultValue="1975">1975년</option>
                        <option defaultValue="1976">1976년</option>
                        <option defaultValue="1977">1977년</option>
                        <option defaultValue="1978">1978년</option>
                        <option defaultValue="1979">1979년</option>
                        <option defaultValue="1980">1980년</option>
                        <option defaultValue="1981">1981년</option>
                        <option defaultValue="1982">1982년</option>
                        <option defaultValue="1983">1983년</option>
                        <option defaultValue="1984">1984년</option>
                        <option defaultValue="1985">1985년</option>
                        <option defaultValue="1986">1986년</option>
                        <option defaultValue="1987">1987년</option>
                        <option defaultValue="1988">1988년</option>
                        <option defaultValue="1989">1989년</option>
                        <option defaultValue="1990">1990년</option>
                        <option defaultValue="1991">1991년</option>
                        <option defaultValue="1992">1992년</option>
                        <option defaultValue="1993">1993년</option>
                        <option defaultValue="1994">1994년</option>
                        <option defaultValue="1995">1995년</option>
                        <option defaultValue="1996">1996년</option>
                        <option defaultValue="1997">1997년</option>
                        <option defaultValue="1998">1998년</option>
                        <option defaultValue="1999">1999년</option>
                        <option defaultValue="2000">2000년</option>
                        <option defaultValue="2001">2001년</option>
                        <option defaultValue="2002">2002년</option>
                        <option defaultValue="2003">2003년</option>
                        <option defaultValue="2004">2004년</option>
                      </select>
                    </span>
                    <span className="birthdate_input">
                      <select
                        className="month_input"
                        id="birthMonth"
                        title="월"
                        name="month_input"
                      >
                        <option defaultValue="1">1월</option>
                        <option defaultValue="2">2월</option>
                        <option defaultValue="3">3월</option>
                        <option defaultValue="4">4월</option>
                        <option defaultValue="5">5월</option>
                        <option defaultValue="6">6월</option>
                        <option defaultValue="7">7월</option>
                        <option defaultValue="8">8월</option>
                        <option defaultValue="9">9월</option>
                        <option defaultValue="10">10월</option>
                        <option defaultValue="11">11월</option>
                        <option defaultValue="12">12월</option>
                      </select>
                    </span>
                    <span className="birthdate_input">
                      <select
                        className="date_input"
                        id="birthDate"
                        title="일"
                        name="date_input"
                      >
                        <option defaultValue="1">1일</option>
                        <option defaultValue="2">2일</option>
                        <option defaultValue="3">3일</option>
                        <option defaultValue="4">4일</option>
                        <option defaultValue="5">5일</option>
                        <option defaultValue="6">6일</option>
                        <option defaultValue="7">7일</option>
                        <option defaultValue="8">8일</option>
                        <option defaultValue="9">9일</option>
                        <option defaultValue="10">10일</option>
                        <option defaultValue="11">11일</option>
                        <option defaultValue="12">12일</option>
                        <option defaultValue="13">13일</option>
                        <option defaultValue="14">14일</option>
                        <option defaultValue="15">15일</option>
                        <option defaultValue="16">16일</option>
                        <option defaultValue="17">17일</option>
                        <option defaultValue="18">18일</option>
                        <option defaultValue="19">19일</option>
                        <option defaultValue="20">20일</option>
                        <option defaultValue="21">21일</option>
                        <option defaultValue="22">22일</option>
                        <option defaultValue="23">23일</option>
                        <option defaultValue="24">24일</option>
                        <option defaultValue="25">25일</option>
                        <option defaultValue="26">26일</option>
                        <option defaultValue="27">27일</option>
                        <option defaultValue="28">28일</option>
                        <option defaultValue="29">29일</option>
                        <option defaultValue="30">30일</option>
                        <option defaultValue="31">31일</option>
                      </select>
                    </span>
                  </div>
                </td>
              </tr>
              {/* 본인인증 */}
              <tr>
                <th>인증</th>
                <td>
                  <div className="table_btn">
                    <button type="button" id="mobileBtn" className="phone_btn">
                      휴대폰 인증
                    </button>
                    <button type="button" id="ipinBtn" className="ipin_btn">
                      아이핀 인증
                    </button>
                    <button type="button" id="certBtn" className="official_btn">
                      범용 공인인증서
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="submit_btn" disabled={isSubmitting}>
            확인
          </button>
        </form>
      </div>
      <LoginFooter />
    </Container>
  );
});
export default JoinUs;
