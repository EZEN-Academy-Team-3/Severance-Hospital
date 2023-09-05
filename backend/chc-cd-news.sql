--
-- Table structure for table `cooperationdoctor`
--

DROP TABLE IF EXISTS `cooperationdoctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cooperationdoctor` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '협력의사 id',
  `name` varchar(30) NOT NULL COMMENT '협력의사 이름',
  `regDate` datetime NOT NULL COMMENT '등록일시',
  `editDate` datetime DEFAULT NULL COMMENT '변경일시',
  `cooperationHospitalClinic_id` int NOT NULL COMMENT '협력병원 또는 의원 id FK',
  PRIMARY KEY (`id`),
  KEY `fk_cooperationDoctor_cooperationHospitalClinic1_idx` (`cooperationHospitalClinic_id`),
  CONSTRAINT `fk_cooperationDoctor_cooperationHospitalClinic1` FOREIGN KEY (`cooperationHospitalClinic_id`) REFERENCES `cooperationhospitalclinic` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cooperationhospitalclinic`
--

DROP TABLE IF EXISTS `cooperationhospitalclinic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cooperationhospitalclinic` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '협력병원 또는 의원  id',
  `area` varchar(30) NOT NULL COMMENT '협력병원 또는 의원 지역',
  `introduction` varchar(30) DEFAULT NULL COMMENT '협력병원 또는 의원 소개',
  `address` varchar(255) NOT NULL COMMENT '협력병원 또는 의원 주소',
  `zipCode` char(5) NOT NULL COMMENT '협력병원 또는 의원 우편번호',
  `tel` varchar(30) NOT NULL COMMENT '협력병원 또는 의원 전화',
  `name` varchar(30) NOT NULL COMMENT '협력병원 또는 의원 이름',
  `department` varchar(255) DEFAULT NULL COMMENT '협력병원 또는 의원 진료과',
  `url` varchar(255) DEFAULT NULL COMMENT '협력병원 또는 의원 url',
  `division` enum('H','C') NOT NULL COMMENT '협력병원 또는 의원 구분',
  `regDate` datetime NOT NULL COMMENT '등록일시',
  `editDate` datetime DEFAULT NULL COMMENT '변경일시',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=747 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '뉴스번호',
  `newsTitle` varchar(255) NOT NULL COMMENT '뉴스제목',
  `newsLink` varchar(255) NOT NULL COMMENT '뉴스링크',
  `regDate` datetime NOT NULL COMMENT '작성일',
  `editDate` datetime DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='뉴스';
/*!40101 SET character_set_client = @saved_cs_client */;
