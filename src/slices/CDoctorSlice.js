/**
 * @ File Name: CDoctorSlice.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-05 00:33:33
 * @ Description: 협력의사 슬라이스
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pending, fulfilled, rejected } from "../helper/ReduxHelperV2";
import { cloneDeep } from "lodash";

/** 다중행 데이터 조회를 위한 비동기 함수 */
export const getList = createAsyncThunk("CDoctorSlice/getList", async (payload, { rejectWithValue }) => {
  let result = null;
  const URL = process.env.REACT_APP_API_COOPERATION_DOCTOR_LIST;

  try {
    const response = await axios.get(URL, {
      params: {
        query: payload?.query || "",
        areaQuery: payload?.areaQuery || "",
        division: payload?.division || "",
        page: payload?.page || 1,
        rows: payload?.rows || 10
      }
    });
    result = response.data;
  } catch (err) {
    console.group("CDoctorSlice.getList");
    console.error(err);
    console.groupEnd();
    result = rejectWithValue(err.response);
  }
  return result;
});

/** 단일행 데이터 조회를 위한 비동기 함수 */
export const getItem = createAsyncThunk("CDoctorSlice/getitem", async (payload, { rejectWithValue }) => {
  let result = null;

  //환경설정 파일에 정의된 URL에서 ':id' 부분을 찾아 payload를 통해 전달된 일련번호로 치환
  //어떤 항목을 수정할지 판별할 id가 필요
  const URL = process.env.REACT_APP_API_COOPERATION_DOCTOR_ID.replace(":id", payload.id);

  try {
    const response = await axios.get(URL);
    result = response.data;
  } catch (err) {
    result = rejectWithValue(err.response);
  }
  return result;
});

/** 데이터 저장을 위한 비동기 함수 */
export const postItem = createAsyncThunk("CDoctorSlice/postItem", async (payload, { rejectWithValue }) => {
  let result = null;

  const URL = process.env.REACT_APP_API_COOPERATION_DOCTOR_LIST;

  try {
    const response = await axios.post(URL, {
      doctorName: payload.doctorName,
      hospitalClinicName: payload.hospitalClinicName
    });
    result = response.data;
  } catch (err) {
    result = rejectWithValue(err.response);
  }
  return result;
});

/** 데이터 수정을 위한 비동기 함수 */
export const putItem = createAsyncThunk("CDoctorSlice/putItem", async (payload, { rejectWithValue }) => {
  let result = null;

  //어떤 항목을 수정할지 판별할 id가 필요
  const URL = process.env.REACT_APP_API_COOPERATION_DOCTOR_ID.replace(":id", payload.id);

  try {
    const response = await axios.put(URL, {
      doctorName: payload.doctorName,
      hospitalClinicName: payload.hospitalClinicName
    });
    result = response.data;
  } catch (err) {
    result = rejectWithValue(err.response);
  }
  return result;
});

/** 데이터 삭제를 위한 비동기 함수 */
export const deleteItem = createAsyncThunk("CDoctorSlice/deleteItem", async (payload, { rejectWithValue }) => {
  let result = null;

  //어떤 항목을 수정할지 판별할 id가 필요
  const URL = process.env.REACT_APP_API_COOPERATION_DOCTOR_ID.replace(":id", payload.id);

  try {
    const response = await axios.delete(URL);
    result = response.data;
  } catch (err) {
    result = rejectWithValue(err.response);
  }
  return result;
});

const CDoctorSlice = createSlice({
  name: "CDoctorSlice",
  // 이 모듈이 관리하고자하는 상태값들을 명시
  initialState: {
    areaCount: null,
    pagenation: null,
    data: null,
    loading: false,
    error: null
  },
  reducers: {
    getCurrentData: (state, action) => {
      return state;
    }
  },
  extraReducers: {
    /** 다중행 데이터 조회를 위한 액션 함수 */
    [getList.pending]: pending,
    [getList.fulfilled]: (state, { meta, payload }) => {
      return {
        areaCount: payload.areaCount,
        data: payload.data,
        pagenation: payload.pagenation,
        loading: false,
        error: null
      };
    },
    [getList.rejected]: rejected,

    /** 단일행 데이터 조회를 위한 액션 함수 */
    [getItem.pending]: pending,
    [getItem.fulfilled]: (state, { meta, payload }) => {
      return {
        data: payload.data,
        loading: false,
        error: null
      };
    },
    [getItem.rejected]: rejected,

    /** 데이터 저장을 위한 액션 함수 */
    [postItem.pending]: pending,
    [postItem.fulfilled]: (state, { meta, payload }) => {
      //기존의 상태값을 복사한다. (원본이 JSON이므로 깊은 복사를 수행해야한다.)
      const data = cloneDeep(state.data);

      //새로 저장된 결과를 기존 상태값 배열의 맨 뒤에 추가한다.
      data.push(payload.data);

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
      data.splice(targetId, 1, payload.data);

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
export const { getCurrentData } = CDoctorSlice.actions;

// 리듀서 객체 내보내기
export default CDoctorSlice.reducer;
