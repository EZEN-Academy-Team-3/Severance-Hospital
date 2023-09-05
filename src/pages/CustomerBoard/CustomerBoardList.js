/**
 * @ File Name: CustomerBoardList.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-11 15:1:00
 * @ Description: 고객의 소리 게시판 페이지
 */

import React, { memo, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { useSelector, useDispatch } from 'react-redux';
import { getList, deleteItem } from '../../slices/CustomerBoardSlice';
import { useQueryString } from '../../hooks/useQueryString';

import Header from '../../components/MainPageHeader';
import Footer from '../../components/Footer';
import TopButton from '../../components/TopButton';
import Spinner from '../../components/Spinner'
import CustomerBoardHeader from './CustomerHeader';
import { Pagination } from '@mui/material';

const CustomerBoardCont = styled.div`
  .pageCont{
    padding-bottom: 0 !important;
  }

  table {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
    width: 100%;
    font-size: 16px;
    text-align: center;

    th {
      background-color: #f9f9f9;
      padding: 10px;
      border: 1px solid #ddd;

      &:first-child {
        border-left: 0;
      }
      &:last-child {
        border-right: 0;
      }
    }
    td {
      padding: 10px;
    }
  }
    .paging{
      margin: 50px 0 50px;
    }

  //방문했던 페이지
  .visited{
    &:visited{
      color: purple;
    }
    &:hover{
      color: #0094fb;
    }
  }
`;

const CustomerBoardList = memo(() => {
  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.CustomerBoardSlice
  );

  /** 최초마운트시 리덕스를 통해 목록을 조회한다. */
  useEffect(() => {
    dispatch(getList());

    //페이지 렌더 후 화면을 맨 위로 올리기
    window.scrollTo(0,0);
  }, []);


  return (
    <div >
      <Spinner loading={loading} />
      <TopButton />
      <CustomerBoardCont>
        <CustomerBoardHeader />
        <div className="pageCont">
        <h4 className="pageSubtitle">고객의소리 게시판</h4>

        {/* 조회결과 표시하기 */}
        {error ? (
          <h1>에러 발생함</h1>
        ) : (
          data && (
            <table>
              <thead>
                <tr>
                  <th>글번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                </tr>
              </thead>
              <tbody>
                {
                  //처리 결과는 존재하지만 0개인경우
                  data.length > 0 ? (
                    data.map((v, i) => {
                      return (
                        <tr key={v.id}>
                          <td>{v.id}</td>
                          <td><NavLink to={`/customer.do/suggestion/${v.id}`} className='visited'>{v.title}</NavLink></td>
                          <td>{v.name}</td>
                          <td>{dayjs(new Date(v.date)).format('YYYY/MM/DD')}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="4">글이 없습니다.</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          )
        )}

        <div className='buttonContColumn'>
          <NavLink className='buttonBlue' to="/customer.do/suggest.do">글쓰기</NavLink>
          <Pagination count={10} className="paging" />
        </div>
        </div>
      </CustomerBoardCont>
    </div>
  );
});

export default CustomerBoardList;
