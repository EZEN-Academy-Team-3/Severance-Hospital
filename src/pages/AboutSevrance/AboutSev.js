/*
 * @ File Name: AboutSev.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-15 16:40
 * @ Description: 병원소개 페이지
 */
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/MainPageHeader";
import Footer from "../../components/Footer";
import about from "../../assets/img/img-about1.jpg";
import map from "../../assets/img/img-about4.jpg";

const Container = styled.div`
  position: relative;
  .bgAll {
    h1 {
      text-align: center;
      padding: 70px 0 0;
      font-size: 28px;
      font-weight: bold;
      span {
        color: rgb(0, 148, 251);
      }
    }
  }
  p {
    text-align: center;
    font-size: 19px;
    margin-bottom: 60px;
  }

  .ways {
    width: 700px;
    margin: auto;
    .intro,
    .map {
      padding: 40px 60px 0;
      border: 1px solid #e6e6e6;
      float: left;
      margin-right: 30px;
      margin-bottom: 60px;
      position: relative;
      box-sizing: border-box;
      cursor: pointer;
      img {
        margin-bottom: 30px;
        float: left;
        height: 160px;
        position: absolute;
        top: 8%;
        left: 50%;
        transform: translate(-50%);
      }
      h3 {
        font-size: 22px;
        text-align: center;
        font-weight: bold;
        margin: 170px 0 20px;
      }
      p {
        font-size: 16px;
        margin: 0 0 20px 0;
      }
    }
  }
`;

const AboutSev = memo(() => {
  const navigate = useNavigate();

  const goMap = (e) => {
    navigate("/map.do");
  };

  const goIntro = (e) => {
    navigate("/introduction");
  };

  return (
    <Container>
      <div>
        <Header />
        <div className="bgAll">
          <h1>
            <span>공감, 또 하나의 치료!</span> 질병 치료를 넘어 환자의 마음까지
            치유하겠습니다.
          </h1>
          <p>
            Our patient-oriented hospital offers more than traditional
            clinic-based medical services.
          </p>
          <div className="ways">
            <div className="intro" onClick={goIntro}>
              <img src={about} alt="about" />
              <h3>병원개요</h3>
              <p>
                가장 신뢰받는 의료기관
                <br />
                세브란스병원을 소개합니다.
              </p>
            </div>
            <div className="map" onClick={goMap}>
              <img src={map} alt="map" />
              <h3>오시는 길</h3>
              <p>
                누구나 쉽게 찾아오시도록
                <br />
                교통수단별 안내 드립니다.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  );
});

export default AboutSev;
