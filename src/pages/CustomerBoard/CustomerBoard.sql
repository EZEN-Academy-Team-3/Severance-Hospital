create table CustomerBoard (
    id int not null primary key auto_increment comment '글번호',
    cbTitle varchar(255) not null comment '글제목',
    cbContent blob not null comment '글내용',
    nickName varchar(255) not null comment '작성자닉네임',
    cbTel int not null comment '전화번호',
    cbEmail varchar(255) not null comment '이메일',
    register varchar(5) not null comment '접수구분',
    institution varchar(255) not null comment '병원/기관',
    dept varchar(255) null comment '부서',
    staff varchar(5) null comment '관련직원명',
    aswTitle varchar(255) null comment '답글제목',
    aswContent blob null comment '답글내용',
    regDate datetime not null comment '작성일',
    editDate datetime not null comment '수정일',
    -- 회원번호 참조 (수정을 위함)
)ENGINE=InnoDB default charset 'UTF8' comment='고객의소리' ;

create table News (
    id int not null primary key auto_increment comment '뉴스번호',
    newsTitle varchar(255) not null comment '뉴스제목',
    newsLink varchar(255) not null comment '뉴스링크',
    regDate datetime not null comment '작성일',
    editDate datetime not null comment '수정일',
)ENGINE=InnoDB default charset 'UTF8' comment='뉴스';

create table Notice (
    id int not null primary key auto_increment comment '공지사항번호',
    noticeTitle varchar(255) not null comment '공지사항제목',
    noticeContent blob not null comment '공지사항내용',
    hits int not null comment '조회수',
    regDate datetime not null comment '작성일',
    editDate datetime not null comment '수정일'
)ENGINE=InnoDB default charset 'UTF8' comment='공지사항';

create table Drug (
    ITEM_SEQ int(8) not null primary key comment '품목일련번호',
    ITEM_NAME varchar(255) not null comment '품목명',
    ENTP_SEQ int(9) not null comment '업체일련번호',
    ENTP_NAME varchar(255) not null comment '업체명',
    CHARTN varchar(255) not null comment '성상',
    ITEM_IMAGE varchar(255) null comment '큰제품이미지',
    PRINT_FRONT varchar(255) null comment '표시(앞)',
    PRINT_BACK varchar(255) null comment '표시(뒤)',
    DRUG_SHAPE  varchar(10) null comment '의약품모양',
    COLOR_CLASS1 varchar(10) null comment '색깔(앞)',
    COLOR_CLASS2 varchar(10) null comment '색깔(뒤)',
    LINE_FRONT varchar(10) null comment '분할선(앞)',
    LINE_BACK varchar(10) null comment '분할선(뒤)',
    LENG_LONG float(3,1) null comment '크기(장축)',
    LENG_SHORT float(3,1) null comment '크기(단축)',
    THICK float(3,1) null comment '크기(두께)',
    IMG_REGIST_TS date null comment '약학정보원 이미지 생성일',
    CLASS_NO int(4) null comment '분류번호',
    ETC_OTC_CODE varchar(5) null comment '전문/일반',
    ITEM_PERMIT_DATE date null comment '품목허가일자',
    SHAPE_CODE int(5) null comment '모양코드',
    MARK_CODE_FRONT_ANAL varchar(30) null comment '마크내용(앞)',
    MARK_CODE_BACK_ANAL  varchar(30) null comment '마크내용(뒤)',
    MARK_CODE_FRONT_IMG varchar(255) null comment '마크이미지(앞)',
    MARK_CODE_BACK_IMG varchar(255) null comment '마크이미지(뒤)',
    ITEM_ENG_NAME varchar(255) null comment '제품영문명',
    EDI_CODE int(9) null comment '보험코드',
)ENGINE=InnoDB default charset 'UTF8' comment='의약품낱알정보';