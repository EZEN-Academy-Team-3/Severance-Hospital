/**
 * @ File Name: NoticeSlice.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-11 13:46:00
 * @ Description: 공지사항 슬라이스
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { pending, fulfilled, rejected } from '../helper/ReduxHelperV2';
import { cloneDeep } from 'lodash';

const URL = '/notice';

/** 다중행 데이터 조회를 위한 비동기 함수 */
export const getList = createAsyncThunk(
  'NoticeSlice/getList',
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      const response = await axios.get(URL, {
        params: {
          query: payload?.query || '',
          page: payload?.page || 1,
          rows: payload?.rows || 12,
        },
      });
      result = response.data;
    } catch (err) {
      console.group('NoticeSlice.getList');
      console.error(err);
      console.groupEnd();
      result = rejectWithValue(err.response);
    }
    return result;
  }
);

/** 단일행 데이터 조회를 위한 비동기 함수 */
export const getItem = createAsyncThunk(
  'NoticeSlice/getItem',
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      const response = await axios.get(`${URL}/${payload?.id}`);
      result = response.data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  }
);

/** 데이터 저장을 위한 비동기 함수 */
export const postItem = createAsyncThunk(
  'NoticeSlice/postItem',
  async (payload, { rejectWithValue }) => {
    let result = null;

    const URL = process.env.REACT_APP_API_Notice_LIST;

    try {
      const response = await axios.post(URL, {
        name: payload.name,
      });
      result = response.data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  }
);

/** 데이터 수정을 위한 비동기 함수 */
export const putItem = createAsyncThunk(
  'NoticeSlice/putItem',
  async (payload, { rejectWithValue }) => {
    let result = null;

    //어떤 항목을 수정할지 판별할 id가 필요
    const URL = process.env.REACT_APP_API_Notice_ID.replace(':id', payload.id);

    try {
      const response = await axios.put(URL, {
        dname: payload.dname,
        loc: payload.loc,
      });
      result = response.data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  }
);

/** 데이터 삭제를 위한 비동기 함수 */
export const deleteItem = createAsyncThunk(
  'NoticeSlice/deleteItem',
  async (payload, { rejectWithValue }) => {
    let result = null;

    //어떤 항목을 수정할지 판별할 id가 필요
    const URL = process.env.REACT_APP_API_Notice_ID.replace(':id', payload.id);

    try {
      const response = await axios.delete(URL);
      result = response.data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  }
);

const NoticeSlice = createSlice({
  name: 'NoticeSlice',
  // 이 모듈이 관리하고자하는 상태값들을 명시
  initialState: {
    pagenation: null,
    pnN : null,
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getCurrentData: (state, action) => {
      return state;
    },
  },
  extraReducers: {
    /** 다중행 데이터 조회를 위한 액션 함수 */
    [getList.pending]: pending,
    [getList.fulfilled]:fulfilled,
    [getList.rejected]: rejected,

    /** 단일행 데이터 조회를 위한 액션 함수 */
    [getItem.pending]: pending,
    [getItem.fulfilled]: (state, { payload }) => {
      return {
          data: payload.data,
          pagenation: payload.pagenation,
          pnN: payload.pnN,
          loading: false,
          error: null
      }
  },
    [getItem.rejected]: rejected,

    /** 데이터 저장을 위한 액션 함수 */
    [postItem.pending]: pending,
    [postItem.fulfilled]: (state, { meta, payload }) => {
      //기존의 상태값을 복사한다. (원본이 JSON이므로 깊은 복사를 수행해야한다.)
      const data = cloneDeep(state.data);

      //새로 저장된 결과를 기존 상태값 배열의 맨 뒤에 추가한다.
      data.push(payload);

      return {
        data: data,
        loading: false,
        error: null
      };
    },
    [postItem.rejected]: rejected,

    /** 데이터 수정을 위한 액션 함수 */
    [putItem.pending]: pending,
    [putItem.fulfilled]: (state, { meta, payload }) => {
      //기존의 상태값을 복사한다. (원본이 JSON이므로 깊은 복사를 수행해야한다.)
      const data = cloneDeep(state.data);

      //id값이 일치하는 항목의 배열 인덱스를 찾는다.
      const targetId = data.findIndex((v, i) => v.id === meta.arg.id);

      //해당 인덱스의 원소를 백엔드의 응답 결과로 교체
      data.splice(targetId, 1, payload);

      return {
        data: data,
        loading: false,
        error: null
      };
    },
    [putItem.rejected]: rejected,

    /** 데이터 삭제를 위한 액션 함수 */
    [deleteItem.pending]: pending,
    [deleteItem.fulfilled]: (state, { meta, payload }) => {
      //기존의 상태값을 복사한다. (원본이 JSON이므로 깊은 복사를 수행해야한다.)
      const data = cloneDeep(state.data);

      //id값이 일치하는 항목의 배열 인덱스를 찾는다.
      const targetId = data.findIndex((v, i) => v.id === meta.arg.id);

      //해당 인덱스 원소 삭제
      data.splice(targetId, 1);

      return {
        data: data,
        loading: false,
        error: null
      };
    },
    [deleteItem.rejected]: rejected
  }
});

// 액션함수들 내보내기
export const { getCurrentData } = NoticeSlice.actions;

// 리듀서 객체 내보내기
export default NoticeSlice.reducer;
