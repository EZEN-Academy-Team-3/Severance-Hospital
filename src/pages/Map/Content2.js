/**
 * @ File Name: Content2.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-09 15:02:00
 * @ Description: 오시는 길 페이지 -> 오시는 방법 컨텐츠
 */

/** import */
import React, { memo } from "react";
import styled from "styled-components";

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

/** 텍스트 박스 스타일 */
const TextBoxDl = styled.dl`
  margin-left: 18px;
  padding: 25px 30px 19px;
  border: 1px solid #e6e6e6;

  dt {
    font-weight: bold;
    margin-top: 19px;

    &:first-child {
      margin-top: 0;
    }
  }

  dd {
    ul {
      margin: 5px 0;

      li {
        padding-left: 12px;
        margin-top: 5px;
        position: relative;

        &:first-child {
          margin-top: 0;
        }

        &:before {
          content: "";
          width: 4px;
          height: 4px;

          position: absolute;
          top: 0.7em;
          left: 0;

          background-color: #0094fb;
        }
      }
    }
  }
`;

const Content2 = memo(() => {
  return (
    <div>
      <Title1H4>버스</Title1H4>
      <TextBoxDl>
        <dt>정류장명 : 세브란스병원앞, 연세대학교앞 하차</dt>
        <dd>
          <ul>
            <li>간선버스(파랑) : 153, 171, 172, 173, 272, 470, 472, 601, 606, 672, 673, 674, 700, 707, 710, 742, 750A, 750B</li>
            <li>지선버스(초록) : 서대문 03, 서대문 04, 서대문 05, 72, 82, 567, 770, 6714, 7017, 7713, 7720, 7024, 7727, 7728, 7737</li>
            <li>광역버스(빨강) 좌석버스 : 1000, 1100, 1200, 1900, 6628(M), 6724(M), 7106(M), 7111(M), 7111(G), 7119(M), 7129(M), 7154(M), 9714</li>
            <li>공항버스 : 6011</li>
          </ul>
        </dd>
      </TextBoxDl>

      <Title1H4>자가용</Title1H4>
      <TextBoxDl>
        <dd>
          <ul>
            <li>
              성산대교 : 연희교차로 → 서대문우체국 → 연세대 → 세브란스 본관 앞(응급진료센터) 좌회전
              <br />
              (* 좌회전 차량 정체 시, 금화터널 방향 고가도로 밑에서 유턴 → 연세대 동문회관 → 세브란스병원본관 지하 주차장 진입 또는 정문으로 진입)
            </li>
            <li>
              양화대교 : 동교동 삼거리 → 연희교차로 → 서대문우체국 → 세브란스 본관 앞(응급진료센터) 앞 좌회전
              <br />
              (* 좌회전 차량 정체 시, 금화터널 방향 고가도로 밑에서 유턴 → 연세대 동문회관 → 세브란스병원본관 지하 주차장 진입 또는 정문으로 진입)
            </li>
            <li>
              서강대교/마포 : 신촌기차역입구에서 "신촌기차역" 방면으로 좌회전 → "신촌역로" 방면에서 3시방향 우회전 → 세브란스 본관 앞(응급진료센터) 좌회전
              <br />
              (* 좌회전 차량 정체 시, 금화터널 방향 고가도로 밑에서 유턴 → 연세대 동문회관 → 세브란스병원본관 지하 주차장 진입 또는 정문으로 진입)
            </li>
            <li>광화문/독립문/서울역 : 금화터널 빠져나와 1Km 직진 → 연세대 동문회관 → 세브란스병원본관 지하 주차장 진입 또는 정문으로 진입</li>
          </ul>
        </dd>
      </TextBoxDl>

      <Title1H4>지하철</Title1H4>
      <TextBoxDl>
        <dt>2호선</dt>
        <dd>
          <ul>
            <li>신촌역 1번출구 → 병원 셔틀버스</li>
            <li>신촌역 3번출구 → 도보 8분</li>
          </ul>
        </dd>
        <dt>3호선</dt>
        <dd>
          <ul>
            <li>독립문역 4번출구 → 470, 710, 750, 7737 버스 환승</li>
            <li>경복궁역 1번출구 → 272, 606버스 환승 또는 병원 셔틀버스(1번출구 50m 전방 사학회관 앞)</li>
          </ul>
        </dd>
      </TextBoxDl>

      <Title1H4>철도</Title1H4>
      <TextBoxDl>
        <dt>신촌기차역</dt>
        <dd>
          <ul>
            <li>신촌역사 우측 개방통로 이용 : 걸어서 약 5분 (신촌역까지 환승승차권으로 구입하시면 편리합니다)</li>
          </ul>
        </dd>
        <dt>서울역 (기차)</dt>
        <dd>
          <ul>
            <li>
              서울역에서 경의선 탑승(현대자동차 계단 끝에서 통로를 따라 들어가시면됩니다.) → 신촌기차역 도착 후 신촌역사 우측 개방통로 이용. 도보로 약 5분(DMC와
              문산간 15분 간격. 서울역에서는 매시 50분 출발)
            </li>
            <li>택시타고 약 15분</li>
            <li>702,703번 타고 → 서대문에서 470,601,710,750번 버스 환승</li>
          </ul>
        </dd>
      </TextBoxDl>

      <Title1H4>비행기</Title1H4>
      <TextBoxDl>
        <dt>인천국제공항</dt>
        <dd>
          <ul>
            <li>리무진 버스 6011번 → 연세대학교 하차 (도보 5분)</li>
          </ul>
        </dd>
        <dt>김포공항</dt>
        <dd>
          <ul>
            <li>파란버스 601번 → 세브란스병원 하차 (도보 5분)</li>
            <li>
              지하철 5호선 → 영등포구청 2호선 환승하거나, 지하철 9호선 → 당산 2호선 환승 → 신촌 2호선 하차 → 1번출구 병원셔틀버스 이용하거나, 3번출구 도보 8분 (
              또는, 홍대입구 2호선 하차 → 7737번 녹색버스 탑승 → 세브란스병원 하차 )
            </li>
          </ul>
        </dd>
      </TextBoxDl>
    </div>
  );
});

export default Content2;
