/**
 * @ File Name: drugAddTest.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-05 13:45
 * @ Description: 의약품 mapper 생성테스트
 */
const DBPool = require('../helper/DBPool');
const drugService = require('../services/DrugService');

// add
// (async () => {
//     try{
//         const params = {drugTitle:'[중앙일보] 연세대 송도 세브란스병원 착공… 2026년 말 개원 목표',drugLink:'https://www.joongang.co.kr/article/25129732#home'};
//         let result = await drugService.addItem(params);
//         console.log(result);
//     }catch(e){
//         console.error(e);
//     }finally{
//         DBPool.close();
//     }
// })();

// edit
// (async () => {
//     try{
//         const params = {id:1, drugTitle:'[아시아경제] [하루만보하루천자 운동에 동참합니다] 윤동섭 연세의료원장',drugLink:'https://view.asiae.co.kr/article/2023010407595481794', editDate:'2023-01-05'};
//         let result = await drugService.editItem(params);
//         console.log(result);
//     }catch(e){
//         console.error(e);
//     }finally{
//         DBPool.close();
//     }
// })();

// 다중행조회
(async () => {
    try{
        const params = {
            ITEM_NAME: '리바로트정',
            DRUG_SHAPE: '원형',
            COLOR_CLASS: '빨간',
            trapezoid: '정제',
            line: '-'
        }
        let result = await drugService.getList(params);
        console.log(result);
    }catch(e){
        console.error(e);
    }finally{
        DBPool.close();
    }
})();

// 단일조회
// (async () => {
//     try{
//         const params = {id:202103422};
//         let result = await drugService.getItem(params);
//         console.log(result);
//     }catch(e){
//         console.error(e);
//     }finally{
//         DBPool.close();
//     }
// })();

//뉴스삭제
// (async () => {
//     try {
//         const params = { id: 16 };
//         await drugService.deleteItem(params);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         DBPool.close();
//     }
// })();