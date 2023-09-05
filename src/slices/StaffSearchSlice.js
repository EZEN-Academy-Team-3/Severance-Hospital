import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { pending, fulfilled, rejected } from '../assets/helper/Reduxhelper';
import { cloneDeep } from 'lodash';


export const getStaffList = createAsyncThunk('StaffSearchSlice/getStaffList', async (payload, { rejectWithValue }) => {
    let result = null;

    const API_URL = process.env.REACT_APP_API_STAFF_LIST;

    // 검색어를 {keyword: 검색어값} 형태로 전달하면 payload객체를 통해 넘어온다.
    // --> payload.keyword
    // 여기서는 그 값을 검색어로 활용
    let params = null;

    // payload객체가 null이나 undefined가 아니고, 그 안의 keyword값이 존재한다면?
    if(payload.keyword) {
        params = {
            name: payload.keyword
        }
    }

    try {
        const response = await axios.get(API_URL, {
            params: params
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 단일행 데이터 조회를 위한 비동기 함수 */
export const getItem = createAsyncThunk("StaffSearchSlice/getItem", async (payload, { rejectWithValue }) => {
    let result = null;

    // 환경설정 파일에 정의된 URL에서 ':id'부분을 찾아 payload를 통해 전달된 일련번호로 치환
    const API_URL = process.env.REACT_APP_API_STAFF_ITEM.replace(':id', payload.id);

    try {
        const response = await axios.get(API_URL);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const StaffSearchSlice = createSlice({
    name: 'StaffSearchSlice',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        /** 다중행 데이터 조회를 위한 액션 함수 */
        // 로딩중임을 표시
        [getStaffList.pending]: pending,
        // 처리가 완료된 경우 - 미들웨어 함수가 정상적으로 리턴한 경우
        [getStaffList.fulfilled]: fulfilled,
        // 처리에 실패한 경우 - 미들웨어 함수 안에서 예외가 발생하여 catch블록이 실행된 경우
        [getStaffList.rejected]: rejected,

        
        /** 단일행 데이터 조회를 위한 액션 함수 */
        [getItem.pending]: pending,
        [getItem.fulfilled]: (state, { meta, payload }) => {
            return {
                // 전체적으로 데이터가 배열이지만, 단일행 조회의 경우 단건의 데이터만 응답결과로 수신되므로,
                // 배열로 묶어서 처리한다.
                data: [payload],
                loading: false,
                error: null
            }
        },
        [getItem.rejected]: rejected,
    },
});

export default StaffSearchSlice.reducer;