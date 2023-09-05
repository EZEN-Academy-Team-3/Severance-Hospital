/**
 * @ File Name: NewsMain.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-09
 * @ Description: 뉴스 메인 페이지
 */

import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import corona from '../../assets/img/corona.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { getYoutube } from '../../slices/YoutubeSlice';
import styled from 'styled-components';

import NewsHomeCarousel from '../../components/NewsHomeCarousel';
import NewsHomeNoticeCarousel from '../../components/NewsHomeNoticeCarousel';

import facebookImg from '../../assets/img/facebook-thumb-sev.jpg'

const Div = styled.div`
`

const NewsMain = memo(() => {
  //dispatch함수 생성
	const dispatch = useDispatch();
	//hook을 통해 slice가 관리하는 상태값 가져오기
	const { data, error } = useSelector((state) => state.YoutubeSlice);

  //표시할 페이스북 데이터
  const facebook = [
  {
    date:'2022-09-21', 
    content:"세브란스병원 간호사들이 조혈모세포 기증을 통해 혈액암 환자들에게 새 삶을 선물했습니다?? 조혈모세포 기증자와 혈액암 환자의 조직적합성항원이 일치할 확률은 2만분의 1로 매우 낮습니다. 하지만 그 낮은 확률을 뚫고 생명 나눔을 실천했습니다. 자세한 내용은 블로그에서!?? \nhttps://blog.naver.com/meet_the_sev/222880598131 #조혈모세포 #혈액암 #세브란스병원",
  },
  {
    date:'2022-09-20', 
    content:"대장암의 대표적인 증상으로는 혈변과 설사, 변비, 복부팽만, 피로감, 식욕부진 등이 있습니다. 그러나 이러한 증상은  대장에서 발생하는 다른 질병과 크게 다르지 않아 증상만으로 대장암을 진단하기는 어렵습니다. 자세한 내용은 블로그에서 확인하세요?? \n https://blog.naver.com/meet_the_sev/222879654344 #세브란스병원 #연세암병원 #안중배교수",
  },
  {
    date:'2022-09-15', 
    content:"난소암 치료는 수술, 항암치료, 표적치료제, 면역치료제, 유전자검사 등 최첨단 의료기술의 적절한 조합이 매우 중요합니다. 자세한 내용이 궁금하다면 클릭! ???? \nhttps://blog.naver.com/meet_the_sev/222875180395#난소암 #세브란스병원 #남은지교수",
  },
  {
    date:'2022-09-14', 
    content:"따뜻하고 풍요로운 명절, 웃음 넘치는 한가위 보내길 바랍니다?? #추석 #한가위?? #세브란스"
  },
  {
    date:'2022-09-09', 
    content:"세브란스병원 간호사들이 조혈모세포 기증을 통해 혈액암 환자들에게 새 삶을 선물했습니다?? 조혈모세포 기증자와 혈액암 환자의 조직적합성항원이 일치할 확률은 2만분의 1로 매우 낮습니다. 하지만 그 낮은 확률을 뚫고 생명 나눔을 실천했습니다. 자세한 내용은 블로그에서!?? \nhttps://blog.naver.com/meet_the_sev/222880598131 #조혈모세포 #혈액암 #세브란스병원",
  },
  {
    date:'2022-09-08', 
    content:"추석 명절을 앞두고 들려온 따뜻한 소식입니다?? 국내에서 가장 오랜 기간인 16개월간 ‘인공 심장’을 달았던 환아가 심장이식 수술을 무사히 받고 가족과 함께 집으로 돌아갔습니다. 카드뉴스로 확인해보세요?? #비후성심근병 #심실보조장치 #vad #세브란스병원",
  },
  {
    date:'2022-09-08', 
    content:"아침부터 밤까지 바쁘게 움직이는 간호사의 24시???? 쇼츠로 확인해보세요!?? ??다양한 영상은 유튜브에서 https://www.youtube.com/user/SeveranceHospital #세브란스병원 #간호사 #대학병원",
  },
  {
    date:'2022-09-07', 
    content:"추석 명절을 앞두고 마냥 즐겁지 않은 사람들이 있습니다. 바로 이 '명절증후군' 때문인데요.  온 가족이 건강하고 행복하기 보내기 위한 명절증후군 예방법을 알려드립니다. #추석 #명절 #명절증후군 #세브란스병원",
  },
]
  
  /** 최초마운트시 리덕스를 통해 목록을 조회한다. */
  useEffect(()=>{
    dispatch(getYoutube());
  if(data){
    console.log(data);
  }

  //페이징 후 화면을 맨 위로 올리기
  window.scrollTo(0,0);
  },[])

  //unescape처리함수
  function unescapeHtml( text ) {
    var doc = new DOMParser().parseFromString(text, "text/html");
    return doc.documentElement.textContent;
  }

  return (
    <Div>
      <div className='bgAll'>
      <div className="pageCont">
        <div className="bgWhiteBlue">
          <div className="newsTopSlider">
            <img src={corona} alt="코로나 관련 진료 안내"></img>
            <div className="textArea">
              <h4>코로나 관련 진료 안내</h4>
              <p>
                성인 안심진료소 운영시간평일 : 08:30-11:30, 13:00-15:30 토요일 :
                08:30-11:30 공휴일 휴진 장소 : 본관 3층 출입구 앞(건물 외부)
                소아 안심진료소(18세 미만) 운영시간평일: 9:00-11:30, 13:30-15:30
                토요일 : 9:00-11:30 공휴일 휴진 장소: 어린이병원 1층
                정문(회전문) 예진데스크로 내원
              </p>
              <Link>상세보기 &gt;</Link>
            </div>
          </div>
        </div>

        {/* slick-slide */}
        <div className="wideWrap">
          <NewsHomeNoticeCarousel />
        </div>
        <div className="wideWrap">
          <NewsHomeCarousel />
        </div>
      </div>

      <div className="snsNewsWrap" style={{ backgroundColor: '#F6F6F6' }}>
        <h1 className="pageTitle">SNS소식</h1>
        <div className="tabContentCont pageCont">
          <div className="tabContent" id="tabContentFacebook">
            <h3 className="title3">페이스북</h3>
            <div className="contentBox">
            <div className="facebookArticle">
                {facebook.map((v,i)=>{
                    return(
                      <div className="thumbItem" key={i}>
                          <a href='https://www.facebook.com/SeveranceFan/?_rdc=1&_rdr' target="_blank" rel="noopener noreferrer">
                        <dl>
                            <dt>
                              <span>
                                <img src={facebookImg} alt='세브란스프로필이미지'/>
                              </span>
                              <strong className='author'>세브란스</strong>
                              <p className='date'>{v.date}</p>
                            </dt>
                            <dd>
                              <div className='text'>{v.content}</div>  
                            </dd>
                        </dl>
                          </a>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="tabContent" id="tabContentFacebook">
            <h3 className="title3">유튜브</h3>
            <div className="contentBox">
              <div className="youtubeArticle">
                {data && 
                  data.map((v,i)=>{
                    // console.log(v);
                    const id = v.id.videoId;
                    const link = 'https://www.youtube.com/watch?v=';
                    const youtubeLink = link + id;

                    return(
                      <div className="thumbItem" key={i}>
                        <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                          <div className="thumb">
                            <img src={v.snippet.thumbnails.medium.url} alt='새창'></img>
                            <i className='icoMoviePlay'></i>
                          </div>
                          <div className="subjectArea">{unescapeHtml(v.snippet.title)}<strong></strong></div>
                        </a>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Div>
  );
});

export default NewsMain;
