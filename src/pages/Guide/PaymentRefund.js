/**
 * @ File Name: PaymentRefund.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-21 21:00
 * @ Description: 진료비 수납 및 환불 페이지
 */

import React, { memo } from "react";
import styled from "styled-components";
import TopButton from "../../components/TopButton";

// 이미지
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";

const Container = styled.div`
  width: 1280px;
  margin: auto;
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  h3 {
    padding-left: 18px;
    /* font-family: "NanumSquare", "malgungothic", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; */
    font-size: 24px;
    line-height: 38px;
    position: relative;
    font-weight: bold;
    color: #222;
    margin-bottom: 10px;

    // 제목 앞에 파란색 띠
    &:before {
      position: absolute;
      left: 0;
      width: 6px;
      height: 20px;
      background-color: #0094fb;
      border-radius: 3px;
      top: 9px;
      margin-right: 12px;
      content: "";
    }
  }

  // 안내사항 박스
  .boxGuide {
    max-width: 1280px;
    margin: 0 auto 60px;
    ul {
      li {
        margin-top: 5px;
        font-size: 16px;
        &:before {
          content: "";
          display: block;
          width: 4px;
          height: 4px;
          background-color: #aaa;
          float: left;
          margin: 10px 5px 0 0;
        }
      }
    }
  }

  // 진료비 후불서비스, 진료비 환불안내
  .refund,
  .hipass {
    margin-bottom: 60px;
    position: relative;
    ul {
      margin-bottom: 60px;
      li {
        margin-top: 5px;
        margin-left: 20px;
        font-size: 16px;
        &:before {
          content: "";
          display: block;
          width: 4px;
          height: 4px;
          background-color: rgb(0, 148, 251);
          float: left;
          margin: 10px 5px 0 0;
        }
      }
    }
  }

  // 진료비 수납/환불 문의전화 테이블
  table {
    width: 1260px;
    margin-left: 20px;
    font-size: 16px;
    color: #333;
    letter-spacing: 0.02em;
    line-height: 1.625;
    margin-bottom: 80px;
    border-top: 1px solid #aaa;
    tr {
      border-bottom: 1px solid #e6e6e6;
      padding: 13px 20px;
      &:last-child {
        border-bottom: 1px solid #aaa;
      }
      th {
        background-color: #f9f9f9;
        padding: 15px 15px;
        font-weight: bold;
        vertical-align: middle;
        text-align: center;
        &:first-child {
          border-right: 1px solid #e6e6e6;
        }
      }
      td {
        padding: 13px 20px;
        &:first-child {
          border-right: 1px solid #e6e6e6;
        }
      }
    }
  }
`;
const OutpatientInfo = memo(() => {
  return (
    <Container>
      <TopButton />
      <div className="bgAll">
        <h1>진료비 수납 및 환불</h1>
        <div className="boxGuide">
          <img src={boxGuideDecor} alt="boxGuideDecor" />
          <ul>
            <li>
              외래 진찰비 또는 검사비는 시행 당일 수납하셔야 하며, 가까운
              외래원무팀 수납창구 또는 계좌이체(1006-580-010101, 우리은행,
              연세의료원)를 통해 수납하실 수 있습니다.
            </li>
            <li>
              진료비 수납과 관련하여 불편사항 및 자세한 내용은 외래원무팀으로
              문의하시면 신속하게 처리해드리겠습니다.
            </li>
          </ul>
        </div>

        <h3>진료비 수납/환불 문의전화</h3>
        <div className="info_tel">
          <table>
            <tbody>
              <tr>
                <th scope="row">본관</th>
                <td>02-2228-7170~5, 7228</td>
                <th scope="row">재활병원</th>
                <td>02-2228-3766</td>
              </tr>
              <tr>
                <th scope="row">심장혈관병원</th>
                <td>02-2228-8255</td>
                <th scope="row">안과병원</th>
                <td>02-2228-3421~5</td>
              </tr>
              <tr>
                <th scope="row">어린이병원</th>
                <td>02-2228-5966</td>
                <th scope="row">연세암병원</th>
                <td>02-2228-4500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>진료비 후불서비스[하이패스(Hi-PASS)] 이용안내</h3>
        <div className="hipass">
          <ul>
            <li>
              진료비 후불신청을 하신 후 신용카드를 등록해 놓으시면 진료비를 여러
              번 수납할 필요없이 진료 및 검사를 할 수 있는 편리한 제도입니다.
            </li>
            <li>
              후불서비스 신청자는 진료 및 검사가 모두 종료된 후 귀가 전에 가까운
              수납창구를 방문하여 일괄결제를 하시기 바라며, 수납창구를 방문하지
              않고 귀가하셨을 경우 등록된 신용카드로 결재한 후 문자로 안내해
              드립니다.
            </li>
            <li>
              등록된 신용카드는 세브란스병원에서 발생된 진료비 결제목적 외에
              다른 용도로는 사용하지 않습니다.
            </li>
          </ul>
        </div>

        <h3>진료비 환불안내</h3>
        <div className="refund">
          <ul>
            <li>
              진찰비 및 검사비는 시행 당일 수납하셔야 하며, 부득이하게 미리
              납부(선납)하신 후 미실시한 진료비(검사비)가 있는 경우 수납창구
              또는 외래원무팀 사무실에 확인하여 환불 받으시기 바랍니다.
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
});

export default OutpatientInfo;
