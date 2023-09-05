/**
 * @ File Name: CustomerBoardView.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-11-25 15:1:00
 * @ Description: 고객의 소리 상세 페이지
 */


import React, { memo, useEffect, useMemo, useCallback } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCurrentData,
  deleteItem,
  getItem,
} from '../../slices/CustomerBoardSlice';
import dayjs from 'dayjs';
import Spinner from '../../components/Spinner';

import CustomerBoardHeader from './CustomerHeader';
import TopButton from '../../components/TopButton';

const CustomerBoardView = memo(() => {
  const navigate = useNavigate();

  /** path파라미터 받기 */
  const { id } = useParams();

  /**리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.CustomerBoardSlice
  );

  /** 데이터 가져오기 */
  useEffect(() => {
    dispatch(getCurrentData());

    //페이지 렌더 후 화면을 맨 위로 올리기
    window.scrollTo(0,0);
  }, []);

  /** 데이터 값 변경에 따른 사이드 이펙트 처리 */
  const item = useMemo(() => {
    if (data) {
      return data.find((v, i) => v.id == id);
    } else {
      //새로고침시 현재 데이터만 다시 로드
      dispatch(getItem({ id: id }));
    }
  }, [data]);

  /** 삭제버튼 클릭 이벤트 */
  const onCustomerBoardDelete = useCallback((e) => {
    e.preventDefault();

    const current = e.currentTarget;
    const { id } = current.dataset;

    if (window.confirm(`정말 글을 삭제하시겠습니까?`)) {
      dispatch(
        deleteItem({
          id: id,
        })
      ).then(({ meta, payload }) => {
        //삭제 후 목록페이지로 이동
        navigate('/customer.do');
      });
    }
  }, []);

  return (
    <div>
      <Spinner loading={loading} />
      <TopButton />
        <CustomerBoardHeader />
      <div className="pageCont">
        <h4 className="pageSubtitle">고객의소리 게시판</h4>
        {error ? (
          <h1> 에러발생함 </h1>
        ) : (
          item && (
            <div className="suggestionViewCont">
              <div className="subjectArea">
                <h3 className="subject">{item.title}</h3>
                <div className="articleInfo">
                  <span>{dayjs(new Date(item.date)).format('YYYY-MM-DD')}</span>
                  &nbsp;|&nbsp;<span>{item.name}</span>
                </div>
              </div>
              <div className="subjectArea extendField">
                <dl className="flex">
                  <dt>접수구분</dt>
                  <p>{item.register}</p>
                </dl>
                <dl className="flex">
                  <dt>기관</dt>
                  <p>{item.hospital}</p>
                </dl>
                <dl className="flex">
                  <dt>부서</dt>
                  <p>{item.dept}</p>
                </dl>
              </div>
              <div className="articleQarea">
                <strong className="qnaTitle">Q</strong>
                <p className='articleArea'>{item.content}</p>
              </div>
              <div className="buttonCont">
                <NavLink className="buttonBlue" to="/customer.do">
                  목록
                </NavLink>
                <button
                  className="buttonBlue marginleft"
                  type="button"
                  data-id={item.id}
                  onClick={onCustomerBoardDelete}
                >
                  삭제
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
});

export default CustomerBoardView;
