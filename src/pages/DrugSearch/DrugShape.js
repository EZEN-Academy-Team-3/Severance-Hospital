/**
 * @ File Name: DrugShape.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-17 16:07:00
 * @ Description: 의약품 검색 상세페이지
 */

import React, { memo, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getItem } from '../../slices/DrugSearchSlice';

import Spinner from '../../components/Spinner';

const DrugShape = memo(() => {
  /** 리덕스 처리가 끝남을 감지하는 상태값 */
  const [init, setInit] = useState(false);
  /** path 파라미터 받기 */
  const { id } = useParams();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.DrugSearchSlice
  );

  /** 페이지가 열린 직후 (혹은 id값이 변경된 경우) 데이터 가져오기 */
  useEffect(() => {
    dispatch(getItem({ id: id })).then(() => {
      setInit(true);
    });
    //페이지 렌더 후 화면을 맨 위로 올리기
    window.scrollTo(0, 0);
  }, [id]);

  if(data){
    console.log(data);
  }

  return (
    <div>
      <Spinner loading={loading} />
      <h1 className="pageTitle">의약품 정보</h1>
      <hr />

      {error ? (
        <h1>에러발생함</h1>
      ) : (
        init &&
        data && (
          <>
            <div className="subjectArea">
              <h3 className="subject">{data.ITEM_NAME}</h3>
            </div>
            <div className="extendField">
              <dl>
                <dt>제조(수입) 업체명</dt>
                <dd>{data.ENTP_NAME}</dd>
              </dl>
            </div>
            {/* 게시물 본문 */}
            <div className="articleBody">
              {/* 이미지 */}
              <div className="drugImageSlider">
                {/* 이미지가 있을 때만 이미지 표시 */}
                {data.ITEM_IMAGE && (
                  <img
                    className="item"
                    src={data.ITEM_IMAGE}
                    alt="알약이미지"
                  />
                )}
                {data.itemImage && (
                  <img className="item" src={data.itemImage} alt="알약이미지" />
                )}
              </div>
              <h4 className="pageSubtitle">효능효과</h4>
              <div className="indent">
                <p></p>
              </div>
              <h4 className="pageSubtitle">용법용량</h4>
              <div className="indent">
                <p></p>
                <p></p>
              </div>
              <table></table>
              <h4 className="pageSubtitle">사용상 주의사항</h4>
              <div className="indent">
                <p></p>
              </div>
              <table></table>
            </div>
          </>
        )
      )}

      <div className="buttonCont">
        <Link className="buttonBlue" to="/drug.do">
          목록
        </Link>
        <button className="buttonWhite marginleft" type="button">
          공유
        </button>
      </div>
    </div>
  );
});

export default DrugShape;
