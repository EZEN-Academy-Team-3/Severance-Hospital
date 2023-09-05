import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';

const BoardNews = memo(() => {

    const onBoardSubmit = useCallback((e) => {
        e.preventDefault();

    });

    return (
      <div className="pageCont">
        {/* 검색 */}
        <form>
          <div>
            <div className="searchBox">
              <input
                type="text"
                name="itemName"
                id=""
                placeholder="검색어를 입력해주세요."
                className="formControl"
              />
              <span>
                <button
                  type="submit"
                  className="btnSearch"
                  onClick={onBoardSubmit}
                >
                  <i></i>
                </button>
              </span>
            </div>
          </div>
        </form>

        {/* 검색결과 */}
        <div className="bbsList">
          <div className="bbsItem">
            <Link className="inner">
              <div className="bbssubjectArea">
                <strong>title</strong>
              </div>
              <div className="infoArea">
                <span className="date">2022-11-30</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
});

export default BoardNews;