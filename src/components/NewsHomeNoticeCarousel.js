/**
 * @ File Name: NewsHomeNoticeCarousel.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-13
 * @ Description: 뉴스 메인 페이지 공지사항 슬라이드 컴포넌트
 */

/** import */
import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../slices/NoticeSlice';
import styled from 'styled-components';

// slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/** 슬라이드 전체 박스 스타일 */
// 슬라이드 영역 스타일
const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
  .slick-slide {
    /* float: left; */
    height: 100%;
    width: 407px !important;
    min-height: 1px;
  }
  .slick-dots {
    width: 100%;
    display: flex !important;
    justify-content: center;
    margin: -3.5px;
    /* padding-top: 30px; */

    li{
      display: list-item;
      text-align: center;
      margin: 0;
    }

    //비활성화된 도트
    button {
      margin: 0;
      padding: 3px 3.5px;
      margin-top: 30px;
      display: block;
      width: 11px;
      height: 11px;
      background-color: #c2c2c2;
      border-radius: 6px;
      &::before {
        display: none;
      }
    }
    //활성화된 도트
    .slick-active{
      margin-right: 15px;
      button{
        margin: 0;
        margin-top: 30px;
        width: 30px;
        background-color: #ac47d1;
      }
    }
  }

  .newsBox {
    border: 1px solid #e6e6e6;
    width: 407px !important;
    height: 204px !important;
    margin-top: 20px;

    &:hover {
      border-color: #0094fb;
    }
  }
`;

function NewsHomeNoticeCarousel() {
  // 슬라이드 설정
  const settings = {
    dots: true /* 아래점 */,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    infinite: false,
    slidesPerRow: 2, //보여질 행의 수
  };

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.NoticeSlice);

  useEffect(() => {
    dispatch(
      getList({
        page: 1,
        rows: 12,
      })
    );
  }, []);

  return (
    <div>
    <StyledSlider {...settings} className='slick-slider'>
      {data && data.map((v,i)=>{
        return(
          // 언론보도
          <Link
          className="newsBox"
          key={i}
          title="공지사항 새창열기"
          draggable={false}
          to={`notice.do/${v.id}`}
        >
          <span className="newsCategory">공지사항</span>
          <strong className="newsContentTitle">{v.noticeTitle}</strong>
          <span className="newsDate">{v.regDate.slice(0,10)}</span>
        </Link>
        )
      })}
    </StyledSlider>
    <Link className="btnMoreLink notice" to="/news/notice.do">더보기</Link>
    </div>
  );
}

export default NewsHomeNoticeCarousel;
