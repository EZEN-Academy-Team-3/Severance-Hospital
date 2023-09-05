
create table UserInfo (
    id int not null primary key comment '결과번호',
    result varchar(255) not null comment '검사결과',
    mediInfo varchar(255) not null comment '약처방정보',
    visitDate datetime not null comment '내원일자',
    finOut varchar(255) not null comment '입퇴원내역',
    regDate datetime not null comment '등록일시',
    editDate datetime not null comment '수정일시'
)ENGINE=InnoDB default charset 'UTF8' comment='회원정보' ;
