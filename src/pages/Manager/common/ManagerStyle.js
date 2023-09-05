/**
 * @ File Name: ManagerStyleConponents.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-09 00:33:33
 * @ Description: 관리자 스타일 컴포넌트
 */

/** import */
import styled from "styled-components";

/** styled */
export const GetEditForm = styled.form`
  overflow-x: scroll;
`;
export const Table = styled.table`
  border-collapse: collapse;
  border-top: 2px solid #168;
  font-size: 14px;
  text-align: center;
  margin: auto;
  width: 100%;

  thead {
    width: 100%;
    tr {
      width: 100%;

      th:first-child {
        width: 1%;
      }
      th:nth-last-child(3) {
        width: 1%;
      }
      th:nth-last-child(2) {
        width: 1%;
      }
      th:last-child {
        width: 1%;
      }
    }
  }

  th {
    color: #168;
    background: #f9f9f9;
    border: 1px solid #ddd;

    &:first-child {
      border-left: 0;
    }

    &:last-child {
      border-right: 0;
    }
  }

  td {
    padding: 5px;
    border: 1px solid #ddd;
    white-space: nowrap;

    &:first-child {
      border-left: 0;
    }

    &:last-child {
      border-right: 0;
    }
  }

  .editTr {
    width: 100%;

    td {
      input {
        width: 100%;
        box-sizing: border-box;
      }
    }
  }

  button {
    width: 100%;
    height: 100%;
    border: 0;
    background-color: #f9f9f9;
  }
`;
export const TableEx = styled(Table)`
  margin-bottom: 10px;

  th {
    min-width: 120px;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .inputWrapper {
    padding: 0;
    position: relative;
    text-align: left;

    .field {
      box-sizing: border-box;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0 10px;
      outline: none;
      font-size: 14px;
    }
  }
`;
export const SearchForm = styled.div`
  form {
    display: flex;
    padding-bottom: 10px;

    input {
      width: 75%;
      height: 35px;
      text-align: center;
      border: 2px solid #168;

      box-sizing: border-box;
      padding: 10px;
      transition: 0.3s;

      &::placeholder {
        text-align: center;
      }

      &:focus {
        outline: none;
      }
    }

    button {
      width: 25%;
      height: 35px;
      display: block;
      font-weight: bold;
      padding: 0;

      background-color: #fff;
      color: #000;
      text-decoration: none;
      border: none;

      transition: 0.3s;
      background-color: #168;
      color: white;
    }
  }
`;
export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

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
export const PaginationNav = styled.nav`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
