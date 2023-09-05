/**
 * @ File Name: MktSliderCarousel.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-11-30 15:02:00
 * @ Description: Mkt Banner Slick 슬라이드
 */

/** import */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** 이미지 참조 */
// Mkt banner 슬라이드
import banner01 from "../assets/img/img_main_banner01.png";
import banner02 from "../assets/img/img_main_banner02.png";
import banner03 from "../assets/img/img_main_banner04.png";
import banner04 from "../assets/img/img_main_banner05.png";
import banner05 from "../assets/img/img_main_banner08.png";
import banner06 from "../assets/img/mainbanner_220117.png";
import banner07 from "../assets/img/parking-banner210903.png";
import banner08 from "../assets/img/뉴스위크-World’s-Best-Hospital2022-선정-배너.png";
import banner09 from "../assets/img/세브란스병원_메인_온라인사본발급_210203.png";
import banner10 from "../assets/img/img_main_banner_220804.png";
import banner11 from "../assets/img/img_main_221116.png";

// 슬라이드 영역 스타일
const StyledSlider = styled(Slider)`
  width: 1006px;
  height: 469px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  // arrow none
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  //슬라이더  컨텐츠
  .slick-slide div {
    width: 229px;
    height: 417px;
  }

  .slick-slider {
  }
  
  .slick-slide {
  }
  
  .slick-list {
    margin-right: -30px;
  }

  .slick-track {
  }

  .slick-dots {
    position: absolute;
    bottom: 0;
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
  .slick-dots li.slick-active {
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

  .mktBannerArticle {
    width: 229px;
    height: 417px;

    .mktBannerLink {
      display: block;
      width: 100%;
      height: 100%;

      img {
        display: block;
        width: 229px;
        height: 417px;
      }
    }
  }
`;

function MktSliderCarousel() {
  // 슬라이드 설정
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
  };

  return (
    <StyledSlider {...settings}>
      <article className="mktBannerArticle">
        <a className="mktBannerLink">
          <img src={banner01} />
        </a>
      </article>

      <article className="mktBannerArticle">
        <a className="mktBannerLink">
          <img src={banner02} />
        </a>
      </article>

      <article className="mktBannerArticle">
        <a className="mktBannerLink">
          <img src={banner03} />
        </a>
      </article>

      <article className="mktBannerArticle">
        <a className="mktBannerLink">
          <img src={banner04} />
        </a>
      </article>

      <article className="mktBannerArticle">
        <Link to="/guide/unsupported" className="mktBannerLink">
          <img src={banner05} />
        </Link>
      </article>

      <article className="mktBannerArticle">
        <a className="mktBannerLink">
          <img src={banner06} />
        </a>
      </article>

      <article className="mktBannerArticle">
        <a className="mktBannerLink">
          <img src={banner07} />
        </a>
      </article>

      <article className="mktBannerArticle">
        <a className="mktBannerLink">
          <img src={banner08} />
        </a>
      </article>

      <article className="mktBannerArticle">
        <a className="mktBannerLink">
          <img src={banner09} />
        </a>
      </article>

      <article className="mktBannerArticle">
        <a className="mktBannerLink">
          <img src={banner10} />
        </a>
      </article>

      <article className="mktBannerArticle">
        <a className="mktBannerLink">
          <img src={banner11} />
        </a>
      </article>
    </StyledSlider>
  );
}

export default MktSliderCarousel;
