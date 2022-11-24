/** import */
import React from "react";
import styled from "styled-components";

/** SNS 아이콘 이미지 */
import npImg from "../assets/img/ico-sns-gray-np@2x.png";
import nbImg from "../assets/img/ico-sns-gray-nb@2x.png";
import ytImg from "../assets/img/ico-sns-gray-yt@2x.png";
import igImg from "../assets/img/ico-sns-gray-ig@2x.png";
import fbImg from "../assets/img/ico-sns-gray-fb@2x.png";
import ttImg from "../assets/img/ico-sns-gray-tt@2x.png";

/** 푸터 스타일 */
const FooterContainer = styled.footer`
  width: 100%;
  height: 214px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 사이트 바로가기 스타일 */
  .familySite {
    width: 1280px;
    height: 50px;

    .snsLink {
      width: 300px;
      height: 50px;
      display: flex;

      li {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;

        img {
          width: 30px;
          height: 30px;
          filter: grayscale(1);
          cursor: pointer;
        }
      }
    }
  }

  hr {
    width: 100%;
    height: 1px;
    background-color: #e6e6e6;
    border: none;
    margin: 0;
  }

  /* 사이트 정보 스타일 */
  .siteInfo {
    width: 1280px;
    height: 130px;

    .siteInfoShortcut {
      display: flex;
      margin: 35px 0 24px;

      li {
        margin-right: 30px;

        a {
          font-size: 15px;
          font-weight: normal;
          line-height: 24px;
          color: #333333;
        }
      }
    }

    address,
    p {
      font-size: 14px;
      line-height: 23px;
      color: #666666;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="familySite">
        <ul className="snsLink">
          <li>
            <img src={npImg} alt="naver_post_image" />
          </li>
          <li>
            <img src={nbImg} alt="naver_blog_image" />
          </li>
          <li>
            <img src={ytImg} alt="youtube_image" />
          </li>
          <li>
            <img src={igImg} alt="instagram_image" />
          </li>
          <li>
            <img src={fbImg} alt="facebook_image" />
          </li>
          <li>
            <img src={ttImg} alt="twitter_image" />
          </li>
        </ul>
      </div>

      <hr />

      <div className="siteInfo">
        <ul className="siteInfoShortcut">
          <li>
            <a href="https://member.severance.healthcare/member/policy/agreement.do" target="_black" rel="noopener noreferrer">
              이용약관
            </a>
          </li>
          <li>
            <a href="https://member.severance.healthcare/member/policy/agreement.do" target="_black" rel="noopener noreferrer">
              <strong>개인정보처리방침</strong>
            </a>
          </li>
          <li>
            <a
              href="https://member.severance.healthcare/member/login.do?InitechEamNoCacheNonce=5ngpKay4RzLe2jDW51toSw%3D%3D%0A"
              target="_black"
              rel="noopener noreferrer"
            >
              고객의 소리
            </a>
          </li>
          <li>
            <a href="https://sev.severance.healthcare/sev/about/about.do" target="_black" rel="noopener noreferrer" style={{ color: "#0094fb" }}>
              병원소개
            </a>
          </li>
        </ul>
        <address>03722 서울특별시 서대문구 연세로 50-1</address>
        <p>COPYRIGHT(C) SEVERANCE HOSPITAL. ALL RIGHTS RESERVED.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
