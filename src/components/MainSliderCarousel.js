/**
 * @ File Name: MainSliderCarousel.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-11-27 15:02:00
 * @ Description: Slick 슬라이드
 */

/** import */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** 이미지 참조 */
// 메인 슬라이드
import MainSlideImageFirst from "../assets/img/img-visual-patient1.jpg";
import MainSlideImageSecond from "../assets/img/img-home-visual_221117.png";

/** 슬라이드 전체 박스 스타일 */
const SlideContainer = styled.div``;

// 슬라이드 영역 스타일
const StyledSlider = styled(Slider)`
  width: 1920px;
  height: 500px;
  position: relative;

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  .slick-slide div {
    //슬라이더  컨텐츠
    cursor: pointer;
  }

  .slick-dots {
    position: absolute;
    bottom: 20px;
  }

  /* 비활성화된 동그라미 */
  .slick-dots li button::after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
  }

  .slick-dots li button::before,
  .slick-dots li.slick-active button::before {
    display: none;
  }

  /* 동그라미 버튼 */
  .slick-dots li button {
    width: 12px;
    height: 12px;
    margin: 0;
  }

  /* 동그라미 리스트 박스 */
  .slick-dots li {
    width: 12px;
    height: 12px;
  }

  /* 활성화된 동그라미 리스트 박스 */
  .slick-dots li.slick-active{
    width: 30px;
    height: 12px;
    border-radius: 6px;
  }

  /* 활성화된 동그라미 */
  .slick-dots li.slick-active button::after {
    content: "";
    display: block;
    width: 30px;
    height: 12px;
    border-radius: 6px;
    background-color: #ffd553;
  }
`;

/** 이미지 슬라이드 스타일 */
const SlideSection = styled.section`
  width: 1920px;
  position: relative;

  img {
    display: block;
    max-width: 1920px;
    height: auto;
    margin: 0 auto;
  }

  article {
    position: absolute;
    top: 50%;
    left: 320px;
    transform: translate(0, -50%);

    .slide_title {
      font-size: 66px;
      line-height: 72px;
      font-family: "NanumSquare";
      color: white;
    }

    .slide_text {
      font-size: 24px;
      line-height: 32px;
      font-family: "NanumSquare";
      color: white;
      display: block;
      margin-top: 15px;
    }
  }
`;

function InfoSliderCarousel() {
  // 슬라이드 설정
  const settings = {
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true
  };

  return (
    <SlideContainer>
      <StyledSlider {...settings}>
        <SlideSection>
          <img src={MainSlideImageFirst} alt="main_img" />
          <article>
            <span className="slide_title">
              <strong>공감,</strong> 또 하나의 치료
            </span>
            <span className="slide_text">질병 치료를 넘어 환자의 마음까지 치유하겠습니다.</span>
          </article>
        </SlideSection>
        <SlideSection>
          <img src={MainSlideImageSecond} alt="main_img" />
        </SlideSection>
      </StyledSlider>
    </SlideContainer>
  );
}

export default InfoSliderCarousel;
