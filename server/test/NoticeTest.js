/**
 * @ File Name: NoticeTest.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-09 12:48
 * @ Description: 공지사항 mapper 생성테스트
 */
const DBPool = require('../helper/DBPool');
const noticeService = require('../services/NoticeService');

// add
(async () => {
    try{
        const params = {noticeTitle:'2022년도 세브란스병원 레지던트 선발 온라인 공동설명회 안내2',noticeContent:'<p>2022년도 세브란스병원 레지던트 선발 온라인 공동설명회를 개최합니다.</p><p><br/></p><img src="https://sev.severance.healthcare/_res/yuhs/sev/img/snews/%EC%B5%9C%EC%A2%85.PNG" alt="공지사항"/>', hits:0
    };
        let result = await noticeService.addItem(params);
        console.log(result);
    }catch(e){
        console.error(e);
    }finally{
        DBPool.close();
    }
})();

// edit
// (async () => {
//     try{
//         const params = {id:1, noticeTitle:'[아시아경제] [하루만보하루천자 운동에 동참합니다] 윤동섭 연세의료원장',noticeLink:'https://view.asiae.co.kr/article/2023010407595481794', editDate:'2023-01-05'};
//         let result = await noticeService.editItem(params);
//         console.log(result);
//     }catch(e){
//         console.error(e);
//     }finally{
//         DBPool.close();
//     }
// })();


// 다중행조회
// (async () => {
//     try{
//         let result = await noticeService.getList();
//         console.log(result);
//     }catch(e){
//         console.error(e);
//     }finally{
//         DBPool.close();
//     }
// })();

// 단일조회
// (async () => {
//     try{
//         const params = {id:1};
//         let result = await noticeService.getItem(params);
//         console.log(result);
//     }catch(e){
//         console.error(e);
//     }finally{
//         DBPool.close();
//     }
// })();

// 이전글, 다음글 조회
// (async () => {
//     try{
//         const params = {id:1};
//         let result = await noticeService.getPreNext(params);
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
//         await noticeService.deleteItem(params);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         DBPool.close();
//     }
// })();