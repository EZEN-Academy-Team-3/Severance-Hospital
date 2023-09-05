/**
 * @ File Name: NewsController.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-12 16:00
 * @ Description: 뉴스 백엔드 Controller
 */

const express = require("express");
const logger = require("../helper/LogHelper");
const regexHelper = require("../helper/RegexHelper");
const newsService = require("../services/NewsService");
const { pagenation } = require("../helper/UtilHelper");
const { ForbiddenException } = require("../helper/ExceptionHelper");

module.exports = (() => {
  const url = "/news";
  const router = express.Router();

  /** 전체 목록 조회 --> Read(SELECT) */
  router.get(url, async (req, res, next) => {
    // 검색어, 페이지 번호, 한 페이지에 표시할 목록 수 파라미터
    const { query, page = 1, rows = 12 } = req.query;

    // 검색어를 MyBatis에 전달하기 위한 객체로 구성
    const params = {};
    if (query) {
      params.newsTitle = query;
    }

    // 데이터 조회
    let json = null;
    let pageInfo = null;

    try {
      // 전체 데이터 수 얻기
      const totalCount = await newsService.getCount(params);
      pageInfo = pagenation(totalCount, page, rows);

      params.offset = pageInfo.offset;
      params.listCount = pageInfo.listCount;

      json = await newsService.getList(params);
    } catch (err) {
      return next(err);
    }

    res.sendResult({ pagenation: pageInfo, data: json });
  });

  /** 데이터 추가 --> Create(INSERT) */
  router.post(url, async (req, res, next) => {
    // 파라미터 받기
    const { newsTitle, newsLink } = req.body;

    // 유효성 검사
    try {
      regexHelper.value(newsTitle, "뉴스 제목이 없습니다.");
      regexHelper.value(newsLink, "뉴스 링크가 없습니다.");
    } catch (err) {
      return next(err);
    }

    // 데이터 저장
    let json = null;

    try {
      json = await newsService.addItem({
        newsTitle: newsTitle,
        newsLink: newsLink,
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult({ data: json });
  });

  /** 데이터 수정 --> Update(UPDATE) */
  router.put(`${url}/:id`, async (req, res, next) => {
    // 파라미터 받기
    const { id } = req.params;
    const { newsTitle, newsLink } = req.body;

    // 유효성 검사
    try {
      regexHelper.value(newsTitle, "뉴스 제목이 없습니다.");
      regexHelper.value(newsLink, "뉴스 링크가 없습니다.");
    } catch (err) {
      return next(err);
    }

    // 데이터 저장
    let json = null;

    try {
      json = await newsService.editItem({
        id: id,
        newsTitle: newsTitle,
        newsLink: newsLink,
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult({ data: json });
  });

  /** 데이터 삭제 --> Delete(DELETE) */
  router.delete(`${url}/:id`, async (req, res, next) => {
    // 파라미터 받기
    const { id } = req.params;

    // 유효성 검사
    try {
      regexHelper.value(id, "뉴스번호가 없습니다.");
    } catch (err) {
      return next(err);
    }

    try {
      await newsService.deleteItem({
        id: id,
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult();
  });

  return router;
})();
