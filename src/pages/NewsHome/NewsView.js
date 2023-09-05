/**
 * @ File Name: NewsView.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-12 12:07:00
 * @ Description: 뉴스 하위페이지 언론보도 페이지
 */

import React, { memo, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../slices/NewsSlice";
import RegexHelper from "../../helper/RegexHelper";
import { useQueryString } from "../../hooks/useQueryString";
// 최신글 처리를 위한 dayjs
import dayjs from "dayjs";
import Spinner from "../../components/Spinner";

const NewsView = memo(() => {
  /** QueryString 변수 받기 */
  const { query = "" } = useQueryString();

  // 페이지 번호 상태값
  const [page, setPage] = useState(1);
  // 검색어 상태값
  const [queryStatus, setQueryStatus] = useState("");
  // 데이터 관리 상태값
  const [isData, setIsData] = useState([]);

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { pagenation, loading, error } = useSelector((state) => state.NewsSlice);

  /** 최초 마운트시 리덕스를 통해 목록을 조회한다. */
  // 화면 새로고침에 대한 상태값이 변경된다면 데이터를 새로 로드함
  useEffect(() => {
    dispatch(
      getList({
        query: query,
        page: page,
        rows: 12
      })
    ).then(({payload}) => {
      if (query !== queryStatus) {
        setIsData(payload.data);
        setQueryStatus(query);
      } else {
        setIsData((nowData) => nowData.concat(payload.data));
      }
    });
  }, [page, query]);

  /** 페이지 강제 이동을 처리하기 위한 navigate함수 생성 */
  const navigate = useNavigate();

  /** 검색했을 때 이벤트 */
  const onSearchSubmit = useCallback((e) => {
    e.preventDefault();

    const query = e.currentTarget.itemName.value;

    //입력값에 대한 유효성 검사
    const regex = RegexHelper.getInstance();

    try {
      query === "" && queryStatus === "" && regex.value(query, "검색어를 입력해주세요.");
    } catch (e) {
      // e.selector.focus();
      document.querySelector(".popUpCont").style.display = "block";
      document.querySelector(".alert").innerHTML = e.message;
      return;
    }

    //검색어에 따라 URL 구성
    let redirectUrl = query ? `?query=${query}` : "/news/media.do";
    navigate(redirectUrl);
    query !== queryStatus && setPage(1);
  });

  /** 닫기버튼 눌렸을 때 */
  const closeClick = useCallback((e) => {
    document.querySelector(".popUpCont").style.display = "none";
  });

  return (
    <div>
      <div className="bgAll">
        <div className="pageCont">
          <h1 className="pageTitle">언론보도</h1>
          {/* 검색form */}
          <form onSubmit={onSearchSubmit}>
            <div>
              <div className="searchBox">
                <input
                  type="text"
                  name="itemName"
                  id="itemName"
                  placeholder="검색어를 입력해 주세요"
                  className="formControl"
                  defaultValue={query}
                  key={query}
                />
                <span>
                  <button type="submit" className="btnSearch">
                    <i></i>
                  </button>
                </span>
              </div>
            </div>
          </form>

          {error ? (
            <h1>에러발생함</h1>
          ) : !isData.length ? (
            // 검색결과없을 때
            <div className="nodata">
              <i className="nodataIcon"></i>
              <p>검색된 결과가 없습니다.</p>
            </div>
          ) : (
            <div>
            <Spinner loading={loading} />
            {/* 검색결과 */}
            <div className="bbsList">
              {isData.map((v, i) => {
                const regDate = v.regDate.slice(0,10);
                return (
                  <div className="bbsItem" key={v.id}>
                    <a className="inner" href={v.newsLink} rel="noopener noreferrer" target="_blank">
                      <div className="bbssubjectArea">
                        <strong>{v.newsTitle}</strong>

                        {/* 뉴 아이콘 */}
                        {dayjs(new Date()).subtract(2, "day").format("YYYY-MM-DD") < regDate ? <i className="icoNew" /> : null}
                      </div>
                      <div className="infoArea">
                        <span className="date">{regDate}</span>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>

            {/* 페이지가 2페이지 이상일 경우 더보기 버튼 */}
            {pagenation.nowPage !== pagenation.totalPage ? (
              <div className="buttonContColumn">
                <button type="button" className="btnMore" onClick={() => setPage(page + 1)}>
                  더보기
                </button>
              </div>
            ) : null}
          </div>
          )}
        </div>
      </div>

      {/* 유효성검사 알람 팝업창 */}
      <div className="popUpCont">
        <div className="dimed"></div>
        <div className="popUp">
          <div className="alert"></div>
          <div className="closeBtnCont">
            <button type="button" className="closeBtn" onClick={closeClick}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NewsView;
