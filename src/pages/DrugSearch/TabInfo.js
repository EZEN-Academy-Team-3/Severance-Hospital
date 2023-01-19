/**
 * @ File Name: CustomerBoardView.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-13 14:08:00
 * @ Description: 의약품 검색 약정보로찾기 탭
 */

import React, { memo, useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../../components/Spinner'
import RegexHelper from '../../helper/RegexHelper';
//상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook참조
import { useSelector, useDispatch } from "react-redux";
// Slice에 정의된 액션함수들 참조
import { getDrug_info } from '../../slices/DrugSearchSlice';
import TopButton from '../../components/TopButton';


const DrugCont = styled.div``;

const TabInfo = memo(() => {
  //dispatch함수 생성
  const dispatch = useDispatch();

  //hook을 통해 slice가 관리하는 상태값 가져오기
  const { data, loading, error } = useSelector(
    (state) => state.DrugSearchSlice
  );

  //페이지 번호
  const page = useRef(1);

  /** 닫기버튼 눌렸을 때 */
  const closeClick = useCallback((e) => {
    document.querySelector(".popUpCont").style.display = "none";
  });

  /** <form>의 submit버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
  const onDrugInfoSubmit = useCallback((e) => {
    e.preventDefault();

		//검색을 새로했으니 페이지 초기화
		page.current = 1;

		//입력값에 대한 유효성 검사
		const regex = RegexHelper.getInstance();

    try {
      regex.value(
        document.querySelector("#itemName"),
        "검색어를 입력해주세요."
      );
    } catch (e) {
      // e.selector.focus();
      document.querySelector(".popUpCont").style.display = "block";
      document.querySelector(".alert").innerHTML = e.message;
      return;
    }

		dispatch(getDrug_info({
			itemName: document.querySelector('#itemName').value,
			pageNo: page.current
		}));
	}, []);

	if (data) {
		console.log('Tabinfo페이지 data', data);
	}

  /** 더보기 버튼 (페이지) 함수 */
  const pagePlus = useCallback((e) => {
    // console.log("더보기버튼 누름", page);
    //페이지 번호 1증가
    page.current++;

		//추가 검색 결과를 요청
		dispatch(getDrug_info({
			pageNo: page.current,
			item_name:document.querySelector('#itemName').value
		}));
	})

	return (
		<DrugCont>
			<TopButton />
			<Spinner loading={loading} />
      <form>
        <fieldset>
          <div>
            <div className="searchBox">
              <input
                type="text"
                name="itemName"
                id="itemName"
                placeholder="제품명 및 성분을 입력하세요."
                className="formControl"
              />
              <span>
                <button
                  type="submit"
                  className="btnSearch"
                  onClick={onDrugInfoSubmit}
                >
                  <i></i>
                </button>
              </span>
            </div>
          </div>
        </fieldset>
      </form>

      {/* 유효성검사 알람 팝업창 */}
      <div className="popUpCont">
        <div className="dimed"></div>
        <div className="popUp">
          <div className="alert"></div>
          <div className="closeBtnCont">
            <button type="button" className="closeBtn" onClick={closeClick}>
              닫기
            </button>
          </div>
        </div>
      </div>

			{error ? (
				<h1>에러발생함</h1>
			) : (
				(data && data.items) ? (
					<div>
						<ul className="drugListCont">
							{/* // 검색 결과 표시 (최대12개)  */}
							{data.items.map((v, i) => {
								// console.log(v);
								return (
									<li key={i} className="drugList">
										<Link className="viewLink" to={`${v.ITEM_SEQ || v.itemSeq}`}>
											{v.ITEM_NAME || v.itemName}
										</Link>
									</li>
								)
							})}
						</ul>
						{/* 페이지가 2페이지 이상일 경우 더보기 버튼 */}
						{data.totalCount > page.current*12 ?
							<div className="buttonContColumn">
								<Link className="btnMore" onClick={pagePlus}>더보기<span>({data.pageNo*12}/{data.totalCount})</span></Link>
							</div>
							: null
						}
					</div>
				) : (
					// 검색결과없을 때 
					<div className="nodata">
						<i className="nodataIcon"></i>
						<p>선택한 조건에 맞는 의약품 검색결과가 없습니다.</p>
					</div>
				)
			)
			}
	
		</DrugCont>
	);
});

export default TabInfo;
