/*
 * @ File Name: AboutSev.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-15 18:10
 * @ Description: 병원개요 페이지
 */
import React, { memo } from "react";
import styled from "styled-components";
import Header from "../../components/MainPageHeader";
import Footer from "../../components/Footer";
import Intro from "../../assets/img/img-medical1.jpg";

const Container = styled.div`
  position: relative;
  .bgAll {
    h1 {
      text-align: center;
      padding: 70px 0 40px;
      font-size: 40px;
      font-weight: bold;
    }
  }
  .content {
    width: 1280px;
    margin: auto;
  }
  .introduce {
    float: left;
    margin-right: 120px;
    h3 {
      color: rgb(0, 148, 251);
      font-size: 50px;
      font-weight: bold;
      line-height: 52px;
      span {
        font-size: 20px;
        color: #222;
        font-weight: normal;
      }
    }
    h4 {
      font-weight: 100;
      line-height: 1.3em;
      color: #222;
      font-size: 40px;
      margin-top: 50px;
    }
    p {
      margin-top: 60px;
    }
  }
  .intro_img {
    float: left;
  }
  .intro_youtube {
    &:before {
      content: "";
      display: block;
      clear: both;
      border-bottom: 1px solid #ebebeb;
      padding-bottom: 60px;
    }
    width: 1280px;
    margin: auto;
    h4 {
      text-align: center;
      font-size: 36px;
      margin: 40px auto;
      span {
        font-size: 20px;
      }
    }
    .clips {
      .movie {
        margin-bottom: 60px;
        span {
          iframe {
            width: 630px;
            height: 350px;
            float: left;
            margin-right: 20px;
            margin-bottom: 60px;
          }
        }
        &:last-child {
          span {
            iframe {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
`;

const Introduction = memo(() => {
  return (
    <Container>
      <Header />
      <div className="bgAll">
        <h1>병원개요</h1>
        <div className="content">
          <div className="introduce">
            <h3>
              <span>SEVERANCE HOSPITAL</span>
              <br />
              THE FIRST THE BEST
            </h3>
            <h4>
              국내 의료계를 선도하는 세브란스
              <br />
              고객만족 실현을 통하여
              <br />
              인간사랑을 실천하는 병원
            </h4>
            <p>
              세브란스병원은 1885년 알렌((Dr. H.N. Allen)이 세운 우리나라 최초의
              서양식 병원인 광혜원(제중원)
              <br />
              으로 창립된 이래 우리나라 의료계를 선도하는 병원으로서 국민 건강
              증진에 힘써왔습니다.
              <br />
              <br />
              세브란스병원은 국내 최초로 진료의 전문화를 통한 의료의 질 향상을
              추구하여 재활병원, 심장혈관병원,
              <br />
              안과병원, 어린이병원과 응급진료센터, 국제진료센터 등 전문센터와
              암클리닉을 운영하고 있습니다.
              <br />
              또한 환자 권리장전 선포(1993), 국제의료기관평가(JCI) 인증 등
              의료서비스 향상에 힘쓰고 있습니다.
              <br />
              <br />
              우리나라 의료계의 빛이었던 세브란스병원은 창립정신인 하나님의
              사랑을 실천하며, 첨단진료분야의
              <br />
              집중 육성으로 국제 경쟁력을 확보하고 끊임없는 교육과 연구로
              의학기술 선도와 첨단 의료서비스 제공
              <br />을 통한 고객 만족을 실현으로 인간사랑을 실천하고 있습니다.
            </p>
          </div>
          <div className="intro_img">
            <img src={Intro} alt="intro" />
          </div>
        </div>
        <div className="intro_youtube">
          <h4>
            <span>VIDEO CLIP OF SEVERANCE HOSPITAL</span>
            <br />
            <strong>세브란스병원 홍보 영상</strong>
          </h4>
          <div className="clips">
            <div className="movie">
              <span>
                <iframe
                  src="https://www.youtube.com/embed/07tdnxgYChs"
                  title="세브란스가 알고 싶다 "
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                  className="fr-draggable"
                ></iframe>
              </span>
            </div>
            <div className="movie">
              <span>
                <iframe
                  src="https://www.youtube.com/embed/JUtArKDWwL4"
                  title="세브란스 문화캠페인 나눔 동영상"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                  className="fr-draggable"
                ></iframe>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
});

export default Introduction;
