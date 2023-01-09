/**
 * @ File Name: HospitalDetail.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-19 15:02:00
 * @ Description: 협력병원 현황 상세 페이지
 */

/** import */
import React, { memo, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { getItem, getList } from "../../slices/CHospitalSlice";

/** 이미지 */
// 공지사항 박스 아이콘
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";
// 집 아이콘
import home from "../../assets/img/ico-lg-home-blue@2x.png";
import homeGray from "../../assets/img/ico-lg-home-gray@2x.png";
// 주소 아이콘
import address from "../../assets/img/ico-education-adress@2x.png";
// 전화 아이콘
import call from "../../assets/img/ico-education-call@2x.png";

/** 리스트 스타일 */
// ul태그
const ListStyleUl = styled.ul`
  margin: 4px 0;

  li {
    padding-left: 12px;
    margin-top: 5px;
    position: relative;

    &:first-child {
      margin-top: 0;
    }

    &::before {
      content: "";
      width: 4px;
      height: 4px;

      position: absolute;
      top: 0.7em;
      left: 0;

      background-color: #0094fb;
    }
  }
`;

/** 한개 버튼 박스 스타일 */
const SingleButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 25px;

  a {
    width: 100px;
    height: 50px;
    display: block;

    font-size: 18px;
    line-height: 50px;

    margin: 5px 0;
    padding: 0 28px;

    border: 2px solid transparent;
    border-radius: 25px;
    box-sizing: border-box;

    color: #fff;
    background-color: #0094fb;
  }
`;

/** 협력병원 현황 상세 정보 박스 스타일 */
const DetailDataStyle = styled.section`
  h4 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 12px;

    display: flex;
    align-items: center;

    span {
      line-height: 38px;
    }

    a {
      i {
        width: 25px;
        height: 25px;
        display: block;
        margin-left: 10px;

        background: url(${home}) no-repeat center / cover;
      }

      .grayIcon {
        background: url(${homeGray}) no-repeat center / cover;
      }
    }
  }

  dl {
    margin-top: 10px;
    display: flex;
    dt {
      font-weight: bold;
      margin-right: 10px !important;
    }

    dd {
    }
  }

  address {
    margin-top: 25px;
    padding: 14px 0 12px;

    border-top: 1px solid #e6e6e6;
    box-sizing: border-box;

    display: flex;

    .address {
      margin: 4px 0;
      padding-right: 30px;
      box-sizing: border-box;

      display: flex;
      align-items: center;

      i {
        display: block;
        width: 26px;
        height: 26px;

        padding-right: 15px;
        box-sizing: border-box;
      }

      .location {
        background: url(${address}) no-repeat center / cover;
      }

      .call {
        background: url(${call}) no-repeat center / cover;
      }

      p {
        line-height: 52px;
        padding-left: 10px;
      }
    }
  }
`;

/** 지도 스타일 */
const MapStyle = styled.div`
  width: 100%;
  height: 615px;
`;

const HospitalDetail = memo(() => {
  /** path로 아이디값을 전달 받는다. */
  const path = useParams().id;

  // KAKAO MAP OPEN API
  const { kakao } = window;
  // a태그 url 상태값 (임시)
  const [url, setUrl] = useState("");

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.CHospitalSlice);

  /** 최초마운트시 리덕스를 통해 단일정보를 조회한다. */
  useEffect(() => {
    dispatch(getItem({ id: path }));
  }, []);

  /** 단일 데이터 정보를 item에 넣는다. */
  const item = data && data[0].data;

  /** 카카오맵 */
  useEffect(() => {
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    /** @todo: addressSearch "경기도 안산시 단원구 광덕대로 162"에 adress 데이터 적용 */
    item &&
      geocoder.addressSearch(item.CHospitalAddress, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          var mapContainer = document.getElementById("map"), // 지도를 표시할 div
            mapOption = {
              center: coords, // 지도의 중심좌표
              level: 3 // 지도의 확대 레벨
            };
          // 지도를 생성합니다
          var map = new kakao.maps.Map(mapContainer, mapOption);

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">' + item.CHospitalName + "</div>"
          }); /** @todo: content 태그 사이 '경희요양병원'에 hospitalName 데이터 적용 {hospitalName} */
          infowindow.open(map, marker);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        } else {
          var mapContainer = document.getElementById("map"), // 지도를 표시할 div
            mapOption = {
              center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
              level: 3 // 지도의 확대 레벨
            };

          // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
          var map = new kakao.maps.Map(mapContainer, mapOption);
        }
      });
  }, [item]);

  return (
    <>
      {/* 페이지 타이틀 */}
      <h1 className="pageTitle">협력병원 현황</h1>
      <section className="boxGuide">
        <img src={boxGuideDecor} alt="boxGuideDecor" />
        <ListStyleUl>
          <li>전국 병 · 의원과의 협력을 통하여 진료의뢰, 회송이 원활하게 이루어지도록 진료협력센터(Severance Hospital Referral Center)를 운영하고 있습니다.</li>
        </ListStyleUl>
      </section>

        {item && (
          <DetailDataStyle>
            <h4>
              <span>{item.CHospitalName}</span>
              {/* @todo: url data 적용 */}
              <a href={item.CHospitalURL !== null ? item.CHospitalURL : "javascript:void(0)"} target={item.CHospitalURL !== null ? "_black" : "_self"} rel="noopener noreferrer">
                <i className={item.CHospitalURL ? "" : "grayIcon"} />
              </a>
            </h4>

            <dl>
              <dt>소개</dt>
              <dd>{item.CHospitalIntroduction}</dd>
            </dl>
            <dl>
              <dt>진료과</dt>
              <dd>{item.CMedicalDepartment}</dd>
            </dl>

            <address>
              <div className="address">
                <i className="location" />
                <p>{`${item.CHospitalZipCode} ${item.CHospitalAddress}`}</p>
              </div>

              <div className="address">
                <i className="call" />
                <p>{item.CHospitalTel}</p>
              </div>
            </address>
            <MapStyle id="map"></MapStyle>
          </DetailDataStyle>
        )}

      <SingleButtonDiv>
        <Link to="/cooperation/hospital.do">목록</Link>
      </SingleButtonDiv>
    </>
  );
});

export default HospitalDetail;
