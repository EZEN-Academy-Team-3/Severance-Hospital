/**
 * @ File Name: NoticeController.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-12 16:54
 * @ Description: 공지사항 백엔드 Controller
 */

const express = require('express');
const logger = require('../helper/LogHelper');
const regexHelper = require('../helper/RegexHelper');
const noticeService = require('../services/NoticeService');
const { pagenation } = require('../helper/UtilHelper');
const { ForbiddenException } = require('../helper/ExceptionHelper');

module.exports = (() => {
  const url = '/notice';
  const router = express.Router();

  /** 전체 목록 조회 --> Read(SELECT) */
  router.get(url, async (req, res, next) => {
    // 검색어, 페이지 번호, 한 페이지에 표시할 목록 수 파라미터
    const { query, page = 1, rows = 12 } = req.query;

    // 검색어를 MyBatis에 전달하기 위한 객체로 구성
    const params = {};
    if (query) {
      params.noticeTitle = query;
      params.noticeContent = query;
    }

    // 데이터 조회
    let json = null;
    let pageInfo = null;

    try {
      // 전체 데이터 수 얻기
      const totalCount = await noticeService.getCount(params);
      pageInfo = pagenation(totalCount, page, rows);

      params.offset = pageInfo.offset;
      params.listCount = pageInfo.listCount;

      json = await noticeService.getList(params);
    } catch (err) {
      return next(err);
    }

    res.sendResult({ pagenation: pageInfo, data: json });
  });

  /** 단일행 조회 --> Read(SELECT) */
  router.get(`${url}/:id`, async (req, res, next) => {
    // 파라미터 받기
    const { id } = req.params;

    // 파라미터 유효성검사
    try {
      regexHelper.value(id, '글번호가 없습니다.');
      regexHelper.num(id, '글번호가 잘못되었습니다.');
    } catch (err) {
      return next(err);
    }

    // 데이터 조회
    let json = null;
    let pnN = null;

    try {
      json = await noticeService.getItem({
        id: id,
      });
      pnN = await noticeService.getPreNext({ id: id });
    } catch (err) {
      return next(err);
    }

    res.sendResult({ data: json, pnN: pnN });
  });

  /** 데이터 추가 --> Create(INSERT) */
  router.post(url, async (req, res, next) => {
    // 파라미터 받기
    const { noticeTitle, noticeContent } = req.body;

    // 유효성 검사
    try {
      regexHelper.value(noticeTitle, '공지사항 제목이 없습니다.');
      regexHelper.value(noticeContent, '공지사항 내용이 없습니다.');
    } catch (err) {
      return next(err);
    }

    // 데이터 저장
    let json = null;

    try {
      json = await noticeService.addItem({
        noticeTitle: noticeTitle,
        noticeContent: noticeContent,
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
    const { noticeTitle, noticeContent } = req.body;

    // 유효성 검사
    try {
      regexHelper.value(id, '글번호가 없습니다.');
      regexHelper.value(noticeTitle, '공지사항 제목이 없습니다.');
      regexHelper.value(noticeContent, '공지사항 내용이 없습니다.');
    } catch (err) {
      return next(err);
    }

    // 데이터 저장
    let json = null;

    try {
      json = await noticeService.editItem({
        id: id,
        noticeTitle: noticeTitle,
        noticeContent: noticeContent,
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
      regexHelper.value(id, '공지사항 번호가 없습니다.');
    } catch (err) {
      return next(err);
    }

    try {
      await noticeService.deleteItem({
        id: id,
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult();
  });

  return router;
})();
