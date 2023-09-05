/**
 * @ File Name: Drstep2.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-26 16:40
 * @ Description: 의료진 예약 step 2
 */

import React, { memo } from "react";
import styled from "styled-components";

// 이미지
import profile from "../../assets/img/442888.png";

const Container = styled.div`
  display: none;
  
  width: 320px;
  color: #333;
  letter-spacing: 0.02em;
  line-height: 1.625;
  background-color: #fff;
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

  // 검색결과 의사목록
  .doctor_list_wrap {
    height: 470px;
    position: relative;
    .card {
      li {
        .doctor_profile {
          margin: auto;
          width: 170px;
          height: 200px;
          background-color: #fff;
          border: 1px solid #e6e6e6;
          border-radius: 10px;
          text-align: center;
          padding: 20px 10px;
          position: relative;
          overflow: hidden;
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

        // 진료과 라디오 버튼
        input[type="radio"] + label {
          display: inline-block;
          border-radius: 10px;
          background: #fff;
          text-align: center;
          line-height: 24px;
          font-size: 16px;
          min-width: 280px;
          height: 50px;
          border: 1px solid #e6e6e6;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding-top: 10px;
          margin-top: 20px;
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
    }

    // 이전 버튼
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
`;

const Drstep2 = memo(() => {
  return (
    <Container>
      <div className="title">
        <p>진료예약 - STEP2</p>
      </div>
      <div className="content">
        {/* 검색 후 화면 */}
        <div className="doctor_list_wrap">
          <ul className="card">
            <li>
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
            </li>
            <li>
              <input
                type="radio"
                name="department"
                id="staffDepartment0"
                defaultValue="EN"
                data-error-message="진료 예약을 할 진료과/센터/클리닉을 선택해주세요."
                data-deptnm="이비인후과"
                data-resenableyn="Y"
                data-ocsdeptcode="EN"
                data-cliniccode=""
                data-seq="525"
              />
              <label htmlFor="staffDepartment0">이비인후과</label>
            </li>
          </ul>
          {/* 버튼그룹 */}
          <div className="buttons">
            <button type="button" className="pre_btn" data-view="choose-type">
              이전
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
});

export default Drstep2;
