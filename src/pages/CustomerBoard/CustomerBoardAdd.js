/**
 * @ File Name: CustomerBoardAdd.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-14 15:15:00
 * @ Description: 고객의 소리 글쓰기 페이지
 */

import React, { memo, useCallback, useState, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postItem } from '../../slices/CustomerBoardSlice';
import RegexHelper from '../../helper/RegexHelper';

import Spinner from '../../components/Spinner';
import styled from 'styled-components';

import TopButton from '../../components/TopButton';

import CustomerBoardHeader from './CustomerHeader';

const CustomerBoardAddCont = styled.div`
.pageCont{
    padding-bottom: 0 !important;
  }
  //동의 체크박스
  .agreeCont {
    margin-top: 20px;
    .checkBox {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
    }
    .checkBox + label {
      position: relative;
      height: 20px;
    }
    .checkBox + label::before {
      display: inline-block;
      width: 20px;
      height: 20px;
      /* border: 1px solid #aaa; */
      vertical-align: middle;
      border-radius: 0;
      margin: -2px 5px 0 0;
      background-color: #fff;
      content: '';
      border: 0;
      border-radius: 50%;
      background: #959595 url(../../img/ico-checkbox-checked-white.png) no-repeat 45% center !important;
      background-size: 11px 8px !important;
    }
    .checkBox:checked + label::before {
      background-color: #0094fb !important;
    }
  }

  form {
    overflow: hidden;
    
    table {
      border-top: 1px solid #aaa;
      width: calc(100% + 1px);
      margin-right: -1px;
      table-layout: fixed;
      border-collapse: separate;
      border-bottom: 1px solid #aaa;

      tr {
        display: table-row;
        vertical-align: left;
      }
      th {
        border-right: 0;
        background-color: #f9f9f9;
        font-weight: bold;
        width: 200px;
        text-align: left;
        line-height: 2.5;
        display: table-cell;
      }
      th,
      td {
        padding: 15px 20px;
        box-sizing: border-box;
        height: 75px;
        border-top: 1px solid #ebebeb;
        border-right: 1px solid #ebebeb;
      }
      td {
      }
    }
  }

  .formControlCont {
    display:flex;
    /* flex-wrap: wrap; */
    align-items: center;
  }
  //성명, 접수구분, 병원/가관, 부서, 관련직원명
  .Width360{
    max-width: 360px;
  }
  .Width175{
    max-width: 175px;
  }

  input:read-only{
    color: #c2c2c2; 
    background-color: #f9f9f9;
  }

  .textarea{
    height: 232px;
    margin-bottom:7px;
  }

  .orange {
    color: #f76117 !important;
  }
`;

/** 병원/기관에 따른 부서 처리 함수 */
function setDepartmentV(department, action) {
  switch (action) {
    case '세브란스병원':
      return department = ['가정의학과', '간담췌외과', '간센터', '감염내과', '갑상선내분비외과'];
    case '연세암병원':
      return department = ['간암센터', '갑상선암센터', '고난도암수술팀', '두경부암센터', '방사선종양학과', '부인암센터'];
    case '세브란스 심장혈관병원':
      return department = ['관상동맥센터', '부정맥센터', '선천성심장센터', '성인선천성심장센터', '소아심장과'];
    case '세브란스 어린이병원':
      return department = ['결절성 경화증 클리닉', '뇌성마비 클리닉', '뇌전증 클리닉', '뚜렛 클리닉', '발달장애 클리닉'];
    case '세브란스 안과병원':
      return department = ['녹내장', '망막', '사시소아 / 신경안과', '성형안과', '안과', '외안부'];
    case '세브란스 재활병원':
      return department = ['뇌졸중보행클리닉', '로봇재활치료센터', '림프부종클리닉', '사경클리닉', '성인뇌성마비 클리닉'];
    case '치과대학병원':
      return department = ['구강내과', '구강병리과', '구강악안면외과', '소아치과', '시니어클리닉'];
    case '강남세브란스병원':
      return department = ['가정의학과', '간담췌외과', '간센터', '감염내과', '갑상선내분비외과'];
    case '강남세브란스 심뇌혈관병원':
      return department = ['관상동맥센터', '부정맥센터', '선천성심장센터', '성인선천성심장센터', '소아심장과'];
    case '강남세브란스 암병원':
      return department = ['결절성 경화증 클리닉', '뇌성마비 클리닉', '뇌전증 클리닉', '뚜렛 클리닉', '발달장애 클리닉'];
    case '강남세브란스 척추병원':
      return department = ['경직시술클리닉', '경추 척수증 클리닉', '경추디스크 클리닉', '고난도 경추수술 클리닉', '척수손상 재활클리닉'];
    case '강남세브란스 치과병원':
      return department = ['구강악안면외과', '성인교정클리닉', '스케일링센터', '악관절클리닉', '악교정수술클리닉'];
    case '용인세브란스병원':
      return department = ['가상현실 어지러움증 클리닉', '가정의학과', '간담췌외과', '감염내과', '갑상선내분비외과'];

    default:
      return;
  }
}

