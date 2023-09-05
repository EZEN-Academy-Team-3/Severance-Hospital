-- UserResult
CREATE TABLE `userresult` (
  `id` int NOT NULL COMMENT '결과번호',
  `visitDate` datetime DEFAULT NULL COMMENT '내원일자',
  `regDate` datetime NOT NULL COMMENT '등록일시',
  `editDate` datetime DEFAULT NULL COMMENT '수정일시',
  `userinfo_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_userresult_userinfo1_idx` (`userinfo_id`),
  CONSTRAINT `fk_userresult_userinfo1` FOREIGN KEY (`userinfo_id`) REFERENCES `userinfo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='회원결과';



-- UserInfo
CREATE TABLE `userinfo` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '회원번호',
  `userId` varchar(45) NOT NULL COMMENT '회원아이디',
  `userPassword` varchar(255) NOT NULL COMMENT '비밀번호',
  `userName` varchar(45) NOT NULL COMMENT '성명',
  `userSex` enum('M','F') NOT NULL COMMENT '성별',
  `userTel` varchar(30) NOT NULL COMMENT '연락처',
  `userPreTel` varchar(30) DEFAULT NULL COMMENT '예비연락처',
  `userEmail` varchar(150) DEFAULT NULL COMMENT '이메일',
  `prtctorName` varchar(45) DEFAULT NULL COMMENT '법정대리인성명',
  `prtctorSex` enum('M','F') DEFAULT NULL COMMENT '법정대리인성별',
  `prtctorBirth` date DEFAULT NULL COMMENT '법정대리인생년월일',
  `regDate` datetime NOT NULL COMMENT '가입일',
  `editDate` datetime DEFAULT NULL COMMENT '개인정보수정일',
  `pwEditDate` datetime DEFAULT NULL COMMENT '비밀번호변경일',
  `withdrawalDate` datetime DEFAULT NULL COMMENT '탈퇴일',
  `userCategory` enum('N','S') NOT NULL COMMENT 'N = 일반회원 S = SNS회원',
  `withdrawalStatus` enum('Y','N') NOT NULL COMMENT 'Y = 탈퇴  N = 가입상태',
  `withdrawalReason` varchar(255) DEFAULT NULL COMMENT '탈퇴이유',
  `authCode` varchar(45) DEFAULT NULL COMMENT '인증코드',
  `termsAgree` enum('Y','N') NOT NULL COMMENT '이용약관동의여부',
  `privateAgree` enum('Y','N') NOT NULL COMMENT '개인정보수집동의여부',
  `marketingAgree` enum('Y','N') NOT NULL COMMENT '마케팅동의여부',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='회원정보';
