/**
 * @ File Name: NoticeInfo.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-12 16:46
 * @ Description: 공지사항상세
 */

import React, { memo, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getItem } from '../../slices/NoticeSlice';

import styled from 'styled-components';
import prevImg from '../../assets/img/ico-chevron-down-sm@2x.png';
import Spinner from '../../components/Spinner';
// 최신글 처리를 위한 dayjs
import dayjs from 'dayjs';
/** Buffer 디코딩을 위한 참조 */
window.Buffer = window.Buffer || require('buffer').Buffer;

const Div = styled.div`
  .subjectArea {
    border-top: 1px solid black;
  }

  .itemInfo {
    margin-left: 15px;
    padding-left: 16px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -7px;
      width: 1px;
      height: 15px;
      background-color: #dadada;
    }
  }

  .buttonCont {
    padding-bottom: 0;
  }

  .articleNav {
    font-weight: bold;
    margin-top: 60px;
    border-top: 1px solid #e6e6e6;
    /* font-family: -apple-system, BlinkMacSystemFont, "NanumGothic", "malgungothic", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
     */

    li {
      padding: 12px 30px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      border-bottom: 1px solid #e6e6e6;
    }

    strong {
      position: relative;
      padding: 0 45px 0 28px;
      color: #666;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -4.5px;
        width: 15px;
        height: 9px;
        ${`background: url(${prevImg}) no-repeat;`}
        background-size: cover;
      }
    }

    /* 이전글 */
    .prev {
      strong {
        &:before {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

const NoticeInfo = memo(() => {
  /** 리덕스 처리가 끝남을 감지하는 상태값 */
  const [init, setInit] = useState(false);
  /** path 파라미터 받기 */
  const { id } = useParams();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error, pnN } = useSelector(
    (state) => state.NoticeSlice
  );

  /** 페이지가 열린 직후 (혹은 id값이 변경된 경우) 데이터 가져오기 */
  useEffect(() => {
    dispatch(getItem({ id: id })).then(() => {
      setInit(true);
    });
  }, [id]);

  return (
    <Div>
      <div className="bgAll">
        <div>
          <h1 className="pageTitle">공지사항</h1>
        </div>
      </div>

      <Spinner loading={loading} />

      {error ? (
        <h1>에러발생함</h1>
      ) : (
        init &&
        data && (
          <div className="pageCont">
            <div className="subjectArea">
              <h3 className="subject">
                {data.noticeTitle}
                {/* 뉴 아이콘 */}
                {dayjs(new Date()).subtract(2, 'day').format('YYYY-MM-DD') <
                data.regDate ? (
                  <i className="icoNew" />
                ) : null}
              </h3>
              <div className="articleInfo">
                <span>관리자</span>
                <span className="itemInfo">{data.regDate.slice(0, 10)}</span>
                <span className="itemInfo">
                  <strong>조회수 &nbsp;</strong>
                </span>
                <span>{data.hits}</span>
              </div>
            </div>
            <div className="articleBody">
              <p
                dangerouslySetInnerHTML={{
                  __html: Buffer.from(
                    data.noticeContent.data,
                    'base64'
                  ).toString('utf8'),
                }}
              ></p>
            </div>

            <div className="buttonCont">
              <Link className="buttonBlue" to="/news/notice.do">
                목록
              </Link>
            </div>

            {pnN.length == 2 ? (
              <ul className="articleNav">
                <li className="prev">
                  <strong>이전글</strong>
                  <Link to={`/news/notice.do/${pnN[0].id}`}>
                    {pnN[0].noticeTitle}
                  </Link>
                </li>
                <li className="next">
                  <strong>다음글</strong>
                  <Link to={`/news/notice.do/${pnN[1].id}`}>
                    {pnN[1].noticeTitle}
                  </Link>
                </li>
              </ul>
            ) : pnN[0].id > data.id ? (
              <ul className="articleNav">
                <li className="next">
                  <strong>다음글</strong>
                  <Link to={`/news/notice.do/${pnN[0].id}`}>
                    {pnN[0].noticeTitle}
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="articleNav">
                <li className="prev">
                  <strong>이전글</strong>
                  <Link to={`/news/notice.do/${pnN[0].id}`}>
                    {pnN[0].noticeTitle}
                  </Link>
                </li>
              </ul>
            )}
          </div>
        )
      )}
    </Div>
  );
});

export default NoticeInfo;
