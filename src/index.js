/** import */
import React from "react";
import ReactDOM from "react-dom/client";

// App, test
/**/
import App from "./App";
/*/
import App from './Test';
/**/

// 라우터
import { BrowserRouter } from "react-router-dom";

/** redux 구성 */
// provider을 통해 store 구독
import { Provider } from "react-redux";
// 전체 slice를 포함한 store
import store from "./store";

/** Meta, GlobalStyles */
import Meta from "./Meta";
import GlobalStyles from "./GlobalStyles";

/** 페이지 이동 및 새로고침 시 스크롤 최상단 이동 */
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // store 속성 명시
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <Meta />
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </Provider>
);
