/**
 * @ File Name: Hospitalization.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-14 15:02:00
 * @ Description: 입원생활 페이지
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
  margin: 0 0 22px 18px;

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
  justify-content: space-around;
`;

const Number = memo(() => {
  return (
    <>
      {/* 배경 이미지 (GlobalStyles) */}
      <div className="bgAll">
        {/* 페이지 기본 구조 */}
        <div className="pageCont">
          {/* 페이지 타이틀 */}
          <h1 className="pageTitle">입원생활</h1>
          <section className="boxGuide">
            <img src={boxGuideDecor} alt="boxGuideDecor" />
            <ListStyleUl>
              <li>환자 및 보호자분들의 안전하고 편안한 입원생활을 위하여 "입원생활안내" 동영상을 제작하였으니 많은 시청 바랍니다.</li>
            </ListStyleUl>
          </section>

          <section>
            <Title1H4>입원생활 안내 영상</Title1H4>
            <VideoSection>
              <iframe
                width="610"
                height="345"
                src="https://www.youtube.com/embed/Fs94hlPoWTY"
                title="입원생활안내(한국어) 동영상"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="610"
                height="345"
                src="https://www.youtube.com/embed/ALwotDytlYk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </VideoSection>

            <Title1H4>입원생활 안내 설명</Title1H4>
            <Title2H4>식사</Title2H4>
            <Indent2>
              <SubTitleH5>식사시간</SubTitleH5>
              <ListStyleUl>
                <li>
                  아침식사(07:20 ~ 07:50) / 점심식사(12:20 ~ 12:50) / 저녁식사(18:00 ~ 18:30)
                  <br />※ 식수는 각 병동내 정수기를 사용할 수 있습니다.
                </li>
              </ListStyleUl>

              <SubTitleH5>식사종류</SubTitleH5>
              <ListStyleUl>
                <li>
                  일반식사는 특별한 식사조정을 필요로 하지 않는 환자분에게 제공 되는 식사이며, (소아를 위하여 유아식과 소아식이 있습니다. 또한, 일반식사의 경우
                  중식에 식단을 선택하실 수 있으므로 이용하시기 바랍니다.)
                </li>
                <li>치료식사는 질병의 치료를 위해 특정 영양소의 함량을 조정하거나 조리방법을 바꾼 식사입니다.</li>
              </ListStyleUl>

              <SubTitleH5>탕비실 이용</SubTitleH5>
              <ListStyleUl>
                <li>탕비실에는 공용의 전자렌지, 싱크대, 냉장고가 비치되어 있습니다. (각 병실마다 냉장고가 별도 비치되어있습니다)</li>
              </ListStyleUl>

              <SubTitleH5>보호자 식사 신청</SubTitleH5>
              <ListStyleUl>
                <li>
                  보호자 식사를 준비하지 못하시는 분은 구내식당을 이용하시기 바라며, 환자와 같이 식사를 하시기를 원하시는 분은 환자식사와 함께 유료로 제공하여
                  드리오 니 간호사실에 신청하시기 바랍니다.
                </li>
                <li>환자의 질병치료와 감염예방을 위하여 외부 음식의 반입 및 잡상인 출입을 금합니다.</li>
              </ListStyleUl>

              <SubTitleH5>영양상담 및 영양교육</SubTitleH5>
              <ListStyleUl>
                <li>질병치료를 위하여 식사 조절이나 영양관리가 필요한 환자를 대상으로 시행됩니다.</li>
                <li>영양상담은 담당의사의 처방에 의해 이루어집니다.</li>
                <li>영양상담을 원하는 경우는 담당의사에게 문의하여 영양상담 처방을 받으시면 됩니다.</li>
                <li>영양상담에 소요되는 시간은 1회에 30분 정도이며, 영양상담에 관한 문의는 영양과(전화 361-6943, 6956)로 하시면 됩니다.</li>
              </ListStyleUl>
            </Indent2>

            <Title1H4>주치의 회진</Title1H4>
            <Indent1>
              <ListStyleUl>
                <li>주로 오전 7시-10시 사이이며, 특별히 면담을 원하는 경우에는 담당 간호사에게 말씀하여 주십시오.</li>
              </ListStyleUl>
            </Indent1>

            <Title1H4>안전수칙</Title1H4>
            <Indent1>
              <ListStyleUl>
                <li>응급상황이 발생하였을 경우 침상 위와 화장실, 샤워실에 설치되어 있는 간호사 호출 버튼을 누르시기 바랍니다.</li>
                <li>환자의 낙상예방을 위하여 침대난간은 올려놓아야 하며, 특히 주무실 때에는 반드시 난간을 올리시기 바랍니다.</li>
                <li>도난이나 분실사고 방지를 위해 현금은 가능한 구내은행에 예치하고 귀중품은 병실에 두지 않도록 주의하시기 바랍니다.</li>
                <li>병실내의 벽에는 산소관이 설치되어 있으므로 인화물질, 전열기, 가스버너 등 화재의 위험이 있는 물건의 사용을 금합니다.</li>
                <li>화재 발생 시 직원의 안내에 따라 질서 있게 대피하시면 됩니다.</li>
                <li>소화기는 각 병동마다 설치되어 있습니다.</li>
                <li>재활용품, 일반쓰레기, 의료용품(알콜솜, 거즈, 주사기 등)의 분리수거에 협조하여 주시기 바랍니다.</li>
                <li>병원의 전 지역은 금연, 금주지역입니다.</li>
              </ListStyleUl>
            </Indent1>

            <Title1H4>전화사용</Title1H4>
            <Indent1>
              <ListStyleUl>
                <li>시내전화 : 9번 + 전화번호</li>
                <li>시외, 국제, 이동전화 : 0번(교환원 연결) + 진찰권번호와 전화번호를 통보하여 신 청하며 통화료는 진료비 계산서에 포함 청구됩니다.</li>
                <li>5, 6인 기준 병실의 전화는 수신 전용이며 원내전화 사용은 가능합니다.</li>
              </ListStyleUl>
            </Indent1>

            <Title1H4>병실이동 신청</Title1H4>
            <Indent1>
              <ListStyleUl>
                <li>다인실 혹은 1, 2인실로 병실 이동을 원하실 경우, 원무매니저 또는 간호사실에 신청하시기 바랍니다.</li>
                <li>신청 순서와 환자 상태 등을 고려하여 순차적으로 이동됩니다.</li>
              </ListStyleUl>
            </Indent1>

            <Title1H4>간병인 신청</Title1H4>
            <Indent1>
              <ListStyleUl>
                <li>간병인은 병동 간호사실에 문의하시면 간병인 단체를 소개해 드립니다.</li>
              </ListStyleUl>
            </Indent1>
          </section>
        </div>
      </div>
    </>
  );
});

export default Number;
