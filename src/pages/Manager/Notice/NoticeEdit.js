/**
 * @ File Name: NoticeEdit.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-13 00:33:33
 * @ Description: 관리자 공지사항 수정
 */

/** import */
// react
import React, { memo, useCallback, useEffect, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getList, postItem, putItem, deleteItem, getItem } from "../../../slices/NoticeSlice";
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
import { Link, useNavigate, useParams } from "react-router-dom";

const NoticeEdit = memo(() => {
  /** 수정 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성 */
  const navigate = useNavigate();

  /** path 파라미터 받기 */
  const { id } = useParams();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { pagenation, data, loading, error } = useSelector((state) => state.NoticeSlice);

  /** 최초마운트 시 또는 id값이 변경된 경우, 리덕스를 통해 해당 id의 데이터를 조회 */
  useEffect(() => {
    dispatch(getItem({ id: id }));
  }, [id]);

  /** 수정 */
  const onEditSubmit = useCallback((e) => {
    e.preventDefault();

    const current = e.currentTarget;
    const regexHelper = RegexHelper.getInstance();

    // 입력값에 대한 유효성 검사
    try {
      regexHelper.value(current.noticeTitle, "공지사항 제목이 없습니다.");
      regexHelper.value(current.noticeContent, "공지사항 내용이 없습니다.");
    } catch (e) {
      window.alert(e.message);
      console.error(e);
      e.selector.focus();
      return;
    }

    // 리덕스를 통한 데이터 수정 요청
    dispatch(
      putItem({
        id: current.id.value,
        noticeTitle: current.noticeTitle.value,
        noticeContent: current.noticeContent.value
      })
    ).then(({ payload, error }) => {
      if (error) {
        window.alert(payload.data.rtmsg);
        return;
      }

      alert("수정되었습니다.");

      navigate(`manager/notice/view/${payload.data.id}`);
    });
  });

  return (
    <>
      {/* 로딩 */}
      <Spinner loading={loading} />

      {/* 조회, 수정 */}
      {!error && data ? (
        <GetEditForm onSubmit={onEditSubmit}>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>제목</th>
                <th>내용</th>
                <th>조회수</th>
                <th>등록일시</th>
                <th>변경일시</th>
                <th colSpan="2">수정 / 삭제</th>
              </tr>
            </thead>
            <tbody>
              <tr key={data.id} data-id={data.id} className="editTr">
                <td style={{ display: "none" }}>
                  <input type="hidden" name="id" defaultdataalue={data.id} />
                </td>
                <td>{data.id}</td>
                <td>
                  <input type="text" name="noticeTitle" defaultValue={data.noticeTitle} />
                </td>
                <td>
                  <input type="text" name="noticeContent" defaultValue={data.noticeContent} />
                </td>
                <td>{dayjs(data.regDate).format("YYYY.MM.DD HH:mm:ss")}</td>
                <td>{data.editDate !== null ? dayjs(data.editDate).format("YYYY.MM.DD HH:mm:ss") : ""}</td>
                <td colSpan="2">
                  <button type="submit">수정완료</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </GetEditForm>
      ) : (
        <tr>
          <td colSpan="6" align="center">
            {error.message}
          </td>
        </tr>
      )}
    </>
  );
});

export default NoticeEdit;
