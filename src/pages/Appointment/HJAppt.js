/**
 * @ File Name: HJAppt.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-23
 * @ Description: 회원예약 3.예약방법선택
 */

import React, { memo, useCallback, useRef } from 'react';
import styled from 'styled-components';

//진료과아이콘
import ico1 from '../../assets/img/ico-online-method01.png';
import ico2 from '../../assets/img/ico-online-method02.png';

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

const HJAttp = memo(() => {

  const departmentAppt = useRef();

  const onMemberInfo = useCallback((e) => {
    // memberReserveCover.current.style.display = "none";
    // memberReserveBox.current.style.display = "block";
  }, []);
  

  return (
    <Div>
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
            <button  className='apptBtn'>
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
  );
});

export default HJAttp;
