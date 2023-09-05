import React, { memo, useCallback, useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

import MyPageHeader from "../../components/MyPageHeader";
import LoginFooter from "../../components/LoginFooter";
import styled from "styled-components";


/** 이미지 */
// 공지사항 박스 아이콘
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";
// 1층 ~ 20층
import sev20 from "../../assets/img/sev-20.jpg";
import sev19 from "../../assets/img/sev-19.jpg";
import sev18 from "../../assets/img/sev-18.jpg";
import sev17 from "../../assets/img/sev-17.jpg";
import sev16 from "../../assets/img/sev-16.jpg";
import sev15 from "../../assets/img/sev-15.jpg";
import sev14 from "../../assets/img/sev-14.jpg";
import sev13 from "../../assets/img/sev-13.jpg";
import sev12 from "../../assets/img/sev-12.jpg";
import sev11 from "../../assets/img/sev-11.jpg";
import sev10 from "../../assets/img/sev-10.jpg";
import sev9 from "../../assets/img/sev-09.jpg";
import sev8 from "../../assets/img/sev-08.jpg";
import sev7 from "../../assets/img/sev-07.jpg";
import sev6 from "../../assets/img/sev-06_210303.jpg";
import sev5 from "../../assets/img/sev-05_210303.jpg";
import sev4 from "../../assets/img/sev-04_210303.jpg";
import sev3 from "../../assets/img/sev-03_210303.jpg";
import sev2 from "../../assets/img/sev-02_210303.jpg";
import sev1 from "../../assets/img/sev-01_210303.jpg";

const ApptStatusCont = styled.div`
    .pageCont {
        padding-bottom: 0px;

        .pageSubtitle {
            margin: 47px 0 22px 18px;
        }

        .buttonCont {
            margin-top: 60px;
            padding-bottom: 0px;
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

const ButtonCont = styled.div`
    text-align: right;

        button:nth-of-type(1) {
            color: #0094fb;
            border-color: #0094fb;
            background-color: #fff;
            border: 1px solid;
            height: 45px;
            padding: 0 24px;
            font-size: 16px;
            border-radius: 3px;
        }

        button:nth-of-type(2) {
            margin-left: 6px;
            color: #333;
            border-color: #959595;
            background-color: #fff;
            border: 1px solid;
            height: 45px;
            padding: 0 24px;
            font-size: 16px;
            border-radius: 3px;
        }
        .popUp {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;

            .alert {
                
            }

            .confirmBtnCont {
                margin-left: 60px;
                .confirmBtn {
                    border-radius: 3px;
                    background-color: #0094fb;
                    color: white;
                }
            }

            .closeBtnCont {
                padding-top: 0px;
                margin-right: 60px;
                .closeBtn {
                    width: 82px;
                    height: 44px;
                    background-color: #666;
                    color: #fff;
        
                }
            }
        }
`;

/** 들여쓰기 스타일 */
// 들여쓰기1
const Indent1 = styled.div`
  margin-left: 18px;
`;

// 가로 테이블
const RowTableStyle = styled.div`
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  box-sizing: border-box;

  table {
    width: 100%;
    overflow: hidden;

    th {
      width: 200px;
      height: 50px;
      padding: 13px 20px;
      vertical-align: middle;

      font-weight: bold;
      background-color: #f9f9f9;

      border-left: 1px solid #ebebeb;
      border-right: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
      box-sizing: border-box;

      &:first-child {
        border-left: 0;
      }
    }

    tr {
      border-bottom: 1px solid #ebebeb;
      text-align: left;
        
      &:last-child {
        border-bottom: 0;
      }
    }

    td {
      width: 1061;
      height: 50px;
      vertical-align: middle;

      padding: 13px 20px;
      box-sizing: border-box;

      &:last-child {
        border-right: 0;
      }
    }
  }
`;

const ImgBox = styled.div`
    img {
        margin: auto;
    }
`;

const ApptDetail = memo(() => {

    // /** 리덕스 관련 초기화 */
    // const dispatch = useDispatch();
    // const { data, loading, error } = useSelector((state) => state.슬라이스이름);
    // console.log(data);

    // /** 최초 마운트시 리덕스를 통해 목록을 조회한다. */
    // // 화면 새로고침에 대한 상태값이 변경된다면 데이터를 새로 로드함
    // useEffect(() => {
    //     dispatch(
    //         데이터조회함수({
    //             params: params,
    //         })
    //     );
    // }, []);

    const navigate = useNavigate();

    const onApptReturn = () => {
      navigate('/appt_history');
    };

    // 예약변경 버튼 클릭 이벤트: 모달창 띄움
    const onApptChange = () => {

    };

    // 예약취소 버튼 클릭 이벤트: 모달창 띄움
    const onApptCancel = () => {
        document.querySelector('.popUpCont').style.display = 'block';
    };

    /** 닫기버튼 눌렸을 때 */
    const closeClick = useCallback((e) => {
        e.preventDefault();

        document.querySelector('.popUpCont').style.display = 'none';
    })

    /** 예약취소팝업 확인버튼 눌렸을 때 */
    const onClickConfirm = useCallback((e) => {
        e.preventDefault();

        /** 진료예약현황데이터 취소로 바꾸는 이벤트 */

        


        document.querySelector('.popUpCont').style.display = 'none';
    })
    


    

    /** 층수 뽑기? 어떻게 해야할까 */
    // 각 층 이미지를 모아놓은 배열
    const floorArr = [
        sev1, sev2, sev3, sev4, sev5, sev6, sev7, sev8, sev9, sev10, sev11, sev12, sev13, sev14, sev15, sev16, sev17, sev18, sev19, sev20,
    ];

    /* 데이터 통해서 층수 숫자 뽑아내는 수식 필요할까? 어떻게 해야할까? 너무 생각이 많은가?
    데이터 테이블에 장소+층수도 들어가야하나?
    */

    // 뽑아낸 수가 문자면 숫자로 변경
    const floorNum = parseInt("4");

    // 층수 
    const floor = floorArr[floorNum];
    



    return (
    <ApptStatusCont>
    <MyPageHeader />
        {/* 배경 이미지 (GlobalStyles) */}
        <div className="bgAll">
            {/* 페이지 기본 구조 */}
            <div className="pageCont">
                {/* 페이지 타이틀 */}
                <h1 className="pageTitle">진료예약내역</h1>
                <section className="boxGuide">
                <img src={boxGuideDecor} alt="boxGuideDecor" />
                <ListStyleUl>
                    <li>인터넷으로 본인이 직접 진료예약을 하셨거나, 진료비 수납이 안된 경우, 예약변경 및 취소가 가능합니다.</li>
                    <li>대리 예약 신청된 경우 간편예약 신청을 통해 예약 변경 또는 취소하시기 바랍니다.</li>
                </ListStyleUl>
                </section>

                <ButtonCont>
                    <button type="button" onClick={onApptChange}>예약변경</button>
                    <button type="button" onClick={onApptCancel}>예약취소</button>


                    <div className="popUpCont">
                        <div className="dimed"></div>
                        <div className="popUp">
                            <div className='alert'>정말로 진료예약을 취소하시겠습니까?</div>
                            <div className="confirmBtnCont">
                                <button type="button" className='confirmBtn' onClick={onClickConfirm}>확인</button>
                            </div>
                            <div className='closeBtnCont'>
                                <button type="button" className='closeBtn' onClick={closeClick}>취소</button>
                            </div>
                        </div>
                    </div>
                   
                </ButtonCont>

                {/* 예약자 데이터 받아와야 함 */}
                <h4 className="pageSubtitle">예약자 정보</h4>
                <Indent1>
                <RowTableStyle>
                    <table>
                    <tbody>
                        <tr>
                            <th>예약자</th>
                            <td>오태원{/* 데이터 */}</td>
                        </tr>
                        <tr>
                            <th>연락처</th>
                            <td>010-1234-5678{/* 데이터 */}</td>
                        </tr>
                        <tr>
                            <th>본인/대리</th>
                            <td>본인예약{/* 데이터 */}</td>
                        </tr>
                        <tr>
                            <th>신청일시</th>
                            <td>2022-12-25 hh:mm:ss{/* 데이터 */}</td>
                        </tr>
                    </tbody>
                    </table>
                </RowTableStyle>
                </Indent1>

                <h4 className="pageSubtitle">환자 정보</h4>
                <Indent1>
                <RowTableStyle>
                    <table>
                    <tbody>
                        <tr>
                            <th>예약 구분	</th>
                            <td>진료예약{/* 데이터 */}</td>
                        </tr>
                        <tr>
                            <th>환자 성명</th>
                            <td>오태원(1234567){/* 데이터 */}</td>
                        </tr>
                        <tr>
                            <th>연락처</th>
                            <td>010-1234-5678{/* 데이터 */}</td>
                        </tr>
                    </tbody>
                    </table>
                </RowTableStyle>
                </Indent1>

                <h4 className="pageSubtitle">예약 정보</h4>
                <Indent1>
                <RowTableStyle>
                    <table>
                    <tbody>
                        <tr>
                            <th>예약일</th>
                            <td>2022-12-25(화) 15:30{/* 데이터 */}</td>
                        </tr>
                        <tr>
                            <th>진료과</th>
                            <td>가정의학과(HM){/* 데이터 */}</td>
                        </tr>
                        <tr>
                            <th>의료진</th>
                            <td>김지혜{/* 데이터 */}</td>
                        </tr>
                        <tr>
                            <th>진료장소</th>
                            <td>본관 4층 가정의학과{/* 데이터 */}</td>
                        </tr>
                    </tbody>
                    </table>
                </RowTableStyle>
                </Indent1>

                <h4 className="pageSubtitle">위치안내</h4>
                {/* 진료장소가 몇층인지 확인하고 해당층에 맞는 사진 불러오기?
                 */}
                <ImgBox>
                    <img src={floor} alt={floor} />                       
                </ImgBox>

                <div className="buttonCont">
                    <button type="button" className="buttonBlue" onClick={onApptReturn}>목록</button>
                </div>
            </div>
        </div>
    <LoginFooter />
    </ApptStatusCont>
    );
});

export default ApptDetail;
