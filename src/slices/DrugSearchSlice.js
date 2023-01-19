/**
 * @ File Name: DrugSearchSlice.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-17 16:05:00
 * @ Description: 의약품 검색 페이지 slice
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { pending, fulfilled, rejected } from '../helper/ReduxHelperV2';
import { cloneDeep } from 'lodash';

const URL = '/drug';

/** 의약품 낱알식별 - tab-shape 다중행조회 */
export const getList = createAsyncThunk(
  'DrugSearchSlice/getList',async (payload, { rejectWithValue }) => {
    
    let result = null;

    try {
      const response = await axios.get(URL, {
        params: {
          query: payload?.query || '',
          shape: payload?.shape || '',
          color: payload?.color || '',
          trapezoid: payload?.trapezoid || '',
          line: payload?.line || '',
          page: payload?.page || 1,
          rows: payload?.rows || 12,
        },
      });
      // console.log('낱알식별 payload: ',payload);
      result = response.data;
    } catch (err) {
        console.group('DrugSearchSlice.getList');
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err.response);
    }
    return result;
  }
);

/** 의약품 낱알식별 - tab-shape 다중행조회 */
export const getItem = createAsyncThunk(
  'DrugSearchSlice/getItem',
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      const response = await axios.get(`${URL}/${payload?.id}`);
      console.log('의약품낱알식별');
      result = response.data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  }
);

/** e약은요 openAPI - tab-info*/
export const getDrug_info = createAsyncThunk(
  'DrugSearchSlice/getDrug_info',
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      const response = await axios.get(process.env.REACT_APP_DRUG_API_URL, {
        params: {
          serviceKey:
            process.env.REACT_APP_DRUG_API_DECODING_KEY ||
            process.env.REACT_APP_DRUG_API_ENCODING_KEY,
          type: 'json', //데이터포맷
          pageNo: payload?.pageNo, //페이지번호
          numOfRows: 12, //한 페이지 결과 수
          itemSeq: payload?.itemSeq,
          itemName: payload?.itemName,
        },
      });
      result = response.data.body;
      // console.log('e약은요 result: ',response.data.body);
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  }
);


/** slice 정의 */
const DrugSearchSlice = createSlice({
  name: 'DrugSearchSlice',
  //이 모듈이 관리하는 상태값
  initialState: {
    pagenation: null,
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
    /** tab-Shape 다중행 조회를 위한 액션 함수 */
    [getList.pending]: pending,
    [getList.fulfilled]: fulfilled,
    [getList.rejected]: rejected,

    /** tab-Shape 단일행 데이터 조회를 위한 액션 함수 */
    [getItem.pending]: pending,
    [getItem.fulfilled]:(state, { meta, payload }) => {
      return {
        data: payload.data,
        loading: false,
        error: null
      };
    },
    /** e약은요 액션함수 */
    [getDrug_info.pending]:pending,
    [getDrug_info.fulfilled]: (state, { payload }) => {
      if (payload.pageNo > 1) {
        payload.items = state.data.items.concat(payload.items);
      }
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },
    [getDrug_info.rejected]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : 'Server Error',
        },
      };
    },
  },
});

export const { getCurrentData } = DrugSearchSlice.actions;
export default DrugSearchSlice.reducer;
