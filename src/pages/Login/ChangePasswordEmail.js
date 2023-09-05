/**
 * @ File Name: ChangePasswordEmail.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2023-01-13 16:35
 * @ Description: 비밀번호 찾기 새비밀번호 설정 페이지
 */

import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import styled from "styled-components";
import LoginHeader from "../../components/LoginHeader";
import LoginFooter from "../../components/LoginFooter";
import check from "../../assets/img/ico-check-primary@2x.png";
import warning from "../../assets/img/ico-warning-mark@2x.png";

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
  h3 {
    width: 800px;
    margin: auto;
    font-size: 16px;
  }
  .content {
    width: 800px;
    margin: 20px auto;

    // 인풋박스
    input {
      width: 580px;
      display: block;
      margin: 10px auto;
      height: 40px;
      border: 1px solid #dadada;
      padding: 8px 15px;
      box-sizing: border-box;
      text-align: left;
      font-size: 16px;
      vertical-align: middle;
      &:focus {
        outline: 1px solid rgb(0, 148, 251);
      }
    }
    // 주의사항
    ul {
      width: 580px;
      margin: 0 auto 20px;
      li {
        margin-left: 20px;
        letter-spacing: 0.02em;
        line-height: 1.625;
        color: #f76117;
        font-size: 14px;
      }
    }
    // 확인버튼
    .button_box {
      width: 250px;
      margin: 40px auto;
      .submit {
        width: 100%;
      }
    }
    // 유효성 검사 부적합 메세지
    .warn {
      line-height: 2em;
      color: #f76117;
      font-weight: bold;
      width: 580px;
      margin: auto;
      display: block;
      img {
        width: 20px;
        float: left;
        margin: 5px 8px 0 0;
      }
    }

    // 유효성 검사 적합 메세지
    .check {
      line-height: 2em;
      color: rgb(0, 148, 251);
      font-weight: bold;
      width: 580px;
      margin: auto;
      display: block;
      img {
        width: 20px;
        float: left;
        margin: 10px 8px 0 0;
      }
    }
  }
`;

const ChangePasswordEmail = memo(() => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    control,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate("/new_password");
  };
  const onError = (error) => {
    console.log(error);
  };
  const watching = useWatch({
    control,
    name: ["password", "newpasswordcheck"],
  });
  console.log(watching);

  const passwordValue = watch("password");
  const repasswordValue = watch("repassword");

  return (
    <Container>
      <LoginHeader />
      <div className="bgAll">
        <h1>비밀번호 찾기</h1>
        <h3>새로 사용할 비밀번호를 입력해 주세요.</h3>
        <hr />
        <form className="content" onSubmit={handleSubmit(onSubmit, onError)}>
          <input
            type="password"
            className="new_password"
            placeholder="새로운 비밀번호를 입력해 주세요."
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
          <ul>
            <li>※ 8자 이상 ~ 20자 이내로 설정해주세요.</li>
            <li>※ 영문, 숫자, 특수문자를 모두 포함해주세요.</li>
            <li>※ 비밀번호 예시: password121!</li>
            <li>
              ※ 문자열이 3자리 이상 연속되거나 동일하지 않게 해주세요. (ex. 111,
              123, 321, aaa, abc 등)
            </li>
          </ul>

          <input
            type="password"
            className="new_password_check"
            placeholder="비밀번호를 한번 더 입력해 주세요."
            {...register("repassword", {
              required: true,
              validate: (val) => {
                if (watch("password") != val) {
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
          <div className="button_box">
            <button
              type="submit"
              className="submit buttonBlue"
              disabled={isSubmitting}
            >
              확인
            </button>
          </div>
        </form>
      </div>
      <LoginFooter />
    </Container>
  );
});

export default ChangePasswordEmail;
