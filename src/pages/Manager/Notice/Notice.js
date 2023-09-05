/**
 * @ File Name: Notice.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-05 00:33:33
 * @ Description: 관리자 공지사항
 */

/** import */
// react
import React, { memo, useCallback, useEffect, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getList, postItem, putItem, deleteItem } from "../../../slices/NoticeSlice";
// module
import dayjs from "dayjs";
// helper
import RegexHelper from "../../../helper/RegexHelper";
import { useQueryString } from "../../../hooks/useQueryString";
// components
import Spinner from "../../../components/Spinner";
import { GetEditForm, Table, TableEx, SearchForm, AddForm, PaginationNav } from "../common/ManagerStyle";
import PaginationCustom from "../common/PaginationCustom";
import TableSearch from "../common/TableSearch";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const LinkStyled = styled(Link)`
    width: 100%;
    height: 35px;

    display: block;
    margin-bottom: 10px;

    font-weight: bold;
    color: #168;
    text-align: center;
    line-height: 35px;

    background-color: #fff;
    border: 1px solid #ccc;

    transition: 0.3s;

    &:hover {
      background-color: #168;
      color: white;
      border-color: #168;
    }
`;

const Notice = memo(() => {
    /** 수정 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성 */
    const navigate = useNavigate();

  /** 화면 갱신 상태값 */
  const [isUpdate, setIsUpdate] = useState(1);
  /** 수정 아이디 상태값 */
  const [updateId, setUpdateId] = useState(-1);

  /** QueryString 값 가져오기 */
  const { query, page = 1 } = useQueryString();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { pagenation, data, loading, error } = useSelector((state) => state.NoticeSlice);

  /** 최초마운트시 리덕스를 통해 목록을 조회한다. */
  // 리덕스를 통한 데이터 요청
  useEffect(() => {
    dispatch(getList({ query: query, page: page, rows: 10 }));
  }, [isUpdate, query, page]);

  // /** 추가 */
  // const onAddSubmit = useCallback(
  //   (e) => {
  //     e.preventDefault();

  //     const current = e.currentTarget;
  //     const regexHelper = RegexHelper.getInstance();

  //     // 입력값에 대한 유효성 검사
  //     try {
  //       regexHelper.value(current.noticeTitle, "뉴스제목이 없습니다.");
  //       regexHelper.value(current.newsLink, "뉴스링크가 없습니다.");
  //     } catch (e) {
  //       window.alert(e.message);
  //       console.error(e);
  //       e.selector.focus();
  //       return;
  //     }

  //     // 리덕스를 통한 데이터 저장 요청
  //     dispatch(
  //       postItem({
  //         noticeTitle: current.noticeTitle.value,
  //         newsLink: current.newsLink.value
  //       })
  //     ).catch(({ payload, error }) => {
  //       window.alert(payload.data.rtmsg);
  //       return;
  //     });

  //     alert("추가되었습니다.");
  //     current.reset();
  //     setIsUpdate(isUpdate + 1);
  //   },
  //   [isUpdate]
  // );

  // /** 수정 */
  // const onEditSubmit = useCallback(
  //   (e) => {
  //     e.preventDefault();

  //     const current = e.currentTarget;
  //     const regexHelper = RegexHelper.getInstance();

  //     // 입력값에 대한 유효성 검사
  //     try {
  //       regexHelper.value(current.noticeTitle, "뉴스제목이 없습니다.");
  //       regexHelper.value(current.newsLink, "뉴스링크가 없습니다.");
  //     } catch (e) {
  //       window.alert(e.message);
  //       console.error(e);
  //       e.selector.focus();
  //       return;
  //     }

  //     // 리덕스를 통한 데이터 수정 요청
  //     dispatch(
  //       putItem({
  //         id: current.id.value,
  //         noticeTitle: current.noticeTitle.value,
  //         newsLink: current.newsLink.value
  //       })
  //     ).catch(({ payload, error }) => {
  //       window.alert(payload.data.rtmsg);
  //       return;
  //     });

  //     alert("수정되었습니다.");
  //     setIsUpdate(isUpdate + 1);
  //     setUpdateId(-1);
  //   },
  //   [isUpdate]
  // );

  /** 삭제 */
  const onDeleteClick = useCallback(
    (e) => {
      e.preventDefault();

      const current = e.currentTarget;

      if (window.confirm(`정말 ${current.dataset.name}(을)를 삭제하시겠습니까?`)) {
        // 리덕스를 통한 데이터 삭제 요청
        dispatch(deleteItem({ id: current.dataset.id })).then(({ payload, error }) => {
          if (error) {
            window.alert(payload.data.rtmsg);
            return;
          }

          window.alert("삭제되었습니다.");
          setIsUpdate(isUpdate + 1);
        });
      }
    },
    [isUpdate]
  );

  /** 수정 버튼 */
  const onEditClick = useCallback((e) => {
    e.preventDefault();

    const current = e.currentTarget;
    const id = parseInt(current.dataset.id);
    setUpdateId(id);

    navigate(`/manager/notice/edit/${id}}`);
  }, []);

  return (
    <>
      {/* 로딩 */}
      <Spinner loading={loading} />

      {/* 추가 */}
      <AddForm>
        <LinkStyled to="/manager/notice/add">새로운 정보 추가</LinkStyled>
      </AddForm>

      {/* 검색 */}
      <SearchForm>
        <TableSearch query={query} placeholder="제목 검색" searchQueryPath="/manager/news" page={page} />
      </SearchForm>

      {/* 조회, 수정 */}
      <GetEditForm>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>제목</th>
              <th>URL</th>
              <th>등록일시</th>
              <th>변경일시</th>
              <th colSpan="2">수정 / 삭제</th>
            </tr>
          </thead>
          <tbody>
            {data && pagenation && !error
              ? data.map((v, i) => {
                  return (
                    <tr key={v.id}>
                      <td>{v.id}</td>
                      <td>{v.noticeTitle}</td>
                      {/* <td>{v.noticeContent}</td> */}
                      <td>{v.hits}</td>
                      <td>{dayjs(v.regDate).format("YYYY.MM.DD HH:mm:ss")}</td>
                      <td>{v.editDate !== null ? dayjs(v.editDate).format("YYYY.MM.DD HH:mm:ss") : ""}</td>
                      <td>
                        <button type="button" data-id={v.id} onClick={onEditClick}>
                          수정하기
                        </button>
                      </td>
                      <td>
                        <button type="button" data-id={v.id} data-name={v.noticeTitle} onClick={onDeleteClick}>
                          삭제하기
                        </button>
                      </td>
                    </tr>
                  );
                })
              : error && (
                  <tr>
                    <td colSpan="6" align="center">
                      {error.message}
                    </td>
                  </tr>
                )}
          </tbody>
        </Table>
      </GetEditForm>

      {/* 페이지 */}
      {data && pagenation && !error && (
        <PaginationNav>
          <PaginationCustom page={page} pagenation={pagenation} pageQueryPath="/manager/notice" query={query} color="#fff" bgColor="#168" />
        </PaginationNav>
      )}
    </>
  );
});

export default Notice;
