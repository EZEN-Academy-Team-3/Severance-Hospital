CREATE TABLE `drug` (
  `ITEM_SEQ` int NOT NULL COMMENT '품목일련번호',
  `ITEM_NAME` varchar(255) NOT NULL COMMENT '품목명',
  `ENTP_SEQ` int NOT NULL COMMENT '업체일련번호',
  `ENTP_NAME` varchar(255) NOT NULL COMMENT '업체명',
  `CHARTN` varchar(255) NOT NULL COMMENT '성상',
  `ITEM_IMAGE` varchar(255) DEFAULT NULL COMMENT '큰제품이미지',
  `PRINT_FRONT` varchar(255) DEFAULT NULL COMMENT '표시(앞)',
  `PRINT_BACK` varchar(255) DEFAULT NULL COMMENT '표시(뒤)',
  `DRUG_SHAPE` varchar(10) DEFAULT NULL COMMENT '의약품모양',
  `COLOR_CLASS1` varchar(10) DEFAULT NULL COMMENT '색깔(앞)',
  `COLOR_CLASS2` varchar(10) DEFAULT NULL COMMENT '색깔(뒤)',
  `LINE_FRONT` varchar(10) DEFAULT NULL COMMENT '분할선(앞)',
  `LINE_BACK` varchar(10) DEFAULT NULL COMMENT '분할선(뒤)',
  `LENG_LONG` float(3,1) DEFAULT NULL COMMENT '크기(장축)',
  `LENG_SHORT` float(3,1) DEFAULT NULL COMMENT '크기(단축)',
  `THICK` float(3,1) DEFAULT NULL COMMENT '크기(두께)',
  `IMG_REGIST_TS` date DEFAULT NULL COMMENT '약학정보원 이미지 생성일',
  `CLASS_NO` int DEFAULT NULL COMMENT '분류번호',
  `ETC_OTC_CODE` varchar(5) DEFAULT NULL COMMENT '전문/일반',
  `ITEM_PERMIT_DATE` date DEFAULT NULL COMMENT '품목허가일자',
  `SHAPE_CODE` int DEFAULT NULL COMMENT '모양코드',
  `MARK_CODE_FRONT_ANAL` varchar(30) DEFAULT NULL COMMENT '마크내용(앞)',
  `MARK_CODE_BACK_ANAL` varchar(30) DEFAULT NULL COMMENT '마크내용(뒤)',
  `MARK_CODE_FRONT_IMG` varchar(255) DEFAULT NULL COMMENT '마크이미지(앞)',
  `MARK_CODE_BACK_IMG` varchar(255) DEFAULT NULL COMMENT '마크이미지(뒤)',
  `ITEM_ENG_NAME` varchar(255) DEFAULT NULL COMMENT '제품영문명',
  `EDI_CODE` int DEFAULT NULL COMMENT '보험코드',
  `regDate` datetime DEFAULT NULL COMMENT '등록일시',
  `editDate` datetime DEFAULT NULL COMMENT '수정일시',
  PRIMARY KEY (`ITEM_SEQ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='의약품낱알정보'