/**
 * @ File Name: Content1.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-08 15:02:00
 * @ Description: 오시는 길 페이지 -> 약도 및 주소 안내 컨텐츠
 */

/** import */
import React, { memo } from "react";
import styled from "styled-components";

/** 이미지 */
// 지도
import LocationMap from "../../assets/img/img-locationmap1.jpg";

/** 타이틀 h4태그 스타일 */
// 타이틀1
const Title1H4 = styled.h4`
  padding-left: 18px;
  margin: 65px 0 22px;

  font-size: 24px;
  font-weight: bold;
  line-height: 38px;

  color: #222;
  position: relative;

  &:first-child {
    margin-top: 0;
  }

  &:before {
    content: "";
    position: absolute;
    width: 6px;
    height: 20px;
    top: 9px;
    left: 0;
    background-color: #0094fb;
    border-radius: 3px;
  }
`;

/** 들여쓰기 스타일 */
// 들여쓰기1
const Indent1 = styled.div`
  margin-left: 18px;
`;

/** 버튼 박스 스타일 */
const ButtonBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 25px;

  a {
    width: 96px;
    height: 46px;
    display: block;

    font-size: 18px;
    line-height: 50px;

    margin: 5px 0;
    padding: 0 28px;

    border: 2px solid transparent;
    border-radius: 25px;

    color: #fff;
    background-color: #0094fb;

    &:nth-child(2) {
      color: #0094fb;
      background-color: white;
      border-color: #0094fb;
      margin-left: 10px;
    }
  }
`;

const Content1 = memo(() => {
  return (
    <div>
      <Title1H4>약도</Title1H4>
      <Indent1>
        <img src={LocationMap} />
      </Indent1>

      <ButtonBoxDiv>
        <a
          href="https://map.naver.com/v5/search/%EC%8B%A0%EC%B4%8C%EC%84%B8%EB%B8%8C%EB%9E%80%EC%8A%A4%EB%B3%91%EC%9B%90/place/11693113?c=14130755.2705603,4517782.9349473,16,0,0,0,dh"
          target="_black"
          rel="noopener noreferrer"
        >
          자세히 보기
        </a>
        <a
          href="https://map.naver.com/v5/directions/-/14130988.155725304,4517782.926521322,%EC%8B%A0%EC%B4%8C%EC%84%B8%EB%B8%8C%EB%9E%80%EC%8A%A4%EB%B3%91%EC%9B%90,,/-/car?c=14130746.2130811,4517824.8887381,16,0,0,0,dh"
          target="_black"
          rel="noopener noreferrer"
        >
          빠른길 찾기
        </a>
      </ButtonBoxDiv>

      <Title1H4>주소 안내</Title1H4>
      <Indent1>
        <ul>
          <li>03722 서울특별시 서대문구 연세로 50-1 세브란스병원</li>
          <li>Severance Hospital 50-1 Yonsei-ro, Seodaemun-gu, Seoul 03722, Republic of Korea</li>
          <li>
            [대표전화] 진료예약 : <strong>1599-1004</strong> / 세브란스 체크업(건강검진) : <strong>1588-7757</strong>
          </li>
        </ul>
      </Indent1>
    </div>
  );
});

export default Content1;
