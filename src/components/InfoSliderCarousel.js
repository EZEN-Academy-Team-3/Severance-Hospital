/**
 * @ File Name: InfoSliderCarousel.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-21 15:02:00
 * @ Description: Slick 슬라이드
 */

/** import */
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** 이미지 참조 */
// 더보기 버튼 이미지
import Plus from "../assets/img/ico-plus-sm-lightgray@2x.png";

/** 슬라이드 전체 박스 스타일 */
const SlideContainer = styled.div`
  width: 260px;
  height: 173px;
  background-color: white;
  margin-bottom: 18.5px;
  position: relative;
`;

// 슬라이드 영역 스타일
const StyledSlider = styled(Slider)`
  width: 260px;
  height: 173px;
  position: relative;

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  /* .slick-slide div {
    cursor: pointer;
  } */

  // 슬라이드 컨텐츠 박스
  .postBox {
    width: 260px;
    height: 173px;
    a {
      display: block;
      width: 260px;
      height: auto;
      padding: 20px 15px 20px 20px;
      box-sizing: border-box;

      .category {
        font-size: 14px;
        color: #0094fb;
      }

      .content {
        font-size: 18px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: normal;
        max-height: 81px;
        line-height: 24px;
        text-overflow: ellipsis;
        overflow: hidden;

        margin-top: 3px;
        font-weight: bold;
      }
    }
  }
`;

// 더보기 버튼 스타일
const PlusButton = styled.div`
  width: 28px;
  height: 28px;

  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(50%);
  z-index: 100;

  ${`backGround: #fff url(${Plus}) no-repeat center /cover;`}
  background-size: 15px 15px;

  box-sizing: border-box;
  border: 1px solid #eee;

  overflow: hidden;

  cursor: pointer;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

// 앞으로가기 버튼 스타일
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "28px",
        height: "28px",

        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translate(-50%, -48px)",
        zIndex: "100",

        background: "#fff url(./img/ico-chevron-right-sm-lightgray@2x.png) no-repeat center / cover",
        backgroundSize: "8px 15px",

        border: "1px solid #eee",
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
        width: "28px",
        height: "28px",

        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translate(-150%, -48px)",
        zIndex: "100",

        background: "#fff url(./img/ico-chevron-left-sm-lightgray@2x.png) no-repeat center / cover",
        backgroundSize: "8px 15px",

        border: "1px solid #eee",
        boxSizing: "border-box",

        overflow: "hidden",

        cursor: "pointer"
      }}
      onClick={onClick}
    />
  );
}

function InfoSliderCarousel({ customer, notice, carousel }) {
  // 슬라이드 설정
  const settings = {
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const noPost = useCallback(() => {
    let array = [];

    if (carousel === "customer") {
      for (let i = 0; i < 2; i++) {
        array.push(
          <div key={i} className="postBox">
            <Link to="/customer.do" target="_blank">
              <span className="category">고객의 소리</span>
              <span className="content">등록된 게시글이 없습니다.</span>
            </Link>
          </div>
        );
      }
    } else {
      for (let i = 0; i < 2; i++) {
        array.push(
          <div key={i} className="postBox">
            <Link to="/news/notice.do" target="_blank">
              <span className="category">공지사항</span>
              <span className="content">등록된 게시글이 없습니다.</span>
            </Link>
          </div>
        );
      }
    }

    return array;
  }, []);

  return (
    <SlideContainer>
      <StyledSlider {...settings}>
        {carousel === "customer"
          ? customer
            ? customer.map((v, i) => {
                return (
                  <div className="postBox" key={i}>
                    <Link to={`/customer.do/suggestion/${v.id}`} target="_blank">
                      <span className="category">{v.register}</span>
                      <span className="content">{v.title}</span>
                    </Link>
                  </div>
                );
              })
            : noPost()
          : notice
          ? notice.map((v, i) => {
              return (
                <div className="postBox" key={i}>
                  <Link to={`/news/notice.do`} target="_blank">
                    <span className="category">{v.register}</span>
                    <span className="content">{v.title}</span>
                  </Link>
                </div>
              );
            })
          : noPost()}
      </StyledSlider>

      <PlusButton>
        {carousel === "customer" ? (
          <Link to="/customer.do" target="_black" rel="noopener noreferrer" />
        ) : (
          <Link to="/news/notice.do" target="_black" rel="noopener noreferrer" />
        )}
      </PlusButton>
    </SlideContainer>
  );
}

export default InfoSliderCarousel;
