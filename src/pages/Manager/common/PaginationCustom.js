/**
 * @ File Name: PaginationCustom.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-11 17:33:33
 * @ Description: material ui의 pagination 커스텀 컴포넌트
 */

/** import */
import React, { memo, useCallback } from "react";
import { Link } from "react-router-dom";
// pagination
import { Pagination } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import PaginationItem from "@mui/material/PaginationItem";

/**
 * @page useQueryString()을 통해 가져온 값
 * @pagenation Redux의 pagenation
 * @totalPage 전체 페이지 수
 * @pageQueryPath 현재 페이지 번호를 QueryString으로 표현하기 위한 Path
 * @query 검색어를 QueryString으로 가져온 값
 * @color pagination의 커스텀 폰트 컬러
 * @bgColor pagination의 커스텀 배경 컬러
 */
const PaginationCustom = memo(({ page, pagenation: { totalPage }, pageQueryPath, query, color = "rgba(0,0,0,0.87)", bgColor = "rgba(0,0,0,0.0.8)" }) => {
  /** 페이지 구성 */
  const nowPage = parseInt(page || "1", 10);

  /** 검색어가 있는 경우 QueryString으로 표현 */
  const searchQueryString = query ? `query=${query}&` : "";

  /** 페이지 커스텀 스타일 */
  const paginationStyle = makeStyles((theme) => ({
    root: {
      "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
        backgroundColor: bgColor,
        color: color
      }
    }
  }));

  // classes 적용
  const classes = paginationStyle();

  /** 페이지 최상단 이동 */
  // const handleChange = useCallback(() => {
  //   // 스크롤바를 강제로 맨 위로 이동시킨다.
  //   window.scrollTo(0, 0);
  // });

  return (
    <Pagination
      count={totalPage}
      defaultPage={1}
      siblingCount={2}
      boundaryCount={1}
      page={nowPage}
      className={classes.root}
      // onChange={handleChange}
      renderItem={(item) => <PaginationItem component={Link} to={`${pageQueryPath}?${searchQueryString}page=${item.page}`} {...item} />}
    />
  );
});

export default PaginationCustom;
