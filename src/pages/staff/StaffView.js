/**
 * 반복문으로 간소화 시키기... 
 * 스크롤바 추가하기
 * 의료진 찾기 페이지로 이동하는 버튼 추가
 */

import React, { memo } from 'react';
import styled from 'styled-components';

import IconStaffView from '../../assets/img/icon-staff-view.png';

const StaffIntro = styled.div`
    margin: -55px -30px 0;
    dl {
        float: left;
        width: calc(50% - 60px);
        margin: 55px 30px 0;

        dt {
            position: relative;
            font-weight: bold;
            font-size: 20px;
            padding-left: 55px;
            line-height: 40px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e6e6e6;

            i {
                position: absolute;
                left: 0;
                top: 0;
                width: 49px;
                height: 40px;
                line-height: 40px;
                background: url(${IconStaffView}) no-repeat center /cover;
            }
        }

        dd {
            padding-top: 20px;

            li {
                padding-left: 12px;
                position: relative;
                &:before {
                    content: '';
                    background-color: #0094fb;
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    left: 0;
                    top: 0.7em;
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

const StaffView = memo(() => {
    return (
      <StaffIntro>
        {/* 반복문으로 간소화 시키기... */}
        {/* 스크롤바 추가하기 */}
        <dl>
          <dt>
            <i></i>
            진료분야
          </dt>
          <dd>
            <ul>
              <li>
                갑상선 결절 및 암, 갑상선 기능 이상 및 관련 대사 이상
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>
            <i></i>
            경력
          </dt>
          <dd>
            <ul>
              <li>
                2001-2007 연세대학교 의과대학 의학과 학사
              </li>
              <li>
                2001-2007 연세대학교 의과대학 의학과 학사
              </li>
              <li>
                2001-2007 연세대학교 의과대학 의학과 학사
              </li>
              <li>
                2001-2007 연세대학교 의과대학 의학과 학사
              </li>
              <li>
                2001-2007 연세대학교 의과대학 의학과 학사
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>
            <i></i>
            학력
          </dt>
          <dd>
            <ul>
              <li>
                2007-2008 신촌 세브란스병원 인턴
              </li>
              <li>
                2007-2008 신촌 세브란스병원 인턴
              </li>
              <li>
                2007-2008 신촌 세브란스병원 인턴
              </li>
              <li>
                2018 신촌 세브란스병원 내분비내과 임상연구조교수
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>
            <i></i>
            학술활동
          </dt>
          <dd>
            <ul>
              <li>
                2017 대한의사협회 기초의학신진학술상
              </li>
              <li>
                2017 대한의사협회 기초의학신진학술상
              </li>
              <li>
                2017 대한의사협회 기초의학신진학술상
              </li>
              <li>
                2017 대한의사협회 기초의학신진학술상
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>
            <i></i>
            진료철학
          </dt>
          <dd>
            <ul>
              <li>
                섬세한 개별화 진료
              </li>
            </ul>
          </dd>
        </dl>
      </StaffIntro>
    );
});

export default StaffView;