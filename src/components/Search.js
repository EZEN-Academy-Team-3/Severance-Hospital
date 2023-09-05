/**
 * @ File Name: Search.js
 * @ Author: 오태원 (daxxx2030@gail.com)
 * @ Last Update: 2022-11-25 15:00
 * @ Description: 의료진 찾기 검색창
 */

import React, { memo, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { getStaffList } from '../slices/StaffSearchSlice';

import { useQueryString } from '../hooks/useQueryString';

// 입력 컨트롤들을 포함하는 박스
const ControlContainer = styled.div`
    
    .controll {
        margin-right: 10px;
        font-size: 16px;
        padding: 8px 15px;
        border: 1px solid #ccc;
    }

    .clickable {
        background-color: #0094fb;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }
`;

const Search = memo(() => {
    /** 페이지 강제 이동을 처리하기 위한 navigate함수 생성 */
    const navigate = useNavigate();

    /** QueryString 변수 받기 */
    const { keyword } = useQueryString();
    console.log(keyword);

    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.StaffSearchSlice);
    console.log(data);

    /** 최초 마운트시 리덕스를 통해 목록을 조회한다. */
    useEffect(() => {
        dispatch(getStaffList({
            keyword: keyword
        }));
    }, [keyword]);

    /** 검색 이벤트 */
    const onSearchSubmit = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const keyword = current.keyword;
        console.log(keyword.value);
        //navigate(`/?keyword=${keyword.value}`);
        let redirectUrl = keyword.value ? `/?keyword=${keyword.value}` : '/';
        navigate(redirectUrl);
    }, [navigate]);

    return (
        <>
            <ControlContainer >
                <input type='text' name='keyword' className='controll' onSubmit={onSearchSubmit} placeholder='의료진 또는 질병명을 입력해주세요' />
                <button type='submit' className='btnSearch' ><i></i></button>
            </ControlContainer>

            {
                // keyword값이 입력되었을 때만 검색결과 나오게 함
                (data) && (keyword && data) ? 
                (
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
                    )
                })) : (
                    <h1></h1>
                )
            }
        </>
    );
});

export default Search;
