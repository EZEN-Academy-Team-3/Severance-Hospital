/**
 * submit 이벤트 처리
 */
import React, { memo, useCallback } from 'react';
import styled from 'styled-components';

const QuickApptCont = styled.div`
    padding-bottom: 95px;

    // h4 스타일 적용 + 가상 선택자
    h4 {
        padding-left: 18px;
        margin: 65px 0 22px;
        font-size: 24px;
        font-weight: bold;
        line-height: 38px;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            width: 6px;
            height: 20px;
            top: 9px;
            left: 0;
            background-color: #0094fb;
            border-radius: 3px;
        }
    }

    // list 파란점
    .apptList {
        margin-left: 18px;

        ul {
            li {
                padding-left: 12px;
                position: relative;

                &:before {
                    content: '';
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    top: 0.7em;
                    left: 0;
                    background-color: #0094fb;
                }

                &:after {
                    display: block;
                    clear: both;
                    content: '';
                }
            }
        }
    }

`;

const QuickApptInputCont = styled.form`
    /* width: 100%; */
    /* padding: 20px 0 50px; */
    /* background-color: #f9f9f9; */
    margin-left: 18px;
    padding-bottom: 70px;

    // 전화번호
    .formControlCont {
        display:flex;
        /* flex-wrap: wrap; */
        align-items: center;
        padding: 50px 0;
        border-bottom: 1px solid #dadada;

        .Width175{
            max-width: 175px;
        }
    }

    .quickCont {
        width: 560px;
        margin-left: 25%;
        
        .agree {
            margin-top: 40px;
            
            strong {
                color: #0094fb;
                font-size: 18px;
            }

            p {
                font-size: 16px;
                margin: 4px 0;
            }

            div {
                margin: 20px 120px;

                label {
                    margin-right: 28px;
                }
            }

        }

        button {
            width: 100%;
            cursor: pointer;
        }
    }
    
`;

const QuickAppt = memo(() => {
    /** <form>의 submit버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
    const onApptSubmit = useCallback((e) => {
        e.preventDefault();

    });

    /** 닫기버튼 눌렸을 때 */
    const closeClick = useCallback((e) => {
        document.querySelector('.popUpCont').style.display = 'none';
    })

    return (
        <QuickApptCont>
            <h4 className='h4title'>이용 안내</h4>
            <div className='apptList'>
                <ul>
                    <li>환자 또는 보호자분의 전화번호를 남기시면, 상담원이 친절하게 예약을 도와드리겠습니다.</li>
                    <li>상담시간 평일 08:30 ~ 17:30 토요일 08:30 ~ 12:30 (공휴일 제외)</li>
                </ul>
            </div>
            <h4 className='h4title'>간편예약(빠른예약 신청)</h4>

            <QuickApptInputCont className='grayboxGuide' onSubmit={onApptSubmit}>
                <div className='quickCont' >
                    {/* 전화번호 입력 */}
                    <div className='formControlCont'>
                        <select name="tel1" className="formControl Width175">
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

                    {/* 개인정보 수집·이용 동의 */}
                    <div className='agree'>
                        <strong>개인정보 수집·이용 동의</strong>
                        <p>본 정보는 간편예약 신청에만 이용됩니다. 개인정보 이용에 동의합니다.</p>
                        <div>
                            <label>
                                <input type="radio" name="agree" value="on" />
                                동의합니다.
                            </label>
                            <label>
                                <input type="radio" name="agree" value="on" />
                                동의하지 않습니다
                            </label>
                        </div>
                    </div>
                    <div>
                        <button className='buttonBlue' type="submit">신청</button>
                    </div>
                </div>
            </QuickApptInputCont>
            <div className="popUpCont">
                <div className="dimed"></div>
                <div className="popUp">
                    <div className='alert'></div>
                    <div className='closeBtnCont'>
                    <button type="button" className='closeBtn' onClick={closeClick}>닫기</button>
                    </div>
                </div>
            </div>
        </QuickApptCont>
    );
});

export default QuickAppt;
