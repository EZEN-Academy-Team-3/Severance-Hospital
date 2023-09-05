/**
 * @ File Name: CustomerBoardView.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-02 17:18:00
 * @ Description: 로딩바 컴포넌트
 */

import React, {memo} from 'react';
import PropTypes from 'prop-types';

/** 로딩바 컴포넌트 */
//--> https://mhnpd.github.io/react-loader-spinner/
import {Blocks} from 'react-loader-spinner';

const Spinner = memo(({loading, width, height})=>{
    return(
        <Blocks
            visible={loading}
            width={width}
            height={height}
            ariaLabel="blocks-loading"
            wrapperStyle={{
                // position: 'absolute',
                position: 'fixed',
                zIndex: 999,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }}
            wrapperClass='blocks-wrapper'
        />
    );
});

/** 기본값 정의 */
Spinner.defaultProps = {
    visible: false,
    width: 100,
    height: 100
};

/** 데이터타입 설정 */
Spinner.propTypes = {
    visible: PropTypes.bool.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
};

export default Spinner;