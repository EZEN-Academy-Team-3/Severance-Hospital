/**
 * Pagenation.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-29 22:10
 * @ Description: 페이지번호 컴포넌트
 */

import React, { memo,useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const PagenationContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 20px auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    .link {
        display: block;
        font-size: 11px;
        padding: 5px 10px;
        text-decoration: none;
        margin: 0 1px;
        color: black;

        &.active {
            background-color: #fff;
            color: #333;
            border: 1px solid #ebebeb;
            border-radius: 50%;
        }

        &.disabled {
            cursor: pointer;
            background-color: rgb(0, 148, 251);
            border-radius: 50%;
            color: #fff;
        }

        &:hover {
            cursor: pointer;
        }
    }
`;

const Pagenation = memo(({pagenation:{groupEnd,groupStart,nextGroupFirstPage,nowPage,prevGroupLastPage,totalPage}}) => {
    // 현재 URL
    const location = useLocation();

    // 페이지 번호 링크를 포함하는 li를 리턴하는 함수
    const pageNumber = useCallback((currentPage,targetPage,linkText) => {
        const {pathname,search} = location;

        // QueryString 문자열을 객체로 변환
        const params = new URLSearchParams(search);

        // params 객체를 다리 QueryString 문자열로 변환
        const qs = params.toString();

        // 최종 URL을 추출
        let targetUrl = `${pathname}?${qs}`;

        if (!linkText) {
            // 출력할 텍스트가 전달되지 않은 경우 페이지 번호로 대체함
            linkText = targetPage;
        }

        // 비활성 상태의 링크인 경우
        if (targetPage === 0) {
            return (
                <li key={targetPage}>
                    <span className='link disabled' dangerouslySetInnerHTML={{__html:linkText}} />
                </li>
            );
        } else if (targetPage == currentPage) {
            return (
                <li key={targetPage}>
                    <span className='link active' dangerouslySetInnerHTML={{__html:linkText}} />
                </li>
            );
        } else {
            return (
                <li key={targetPage}>
                    <Link className='link' to={targetUrl} dangerouslySetInnerHTML={{__html:linkText}} />
                </li>
            );
        }
    },[]);

    // 스크롤바를 강제로 맨 위로 이동시킴
    window.scrollTo(0,0);

    return (
        <PagenationContainer>
            {/* 페이지 수만큼 출력하기 */}
            {new Array(groupEnd - groupStart + 1).fill(groupStart).map((v,i) => pageNumber(nowPage,v+i))}

            {/* 다음 그룹의 첫 페이지로 이동하기 */}
            {pageNumber(nowPage,nextGroupFirstPage,'&gt;')}

            {/* 끝 페이지로 이동하기 */}
            {pageNumber(nowPage,totalPage,'&raquo;')}
        </PagenationContainer>
    );
});

Pagenation.defaultProps = {
    pagenation: {
        groupEnd: 0,
        groupStart: 0,
        nextGroupFirstPage: 0,
        nowPage: 1,
        prevGroupLastPage: 0,
        totalPage: 1
    }
};

export default Pagenation;