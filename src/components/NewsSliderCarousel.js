/**
 * @ File Name: NewsSliderCarousel.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-11-28 15:02:00
 * @ Description: Slick 슬라이드
 */

/** import */
import React from "react";
import styled from "styled-components";

// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** 슬라이드 전체 박스 스타일 */
// 슬라이드 영역 스타일
const StyledSlider = styled(Slider)`
  width: 952px;
  height: 230px;

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  // 슬라이드의 각각 하나의 객체
  .slick-slide div {
    /* cursor: pointer; */
    width: 297px;
  }

  /* slidesToShow 옵션으로 표시되는 모든 객체 묶음 */
  .slick-list {
    margin-right: -30px;
  }

  /* 개체의 트랙 */
  .slick-track {
  }

  /* 개체들 */
  /* 슬라이드 */
  .slick-slide {
    height: 230px;
    display: flex;
    align-items: flex-end;
  }

  /* .newsBox {
    width: 297px;
    height: 210px;

    background-color: white;

    display: flex !important;
    flex-direction: column;
    justify-content: space-between;

    padding: 43px 30px 28px;
    box-sizing: border-box;

    position: relative;

    .newsCategory {
      width: 78px;
      height: 40px;
      display: block;

      position: absolute;
      top: -10px;
      left: 30px;

      padding: 0 10px;
      box-sizing: border-box;

      background-color: #ac47d1;
      color: white;

      font-size: 14px;
      line-height: 40px;
      text-align: center;

      white-space: nowrap;
    }

    .newsContentTitle {
      font-size: 18px;
      line-height: 28px;
    }

    .newsDate {
      display: block;
      font-size: 16px;
      line-height: 16px;
    }
  } */
`;

// 앞으로가기 버튼 스타일
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "60px",
        height: "60px",

        position: "absolute",
        top: "100%",
        left: "-247px",
        transform: "translate(0, -100%)",
        zIndex: "100",

        background: "url(./img/btn-right-white.png) no-repeat center / cover",

        border: "none",
        boxSizing: "border-box",

        overflow: "hidden",

        cursor: "pointer"
      }}
      onClick={onClick}
    />
  );
}

// 뒤로가기 버튼 스타일
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "60px",
        height: "60px",

        position: "absolute",
        top: "100%",
        left: "-327px",
        transform: "translate(0, -100%)",
        zIndex: "100",

        background: "url(./img/btn-left-white.png) no-repeat center / cover",

        border: "none",
        boxSizing: "border-box",

        overflow: "hidden",

        cursor: "pointer"
      }}
      onClick={onClick}
    />
  );
}


function InfoSliderCarousel({ category, title, text }) {
  // 슬라이드 설정
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <StyledSlider {...settings}>
      <article className="newsBox">
        <span className="newsCategory">언론 보도</span>
        <strong className="newsContentTitle">[뉴시스] 연세의대, 양성사업단 발족…글로벌 의사과학자 키운다</strong>
        <span className="newsDate">2022-11-17</span>
      </article>

      <article className="newsBox">
        <span className="newsCategory">언론 보도</span>
        <strong className="newsContentTitle">[뉴스1] 20대 당뇨환자 4년만에 57% 급증…지난해 3만8천명 병원찾아</strong>
        <span className="newsDate">2022-11-15</span>
      </article>

      <article className="newsBox">
        <span className="newsCategory">언론 보도</span>
        <strong className="newsContentTitle">[뉴스1] 20대 당뇨환자 4년만에 57% 급증…지난해 3만8천명 병원찾아</strong>
        <span className="newsDate">2022-11-15</span>
      </article>

      <article className="newsBox">
        <span className="newsCategory">언론 보도</span>
        <strong className="newsContentTitle">[뉴스1] 20대 당뇨환자 4년만에 57% 급증…지난해 3만8천명 병원찾아</strong>
        <span className="newsDate">2022-11-15</span>
      </article>

      <article className="newsBox">
        <span className="newsCategory">언론 보도</span>
        <strong className="newsContentTitle">[뉴스1] 20대 당뇨환자 4년만에 57% 급증…지난해 3만8천명 병원찾아</strong>
        <span className="newsDate">2022-11-15</span>
      </article>

      <article className="newsBox">
        <span className="newsCategory">언론 보도</span>
        <strong className="newsContentTitle">[뉴스1] 20대 당뇨환자 4년만에 57% 급증…지난해 3만8천명 병원찾아</strong>
        <span className="newsDate">2022-11-15</span>
      </article>
    </StyledSlider>
  );
}

export default InfoSliderCarousel;
