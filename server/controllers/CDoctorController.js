/**
 * @ File Name: CDoctorController.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-09 00:33:33
 * @ Description: 협력의사 컨트롤러
 */

/** import */
const express = require("express");
const regexHelper = require("../helper/RegexHelper");
const CDoctorService = require("../services/CDoctorService");
const { pagenation } = require("../helper/UtilHelper");

const logger = require("../helper/LogHelper");
const { ForbiddenException } = require("../helper/ExceptionHelper");

module.exports = (() => {
  const url = "/cooperation_doctor";
  const router = express.Router();

  /** 목록 조회 */
  router.get(url, async (req, res, next) => {
    // 검색어, 페이지 번호, 한 페이지에 표시할 목록 수 파라미터
    const { query, areaQuery, division, page = 1, rows = 20 } = req.query;

    // 검색어를 MyBatis에 전달하기 위한 객체로 구성
    const params = {};
    if (query) {
      params.doctorName = query;
      params.area = query;
    }
    if (areaQuery) {
      params.areaQuery = areaQuery;
    }
    if (division) {
      params.division = division;
    }

    let json = null;
    let pageInfo = null;
    let areaCount = null;

    try {
      const totalCount = await CDoctorService.getCount(params);
      pageInfo = pagenation(totalCount, page, rows);

      params.offset = pageInfo.offset;
      params.listCount = pageInfo.listCount;
      json = await CDoctorService.getList(params);
      areaCount = await CDoctorService.getAreaCount(params);
    } catch (err) {
      return next(err);
    }

    res.sendResult({ pagenation: pageInfo, data: json, areaCount: areaCount });
  });

  /** 단일 조회 */
  router.get(`${url}/:id`, async (req, res, next) => {
    // 파라미터
    const { id } = req.params;

    // 파라미터 유효성검사
    try {
      regexHelper.value(id, "ID가 없습니다.");
    } catch (err) {
      return next(err);
    }

    let json = null;

    try {
      json = await CDoctorService.getItem({
        id: id
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult({ data: json });
  });

  /** 추가 */
  router.post(url, async (req, res, next) => {
    // 파라미터
    const { doctorName, hospitalClinicName } = req.body;

    // 파라미터 유효성검사
    try {
      regexHelper.value(doctorName, "의사명이 없습니다.");
      regexHelper.value(hospitalClinicName, "병의원명이 없습니다.");
    } catch (err) {
      return next(err);
    }

    try {
      await CDoctorService.addItem({
        doctorName: doctorName,
        hospitalClinicName: hospitalClinicName
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult();
  });

  /** 수정 */
  router.put(`${url}/:id`, async (req, res, next) => {
    // 파라미터
    const { id } = req.params;
    const { doctorName, hospitalClinicName } = req.body;

    // 파라미터 유효성검사
    try {
      regexHelper.value(doctorName, "의사명이 없습니다.");
      regexHelper.value(hospitalClinicName, "병의원명이 없습니다.");
    } catch (err) {
      return next(err);
    }

    try {
      await CDoctorService.editItem({
        id: id,
        doctorName: doctorName,
        hospitalClinicName: hospitalClinicName
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult();
  });

  /** 삭제 */
  router.delete(`${url}/:id`, async (req, res, next) => {
    // 파라미터
    const { id } = req.params;

    // 파라미터 유효성검사
    try {
      regexHelper.value(id, "ID가 없습니다.");
    } catch (err) {
      return next(err);
    }

    try {
      await CDoctorService.deleteItem({
        id: id
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult();
  });

  return router;
})();
