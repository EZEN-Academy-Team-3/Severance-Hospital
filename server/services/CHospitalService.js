/**
 * @ File Name: CHospitalService.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-09 00:33:33
 * @ Description: 협력병원 서비스
 */

/** import */
const mybatisMapper = require("mybatis-mapper");
const DBPool = require("../helper/DBPool");
const { RuntimeException } = require("../helper/ExceptionHelper");

class CHospitalService {
  /** 생성자 - Mapper파일을 로드한다 */
  constructor() {
    // mapper의 위치는 이 소스 파일이 아닌 프로젝트 root를 기준으로 상대경로
    mybatisMapper.createMapper(["./server/mappers/CHospitalMapper.xml"]);
  }

  /** 목록 조회 */
  async getList(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement("CHospitalMapper", "selectList", params);
      let [result] = await dbcon.query(sql);

      if (result.length === 0) {
        throw new RuntimeException("조회된 데이터가 없습니다.");
      }

      data = result;
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) {
        dbcon.release();
      }
    }

    return data;
  }

  /** 단일 조회 */
  async getItem(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement("CHospitalMapper", "selectItem", params);
      let [result] = await dbcon.query(sql);

      if (result.length === 0) {
        throw new RuntimeException("조회된 데이터가 없습니다.");
      }

      data = result[0];
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) {
        dbcon.release();
      }
    }

    return data;
  }

  /** 지역별 데이터 수 조회 */
  async getAreaCount(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement("CHospitalMapper", "selectAreaCount", params);
      let [result] = await dbcon.query(sql);

      if (result.length === 0) {
        throw new RuntimeException("조회된 데이터가 없습니다.");
      }

      data = result;
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) {
        dbcon.release();
      }
    }

    return data;
  }

  /** 추가 */
  async addItem(params) {
    let dbcon = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement("CHospitalMapper", "insertItem", params);
      let [{ affectedRows }] = await dbcon.query(sql);

      if (affectedRows === 0) {
        throw new RuntimeException("저장된 데이터가 없습니다.");
      }
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) {
        dbcon.release();
      }
    }
  }

  /** 수정 */
  async editItem(params) {
    let dbcon = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement("CHospitalMapper", "updateItem", params);
      let [{ affectedRows }] = await dbcon.query(sql);

      if (affectedRows === 0) {
        throw new RuntimeException("저장된 데이터가 없습니다.");
      }
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) {
        dbcon.release();
      }
    }
  }

  /** 삭제 */
  async deleteItem(params) {
    let dbcon = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement("CHospitalMapper", "deleteItem", params);
      let [{ affectedRows }] = await dbcon.query(sql);

      if (affectedRows === 0) {
        throw new RuntimeException("삭제된 데이터가 없습니다.");
      }
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) {
        dbcon.release();
      }
    }
  }

  /** 전체 데이터 수 조회 */
  async getCount(params) {
    let dbcon = null;
    let cnt = 0;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement("CHospitalMapper", "selectCountAll", params);
      let [result] = await dbcon.query(sql);

      if (result.length > 0) {
        cnt = result[0].cnt;
      }
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) {
        dbcon.release();
      }
    }

    return cnt;
  }
}

module.exports = new CHospitalService();
