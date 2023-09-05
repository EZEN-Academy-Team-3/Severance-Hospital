import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>

        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <meta name="subject" content={props.subject} />
        <meta name="copyright" content={props.copyright} />
        <meta name="content-language" content="ko" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={props.url} />
        <meta property="og:image" content={props.image} />
        <link rel="icon" href={props.icon} type="image/png" />
        <link rel="shortcut icon" href={props.chortcutIcon} type="image/png" />
        <link rel="apple-touch-icon" href={props.appleTouchIcon} type="image/png" />

        {/* 네이버 나눔 글꼴 https://hangeul.naver.com/font/nanum */}

        {/* 나눔고딕
        font-family: 'NanumGothicLight';
        font-family: 'NanumGothic';
        font-family: 'NanumGothicBold';
        font-family: 'NanumGothicExtraBold'; */}
        <link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-gothic.css" rel="stylesheet"></link>

        {/* 나눔스퀘어
        font-family: 'NanumSquareLight';
        font-family: 'NanumSquare';
        font-family: 'NanumSquareBold';
        font-family: 'NanumSquareExtraBold';
        font-family: 'NanumSquareAcb';
        font-family: 'NanumSquareAceb';
        font-family: 'NanumSquareAcl';
        font-family: 'NanumSquareAcr'; */}
        <link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css" rel="stylesheet"></link>
      </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultProps = {
  title: "세브란스병원",
  description: "Severance Hospital",
  author: "EZEN Academy Team 3",
  subject: "Severance Hospital Clone Project",
  copyright: "EZEN Academy Team 3",
  keywords: "Severance Hospital Clone Project",
  url: window.location.href,
  image: null,
  icon: null,
  shortcutIcon: null,
  appleTouchIcon: null
};

export default Meta;
