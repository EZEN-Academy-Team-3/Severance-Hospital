
create table UserInfo (
    id int not null primary key comment '회원번호',
    userId varchar(45) not null comment '회원아이디',
    userPassword varchar(45) not null comment '비밀번호',
    userName varchar(45) not null comment '성명',
    userSex varchar(45) not null comment '성별',
    userTel int not null comment '연락처',
    userPreTel int null comment '예비연락처',
    userEmail varchar(255) null comment '이메일',
    prtctorName varchar(45) null comment '법정대리인성명',
    prtctorSex varchar(45) null comment '법정대리인성별',
    prtctorBirth datetime null comment '법정대리인생년월일',
    regDate datetime not null comment '가입일',
    editDate datetime not null comment '개인정보수정일',
    pwEditDate datetime not null comment '비밀번호변경일',
    withdrawalDate datetime not null comment '탈퇴일',
    userCategory varchar(45) null comment '회원상태구분',
    withdrawalStatus varchar(45) null comment '탈퇴상태',
    withdrawalReason varchar(255) null comment '탈퇴이유',
    authCode varchar(45) null comment '인증코드',
    termsAgree varchar(45) null comment '이용약관동의여부',
    privateAgree varchar(45) null comment '개인정보수집동의여부',
    marketingAgree varchar(45) null comment '마케팅동의여부'
)ENGINE=InnoDB default charset 'UTF8' comment='회원정보' ;


