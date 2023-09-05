/**
 * @ File Name: DoctorController.js
 * @ Author: 오태원
 * @ Last Update:
 * @ Description: 의사 컨트롤러
 */

const express = require("express");
const logger = require("../helper/LogHelper");
const regexHelper = require("../helper/RegexHelper");
const doctorService = require("../services/DoctorService");
const { pagenation } = require("../helper/UtilHelper");
const { ForbiddenException } = require("../helper/ExceptionHelper");

module.exports = (() => {
  const url = "/doctor";
  const router = express.Router();

  /** 목록 조회 */
  router.get(url, async (req, res, next) => {
    // 검색어, 페이지 번호, 한 페이지에 표시할 목록 수 파라미터
    const { query, page = 1, rows = 20 } = req.query;

    // 검색어를 MyBatis에 전달하기 위한 객체로 구성
    const params = {};
    if (query) {
      params.doctorName = query;
      params.medicalField = query;
    }

    let json = null;
    let pageInfo = null;

    try {
      const totalCount = await doctorService.getCount(params);
      pageInfo = pagenation(totalCount, page, rows);

      params.offset = pageInfo.offset;
      params.listCount = pageInfo.listCount;
      json = await doctorService.getList(params);
    } catch (err) {
      return next(err);
    }

    res.sendResult({ pagenation: pageInfo, data: json });
  });

  /** 단일행 조회 --> Read(SELECT) */
  router.get(`${url}/:id`, async (req, res, next) => {
    // 파라미터
    const { id } = req.params;

    // 파라미터 유효성검사
    try {
      regexHelper.value(id, "의사번호가 없습니다.");
      regexHelper.num(id, "의사번호가 잘못되었습니다.");
    } catch (err) {
      return next(err);
    }

    // 데이터 조회
    let json = null;

    try {
      json = await doctorService.getItem({
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
      doctorName,
      medicalField,
      treatmentPlace,
      departmentName,
    } = req.body;

    // 파라미터 유효성검사
    try {
      regexHelper.value(doctorName, "의사명이 없습니다.");
      regexHelper.value(medicalField, "담당진료분야가 없습니다.");
      regexHelper.value(treatmentPlace, "진료장소가 없습니다.");
    } catch (err) {
      return next(err);
    }

    // 데이터 저장
    let json = null;

    try {
      json = await doctorService.addItem({
        doctorName: doctorName,
        medicalField: medicalField,
        treatmentPlace: treatmentPlace,
        departmentName: departmentName,
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult({ data: json });
  });

  /** 데이터 수정 --> Update(UPDATE) */
  router.put(`${url}/:id`, async (req, res, next) => {
    // 파라미터
    const { id } = req.params;
    const { doctorName, medicalField, treatmentPlace, departmentName } =
      req.body;

    // 파라미터 유효성검사
    try {
      regexHelper.value(id, "의사번호가 없습니다.");
      regexHelper.num(id, "의사번호가 잘못되었습니다.");
      regexHelper.value(doctorName, "의사명이 없습니다.");
      regexHelper.value(medicalField, "담당진료분야가 없습니다.");
      regexHelper.value(treatmentPlace, "진료장소가 없습니다.");
      regexHelper.value(departmentName, "진료과명이 없습니다.");
    } catch (err) {
      return next(err);
    }

    // 데이터 저장
    let json = null;

    try {
      json = await doctorService.editItem({
        id: id,
        doctorName: doctorName,
        medicalField: medicalField,
        treatmentPlace: treatmentPlace,
        departmentName: departmentName,
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult({ data: json });
  });

  /** 데이터 삭제 --> Delete(DELETE) */
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
      await doctorService.deleteItem({
        id: id,
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult();
  });

  return router;
})();
