/**
 * @ File Name: StaffSearch.js
 * @ Author: 오태원 (daxxx2030@gail.com)
 * @ Last Update: 2022-11-25 15:00
 * @ Description: 의료진 찾기 페이지
 */

import React, { memo, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { getStaffList } from "../../slices/StaffSearchSlice";

import { useQueryString } from "../../hooks/useQueryString";

import Header from "../../components/MainPageHeader";
import Footer from "../../components/Footer";
// import Search from "../../components/Search";
// import Dropdown from "../../components/Dropdown";
import StaffRadio from "./StaffRadio";

import doctorfind from "../../assets/img/ico-doctor-find.png"

const MainContainer = styled.main`
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 40px;
    line-height: 52px;
    font-weight: bold;
  }
`;

const SearchContainer = styled.form`
  padding: 10px;
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
`;

// 드롭다운박스 
const StaffDrop = styled.div`
    /* width: 300px; */

    .dropBox {
      width: 300px;
      height: 45px;
      border: 1px solid #ccc;
      margin-right: 10px;
      display: inline-block;
      font-size: 16px;
      padding: 6.5px 40px 8px 15px;
    }
    
`;

// 검색창 컨테이너 입력 컨트롤들을 포함하는 박스
const ControlContainer = styled.div`
  .controll {
    width: 500px;
    height: 41px;
    font-size: 16px;
    border: 1px solid #ccc;
    padding-left: 15px;
  }
`;

const SearchText = styled.div`
  display: flex;
  justify-content: center;
  margin: 138px 0px 43px;

  .doctorFind {
    margin-top: 10px;
    width: 20px;
    background: url(${doctorfind}) no-repeat;

  }

  span {
    padding: 30px;
    span {
      color: #0094fb;
      padding: 0px;
    }
  }
`;

const StaffSearch = memo(() => {


    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const { data : data1, loading, error } = useSelector((state) => state.StaffSearchSlice);
    console.log(data1);

    // // 이 컴포넌트가 화면에 마운트 되었는지를 확인하기 위한 hook
    // const mountedRef = useMountedRef();

    // // 각 드롭다운의 선택 상태를 저장하기 위한 상태변수
    // const [state, setState] = useState({
    //     department: ''
    // });

    /** 드롭다운 선택 변경시 호출되는 이벤트 */
    const onSelectChange = useCallback( (e) => {
        e.preventDefault();
        
        // 드롭다운의 입력값 취득
        // const current = e.target;
        // const key = current.name;
        // console.log(current);
        // const value = current[current.selectedIndex].value;
        // console.log(value);

        /**/
        // 상태값 변수 직접 대입  ⇒ 원본 상태값을 복사(전개연산자 …) 후 가공 ⇒ 화면갱신 발생
        // 상태값 변수 직접 대입 형태 ⇒ 상태값에 따른 side effect(후속 처리: useEffect) 처리 가능
        // newState 변경된 값을 바탕으로 Ajax를 다시 전송한다

        // 기존의 상태값을 그대로 복사한 상태에서
        // 드롭다운의 name속성과 일치하는 key에 대한 value를 수정
        // const newState = {...state, [key]: value};

        // // 상태값 갱신
        // setState(newState);

        // // 갱신된 상태값 확인
        // console.log(newState);
        
        dispatch(getStaffList({
            department: e.currentTarget.value
        }));
    }, [dispatch]);

  /**
   * search 박스
   */
  /** 페이지 강제 이동을 처리하기 위한 navigate함수 생성 */
  const navigate = useNavigate();

  /** QueryString 변수 받기 */
  const { keyword } = useQueryString();
  console.log(keyword);

  /** 리덕스 관련 초기화 */
  // const dispatch = useDispatch();
  const { data, loading : loading2, error: error2 } = useSelector(
    (state) => state.StaffSearchSlice
  );
  console.log(data);

  /** 최초 마운트시 리덕스를 통해 목록을 조회한다. */
  useEffect(() => {
    dispatch(
      getStaffList({
        keyword: keyword,
      })
    );
  }, [keyword]);

  /** 검색 이벤트 */
  const onSearchSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const current = e.currentTarget;
      const keyword = current.keyword;
      console.log(keyword.value);
      //navigate(`/?keyword=${keyword.value}`);
      let redirectUrl = keyword.value ? `/?keyword=${keyword.value}` : "/";
      navigate(redirectUrl);
    },
    [navigate]
  );

  return (
    <>
      <Header />
      <MainContainer>
        <h2>의료진 찾기</h2>
        <div>
          <StaffRadio />
          <SearchContainer>
            <StaffDrop>
              {/* 평소에는 안 뜨다가 선택된 데이터가 떠야함... */}
              <select name='department' onChange={onSelectChange} className='dropBox' >
                  <option value="">부서를 선택해 주세요</option>
                  {data && data.map((v, i) => {
                      return (
                          <option key={i} value={v.department}>
                          {v.department}</option>
                      )
                  })}
              </select>
          </StaffDrop>

          <ControlContainer>
            <input
              type="text"
              name="keyword"
              className="controll"
              onSubmit={onSearchSubmit}
              placeholder="의료진 또는 질병명을 입력해주세요"
            />
          </ControlContainer>
          <button type="submit" className="btnSearch">
            <i></i>
          </button>
          </SearchContainer>
          {
            // keyword값이 입력되었을 때만 검색결과 나오게 함
            data && keyword && data ? (
              data.map(({ id, name, department, medicalSubject }, i) => {
                return (
                  <ul>
                    <li>
                      {id}
                      {name}
                      {department}
                      {medicalSubject}
                    </li>
                  </ul>
                );
              })
            ) : (
              <h1></h1>
            )
          }
          {(data1) && data1.map(({
              id, name, department, medicalSubject
          }, i) => {

              return(                
              <ul>
                  <li>
                      {/* {id}
                      {name}
                      {department}
                      {medicalSubject} */}
                  </li>
              </ul>
              );
          })}
          <SearchText>
            <span className="doctorFind"><i></i></span>
            <span>
              진료과.클리닉.센터에 속한 의료진을 빠르게 찾으실 수 있습니다.
              <br />
              의료진 찾기는 <span>질병명</span>과 <span>의료진명</span>으로
              검색이 가능합니다.
            </span>
          </SearchText>
        </div>
      </MainContainer>
      <Footer />
    </>
  );
});

export default StaffSearch;
