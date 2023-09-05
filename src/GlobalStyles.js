import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

/**이미지 import*/
//select form뒤 화살표 이미지
import icoChevronDown from './assets/img/ico-chevron-down-sm@2x.png';
//nodata 이미지
import nodata from './assets/img/ico-nodata@2x.png';
//링크아이콘 이미지
import iconExternal from './assets/img/ico-external-link@2x.png';
//bgAll 이미지
import bgAll from './assets/img/bg-pattern.png';
//서치 아이콘 이미지
import searchIco from './assets/img/ico-search-white.png';
//동영상 재생 아이콘 이미지
import playIco from './assets/img/ico-movie-play-md@2x.png';
//뉴 아이콘 이미지
import newIco from './assets/img/ico-new@2x.png';
//로그아웃 아이콘 이미지
import logoutImg from './assets/img/ico-logout-white.png';

const GlobalStyles = createGlobalStyle`
/** 리셋 CSS */
${reset}

/**
네이버 나눔 글꼴 https://hangeul.naver.com/font/nanum

나눔고딕
font-family: 'NanumGothicLight';
font-family: 'NanumGothic';
font-family: 'NanumGothicBold';
font-family: 'NanumGothicExtraBold';

나눔스퀘어
font-family: 'NanumSquareLight';
font-family: 'NanumSquare';
font-family: 'NanumSquareBold';
font-family: 'NanumSquareExtraBold';
font-family: 'NanumSquareAcb';
font-family: 'NanumSquareAceb';
font-family: 'NanumSquareAcl';
font-family: 'NanumSquareAcr';
*/

img {
  display: block;
}

a {
  font-family: 'NanumSquare';
  text-decoration: none;
  color: black;
}

strong {
font-family: 'NanumSquare';
font-weight: 700;
}

h1, h2, h3, h4, h5, p, span {
font-family: 'NanumGothic';
}
body{
    font-size: 16px;
    color: #333;
    letter-spacing: 0.02em;
    line-height: 1.625;
    //단어단위로 줄바꿈
    word-break: keep-all;
    word-wrap: break-word;
}

textarea{
    resize: none;
}

/** ckeditor5 */
.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
  min-height: 320px;
}

/** 페이지 관련 */
//전체 Cont
.pageCont{
    margin: auto;
    max-width: 1280px;
    padding-bottom: 95px;
}

.bgAll{
  ${`background: url(${bgAll}) no-repeat center top;`}
  background-position-x: 50%;
  background-size: 1920px;
  width: 100% !important;
  /* background-color: pink; */
}
//페이지 상위 타이틀
.pageTitle{
    text-align: center;
    font-size: 40px;
    padding: 73px 0 65px 0;
    box-sizing: border-box;
    font-weight: bold;
    font-family: "NanumSquare", "malgungothic", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
//페이지 서브타이틀
.pageSubtitle{
    font-size: 20px;
    line-height: 34px;
    padding-left: 19px;
    position: relative;
    font-weight: 700;
    color: #222;
    margin: 47px 0 22px 18px;
    margin-left: 0px !important;
    box-sizing: border-box;
    &::before{
        top: 0.55em;
        margin-right: 8px;
        position: absolute;
        width: 11px;
        height: 11px;
        border: 3px solid #0094fb;
        border-radius: 50%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        content: '';
        left: 0;
    }
}
//내용 들여쓰기 div
.indent{margin-left: 20px;}
//본문
.articleBody{
  padding: 35px 30px;
  border-bottom: 1px solid #888;
  table{
    width: 100%;
    border-spacing: 0;
    overflow: hidden;
    border-collapse: separate;
    border: 0;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
    border-left: 1px solid #ebebeb;
  }

  p{
    margin: 5px 0;
  }
  img{margin: auto;}
}

//공지사항
.boxGuide{
    width: 100%;
    margin: 0 0 60px 0;
    padding: 20px 30px;
    box-sizing: border-box;
    border: 1px solid #e3e3e3;
    position: relative;
        img{
            position: absolute;
            width: 41px;
            height: 7px;
            top: -3px;
        }
    }

// 공지사항 텍스트 왼쪽 박스 모양
.textLeftBoxShape {
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
    
//회색공지사항
.grayboxGuide{
    padding: 25px 30px;
    background-color: #f9f9f9 !important;
    box-sizing: border-box;
    font-size: 16px;
    color: #333;
    letter-spacing: 0.02em;
    line-height: 1.625;
    li{
        padding-top: 8px;
        box-sizing: border-box;
        &:first-child{ padding-top: 0;}
        p{
            font-size:16px;
            &:first-child{
                margin: 4px 0;
                font-weight: bold !important;
                display: block;
            }
        }
    }
}

/** 팝업창 관련 */
.popUpCont{
    display: none;
    .dimed{
        position:fixed;
        top:150px; left:30px;
        box-shadow : #000000B3 0 0 0 9999px;
        z-index : 9998;
    }
    .popUp{
        position:fixed;
        top: 50%; left: 50%;
        width: 360px; height: 182px;
        transform: translate(-50%, -50%);
        background-color: #fff;
        z-index : 9999;
        text-align:center;
        padding: 30px;
        box-sizing: border-box;
        font-size: 16px;    
    }
    .alert{
        height: 50%;
        word-wrap:break-word;
    }
    .closeBtnCont{
        height: 50%;
        position: relative;
        padding-top: 20px;
        box-sizing: border-box;
        .closeBtn{
            border: none;
            width: 80px; height: 40px;
            background-color: #0094fb;
            color: white;
            min-width: 80px;
            padding: 0 19px;
            font-size: 16px;
            border-radius: 3px;
        }
    }
}
    


/** 버튼 관련 */
//버튼컨테이너 flex-column
button {
  cursor: pointer;
}
.buttonContColumn{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}
//버튼컨테이터 두개 나란히
.buttonCont{
    display: flex;
    justify-content: center;
    padding-bottom: 95px;
    box-sizing: border-box;
    margin-top: 30px;
}
//파란색 둥근 버튼
.buttonBlue {
  background-color: #0094fb;
  color: #fff;
  border-radius: 25px;
  min-width: 100px;
  height: 50px;
  padding: 0 28px;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-decoration: none;
  box-sizing: border-box;
  
  border: none;
  }
  //하얀색 둥근 버튼
  .buttonWhite {
  background-color: #fff;
  color: #0094fb;
  border: 2px solid #0094fb;
  border-radius: 25px;
  min-width: 100px;
  height: 50px;
  padding: 0 28px;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-decoration: none;
  box-sizing: border-box;
  }
  .marginleft{
    margin-left: 6px;
  }
  //더보기 버튼
  .btnMore{
    padding: 0 39px;
    height: 50px;
    font-size: 16px;
    border-radius: 25px;
    color: #333;
    border: 1px solid #dadada;
    background-color: #fff;
		display: inline-flex;
		align-items: center;

    span{margin-left:5px;}

    &:after{
      content: '';
      margin-left: 6px;
    	width: 15px;
    	height: 9px;
    	${`background: url(${icoChevronDown}) no-repeat;`}
    	background-size: cover;
    }
  }
  //작은 더보기 버튼
  .btnMoreLink{
    padding: 0 15px;
    height: 40px;
    font-size: 16px;
    border-radius: 25px;
    color: #333;
    /* border: 1px solid #dadada; */
    background-color: #fff;
		display: inline-flex;
		align-items: center;
    margin-top:20px;
    margin-right: 10px;
    float: right;

    &.media{background-color: #0094fb; color: #fff;}
    &.notice{background-color: #ac47d1; color: #fff;}
  }
	//검색버튼
  .searchBox {
    display: flex;
    -webkit-box-align: center;
    padding: 15px 250px 15px 250px;
    background: #f9f9f9;
    justify-content: center;
    align-items: center;
    -webkit-box-pack: center;
  }
	.btnSearch{
		background-color: #0094fb;
		width: 60px; height:45px;
    padding: 0 10px;
		margin-left: 10px;
		display: inline-flex;
		align-items: center;
		cursor: pointer;
		border: 1px solid #0094fb;
		border-radius: 3px;
		justify-content: center;
		i{
			width: 22px;
    	height: 26px;
    	line-height: 26px;
			${`background: url(${searchIco}) no-repeat;`}
		}
	}
  
  /** 나의작성글 View 페이지 */
  .suggestionViewCont{
    border-top: 1px solid #888;
    border-bottom: 1px solid #888;
  }
  .subjectArea{
        padding: 15px 30px;
        border-bottom: 1px solid #e6e6e6;
    }
  .subject{
    font-weight: bold;
    line-height: 1.5;
    font-size: 24px;
    font-family: "NanumSquare", "malgungothic", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  .articleInfo{
    margin-top: 15px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: #666;
  }
  .extendField{
    border-bottom: 1px solid #e6e6e6;
    padding: 15px 30px;
    dl{
      display: flex;
    }
    dt{
        font-weight: bold;
        margin-right: 20px;
        white-space: nowrap;
    }
    span{
        color: #666;
    }
  }
  .articleQarea{
    padding: 36px 30px 36px 70px;
    position: relative;
    .qnaTitle{
    position: absolute;
    top: 40px;
    left: 30px;
    width: 28px;
    height: 28px;
    line-height: 28px;
    border-radius: 50%;
    background-color: #e6e6e6;
    text-align: center;
    }
    .articleArea{
        width: 100%;
        overflow:hidden;
        word-wrap:break-word;
    }
  }

  .flexBetween{
    display: flex;
    justify-content: space-between;
  }
  .flex{
    display: flex;
    padding-top:4px;
    &:first-child{
        padding-top:0;
    }
  }

  /** 의약품 검색 페이지 */
  .tabMenu{
    margin-bottom: 60px;
    border: 1px solid #ebebeb;
    overflow: hidden;
    position: relative;
    background-color: #f9f9f9;
    padding-bottom: 2px;
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    a{
        display: block;
        height: 100%;
        width: 50%;
        line-height: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: center;
        font-size: 18px;
        line-height: 3;
        color: #333;
        &:first-child{
            border-right: 1px solid #ebebeb;
        }
        &.active{
            background-color: #fff;
            font-weight: bold;
            border-bottom: 3px solid #ffd553;
        }
    }
  }

  /** 의약품 검색페이지 */
  .formControl {
    width: 100%;
    border-radius: 0;
    height: 45px;
    border: 1px solid #dadada;
    padding: 8px 15px;
    text-align: left;
    font-size: 16px;
    vertical-align: middle;
    box-sizing: border-box;
    max-width: 100%;
    line-height: normal;
    padding-right: 30px;

    //select태그의 화살표 css
    &.selectCss{
      appearance: none;
      padding-right: 30px;
      ${`background: #fff url(${icoChevronDown}) no-repeat right 12px center;`}
      background-size: 17px auto;
    }
   
    &:focus {
      outline: none;
      border-color: #0094fb;
    }
  }
	.drugListCont{
    display: flex;
    flex-wrap: wrap;

    .drugList{
      width: calc(50% - 30px);
      margin: 15px;
      box-sizing: border-box;
    }
  }
  .viewLink{
    padding: 16px 20px;
    display: block;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    font-size: 16px;
    color: #333;
    &:hover{
        color: #0094fb;
        border-color: #0094fb;
        font-weight: bold;
    }
  }

  //알약검색 이미지
  .drugImageSlider{
    width: 100%;
    img{width: 100%;}
  }

	//검색결과 없을 때
	.nodata{
		margin: 138px 0 43px;
    text-align: center;
		.nodataIcon{
			display: inline-flex;
			width: 80px;
    	height: 69px;
    	line-height: 69px;
    	${`background-image: url(${nodata});`}
			background-size: cover;
    	vertical-align: middle;
			text-align: center;
			margin-bottom: 25px;
		}
		p{margin: 4px 0;}
	}

  /** 뉴스홈 */
  //뉴스홈 헤더
  .bgWhiteBlue{
    background-color: #eef7fc;
    margin-bottom: 40px;
    padding: 40px;
    height: 400px;
    box-sizing:border-box;
    /* margin-top: 73px; */
    }
  .newsTopSlider{
    display: flex;
  }
  .textArea{
    position: relative;
    margin-left: 40px;
    h4{
      font-size: 24px;line-height: 38px;font-weight: bold; margin-bottom:25px;
    }
    a{
      position: absolute;
      bottom: 0; color: #333;font-size: 14px;
    }
  }
  //뉴스홈 content
  .wideWrap{
    padding: 100px 0;
  }

  /** 언론보도 */
  //검색결과물
  .bbsList{
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    .bbsItem{
      flex: 0 0 calc(33.333333% - 30px);
      width: calc(33.333333% - 30px);
      max-width: calc(33.333333% - 30px);
      margin: 15px;
    }
    .inner{
      min-height: 90px;
      padding: 14px 20px;
      display: flex;
      border-radius: 10px;
      border: 1px solid #e6e6e6;
      flex-direction: column;
      box-sizing: border-box;
      justify-content: space-between;
      border-radius: 10px;

      &:hover{border-color: #0094fb;}
    }
    .bbssubjectArea{
      max-height: 60px;
      line-height: 30px;
      //두 줄 말줄임표
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 60px;
      font-size: 18px;

      strong{width: 100%;}
      strong:after{
        content: '';
        display: inline-block;
        vertical-align: middle;
        margin-left: 5px;
        margin-top: -1px;
        width: 14px;
        height: 14px;
        ${`background: url(${iconExternal});`}
        background-size: cover;
      }
    }
  }
  .infoArea{
    margin-top: 12px;
  }
  .date{
    color: #666;
  }
  //뉴스메인페이지 sns소식
  .tabContentCont{
    display: flex;
    .tabContent{
      width: 50%;
      margin: 15px;
      box-sizing: border-box;
    }
    .contentBox{
      background-color: #fff;
      width: 100%;
      height: 861px;
      padding: 30px 3px 30px 30px;
      box-sizing: border-box;

      //유튜브 api표시되는 영역
      .youtubeArticle{
        overflow: scroll;
        overflow-x: hidden; //가로스크롤 없애기
        height: 100%;
        display: flex;
        flex-wrap: wrap;

        ::-webkit-scrollbar{
          width:5px;
          background: white;
          height: 100%;
          margin: 0 auto;

        }
        ::-webkit-scrollbar-track{
          width: 1px;
          background: #dadada; //스크롤바의 색상
        }
        ::-webkit-scrollbar-thumb{
          background: #888;
          border-radius: 16px;
        }

        .subjectArea{
          height: 52px;
          border: 0;
          padding: 0;
          padding-top:18px;
          font-size: 16px;
          /* font-weight: 500; */
          overflow: hidden;
          text-overflow: ellipsis;

          //링크 아이콘
          strong:after{
            content: '';
            display: inline-block;
            vertical-align: middle;
            margin-left: 5px;
            margin-top: -1px;
            width: 14px;
            height: 14px;
            ${`background: url(${iconExternal});`}
            background-size: cover;
          }
        }
      }
    }
  }
  //유투브 썸네일박스 cont
  .thumbItem{
    /* width: calc(50% - 30px); */
    width: 50%;
    padding-right:15px;
    margin-bottom : 30px;
    box-sizing: border-box;
    height: 248.78px;

    //동영상 재생 아이콘
  .icoMoviePlay{
    width: 40px;
    height: 40px;
    position: absolute;
    left: 12px;
    bottom: 18px;
    ${`background-image: url(${playIco});`}
    background-size: cover;
  }
    
  }
  //유투브 썸네일박스
  .thumb{
    width: 100%;
    height: 178px;
    background-color: black;
    position: relative;
    img{
      width: 100%;
      position: absolute;
      top: 50%; transform: translate(0, -50%);
    }
  }
  
  //페이스북영역
  .facebookArticle{
    overflow: scroll;
    overflow-x: hidden; //가로스크롤 없애기
    height: 100%;

    ::-webkit-scrollbar{
      width:5px;
      background: white;
      height: 100%;
      margin: 0 auto;
    }
    ::-webkit-scrollbar-track{
      width: 1px;
      background: #dadada; //스크롤바의 색상
    }
    ::-webkit-scrollbar-thumb{
      background: #888;
      border-radius: 16px;
    }

    .thumbItem {
      width: 100% !important;
    }

    a{
      width: 100%; 
      /* max-height: 270px; */
     
    }
    dl{
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      height: 100%;
      max-width: 100%;
      /* direction: ltr; */
      border-bottom: 1px solid #dadada;
    }
    dt{
      position: relative;
      padding-left: 62px;
      line-height: 26px;
      margin-bottom: 15px;

      span{
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -25px;
      }
      strong{font-size: 18px;}
      img{
        border: 1px solid #e3e3e3;
        width: 50px;
              height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    dd{margin-bottom: 40px;height: 30px;}
    
  }

  .title3{
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    font-weight: bold;
  }

  // NEW 뉴 아이콘
  .icoNew{
    display: inline-block;
    width: 18px;
    height: 18px;
    line-height: 18px;
    margin-left: 5px;
    ${`background-image: url(${newIco});`}
    background-size: cover;
    vertical-align: middle;
  }

  /** 로그아웃 아이콘 */
  .icoLogout{
    width: 22px;
    height: 21px;
    line-height: 21px;
    ${`background-image: url(${logoutImg});`}
    background-size: cover;
  }

  /** 메인페이지 뉴스 */  
  /* 박스 */
  .newsBox {
    width: 297px;
    height: 210px;

    background-color: white;

    display: flex !important;
    flex-direction: column;
    justify-content: space-between;

    padding: 43px 30px 28px;
    box-sizing: border-box;
    
    position: relative;

    

    /* 카테고리 (언론 보도) */
    .newsCategory {
      width: 78px;
      height: 40px;
      display: block;
      
      position: absolute;
      top: -10px;
      left: 30px;

      padding: 0 10px;
      box-sizing: border-box;

      background-color: #ac47d1;
      color: white;

      font-size: 14px;
      line-height: 40px;
      text-align: center;

      white-space: nowrap;
    }

    /* 타이틀 */
    .newsContentTitle {
      font-size: 18px;
      line-height: 28px;
    }

    /* 날짜 */
    .newsDate {
      display: block;
      font-size: 16px;
      line-height: 16px;
    }

  }
  /* 강조 */
  //글자색
  .textPrimary{
    color: #0094fb !important;
  }
  //배경색
  .bgPrimary {
  background-color: #0094fb !important;
}
`;

export default GlobalStyles;
