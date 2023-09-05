/**
 * @ File Name: StaffRadio.js
 * @ Author: 오태원 (daxxx2030@gail.com)
 * @ Last Update: 2022-11-25 15:00
 * @ Description: 의료진 찾기 라디오 버튼
 */

import React, { memo } from 'react';

import styled from 'styled-components';

const SearchRadio = styled.div`
    margin: 65px 0 20px 0;

    span {
        margin-right: 25px;
    }
`;


const StaffRadio = memo(() => {
    return (
        <SearchRadio>
            <span>
                <label>
                    <input type='radio' name='departmentSelect1' />진료과
                </label>
            </span>
            <span>
                <label>
                    <input type='radio' name='departmentSelect1' />센터
                </label>
            </span>
            <span>
                <label>
                    <input type='radio' name='departmentSelect1' />클리닉
                </label>
            </span>
        </SearchRadio>
    );
});

export default StaffRadio;
