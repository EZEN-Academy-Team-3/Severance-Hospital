/**
 * @ File Name: drugController.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-12 16:06
 * @ Description: 의약품 백엔드 Controller
 */

const express = require('express');
const logger = require('../helper/LogHelper');
const regexHelper = require('../helper/RegexHelper');
const drugService = require('../services/DrugService');
const { pagenation } = require('../helper/UtilHelper');
const { ForbiddenException } = require('../helper/ExceptionHelper');

module.exports = (() => {
  const url = '/drug';
  const router = express.Router();

  /** 전체 목록 조회 --> Read(SELECT) */
  router.get(url, async (req, res, next) => {
    // 검색어, 페이지 번호, 한 페이지에 표시할 목록 수 파라미터
    const {
      query,
      shape,
      color,
      trapezoid,
      line,
      page = 1,
      rows = 12,
    } = req.query;

    
    console.log(`query=${query}`);
    console.log(`shape=${shape}`);
    console.log(`color=${color}`);
    console.log(`trapezoid=${trapezoid}`);
    console.log(`line=${line}`);

    // 검색어를 MyBatis에 전달하기 위한 객체로 구성
    const params = {};
    if (query || shape || color || trapezoid || line) {
      params.ITEM_NAME = query;
      params.DRUG_SHAPE = shape;
      params.COLOR_CLASS = color;
      params.trapezoid = trapezoid;
      params.line = line;
    };

    // 데이터 조회
    let json = null;
    let pageInfo = null;

    try {
      // 전체 데이터 수 얻기
      const totalCount = await drugService.getCount(params);
      pageInfo = pagenation(totalCount, page, rows);

      params.offset = pageInfo.offset;
      params.listCount = pageInfo.listCount;

      json = await drugService.getList(params);
    } catch (err) {
      return next(err);
    }

    res.sendResult({ pagenation: pageInfo, data: json });
  });

  /** 단일행 조회 --> Read(SELECT) */
  router.get(`${url}/:id`, async (req, res, next) => {
    // 파라미터 받기
    const { id } = req.params;

    console.log(`id=${id}`);

    // 파라미터 유효성검사
    try {
      regexHelper.value(id, '품목일련번호가 없습니다.');
      regexHelper.num(id, '품목일련번호가 잘못되었습니다.');
    } catch (err) {
      return next(err);
    }

    // 데이터 조회
    let json = null;

    try {
      json = await drugService.getItem({
        id: id,
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult({ data: json });
  });

  /** 데이터 추가 --> Create(INSERT) */
  router.post(url, async (req, res, next) => {
    // 파라미터 받기
    const {
      ITEM_SEQ,
      ITEM_NAME,
      ENTP_SEQ,
      ENTP_NAME,
      CHARTN,
      ITEM_IMAGE,
      PRINT_FRONT,
      PRINT_BACK,
      DRUG_SHAPE,
      COLOR_CLASS1,
      COLOR_CLASS2,
      LINE_FRONT,
      LINE_BACK,
      LENG_LONG,
      LENG_SHORT,
      THICK,
      IMG_REGIST_TS,
      CLASS_NO,
      ETC_OTC_CODE,
      ITEM_PERMIT_DATE,
      SHAPE_CODE,
      MARK_CODE_FRONT_ANAL,
      MARK_CODE_BACK_ANAL,
      MARK_CODE_FRONT_IMG,
      MARK_CODE_BACK_IMG,
      ITEM_ENG_NAME,
      EDI_CODE,
    } = req.body;

    // 유효성 검사
    try {
      regexHelper.value(ITEM_SEQ, '품목일련번호가 없습니다.');
      regexHelper.value(ITEM_NAME, '품목명이 없습니다.');
      regexHelper.value(ENTP_SEQ, '업체일련번호가 없습니다.');
      regexHelper.value(ENTP_NAME, '업체명이 없습니다.');
      regexHelper.value(CHARTN, '성상이 없습니다.');
    } catch (err) {
      return next(err);
    }

    // 데이터 저장
    let json = null;

    try {
      json = await drugService.addItem({
        ITEM_SEQ: ITEM_SEQ,
        ITEM_NAME: ITEM_NAME,
        ENTP_SEQ: ENTP_SEQ,
        ENTP_NAME: ENTP_NAME,
        CHARTN: CHARTN,
        ITEM_IMAGE: ITEM_IMAGE,
        PRINT_FRONT: PRINT_FRONT,
        PRINT_BACK: PRINT_BACK,
        DRUG_SHAPE: DRUG_SHAPE,
        COLOR_CLASS1: COLOR_CLASS1,
        COLOR_CLASS2: COLOR_CLASS2,
        LINE_FRONT: LINE_FRONT,
        LINE_BACK: LINE_BACK,
        LENG_LONG: LENG_LONG,
        LENG_SHORT: LENG_SHORT,
        THICK: THICK,
        IMG_REGIST_TS: IMG_REGIST_TS,
        CLASS_NO: CLASS_NO,
        ETC_OTC_CODE: ETC_OTC_CODE,
        ITEM_PERMIT_DATE: ITEM_PERMIT_DATE,
        SHAPE_CODE: SHAPE_CODE,
        MARK_CODE_FRONT_ANAL: MARK_CODE_FRONT_ANAL,
        MARK_CODE_BACK_ANAL: MARK_CODE_BACK_ANAL,
        MARK_CODE_FRONT_IMG: MARK_CODE_FRONT_IMG,
        MARK_CODE_BACK_IMG: MARK_CODE_BACK_IMG,
        ITEM_ENG_NAME: ITEM_ENG_NAME,
        EDI_CODE: EDI_CODE,
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
    const {
      ITEM_NAME,
      ENTP_SEQ,
      ENTP_NAME,
      CHARTN,
      ITEM_IMAGE,
      PRINT_FRONT,
      PRINT_BACK,
      DRUG_SHAPE,
      COLOR_CLASS1,
      COLOR_CLASS2,
      LINE_FRONT,
      LINE_BACK,
      LENG_LONG,
      LENG_SHORT,
      THICK,
      IMG_REGIST_TS,
      CLASS_NO,
      ETC_OTC_CODE,
      ITEM_PERMIT_DATE,
      SHAPE_CODE,
      MARK_CODE_FRONT_ANAL,
      MARK_CODE_BACK_ANAL,
      MARK_CODE_FRONT_IMG,
      MARK_CODE_BACK_IMG,
      ITEM_ENG_NAME,
      EDI_CODE,
    } = req.body;

    // 유효성 검사
    try {
      regexHelper.value(id, '품목일련번호가 없습니다.');
      regexHelper.value(ITEM_NAME, '품목명이 없습니다.');
      regexHelper.value(ENTP_SEQ, '업체일련번호가 없습니다.');
      regexHelper.value(ENTP_NAME, '업체명이 없습니다.');
      regexHelper.value(CHARTN, '성상이 없습니다.');
    } catch (err) {
      return next(err);
    }

    // 데이터 저장
    let json = null;

    try {
      json = await drugService.editItem({
        ITEM_SEQ: id,
        ITEM_NAME: ITEM_NAME,
        ENTP_SEQ: ENTP_SEQ,
        ENTP_NAME: ENTP_NAME,
        CHARTN: CHARTN,
        ITEM_IMAGE: ITEM_IMAGE,
        PRINT_FRONT: PRINT_FRONT,
        PRINT_BACK: PRINT_BACK,
        DRUG_SHAPE: DRUG_SHAPE,
        COLOR_CLASS1: COLOR_CLASS1,
        COLOR_CLASS2: COLOR_CLASS2,
        LINE_FRONT: LINE_FRONT,
        LINE_BACK: LINE_BACK,
        LENG_LONG: LENG_LONG,
        LENG_SHORT: LENG_SHORT,
        THICK: THICK,
        IMG_REGIST_TS: IMG_REGIST_TS,
        CLASS_NO: CLASS_NO,
        ETC_OTC_CODE: ETC_OTC_CODE,
        ITEM_PERMIT_DATE: ITEM_PERMIT_DATE,
        SHAPE_CODE: SHAPE_CODE,
        MARK_CODE_FRONT_ANAL: MARK_CODE_FRONT_ANAL,
        MARK_CODE_BACK_ANAL: MARK_CODE_BACK_ANAL,
        MARK_CODE_FRONT_IMG: MARK_CODE_FRONT_IMG,
        MARK_CODE_BACK_IMG: MARK_CODE_BACK_IMG,
        ITEM_ENG_NAME: ITEM_ENG_NAME,
        EDI_CODE: EDI_CODE,
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
      regexHelper.value(id, '품목일련번호가 없습니다.');
    } catch (err) {
      return next(err);
    }

    try {
      await drugService.deleteItem({
        ITEM_SEQ: id,
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult();
  });

  return router;
})();