const CustomerBoardAdd = memo(() => {
  //부서 상태값
  const [department, setDepartment] = useReducer(setDepartmentV, null);
  //text area 상태값
  const [textnum, setTextnum] = useState(0);

  /** 저장 완료 후 목록으로 되돌아가기위한 페이지 강제 이동 함수 생성 */
  const navigate = useNavigate();

  //페이지 렌더 후 화면을 맨 위로 올리기
  useEffect(()=>{
  window.scrollTo(0,0);
  },[])

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.CustomerBoardSlice);

  /** 닫기버튼 눌렸을 때 */
  const closeClick = useCallback((e) => {
    document.querySelector('.popUpCont').style.display = 'none';
  })

  /** <form>의 submit버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
  const onCustomerBoardSubmit = useCallback((e) => {
    e.preventDefault();

    //이벤트가 발생한 폼 개체
    const current = e.target;

    //입력값에 대한 유효성 검사
    const regex = RegexHelper.getInstance();

    try {
      regex.check(document.getElementsByName('agree'),'개인정보 수집·이용에 동의하지 않을 경우 접수 불가합니다.')
      regex.value(document.querySelector('#name'), '이름을 입력해주세요.')
      regex.eng(document.querySelector('#name'), '이름은 한글 혹은 영어로만 입력 가능합니다.')
      regex.kor(document.querySelector('#name'), '이름은 한글 혹은 영어로만 입력 가능합니다.')
      regex.value(document.querySelector('#tel2'), '연락처를 입력해주세요.')
      regex.value(document.querySelector('#tel3'), '연락처를 입력해주세요.')
      regex.num(document.querySelector('#tel2'), '연락처는 숫자로만 입력 가능합니다.')
      regex.num(document.querySelector('#tel3'), '연락처는 숫자로만 입력 가능합니다.')
      regex.value(document.querySelector('#email1'), '이메일을 입력해주세요.')
      regex.value(document.querySelector('#email2'), '이메일을 입력해주세요.')
      regex.engNum(document.querySelector('#email1'), '이메일은 영문과 숫자로만 입력 가능합니다.')
      regex.engNum(document.querySelector('#email2'), '이메일은 영문과 숫자로만 입력 가능합니다.')
      regex.value(document.querySelector('#title'), '제목을 입력해주세요.')
      regex.value(document.querySelector('#content'), '내용을 입력해주세요.')
      regex.check(document.getElementsByName('register'), '접수구분을 해주세요.')
    } catch (e) {
      // e.selector.focus();
      document.querySelector('.popUpCont').style.display = 'block';
      document.querySelector('.alert').innerHTML = e.message;
      return;
    }


    //리덕스를 통한 데이터 저장 요청.
    dispatch(
      postItem({
        name: current.name.value,
        tel:
          current.tel1.value +
          '-' +
          current.tel2.value +
          '-' +
          current.tel3.value,
        email: current.email1.value + '@' + current.email2.value,
        register: current.register.value,
        hospital: current.hospital.value,
        dept: current.dept.value,
        staff: current.staff.value,
        title: current.title.value,
        content: current.content.value,
        date: new Date().toISOString(),
      })
    ).then((result) => {
      // console.log(result);
      //처리가 완료된 후 상세 페이지로 이동
      navigate(`customer/suggestion/${result.payload.id}`);
    });
  }, []);

  //이메일 입력태그 onChange 이벤트
  const inputEmail = useCallback((e) => {
    e.preventDefault();

    const email2 = document.getElementById('email2');
    email2.value = e.target.value;

    if (email2.value === '') {
      email2.readOnly = false;
    } else {
      email2.readOnly = true;
    }
  });

  //병원선택 onChange 이벤트
  const hospitalSelect = (e) => {
    setDepartment(e.target.value);
  }

  return (
    <div>
      <Spinner loading={loading} />
      <TopButton />
      <CustomerBoardAddCont>
        <CustomerBoardHeader />

        {error ? (
          <h1>오류페이지</h1>
        ) : (
          <form id='form' onSubmit={onCustomerBoardSubmit} className='pageCont'>
            <h4 className="pageSubtitle">개인정보 수집 동의</h4>

            <div className="grayboxGuide">
              <ul>
                <li>
                  <p>1. 개인정보의 수집·이용목적</p>
                  <p>고객의 소리 신청 및 확인</p>
                </li>
                <li>
                  <p>2. 수집하는 개인정보의 항목</p>
                  <p>- 필수 정보 : 성명, 연락처, 예비연락처, 이메일, 제목, 내용</p>
                </li>
                <li>
                  <p>3. 개인정보의 보유·이용기간</p>
                  <p>고객의 소리 작성 및 조회 등 관리 필요시 까지</p>
                </li>
                <li>
                  <p>
                    4. 위와 같은개인정보 수집·이용에 동의하지 않으실 경우 서비스가
                    제한됩니다.
                  </p>
                  <p>
                    단, 고객의 소리 신청을 위한 최소한의 정보인 필수 정보 미 입력시
                    고객의 소리 신청 불가
                  </p>
                </li>
              </ul>
            </div>
            <p className="agreeCont">
              <input
                type="checkbox"
                id='agree'
                name="agree"
                className="checkBox"
                
              />
              <label htmlFor="agree">개인정보 수집·이용에 동의합니다.</label>
            </p>

            <h4 className="pageSubtitle">건의사항 입력</h4>


            <table>
              <tbody>
                <tr>
                  <th>
                    <span className="orange">* </span>성명
                  </th>
                  <td>
                    <input type="text" name="name" className="formControl Width360" id='name' />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="orange">* </span>연락처
                  </th>
                  <td>
                    <div className='formControlCont'>
                      <select name="tel1" className="formControl Width175 selectCss">
                        <option value="010">010</option>
                        <option value="011">011</option>
                        <option value="016">016</option>
                        <option value="017">017</option>
                        <option value="018">018</option>
                        <option value="019">019</option>
                        <option value="044">044(세종)</option>
                        <option value="070">070</option>
                        <option value="02">02(서울)</option>
                        <option value="031">031(경기)</option>
                        <option value="032">032(인천)</option>
                        <option value="033">033(강원)</option>
                        <option value="041">041(충남)</option>
                        <option value="042">042(대전)</option>
                      </select>
                      &nbsp;-&nbsp;
                      <input type="tel" name="tel2" className="formControl Width175" id='tel2' />
                      &nbsp;-&nbsp;
                      <input type="tel" name="tel3" className="formControl Width175" id='tel3' />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="orange">* </span>E-mail
                  </th>
                  <td>
                    <div className='formControlCont'>
                      <input type="text" name="email1" className="formControl Width175" id='email1' />
                      &nbsp;@&nbsp;
                      <input
                        type="text"
                        name="email2"
                        id="email2"
                        placeholder="직접입력"
                        className="formControl Width175"
                      />&nbsp;
                      <select name="email3" onChange={inputEmail} className="formControl Width175 selectCss">
                        <option value="">직접입력</option>
                        <option value="gmail.com" readOnly>
                          gmail.com
                        </option>
                        <option value="naver.com">naver.com</option>
                        <option value="daum.net">daum.net</option>
                        <option value="nate.com">nate.com</option>
                        <option value="kakao.com">kakao.com</option>
                        <option value="yahoo.com">yahoo.com</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="orange">* </span>접수구분
                  </th>
                  <td>
                    <label>
                      <input type="radio" name="register" value="친절" />
                      친절
                    </label>
                    <label>
                      <input type="radio" name="register" value="불친절" />
                      불친절
                    </label>
                    <label>
                      <input type="radio" name="register" value="불만및건의" />
                      불만및건의
                    </label>
                    <label>
                      <input type="radio" name="register" value="기타" />
                      기타
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="orange">* </span>병원/기관
                  </th>
                  <td>
                    <select name="hospital" className="formControl Width360 selectCss" onChange={
                      hospitalSelect
                    }>
                      <option value="">병원/대학을 선택하세요.</option>
                      <option value="세브란스병원">세브란스병원</option>
                      <option value="연세암병원">연세암병원</option>
                      <option value="세브란스 심장혈관병원">세브란스 심장혈관병원</option>
                      <option value="세브란스 어린이병원">세브란스 어린이병원</option>
                      <option value="세브란스 안과병원">세브란스 안과병원</option>
                      <option value="세브란스 재활병원">세브란스 재활병원</option>
                      <option value="치과대학병원">치과대학병원</option>
                      <option value="강남세브란스병원">강남세브란스병원</option>
                      <option value="강남세브란스 심뇌혈관병원">강남세브란스 심뇌혈관병원</option>
                      <option value="강남세브란스 암병원">강남세브란스 암병원</option>
                      <option value="강남세브란스 척추병원">강남세브란스 척추병원</option>
                      <option value="강남세브란스 치과병원">강남세브란스 치과병원</option>
                      <option value="용인세브란스병원">용인세브란스병원</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>부서</th>
                  <td>
                    <select name="dept" className="formControl Width360 selectCss">
                      {
                        department == null ? (
                          <option value="">부서를 선택하세요.</option>
                        ) : (
                          department.map((v, i) => {
                            return (
                              <option value={v} key={i}>{v}</option>
                            )
                          })
                        )
                      }
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>관련직원명</th>
                  <td>
                    <input type="text" name="staff" className="formControl Width360" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="orange">* </span>제목
                  </th>
                  <td>
                    <input type="text" name="title" className="formControl" id='title' />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="orange">* </span>내용
                  </th>
                  <td>
                    <textarea
                      type="text"
                      name="content"
                      id="content"
                      placeholder="건의 사항 및 상세 내용을 1500자 이내로 입력해주세요."
                      maxLength="1500"
                      className="formControl textarea"
                      onChange={(e) => setTextnum(document.getElementById('content').value.length)}
                    />

                    {/* 글자수 카운팅 */}
                    <p id="chkTextLengthArea">
                      {textnum}/
                      <span id="counter">1500</span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="buttonCont">
              <button type="submit" className="buttonBlue">
                접수신청
              </button>
              <button type="reset" className="buttonWhite marginleft">
                다시작성
              </button>
            </div>
          </form>
        )}



        {/* 유효성검사 알람 팝업창 */}
        <div className="popUpCont">
          <div className="dimed"></div>
          <div className="popUp">
            <div className='alert'></div>
            <div className='closeBtnCont'>
              <button type="button" className='closeBtn' onClick={closeClick}>닫기</button>
            </div>
          </div>
        </div>
      </CustomerBoardAddCont>
    </div>
  );
});

export default CustomerBoardAdd;
