/**
 * @ File Name: UnsupportedSlice.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2023-01-05 17:10
 * @ Description: 비급여진료비 안내 페이지 slice
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pending, fulfilled, rejected } from "../helper/ReduxHelper";


// 병원별 비용
export const getPayHos = createAsyncThunk(
  "UnsupportedSlice/getPayHos",
  async (payload, { rejectWithValue }, page) => {
    let result = null;

    try {
      const response = await axios.get(process.env.REACT_APP_UNSUPPORTED_API_PAY_HOS_URL,
        {
          params: {
            pageNo: payload?.pageNo,
            numOfRows: payload?.numOfRows,
            npayKorNm: payload?.keyword
          }
      });
      result = response.data;
    } catch (err) {
      console.error(err);
      result = rejectWithValue(err.response);
    }
    return result;
  }
);

const UnsupportedSlice = createSlice({
  name: "UnsupportedSlice",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  extraReducers: {
    [getPayHos.pending]: pending,
    [getPayHos.fulfilled]: fulfilled,
    [getPayHos.rejected]: rejected,
  }
});

export default UnsupportedSlice.reducer;
