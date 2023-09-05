import React, { memo } from "react";
import { Link, NavLink, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Footer from "../../components/Footer";
import StaffView from "./StaffView";
import BoardNews from "./BoardNews";

import staffsample from "../../assets/img/staff-sample.png";
import staffsampleBg from "../../assets/img/staff-sample-bg.png";
import sevLogo from "../../assets/img/sev_logo@2x.png";

import searchIcon from "../../assets/img/ico-search-white.png";

const FirsDiv = styled.div`
  width: 100%;
  position: absolute;
  // 배경이미지
  background: url(${staffsampleBg}) no-repeat;
`;

const ProfileContainer = styled.div`
  margin: auto;
  max-width: 1280px;
  position: relative;
  bottom: 660px;
  .proheader {
    display: flex;
    justify-content: space-between;

    h1 {
      .sevLogo {
        width: 231px;
        height: 40px;
        object-fit: cover;
      }
    }

    button {
      display: flex;

      color: #fff;
      background-color: rgba(0, 0, 0, 0.4);
      min-width: 100px;
      height: 50px;
      padding: 14px 28px 0 28px;
      font-size: 18px;
      border-radius: 25px;
      border: none;

      i {
        margin-left: 10px;
        width: 22px;
        height: 26px;
        background: url(${searchIcon}) no-repeat;
      }
    }
  }
`;

const Profile = styled.div`
  padding-bottom: 90px;

  h3 {
    font-size: 24px;
    font-weight: bold;
  }

  img {
    position: absolute;
    z-index: -100;
  }

  .title {
    margin: 53px 0 13px;
    line-height: 1;
  }

  .btn {
    width: 100%;
    background-color: #0094fb;
    min-width: 100px;
    height: 50px;
    text-align: center;
    margin-top: 30px;

    a {
      display: block;
      font-size: 18px;
      color: #fff;
      padding: 10px 28px;
    }
  }
`;

const ProfileView = styled.div`
  /* top: 90px; */
  width: 590px;
  height: 580px;
  padding: 30px 30px 0 30px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ProfileName = styled.div`
  h2 {
    font-size: 1.5em;
    font-weight: bold;
    line-height: 1;
    height: 161px;
    margin-left: -2px;
    font-size: 55px;
    max-width: 100%;
    line-height: 66px;

    span {
      font-size: 20px;
      font-weight: normal;
      max-width: 100%;
      max-height: 20px;
      line-height: 20px;
    }
  }
`;

const ProfileTable = styled.div`
  border-top: 2px solid #aaa;
  border-bottom: 1px solid #aaa;
  font-size: 15px;

  th {
    border-bottom: 1px solid #aaa;
    padding: 10px;
  }
  td {
    border-bottom: 1px solid #aaa;
    padding: 0 32.5px 0 32.5px;
  }
  tr {
  }
`;

const StaffProfile = memo(() => {
  return (
    <FirsDiv>
      {/* 의료진 사진 */}
      <img src={staffsample} alt="의료진 사진"></img>
      <ProfileContainer>
        <div className="proheader">
          <h1>
            <Link to="/">
              <img src={sevLogo} alt="header_logo" className="sevLogo" />
            </Link>
          </h1>
          <Link to="/staff">
            <button type="button" class="">
              <span class="">의료진</span>
              <i></i>
            </button>
          </Link>
        </div>
        <Profile>
          <ProfileView>
            <ProfileName>
              <h2>
                {/* 여기에도 받아온 데이터가 들어가야 함 (props로?) */}
                <strong>강희철</strong>
                <br />
                <span>가정의학과</span>
              </h2>
            </ProfileName>
            <h3>진료분야</h3>
            <p>
              {/* 여기에도 받아온 데이터가 들어가야 함 (props로?) */}
              피로, 건강증진, 평생건강관리, 약물남용, 다발성복합증상
            </p>

            <h3 class="title">진료시간표</h3>
            <ProfileTable>
              <div>
                <table>
                  <colgroup>
                    <col></col>
                    <col span="7"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">진료시간</th>
                      <th scope="col">월</th>
                      <th scope="col">화</th>
                      <th scope="col">수</th>
                      <th scope="col">목</th>
                      <th scope="col">금</th>
                      <th scope="col">토</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">오전</th>
                      {/* td span에는 받아온 데이터가 들어가야 한다 */}
                      {/* 반복문으로 작성하는 게 나을듯 */}
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span>본관</span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span>본관</span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">오후</th>
                      <td>
                        <span>본관</span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span>본관</span>
                      </td>
                      <td>
                        <span>본관</span>
                      </td>

                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ProfileTable>

            <div class="btn">
              <a href="/apptSelect">예약하기</a>
            </div>
          </ProfileView>
        </Profile>

        {/* navbar */}
        <nav className="tabMenu">
          <NavLink to="staff_view">소개</NavLink>
          <NavLink to="board_news">언론보도</NavLink>
        </nav>

        <Routes>
          <Route path="staff_view" element={<StaffView />} />
          <Route path="board_news" element={<BoardNews />} />
        </Routes>
        <Footer />
      </ProfileContainer>
    </FirsDiv>
  );
});

export default StaffProfile;
