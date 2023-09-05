/**
 * @ File Name: ChangePassword.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2023-01-13 16:40
 * @ Description: 비밀번호변경 페이지
 */

import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import MyPageHeader from "../../components/MyPageHeader";
import LoginFooter from "../../components/LoginFooter";
import styled from "styled-components";
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";
import check from "../../assets/img/ico-check-primary@2x.png";
import warning from "../../assets/img/ico-warning-mark@2x.png";

const Container = styled.div`
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  hr {
    width: 580px;
    border: 0;
    border-bottom: 1px solid #e6e6e6;
    margin: 30px auto;
  }
  // 안내박스
  .boxGuide {
    width: 800px;
    margin: auto;
    margin-bottom: 40px;
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

  // 폼
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

  // 버튼
  .submit,
  .cancel {
    box-sizing: border-box;
    width: 280px;
    float: left;
  }
  .cancel {
    margin-left: 10px;
    background-color: #666;
  }

  // 폼 팝업
  .complete {
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
`;

const ChangePassword = memo(() => {
  const navigate = useNavigate();

  const closeBox = (e) => {
    document.querySelector(".complete").style.display = "none";
  };

  const goHome = (e) => {
    navigate("/mysevrance");
  };

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
    document.querySelector(".complete").style.display = "block";
  };

  const onError = (error) => {
    console.log(error);
  };
  const watching = useWatch({
    control,
    name: ["password", "newpasswordcheck"],
  });
  console.log(watching);

  const newpasswordValue = watch("newpassword");
  const repasswordValue = watch("repassword");

  return (
    <Container>
      <MyPageHeader />
      <div className="bgAll">
        <h1>비밀번호변경</h1>
        <div className="boxGuide">
          <img src={boxGuideDecor} alt="boxGuideDecor" />
          <ul>
            <li>8자 이상 ~ 20자 이내로 설정해주세요.</li>
            <li>영문, 숫자, 특수문자를 모두 포함해주세요.</li>
            <li>
              문자열이 3자리 이상 연속되거나 동일하지 않게 해주세요. (ex. 111,
              123, 321, aaa, abc 등)
            </li>
          </ul>
        </div>
        <form className="content" onSubmit={handleSubmit(onSubmit, onError)}>
          <input
            type="password"
            className="password"
            placeholder="현재비밀번호"
            {...register("password", {
              required: true,
            })}
          />
          <hr />
          <input
            type="password"
            className="new_password"
            placeholder="비밀번호변경"
            {...register("newpassword", {
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
          {errors.newpassword ? (
            <p className="warn">
              <img src={warning} alt="warning" />
              {errors.newpassword.message}
            </p>
          ) : (
            newpasswordValue && (
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
            placeholder="비밀번호확인"
            {...register("repassword", {
              required: true,
              validate: (val) => {
                if (watch("newpassword") != val) {
                  return "비밀번호가 일치하지 않습니다.";
                }
              },
            })}
          />
          {errors.repassword ? (
            newpasswordValue ? (
              errors.newpassword ? (
                <p className="warn">
                  <img src={warning} alt="warning" />
                  {errors.newpassword.message}
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
          ) : newpasswordValue === repasswordValue &&
            repasswordValue &&
            !errors.newpassword &&
            !errors.repassword ? (
            <p className="check">
              <img src={check} alt="check" />
              비밀번호가 일치합니다.
            </p>
          ) : repasswordValue && errors.newpassword ? (
            <p className="warn">
              <img src={warning} alt="warning" />
              {errors.newpassword.message}
            </p>
          ) : (
            repasswordValue && (
              <p className="warn">
                <img src={warning} alt="warning" />
                비밀번호가 일치하지 않습니다.
              </p>
            )
          )}
          <div className="buttonCont">
            <button
              type="submit"
              className="submit buttonBlue"
              disabled={isSubmitting}
            >
              비밀번호변경
            </button>
            <button
              type="button"
              className="cancel buttonBlue"
              onClick={goHome}
            >
              취소
            </button>
          </div>
        </form>

        {/* 팝업 */}
        <form className="complete">
          <div className="popup">
            <p>비밀번호를 변경했습니다.</p>
            <button type="button" className="close" onClick={closeBox}>
              닫기
            </button>
          </div>
        </form>
      </div>
      <LoginFooter />
    </Container>
  );
});

export default ChangePassword;
