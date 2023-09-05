import React, { memo } from "react";
import { useCallback, Link, Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";

/** 이미지 */
// 공지사항 박스 아이콘
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";

const ApptStatusCont = styled.div`
    .grayboxGuide {

        .pageSubtitle {
            margin: 0 0 5px 0;
        }

        p {
            margin-left: 20px;
        }

        .buttonCont {
            margin-top: 45px;
            padding-bottom: 5px;
        }
    }
`;

/** 리스트 스타일 */
// ul태그
const ListStyleUl = styled.ul`
  margin: 4px 0;

  li {
    padding-left: 12px;
    margin-top: 5px;
    position: relative;

    &:first-child {
      margin-top: 0;
    }

    &::before {
      content: "";
      width: 4px;
      height: 4px;

      position: absolute;
      top: 0.7em;
      left: 0;

      background-color: #0094fb;
    }
  }
`;



const AppointmentStatus = memo(() => {

    const navigate = useNavigate();

    const onApptHistory = () => {
      navigate('/appt_history');
    };

    return (
    <ApptStatusCont>
        {/* 배경 이미지 (GlobalStyles) */}
        <div className="bgAll">
          {/* 페이지 기본 구조 */}
          <div className="pageCont">
            {/* 페이지 타이틀 */}
            <h1 className="pageTitle">예약 현황</h1>
            <section className="boxGuide">
              <img src={boxGuideDecor} alt="boxGuideDecor" />
              <ListStyleUl>
                <li>회원 및 비회원 예약 내역과 일정을 보실 수 있습니다.</li>
                <li>회원이신 경우 로그인하여 MY세브란스에서 더 많은 정보를 확인하실 수 있습니다.</li>
              </ListStyleUl>
            </section>
            <div className="grayboxGuide">
                <h4 className="pageSubtitle">진료 예약 내역</h4>
                <p>전화, 방문, 인터넷 진료 예약 내역을 확인할 수 있습니다.</p>
                <div className="buttonCont">
                    <button type="submit" className="buttonBlue" onClick={onApptHistory}>
                        회원 예약 조회
                    </button>
                    <button type="submit" className="buttonWhite marginleft" onClick={onApptHistory}>
                        비회원 예약 조회
                    </button>
                </div>
            </div>
          </div>
        </div>
    </ApptStatusCont>
    );
});

export default AppointmentStatus;
