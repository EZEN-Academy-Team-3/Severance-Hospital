/**
 * @ File Name: 슬릭 테스트1.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-11-26 15:02:00
 * @ Description: props map 형태, 커스텀 prev, next
 */

import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
/* import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */
import { ReactComponent as Next } from "../../assets/next.svg";
import { ReactComponent as Prev } from "../../assets/prev.svg";

const SlickSlider = (props) => {
  const { children } = props;

  const settings = {
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    dots: false,
    nextArrow: (
      <Div>
        <Next />
      </Div>
    ),
    prevArrow: (
      <DivPre>
        <Prev />
      </DivPre>
    )
  };
  return (
    <React.Fragment>
      <StyledSlider {...settings}>{children}</StyledSlider>
    </React.Fragment>
  );
};
const StyledSlider = styled(Slider)`
  height: 260px;
  width: 100%;
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
`;
const Div = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 16px;
  z-index: 99;
  text-align: right;
  line-height: 30px;
`;
const DivPre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  z-index: 99;
  text-align: left;
  line-height: 30px;
`;
export default SlickSlider;
