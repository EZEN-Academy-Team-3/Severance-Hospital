/**
 * @ File Name: CHospitalController.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-10 00:33:33
 * @ Description: 협력병원 컨트롤러
 */

/** import */
const express = require("express");
const regexHelper = require("../helper/RegexHelper");
const CHospitalService = require("../services/CHospitalService");
const { pagenation } = require("../helper/UtilHelper");

const logger = require("../helper/LogHelper");
const { ForbiddenException } = require("../helper/ExceptionHelper");

module.exports = (() => {
  const url = "/cooperation_hospital_clinic";
  const router = express.Router();

  /** 목록 조회 */
  router.get(url, async (req, res, next) => {
    // 검색어, 페이지 번호, 한 페이지에 표시할 목록 수 파라미터
    const { query, areaQuery, division, page = 1, rows = 20 } = req.query;

    // 검색어를 MyBatis에 전달하기 위한 객체로 구성
    const params = {};
    if (query) {
      params.area = query;
      params.hospitalClinicName = query;
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
      const totalCount = await CHospitalService.getCount(params);
      pageInfo = pagenation(totalCount, page, rows);

      params.offset = pageInfo.offset;
      params.listCount = pageInfo.listCount;
      json = await CHospitalService.getList(params);
      areaCount = await CHospitalService.getAreaCount(params);
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
      json = await CHospitalService.getItem({
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
    const { area, introduction, address, zipCode, tel, name, department, url, division } = req.body;

    // 파라미터 유효성검사
    try {
      regexHelper.value(area, "지역이 없습니다.");
      regexHelper.value(address, "주소가 없습니다.");
      regexHelper.value(zipCode, "우편번호가 없습니다.");
      regexHelper.value(tel, "전화번호가 없습니다.");
      regexHelper.value(name, "병의원명이 없습니다.");
      regexHelper.value(department, "진료과가 없습니다.");
      regexHelper.value(division, "병의원 구분이 없습니다.");
    } catch (err) {
      return next(err);
    }

    try {
      await CHospitalService.addItem({
        area: area,
        introduction: introduction,
        address: address,
        zipCode: zipCode,
        tel: tel,
        name: name,
        department: department,
        url: url,
        division: division
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
    const { area, introduction, address, zipCode, tel, name, department, url, division } = req.body;

    // 파라미터 유효성검사
    try {
      regexHelper.value(area, "지역이 없습니다.");
      regexHelper.value(address, "주소가 없습니다.");
      regexHelper.value(zipCode, "우편번호가 없습니다.");
      regexHelper.value(tel, "전화번호가 없습니다.");
      regexHelper.value(name, "병의원명이 없습니다.");
      regexHelper.value(department, "진료과가 없습니다.");
      regexHelper.value(division, "병의원 구분이 없습니다.");
    } catch (err) {
      return next(err);
    }

    try {
      await CHospitalService.editItem({
        id: id,
        area: area,
        introduction: introduction,
        address: address,
        zipCode: zipCode,
        tel: tel,
        name: name,
        department: department,
        url: url,
        division: division
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
      await CHospitalService.deleteItem({
        id: id
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult();
  });

  return router;
})();
