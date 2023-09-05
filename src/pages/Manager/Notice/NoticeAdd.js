/**
 * @ File Name: NoticeAdd.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-13 00:33:33
 * @ Description: 관리자 공지사항 추가
 */

/** import */
// react
import React, { memo, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
// import { GetEditForm, Table, TableEx, SearchForm, AddForm, PaginationNav } from "../common/ManagerStyle";
import PaginationCustom from "../common/PaginationCustom";
import TableSearch from "../common/TableSearch";
import styled from "styled-components";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

/** styled */
const Table = styled.table`
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;

  thead {
    width: 100%;
    height: 35px;

    font-weight: bold;
    line-height: 35px;

    color: #f9f9f9;
    background: #168;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    box-sizing: border-box;
    white-space: nowrap;
  }

  tbody {
    th {
      color: #168;
      background: #f9f9f9;
      border: 1px solid #ddd;
      padding: 0 10px;
      box-sizing: border-box;
    }

    td {
      padding: 5px;
      border-bottom: 1px solid #ddd;
      white-space: nowrap;

      .field {
        width: 100%;
        height: 100%;

        display: block;
        font-size: 24px;
        font-weight: bold;

        border: 1px solid #ddd;
        padding: 12.5px 8.4px;
        box-sizing: border-box;

        outline: none;
      }
    }
  }
`;

const AddForm = styled.form`
  width: 100%;

  button {
    width: 100%;
    height: 35px;
    display: block;
    font-weight: bold;
    color: #168;

    padding: 0;
    margin-bottom: 10px;

    background-color: #fff;
    text-decoration: none;
    border: 1px solid #ccc;

    transition: 0.3s;

    &:hover {
      background-color: #168;
      color: white;
      border: none;
    }
  }
`;

const NoticeAdd = memo(() => {
  /** 저장 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성 */
  const navigate = useNavigate();

  const [board_content, setBoard_cotent] = useState();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.NoticeSlice);

  /** 추가 */
  const onAddSubmit = useCallback((e) => {
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

    // 리덕스를 통한 데이터 저장 요청
    dispatch(
      postItem({
        noticeTitle: current.noticeTitle.value,
        noticeContent: current.noticeContent.value
      })
    ).then(({ payload, error }) => {
      if (error) {
        window.alert(payload.data.rtmsg);
        return;
      }

      alert("추가되었습니다.");
      navigate(`manager/notice/view/${payload.data.id}`);
    });
  });

  return (
    <>
      {/* 로딩 */}
      <Spinner loading={loading} />

      {/* 추가 */}
      <AddForm onSubmit={onAddSubmit}>
        <Table>
          <thead>
            <tr>
              <th>추가</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>제목</th>
            </tr>
            <tr>
              <td>
                <input className="field" type="text" name="noticeTitle" placeholder="제목을 입력하세요." />
              </td>
            </tr>
            <tr>
              <th>내용</th>
            </tr>
            <tr>
              <td>
                <CKEditor
                  editor={ClassicEditor}
                  // data="<p>Hello from CKEditor 5!</p>"
                  config={{
                    placeholder: "내용을 입력하세요."
                  }}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  // onChange={(event, editor) => {
                  //     const data = editor.getData();
                  //     console.log({ event, editor, data });
                  //     setBoard_cotent({
                  //       ...board_content,
                  //       board_content: data
                  //     })
                  //   }}
                  // onBlur={(event, editor) => {
                  //   console.log("Blur.", editor);
                  // }}
                  // onFocus={(event, editor) => {
                  //   console.log("Focus.", editor);
                  // }}
                />
                {/* <input className="field" type="text" name="noticeTitle" /> */}
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <th>조회수 추가일시 수정일시</th>
              {/* 이거 필요없음 */}
            </tr>
          </tfoot>
        </Table>

        <button type="submit">저장</button>
      </AddForm>
    </>
  );
});

export default NoticeAdd;
