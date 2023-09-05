/**
 * @ File Name: HospitalController.js
 * @ Author: 오태원
 * @ Last Update:
 * @ Description: 병원 컨트롤러
 */

const express = require("express");
const logger = require("../helper/LogHelper");
const regexHelper = require("../helper/RegexHelper");
const hospitalService = require("../services/HospitalService");
const { pagenation } = require("../helper/UtilHelper");
const { ForbiddenException } = require("../helper/ExceptionHelper");

module.exports = (() => {
    const url = "/hospital";
    const router = express.Router();

    /** 전체 목록 조회 --> Read(SELECT) */
    router.get(url, async (req, res, next) => {
        // 검색어, 페이지 번호, 한 페이지에 표시할 목록 수 파라미터
        const { query, page=1, rows=5 } = req.query;

        // 검색어를 MyBatis에 전달하기 위한 객체로 구성
        const params = {};
        if (query) {
            params.hospitalName = query;
        }

        // 데이터 조회
        let json = null;

        try {
            // 전체 데이터 수 얻기
            const totalCount = await hospitalService.getCount(params);
            pageInfo = pagenation(totalCount, page, rows);

            params.offset = pageInfo.offset;
            params.listCount = pageInfo.listCount;
            json = await hospitalService.getList(params);
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
            regexHelper.value(id, "병원번호가 없습니다.");
        } catch (err) {
            return next(err);
        }

        // 데이터 조회
        let json = null;

        try {
            json = await hospitalService.getItem({
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
        const { hospitalName } = req.body;

        // 유효성 검사
        try {
            regexHelper.value(hospitalName, "병원명이 없습니다.");
        } catch (err) {
            return next(err);
        }

        // 데이터 저장
        let json = null;

        try {
            json = await hospitalService.addItem({
                hospitalName: hospitalName
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
        const { hospitalName } = req.body;

        // 유효성 검사
        try {
            regexHelper.value(id, "병원번호가 없습니다.");
            regexHelper.num(id, "병원번호가 잘못되었습니다.");
            regexHelper.value(hospitalName, "병원명이 없습니다.");
        } catch (err) {
            return next(err);
        }

        // 데이터 저장
        let json = null;

        try {
            json = await hospitalService.editItem({
                id: id,
                hospitalName: hospitalName,
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
            regexHelper.value(id, "병원번호가 없습니다.");
        } catch (err) {
            return next(err);
        }

        try {
            await hospitalService.deleteItem({
                id: id,
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult();
    });

    return router;
})();