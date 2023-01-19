/**
 * @ File Name: UserInfoSlice.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2023-01-05 17:10
 * @ Description: 회원정보 slice
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { pending, fulfilled, rejected } from '../helper/ReduxHelper';

const URL = "/userinfo";

export const getList = createAsyncThunk('UserInfoSlice/getList', async (payload, { rejectWithValue }) => {
    let result = null;
    let params = null;

    try {
        const response = await axios.get(URL, {
            params: {
                userId: payload?.userId,
                userPassword: payload?.userPassword,
                userName: payload?.userName,
                userSex: payload?.userSex,
                userTel: payload?.userTel,
                userPreTel: payload?.userPreTel,
                userEmail: payload?.userEmail,
                prtctorName: payload?.prtctorName,
                prtctorSex: payload?.prtctorSex,
                prtctorBirth: payload?.prtctorBirth,
                regDate: payload?.regDate,
                userCategory: payload?.userCategory,
                withdrawalStatus: payload?.withdrawalStatus,
                withdrawalDate: payload?.withdrawalDate,
                withdrawalReason: payload?.withdrawalReason,
                editDate: payload?.editDate,
                pwEditDate: payload?.pwEditDate,
                authCode: payload?.authCode,
                termsAgree: payload?.termsAgree,
                privateAgree: payload?.privateAgree,
                marketingAgree: payload?.marketingAgree
            }
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 단일행 데이터 조회를 위한 비동기 함수 */
export const getItem = createAsyncThunk('UserInfoSlice/getItem', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(`${URL}/:id`);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 데이터 저장을 위한 비동기 함수 */
export const postItem = createAsyncThunk('UserInfoSlice/postItem', async (payload, { rejectWithValue }) => {
    let result = null;
    const params = null;

    try {
        const response = await axios.post(URL, {
            params: {
                userId: payload?.userId,
                userPassword: payload?.userPassword,
                userName: payload?.userName,
                userSex: payload?.userSex,
                userTel: payload?.userTel,
                userPreTel: payload?.userPreTel,
                userEmail: payload?.userEmail,
                prtctorName: payload?.prtctorName,
                prtctorSex: payload?.prtctorSex,
                prtctorBirth: payload?.prtctorBirth,
                regDate: payload?.regDate,
                userCategory: payload?.userCategory,
                withdrawalStatus: payload?.withdrawalStatus,
                withdrawalDate: payload?.withdrawalDate,
                withdrawalReason: payload?.withdrawalReason,
                editDate: payload?.editDate,
                pwEditDate: payload?.pwEditDate,
                authCode: payload?.authCode,
                termsAgree: payload?.termsAgree,
                privateAgree: payload?.privateAgree,
                marketingAgree: payload?.marketingAgree
            }
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 데이터 수정을 위한 비동기 함수 */
export const putItem = createAsyncThunk('UserInfoSlice/putItem', async (payload, { rejectWithValue }) => {
    let result = null;
    const params = null;

    try {
        const response = await axios.put(`${URL}/:id`, {
            params: {
                userId: payload?.userId,
                userPassword: payload?.userPassword,
                userName: payload?.userName,
                userSex: payload?.userSex,
                userTel: payload?.userTel,
                userPreTel: payload?.userPreTel,
                userEmail: payload?.userEmail,
                prtctorName: payload?.prtctorName,
                prtctorSex: payload?.prtctorSex,
                prtctorBirth: payload?.prtctorBirth,
                regDate: payload?.regDate,
                userCategory: payload?.userCategory,
                withdrawalStatus: payload?.withdrawalStatus,
                withdrawalDate: payload?.withdrawalDate,
                withdrawalReason: payload?.withdrawalReason,
                editDate: payload?.editDate,
                pwEditDate: payload?.pwEditDate,
                authCode: payload?.authCode,
                termsAgree: payload?.termsAgree,
                privateAgree: payload?.privateAgree,
                marketingAgree: payload?.marketingAgree
            }
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 데이터 삭제를 위한 비동기 함수 */
export const deleteItem = createAsyncThunk('UserInfoSlice/deleteItem', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.delete(`${URL}/:id`);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});


const UserInfoSlice = createSlice({
    name: "UserInfoSlice",
    initialState: {
        data: null,
        pagenation: null,
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
        [getList.fulfilled]: fulfilled,
        [getList.rejected]: rejected,

        /** 단일행 데이터 조회를 위한 액션 함수 */
        [getItem.pending]: pending,
        [getItem.fulfilled]: fulfilled,
        [getItem.rejected]: rejected,

        /** 데이터 저장을 위한 액션 함수 */
        [postItem.pending]: pending,
        [postItem.fulfilled]: fulfilled,
        [postItem.rejected]: rejected,

        /** 데이터 수정을 위한 액션 함수 */
        [putItem.pending]: pending,
        [putItem.fulfilled]: fulfilled,
        [putItem.rejected]: rejected,

        /** 데이터 삭제 위한 액션 함수 */
        [deleteItem.pending]: pending,
        [deleteItem.fulfilled]: fulfilled,
        [deleteItem.rejected]: rejected,
    },
});

export const { getCurrentData } = UserInfoSlice.actions;
export default UserInfoSlice.reducer;