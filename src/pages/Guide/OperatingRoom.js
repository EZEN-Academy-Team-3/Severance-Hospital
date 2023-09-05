/**
 * @ File Name: OperatingRoom.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-14 15:02:00
 * @ Description: 수술실 이용안내 페이지
 */

/** import */
import React, { memo } from "react";
import styled from "styled-components";

/** 이미지 */
// 공지사항 박스 아이콘
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";

/** 리스트 스타일 */
// ul태그
const ListStyleUl = styled.ul`
  margin: 4px 0;

  li {
    padding-left: 12px;
    margin-top: 5px;
    position: relative;

    &:first-child {
      margin-top: 0;
    }

    &::before {
      content: "";
      width: 4px;
      height: 4px;

      position: absolute;
      top: 0.7em;
      left: 0;

      background-color: #0094fb;
    }
  }
`;
// div태그
const SubListStyleDiv = styled.div`
  margin-left: 12px;

  ul {
    margin: 4px 0;
  }

  li {
    padding-left: 12px;
    margin-top: 5px;
    position: relative;

    &:first-child {
      margin-top: 0;
    }

    &::before {
      content: "";
      width: 4px;
      height: 2px;

      position: absolute;
      top: 0.7em;
      left: 0;

      background-color: #999;
    }
  }
`;

/** 타이틀 h4태그 스타일 */
// 타이틀1
const Title1H4 = styled.h4`
  padding-left: 18px;
  margin: 65px 0 22px;

  font-size: 24px;
  font-weight: bold;
  line-height: 38px;

  color: #222;
  position: relative;

  &:first-child {
    margin-top: 0;
  }

  &:before {
    content: "";
    position: absolute;
    width: 6px;
    height: 20px;
    top: 9px;
    left: 0;
    background-color: #0094fb;
    border-radius: 3px;
  }
`;
// 타이틀2
const Title2H4 = styled.h4`
  padding-left: 19px;
  margin: 47px 0 22px 18px;

  font-size: 20px;
  font-weight: bold;
  line-height: 34px;

  color: #222;
  position: relative;

  &:before {
    content: "";
    width: 11px;
    height: 11px;

    position: absolute;
    top: 0.55em;
    left: 0;

    border: 3px solid #0094fb;
    border-radius: 50%;
    box-sizing: border-box;

    margin-right: 8px;
  }
`;

/** 서브 타이틀 h5태그 스타일 */
// 타이틀1
const SubTitleH5 = styled.h5`
  font-size: 18px;
  font-weight: bold;
  margin-top: 17px;

  &:first-child {
    margin-top: 0;
  }
`;

/** 들여쓰기 스타일 */
// 들여쓰기1
const Indent1 = styled.div`
  margin-left: 18px;
`;
// 들여쓰기2
const Indent2 = styled.div`
  margin-left: 37px;
`;

/** 영상 블록 스타일 */
// section태그
const VideoSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

/** 영상 제목 스타일 */
const VideoTitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  text-align: center;

  p {
    width: 400px;
    font-size: 18px;
    font-weight: bold;
    margin-top: 24px;
  }
`;

/** 단계 박스 스타일 */
// div태그
const StepDiv = styled.div`
  width: 100%;
  margin-bottom: 22px;

  ol {
    display: flex;
    justify-content: space-between;
  }

  li {
    width: 270px;
    text-align: center;

    padding: 20px 30px 24px;
    margin-left: 50px;

    border: 1px solid #e6e6e6;
    border-radius: 10px;

    position: relative;

    &:first-child {
      margin-left: 0;
    }

    &::before {
      content: "";
      width: 35px;
      height: 1px;

      position: absolute;
      top: -1px;
      left: 50%;
      transform: translate(-50%);

      background-color: #0094fb;
    }

    &::after {
      content: "";
      width: 12.5px;
      height: 12.5px;
      display: block;

      position: absolute;
      top: 50%;
      right: -30px;
      transform: rotate(135deg);

      overflow: hidden;
      border-top: 2px solid #e6e6e6;
      border-left: 2px solid #e6e6e6;
      margin-top: -10px;
    }

    &:last-child::after {
      display: none;
    }

    h5 {
      font-size: 14px;
      color: #0094fb;
      font-weight: bold;
      margin: 4px 0;
    }

    p {
      width: 100%;
      height: 52px;
      margin-top: 12px;
      line-height: 52px;
    }

    .step4 {
      color: #f76117;
    }
  }
