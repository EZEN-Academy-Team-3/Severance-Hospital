import { BadRequestException } from './ExceptionHelper.js'; //내보낸 모듈가져옴

class RegexHelper{ //가져온 클래스 싱글톤패턴화
    static #current = null;

    static getInstance() { 
        if(RegexHelper.#current === null){
            RegexHelper.#current = new RegexHelper();
        }
        return RegexHelper.#current;
    }

    /**
     * 값의 존재 여부를 검사한다.
     * @param {HTMLElement} field 검사할 대상에 대한 input 요소의 DOM객체
     * @param {string} msg 값이 없을 경우 표시할 메세지 내용
     */
    //메서드
    value(field, msg) {
        const content = field.value

        if(content == undefined || content == null || (typeof content == 'string'&&content.trim().length ===0)){//스페이스바만 쳤을 때 보안
            throw new BadRequestException(msg,field);
            //값이 입력되지않았으면 400모듈에러 띄우기
        }
        return true;
    }

    

    /**
     * 입력값이 지정된 글자수를 초과했는지 검사
     * @param {HTMLElement} field 검사할 대상에 대한 input 요소의 DOM객체
     * @param {int} len 최대 글자수
     * @param {string} msg 값이 없을 경우 표시될 메세지
     */
    maxLength(field,len,msg){
        this.value(field,msg);

        const content = field.value;

        if(content.trim().length > len){
            throw new BadRequestException(msg,field);
        }
        return true;
    }

    /**
     * 입력값이 지정된 글자수를 미만인지 검사
     * @param {HTMLElement} field 검사할 대상에 대한 input 요소의 DOM객체
     * @param {int} len 최소 글자수
     * @param {string} msg 값이 없을 경우 표시될 메세지
     */
    minLength(field,len,msg){
        this.value(field,msg);
        let content = field.value;
        if(content.trim().length < len){
            throw new BadRequestException(msg,field);
        }
        return true;
    }
   
    /**
     * 두 값이 동일한지 검사
     * @param {string} origin 원본 에대한 input 요소의 DOM객체
     * @param {string} compare 검사 대상에대한 input 요소의 DOM객체
     * @param {string} msg 값이 없을 경우 표시될 메세지
     */
    compareTo(origin,compare,msg){
        var src = origin.value.trim(); //원본값을 가져온다
        var dsc = compare.value.trim(); //비교할 값을 가져온다

        if(src != dsc){
            throw new BadRequestException(msg,origin);
        }
        return true; //성공했음을 리턴
    }

    /**
     * 라디오나 체크박스가 선택된 항목인지 확인
     * @param  {NodeList}   field   검사할 CheckBox에 대한 컬랙션
     * @param {string} msg 값이 없을 경우 표시될 메세지
     */
    check(field,msg){
        const checkedItem = Array.from(field).filter((v,i)=>v.checked);
        if(checkedItem.length === 0 ){
            throw new BadRequestException(msg,field[0]);
        }
    }
    
    /** 
     * 라디오나 체크박스의 최소 선택 갯수 제한 
     * @param  {NodeList}   field   검사할 CheckBox에 대한 컬랙션
     * @param {string} msg 값이 없을 경우 표시될 메세지
     */
    checkMin(field,len,msg) {
        const checkedItem = Array.from(field).filter((v,i)=>v.checked);
        if(checkedItem.length < len ){
            throw new BadRequestException(msg,field[0]);
        }
    }

    /** 
     * 라디오나 체크박스의 최대 선택 갯수 제한 
     * @param  {NodeList}   field   검사할 CheckBox에 대한 컬랙션
     * @param {string} msg 값이 없을 경우 표시될 메세지
     */
    checkMax(field,len,msg) {
        const checkedItem = Array.from(field).filter((v,i)=>v.checked);
        if(checkedItem.length > len ){
            throw new BadRequestException(msg,field[0]);
        }
    }

    /**
     * 입력값이 정규표현식을 충족하는지 검사한다.
     * @param {HTMLElement} field 검사할 대상에 대한 input 요소의 DOM객체
     * @param {string} msg      표시할 메세지
     * @param {object} regexExpr      검사할 정규 표현식
     */
    field(field,msg,regexExpr){
       this.value(field,msg);

        //입력값이 없거나 입력값에 대한 정규표현식 검사가 실패라면?
        if(!regexExpr.test(field.value.trim())){
            throw new BadRequestException(msg,field);
        }
        return true;
    }
    /**
     * 숫자로만 이루어졌는지 검사하기 위해 field를 간접적으로 호출한다.
     * @param {HTMLElement} field 검사할 대상에 대한 input 요소의 DOM객체
     * @param {string} msg      표시할 메세지
     */
    num(field, msg){
        return this.field(field,msg,/^[0-9]*$/);
    }
    /**영문으로만 */
    eng(field,msg){
        return this.field(field, msg,/^[a-zA-Z]*$/);
    }
    /**한글로만 */
    kor(field,msg){
        return this.field(field, msg,/^[ㄱ-ㅎ가-힣]*$/);
    }
    /**영문과 숫자로만 */
    engNum(field,msg){
        return this.field(field, msg,/^[a-zA-Z0-9]*$/);
    }
    /**한글과 숫자로만 */
    korNum(field,msg){
        return this.field(field, msg,/^[ㄱ-ㅎ가-힣0-9]*$/);
    }
    /**이메일주소 형식인지 */
    email(field,msg){
        return this.field(field, msg,/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
    }
    /**핸드폰 번호 형식인지 */
    cellPhone(field,msg){
        return this.field(field, msg,/^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
    }
    /**집전화 형식인지 */
    telphone(field,msg){
        return this.field(field, msg,/^\d{2,3}\d{3,4}\d{4}$/);
    }
    /**핸드폰 형식과 집전화 번호 형식 둘 중 하나를 충족하는지 */
    phone(field,msg){
        this.value(field,msg);

        const content = field.value.trim();
        var check1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/; //핸드폰형식
        var check2 = /^\d{2,3}\d{3,4}\d{4}$/; //집전화형식
        
        //핸드폰 형식도 아니고,       집전화형식도 아니라면?
        if(!check1.test(content) && !check2.test(content)){
            throw new BadRequestException(msg,field);
        }
        return true;
    }
}

export default RegexHelper;