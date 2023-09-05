/**
 * @ File Name: TableSearch.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-11 17:33:33
 * @ Description: 데이터를 검색하기 위한 컴포넌트
 */

import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

/**
 * @name input태그의 이름
 * @query 검색어를 QueryString으로 가져온 값
 * @placeholder input태그의 기본 문구
 * @page 페이지 번호를 QueryString으로 가져온 값
 */
const TableSearch = memo(({ name = "query", query, placeholder, searchQueryPath, page }) => {
  /** 페이지 강제 이동을 처리하기 위한 navigate함수 생성 */
  const navigate = useNavigate();

  /** 검색 */
  const onSearchSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // 검색어
      const query = e.currentTarget.query.value;

      // 검색어에 따라 URL을 구성한다.
      let redirectUrl = query ? `${searchQueryPath}?query=${query}&page=${page}` : searchQueryPath;
      navigate(redirectUrl);
    },
    [navigate]
  );

  return (
    <form onSubmit={onSearchSubmit}>
      <input type="text" name={name} defaultValue={query} key={query} placeholder={placeholder} />
      <button type="submit">검색</button>
    </form>
  );
});

export default TableSearch;
