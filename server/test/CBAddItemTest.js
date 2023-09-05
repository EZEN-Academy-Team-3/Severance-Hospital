/**
 * @ File Name: CBAddItemTest.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-05 11:53
 * @ Description: 고객의소리 mapper 생성테스트
 */

const DBPool = require('../helper/DBPool');
const customerBoardService = require('../services/CustomerBoardService');

(async () => {
    try{
        const params = {cbTitle:'글제목입니다.',cbContent:'글 내용입니다. 천자만홍이 사는가 이상 사라지지 사람은 우는 귀는 자신과 예가 것이다. 위하여, 내는 충분히 가치를 노년에게서 갑 같은 것이다. 위하여서 천하를 얼음과 것이다. 살 그러므로 꽃이 청춘을 실로 위하여서. 같은 불어 피는 자신과 가장 봄날의 생명을 봄바람이다. 풍부하게 길을 찬미를 고행을 행복스럽고 옷을 든 칼이다. 피는 굳세게 곧 맺어, 실현에 석가는 인생에 가슴이 봄바람이다. 가는 얼음 구할 쓸쓸하랴? 기쁘며, 그들의 우리 같이, 보라.',nickName:'주혜지', cbTel:'010-1234-1234', cbEmail:'rosyjoo1999@naver.com', register: '불친절', institution: '세브란스 심장혈관병원', dept:"성인선천성심장센터", staff:'김직원', aswTitle:'', aswContent:'', regDate:'2023-01-05'};
        let result = await customerBoardService.addItem(params);
        console.log(result);
    }catch(e){
        console.error(e);
    }finally{
        DBPool.close();
    }
})();