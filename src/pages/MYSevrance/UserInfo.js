/**
 * @ File Name: UserInfo.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-23 13:15
 * @ Description: 회원정보 페이지 라우팅
 */

/** import */
import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

import DetailsEdit from "./DetailsEdit";
import ChangePassword from "./ChangePassword";
import Withdraw from "./Withdraw";
import ResultInquiry from "./ResultInquiry";
import Result from "./Result";

const UserInfo = memo(() => {
  return (
    <>
      <Routes>
        <Route path="/details_edit" element={<DetailsEdit />} />
        <Route path="/change_password" element={<ChangePassword />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/resultinquiry" element={<ResultInquiry />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
});

export default UserInfo;
