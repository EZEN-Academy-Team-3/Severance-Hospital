/**
 * @ File Name: NewsAddTest.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-05 13:45
 * @ Description: 뉴스 mapper 생성테스트
 */
const DBPool = require('../helper/DBPool');
const newsService = require('../services/NewsService');

// 뉴스add
// (async () => {
//     try{
//         const params = {newsTitle:'[아시아경제] 뉴스제목입니다.',newsLink:'https://view.asiae.co.kr/article/2023010407595481794',regDate:'2023-01-05', editDate:'2023-01-05'};
//         let result = await newsService.addItem(params);
//         console.log(result);
//     }catch(e){
//         console.error(e);
//     }finally{
//         DBPool.close();
//     }
// })();

// 뉴스 edit
// (async () => {
//     try{
//         const params = {id:1, newsTitle:'[아시아경제] [하루만보하루천자 운동에 동참합니다] 윤동섭 연세의료원장',newsLink:'https://view.asiae.co.kr/article/2023010407595481794', editDate:'2023-01-05'};
//         let result = await newsService.editItem(params);
//         console.log(result);
//     }catch(e){
//         console.error(e);
//     }finally{
//         DBPool.close();
//     }
// })();

//뉴스 다중행조회
// (async () => {
//     try{
//         let result = await newsService.getList();
//         console.log(result);
//     }catch(e){
//         console.error(e);
//     }finally{
//         DBPool.close();
//     }
// })();

//뉴스 단일조회
(async () => {
    try{
        const params = {id:1};
        let result = await newsService.getItem(params);
        console.log(result);
    }catch(e){
        console.error(e);
    }finally{
        DBPool.close();
    }
})();