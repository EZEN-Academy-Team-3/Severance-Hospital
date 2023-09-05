/*
 * @ File name: UserResultController.js
 * @ Author: 김다보미(cdabomi60@gmail.com)
 * @ Last Update: 2023-01-11 17:50
 * @ Description: 회원결과 컨트롤러
*/

const express = require("express");
const regexHelper = require('../helper/RegexHelper');
const UserResultService = require("../services/UserResultService");
const { pagenation } = require('../helper/UtilHelper');

module.exports = (() => {
    const url = "/userresult";
    const router = express.Router();

    /** 전체 목록 조회 --> Read(SELECT) */
    router.get(url, async (req, res, next) => {
        // 검색어, 페이지 번호, 한 페이지에 표시할 목록 수 파라미터
        const { query, page=1, rows=5 } = req.query;

        // 검색어를 MyBatis에 전달하기 위한 객체로 구성
        const params = {};
        if (query) {
            params.departmentName = query;
            params.doctorName = query;
            params.visitDate = query;
        }

        // 데이터 조회
        let json = null;

        try {
            // 전체 데이터 수 얻기
            const totalCount = await UserResultService.getCount(params);
            pageInfo = pagenation(totalCount, page, rows);

            params.offset = pageInfo.offset;
            params.listCount = pageInfo.listCount;
            json = await UserResultService.getList(params);
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
            regexHelper.value(id, "결과번호가 없습니다.");
            regexHelper.num(id, "결과번호가 잘못되었습니다.");
        } catch (err) {
            return next(err);
        }

        // 데이터 조회
        let json = null;

        try {
            json = await UserResultService.getItem({
              id: id
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json });
    });

    /** 데이터 추가 --> Create(INSERT) */
    router.post(url, async (req, res, next) => {
        // 파라미터 받기
        const { departmentName,doctorName,visitDate,regDate,editDate } = req.body;

        // 유효성 검사
        try {
            regexHelper.value(departmentName, "진료과가 없습니다.");
            regexHelper.value(doctorName, "의사이름이 없습니다.");
            regexHelper.value(visitDate, "내원날짜가 없습니다.");
        } catch (err) {
            return next(err); 
        }

        // 데이터 저장
        let json = null;

        try {
            json = await UserResultService.addItem({
                departmentName: departmentName,
                doctorName: doctorName,
                visitDate: visitDate,
                regDate: regDate,
                editDate: editDate
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
        const { departmentName,doctorName,visitDate,regDate,editDate } = req.body;

        // 유효성 검사
        try {
            regexHelper.value(departmentName, "진료과가 없습니다.");
            regexHelper.value(doctorName, "의사이름이 없습니다.");
            regexHelper.value(visitDate, "내원날짜가 없습니다.");
        } catch (err) {
            return next(err);
        }

        // 데이터 저장
        let json = null;

        try {
            json = await UserResultService.editItem({
                id: id,
                departmentName: departmentName,
                doctorName: doctorName,
                visitDate: visitDate,
                regDate: regDate,
                editDate: editDate
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
            regexHelper.value(id, "결과번호가 없습니다.");
            regexHelper.num(id, "결과번호가 잘못되었습니다.");
        } catch (err) {
            return next(err);
        }

        try {
            await UserResultService.deleteItem({
              id: id
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult();
    });

    return router;
})();