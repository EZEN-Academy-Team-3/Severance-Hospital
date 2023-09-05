/**
 * @ File Name: HJ_step4.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-23
 * @ Description: 온라인예약페이지 예약step4
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import radiocheck from '../../assets/img/ico-radio-checked.png';
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

  .boxsCont {
    width: 100%;
    background-color: #fff;

    //예약메모

    .medicineMemoCont {
      margin: 0 20px;
    }
    .medicineMemo {
      width: 100%;
      height: 240px;
      box-sizing: border-box;
      border-radius: 0;
    }
  }

  .boxsCF {
    background-color: #f9f9f9;
    padding: 15px 20px;

    p:first-child {
      font-weight: bold;
      padding-bottom: 15px;
    }
    p:nth-child(2) {
      font-size: 14px;
    }

    //동의체크박스
    .agreeSelect {
      padding-top: 40px;

      span:last-child {
        padding-left: 15px;
      }

      label {
        font-size: 13px;
      }

      [type='radio'] {
        vertical-align: middle;
        appearance: none;
        border: 1px solid gray;
        background-color: white;
        border-radius: 50%;
        width: 1.25em;
        height: 1.25em;
        margin: -3px 5px 0 0;
      }
      
      [type="radio"]:checked {
        border: 1px solid black;
        background: #fff url(${radiocheck}) no-repeat center center;
        background-size: 11px 11px;
      }
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

const HJstep4 = memo(() => {
  return (
    <Div>
      <div className="reserveBox">
        <div className="boxsTop">
          <p className="tit textTitle">진료예약 - STEP4</p>
        </div>

        <div className="boxsCont">
          <p className="tit">예약메모 입력(300자 이내)</p>
          <div className="medicineMemoCont">
            <textarea
              className="medicineMemo"
              placeholder="예약하실 내용을 입력해주세요."
            ></textarea>
          </div>

          <div className="boxsCF">
            <p>개인정보 수집·이용 동의</p>
            <p>
              개인정보는 병원정보 조회를 위해서만 사용합니다. 개인정보 이용에
              동의합니다.
            </p>

            <form className="agreeSelect">
              <span className="radioItem">
                <label>
                  <input type="radio" id="mdAgree1" name="agree" />
                  동의합니다.
                </label>
              </span>
              <span className="radioItem">
                <label>
                  <input type="radio" id="mdAgree2" name="agree" />
                  동의하지 않습니다.
                </label>
              </span>
            </form>
          </div>
        </div>

        {/* 이전 다음 버튼 */}
        <div className="buttonCont">
          <button type="submit" className="buttonWhite">
            이전
          </button>
          <button type="reset" className="buttonBlue marginleft">
            예약신청
          </button>
        </div>
      </div>
    </Div>
  );
});

export default HJstep4;
