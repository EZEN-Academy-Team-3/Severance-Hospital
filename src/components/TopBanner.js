/**
 * @ File Name: TopBanner.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-11-25 15:02:00
 * @ Description: 메인 페이지 top banner (사용안함)
 */

/** import */
import React, { memo, useCallback, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { useCookies } from "react-cookie";

/** 이미지 참조 */
// 전화 및 닫기버튼 이미지
import TelYellow from "../assets/img/ico-tel-yellow@2x.png";
import TelPrimary from "../assets/img/ico-tel-primary@2x.png";
import CheckboxChecked from "../assets/img/ico-checkbox-checked.png";
import CloseCircle from "../assets/img/ico-close-circle@2x.png";

/** 상단 배너 스타일 */
const TopBannerSection = styled.section`
  width: 100%;
  height: 90px;
  background-color: #0054d1;
  display: flex;
  justify-content: center;
  letter-spacing: 0;
  white-space: nowrap;

  .topBannerContent {
    width: 1280px;
    height: 100%;
    padding: 16px 0 19px;
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;

    span {
      font-size: 16px;
      color: white;
      font-weight: 700;
      line-height: 55px;
    }

    .firstItem {
      display: flex;
      align-items: center;

      .telYellow {
        display: block;
        width: 52px;
        height: 52px;
        margin-right: 15px;
        ${`backGround: url(${TelYellow}) no-repeat center /cover;`}
      }

      .title {
        font-size: 24px;
      }

      .tel {
        font-size: 40px;
        margin: 0 5px;
      }

      .telOverseas {
        font-weight: normal;
      }
    }

    hr {
      width: 55px;
      height: 1px;
      margin: 26px 0;
      background-color: #e6e6e6;
      border: none;
      rotate: 90deg;
    }

    .secondItem {
      display: flex;
      align-items: center;

      .telPrimary {
        display: block;
        width: 52px;
        height: 52px;
        margin-right: 15px;
        ${`backGround: url(${TelPrimary}) no-repeat center /cover;`}
      }

      .title {
        font-size: 24px;
      }

      .tel {
        font-size: 40px;
        margin: 0 5px;
      }

      .telOverseas {
        font-weight: normal;
      }
    }

    .closeBox {
      display: flex;
      margin-left: auto;

      .topBannerCloseCheckbox[type="checkbox"] {
        display: none;
      }

      .topBannerCloseCheckbox[type="checkbox"] + label::before {
        display: inline-block;
        width: 17px;
        height: 17px;
        border: 1px solid #aaa;
        box-sizing: border-box;
        background-color: white;
        content: "";
      }

      .topBannerCloseCheckbox[id="close"]:checked + label::before {
        ${`backGround: white url(${CheckboxChecked}) no-repeat 45% center;`}
        background-size: 13px 10px;
      }

      label {
        display: flex;
        align-items: center;

        .closeText {
          font-size: 16px;
          font-weight: normal;
          line-height: normal;
          margin: 0 5px;
        }
      }

      button {
        background: inherit;
        border: none;
        box-shadow: none;
        border-radius: 0;
        padding: 0;
        overflow: visible;
        cursor: pointer;

        .topBannerCloseIcon {
          display: block;
          width: 26px;
          height: 26px;
          ${`backGround: url(${CloseCircle}) no-repeat center /cover;`}
        }
      }
    }
  }
`;

const TopBanner = memo((props) => {
  const { onClose } = props;

  const [isChecked, setIsChecked] = useState(true);

  const COOKIE_KEY = "saebalHideModal";
  const [cookies, setCookie] = useCookies([COOKIE_KEY]);
  
  const hideModal = () => {
    if (!isChecked) {
      return;
    }
    const decade = moment();
    decade.add(1, "d");
    setCookie(COOKIE_KEY, "true", {
      path: "/",
      expires: decade.toDate()
    });
  };

  const checkHandler = () => {
    setIsChecked(!isChecked);
    console.log(!isChecked);
  };

  return (
    <TopBannerSection>
      <div className="topBannerContent">
        <article className="firstItem">
          <i className="telYellow" />
          <span className="title">진료예약</span>
          <a href="tel:1599-1004">
            <span className="tel">1599-1004</span>
          </a>
          <span className="telOverseas">해외 수신번호(+82-2-2228-1004)</span>
        </article>

        <hr />

        <article className="secondItem">
          <i className="telPrimary" />
          <span className="title">건강검진예약</span>
          <a href="tel:1588-7757">
            <span className="tel">1588-7757</span>
          </a>
        </article>

        <div className="closeBox">
          <input type="checkbox" defaultChecked="checked" id="close" className="topBannerCloseCheckbox" onChange={checkHandler} />
          <label htmlFor="close">
            <span className="closeText">오늘하루 열지않기</span>
          </label>
          <button type="button" onClick={() => {
            onClose(false);
            hideModal();
            }}>
            <i className="topBannerCloseIcon" />
          </button>
        </div>
      </div>
    </TopBannerSection>
  );
});

export default TopBanner;
