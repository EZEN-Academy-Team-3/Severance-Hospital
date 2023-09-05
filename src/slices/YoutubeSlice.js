/**
 * @ File Name: YoutubeSlice.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-06
 * @ Description: newshome sns영역 들어갈 youtube Slice
 */

 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
 import axios from 'axios';
 
 /** 비동기 처리 함수 구현 */
 export const getYoutube = createAsyncThunk("YoutubeSlice/getYoutube", async (payload, { rejectWithValue }) => {
     let result = null;
 
     try {
         const response = await axios.get(process.env.REACT_APP_YOUTUBE_API_URL,{
             params: {
                 key: process.env.REACT_APP_YOUTUBE_API_KEY,
                 part: 'snippet', 
                 type: 'video',
                 channelId: 'UCIqNAJC8l8rCAXOZPyfyG0Q', //세브란스병원 채널 id
                 order: 'date', //최신순으로 정렬
                 maxResults: 10 //가져올 수
             }
         });
         result = response.data.items;
     } catch (err) {
         result = rejectWithValue(err.response);
     }
     return result;
 });
 
 
 /** slice 정의 */
 const YoutubeSlice = createSlice({
     name: 'YoutubeSlice',
     //이 모듈이 관리하는 상태값
     initialState: {
         data: null, //Ajax처리를 통해 수신된 데이터
         loading: false, //로딩여부
         error: null //에러정보
     },
     // 외부 action 및 비동기 action (Ajax용)
     extraReducers: {
         [getYoutube.pending]: (state, { payload }) => {
             return { ...state, loading: true }
         },
         [getYoutube.fulfilled]: (state, { payload }) => {
             return {
                 data: payload,
                 loading: false,
                 error: null
             }
         },
         [getYoutube.rejected]: (state, { payload }) => {
             return {
                 ...state,
                 loading: false,
                 error: {
                     code: payload?.status ? payload.status : 500,
                     message: payload?.statusText ? payload.statusText : 'Server Error'
                 }
             }
         }
     }
 })
 
 export default YoutubeSlice.reducer;