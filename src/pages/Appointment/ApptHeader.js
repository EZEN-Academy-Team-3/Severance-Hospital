/**
 * @ File Name: ApptHeader.js
 * @ Author: 
 * @ Last Update: 
 * @ Description: 진료 예약 헤더 component
 */

 import React, { memo } from 'react';
 import styled from 'styled-components';
 
 import boxGuideDecor from '../../assets/img/box-guide-decoration@2x.png'
 
 const ApptHeaderCont = styled.div`
        padding-bottom: 95px;
        
        .pageTitle{
            text-align: center;
            font-size: 40px;
            padding: 73px 0 65px 0;
            box-sizing: border-box;
        }
        .boxGuide {
            max-width: 1280px;
        }

        .boxGuide {
            margin: 0 auto;
            max-width: 1280px;
            
            ul{
                margin: 4px 0;
                li{
                    color: #333333;
                    font-size: 17px;
                    box-sizing: border-box;
                    list-style:square inside;
                    line-height: 1.5;
                    margin-top: 5px;
                    &::marker{color: #999999;}
                }
            }
        }
     `;
 
 const Header = memo(() => {
     return (
         <ApptHeaderCont className='bgAll'>
             <h1 className='pageTitle'>진료 예약 안내</h1>
 
             <div className='boxGuide'>
                 <img src={boxGuideDecor} alt='boxGuideDecor' />
                 <ul>
                     <li>당일 예약시간 20분 전에 내원하여 원무팀 수납/창구 방문 접수 후 진료 받으시기 바랍니다.</li>
                     <li>예약 변경/취소는 진료 1일전까지 꼭 연락 주시기 바랍니다.</li>
                     <li>진료 예약확인은 1599-1004 ARS 1번을 이용하시거나, 마이세브란스 앱에서도 확인 가능합니다.</li>
                     <li>
                        세브란스병원은 상급종합병원입니다. <br />&nbsp;&nbsp;
                        초진 진료시 반드시 1,2차 요양기관에서 발급한 요양급여의뢰서(진료의뢰서)를 지참 하셔야 합니다. <br />&nbsp;&nbsp;
                        미지참시 건강보험(의료급여) 혜택을 받으실 수 없습니다. (단 의료급여수급자는 2차요양기관에서 발급된 요양급여의뢰서 지참)
                     </li>
                 </ul>
             </div>
         </ApptHeaderCont>
     );
 });
 
 export default Header;