`;

const Number = memo(() => {
  return (
    <>
      {/* 배경 이미지 (GlobalStyles) */}
      <div className="bgAll">
        {/* 페이지 기본 구조 */}
        <div className="pageCont">
          {/* 페이지 타이틀 */}
          <h1 className="pageTitle">수술실 이용안내</h1>
          <section className="boxGuide">
            <img src={boxGuideDecor} alt="boxGuideDecor" />
            <ListStyleUl>
              <li>최고의 의료진이 첨단 설비와 장비를 이용하여 최신 수술기법으로 최선을 다하고 있습니다.</li>
              <li>수술실은 본관에 38개의 수술실이 있고, 안과병원에 6개, 심장혈관병원에 6개, 총 50개의 수술실이 있습니다.</li>
            </ListStyleUl>
          </section>

          <section>
            <Title1H4>수술실 위치 및 규모</Title1H4>
            <Indent1>
              <ListStyleUl>
                <li>수술실은 본관에 38개의 수술실이 있고, 안과 병원에 6개, 심장혈관병원에 6개, 총 50개의 수술실이 있습니다.</li>
                <li>
                  본관 수술실에서는 외과, 신경외과, 정형외과, 산부인과, 비뇨기과, 성형외과, 이식외과, 이비인후과, 흉부외과, 구강악안면외과 수술 및
                  마취통증의학과 수술이 시행되고 있고, 안과병원 수술실에서는 안과 수술, 심장혈관병원 수술실에서는 심장혈관수술을 시행하고 있습니다.
                </li>
                <li>
                  복강경 전용 수술실, 국내 최초의 로봇 수술실과 iMRI 수술실 등 최첨단 설비와 장비를 갖추고 있으며 특히, 로봇 수술은 2005년 국내 최초로 시작하여
                  현재까지 3000건 이상 시행하였으며 국내의 로봇 수술 도입 및 발전에 선두적인 역할을 하고 있습니다.
                </li>
                <li>최고의 의료진이 첨단 설비와 장비를 이용하여 최신 수술기법으로 최선을 다하고 있습니다.</li>
              </ListStyleUl>
            </Indent1>

            <Title1H4>수술실 간호팀</Title1H4>
            <Indent1>
              <ListStyleUl>
                <li>
                  수술실 간호사들은 각 수술과별로 전담 배치되어 수술간호 업무를 담당하고 있으며, 회복실 간호사들은 수술전처치실과 회복실에서 환자의 안정과
                  회복을 돕고 있습니다.
                </li>
                <li>수술환자에게 안전한 수술 환경과 환자 중심의 간호를 제공하고 수술팀과 최상의 팀웍을 유지하기 위해 최선을 다하고 있습니다.</li>
                <li>
                  수준높은 수술 간호를 제공하기 위해 일주일에 한번 컨퍼런스를 갖고 매년 수술실 실무에 활용할 수 있는 연구와 지속적인 PI (Performance
                  Improvement) 활동을 진행하고 있습니다.
                </li>
              </ListStyleUl>
            </Indent1>

            <Title1H4>수술진행을 위한 일반적 과정</Title1H4>
            <Indent1>
              <VideoSection>
                <iframe
                  width="400"
                  height="225"
                  src="https://www.youtube.com/embed/bBncRbf_s5k"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  width="400"
                  height="225"
                  src="https://www.youtube.com/embed/X4cW2pR0lA4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  width="400"
                  height="225"
                  src="https://www.youtube.com/embed/uE3i_DWLK4U"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </VideoSection>

              <VideoTitleSection>
                <p>VR 수술실 가는길</p>
                <p>알쓸신의 - 수술실 1편</p>
                <p>알쓸신의 - 수술실 2편</p>
              </VideoTitleSection>
            </Indent1>

            <Title2H4>입원환자</Title2H4>
            <Indent2>
              <StepDiv>
                <ol>
                  <li>
                    <h5>STEP 1</h5>
                    <p>병실 → 수술전 처치실</p>
                  </li>
                  <li>
                    <h5>STEP 2</h5>
                    <p>수술실</p>
                  </li>
                  <li>
                    <h5>STEP 3</h5>
                    <p>회복실</p>
                  </li>
                  <li>
                    <h5>STEP 4</h5>
                    <p className="step4">병실 또는 중환자실</p>
                  </li>
                </ol>
              </StepDiv>
            </Indent2>

            <Indent2>
              <SubTitleH5>수술전 처치실 입실</SubTitleH5>
              <ListStyleUl>
                <li>수술실이 준비되면 이송 직원이 병실로 환자를 모시러 갑니다.</li>
                <li>환자가 수술실에 도착하면 수술전처치실에 입실하여 수술전 상태를 확인하고 수술에 필요한 처치를 받게 됩니다.</li>
              </ListStyleUl>
              <SubTitleH5>수술 진행</SubTitleH5>
              <ListStyleUl>
                <li>해당 수술실에 들어오면 마취, 수술준비 및 피부소독 후 수술이 시작됩니다.</li>
                <li>직접적인 수술 시간외에 마취 및 수술준비로 보통 1시간에서 3시간정도 더 소요됩니다.</li>
                <li>수술마다 소요되는 시간이 다르고, 같은 수술이라도 환자의 상태 등 여러 가지 요소에 의해 수술 소요시 간은 달라질 수 있습니다.</li>
                <li>수술 자체에 걸리는 시간은 예상은 할 수 있으나 주치의사만이 판단이 가능합니다.</li>
              </ListStyleUl>
              <SubTitleH5>회복실 이동</SubTitleH5>
              <ListStyleUl>
                <li>수술 종료 후 전신 마취 환자가 마취에서 깨어나 의식이 돌아올 때까지 회복실에 머물며 처치를 받게 됩니다.</li>
                <li>
                  회복실 간호사와 마취과 의사가 상주하여 마취 후 합병증 예방 및 치료가 신속하고 효과적으로 행해 질 수 있도록 집중적인 처치를 하게 되고
                  환자상태가 안정되면 병실로 이동하게 됩니다.
                </li>
                <li>회복에 걸리는 시간은 환자마다 차이가 있습니다.</li>
              </ListStyleUl>
              <SubTitleH5>병실 이동</SubTitleH5>
              <ListStyleUl>
                <li>회복실에서 병실로 이동하기 직전 가족 대기실로 안내 방송을 합니다.</li>
                <li>수술 후 중환자실로 이동 하는 환자 및 국소마취 수술 환자는 수술이 끝난 후 회복실을 거치지 않고 바로 병실로 이동합니다.</li>
              </ListStyleUl>
              <SubTitleH5>가족 대기</SubTitleH5>
              <ListStyleUl>
                <li>환자가 전처치실로 입실하면 가족들은 수술실 옆 ‘가족 대기실’에서 대기하게 됩니다.</li>
                <li>가족대기실에는 수술진행안내 현황판이 설치되어 있어 환자의 수술 진행 상황을 알려드립니다.</li>
                <li>수술 환자가 병실로 이동하기 전 안내 방송을 통해 병실이동을 알려 드립니다.</li>
                <li>방송을 들으신 보호자가 수술실 앞으로 오시면 환자와 함께 병실로 이동 하게 됩니다.</li>
              </ListStyleUl>
            </Indent2>
            <Title2H4>통원 수술 환자</Title2H4>
            <Indent2>
              <ListStyleUl>
                <li>통원수술은 입원하지 않고 당일 내원하여 수술을 받고 회복후 귀가하게 됩니다.</li>
                <li>통원 수술 환자는 예약된 시간에 맞추어 본관 5층 ‘통원 수술실’이라고 표시된 곳으로 들어오신 후 직원의 안내에 따라 입실합니다.</li>
                <li>환자의 입실 후에는 가족들은 ‘가족 대기실’에서 대기하게 됩니다.</li>
                <li>유아, 소아</li>
                <SubListStyleDiv>
                  <ul>
                    <li>유·소아가 수술을 마치고 마취에서 깨어나면 상황에 따라 보호자 한 분이 회복실에 입실 하실 수 있습니다.</li>
                    <li>보호자분 입실이 필요할 경우 안내하여 드립니다.</li>
                  </ul>
                </SubListStyleDiv>
                <li>의사의 퇴원결정이 나면 수납하신후 귀가하게 됩니다.</li>
              </ListStyleUl>
            </Indent2>
          </section>
        </div>
      </div>
    </>
  );
});

export default Number;
