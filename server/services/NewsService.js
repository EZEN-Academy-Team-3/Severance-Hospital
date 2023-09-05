/**
 * @ File Name: NewsService.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-05 13:40
 * @ Description: 뉴스 service
 */

const mybatisMapper = require("mybatis-mapper");
const DBPool = require("../helper/DBPool");
const { RuntimeException } = require("../helper/ExceptionHelper");

class NewsService {
  /** 생성자 - Mapper파일을 로드한다 */
  constructor() {
    //mapper의 위치는 이 소스파일이 아닌 프로젝트 root를 기준으로 상대경로
    mybatisMapper.createMapper(["./server/mappers/NewsMapper.xml"]);
  }

  /** 목록데이터를 조회 */
  async getList(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement("NewsMapper", "selectList", params);
      let [result] = await dbcon.query(sql);

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

  /** 단일데이터를 조회 */
  async getItem(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement("NewsMapper", "selectItem", params);
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

  /** 데이터를 추가하고 추가된 결과를 조회하여 리턴 */
  async addItem(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement("NewsMapper", "insertItem", params);
      let [{ insertId, affectedRows }] = await dbcon.query(sql);

      if (affectedRows === 0) {
        throw new RuntimeException("저장된 데이터가 없습니다.");
      }

      //새로 저장된 데이터의 PK값을 활용하여 다시 조회
      sql = mybatisMapper.getStatement("NewsMapper", "selectItem", {
        id: insertId
      });
      let [result] = await dbcon.query(sql);

      if (result.length === 0) {
        throw new RuntimeException("저장된 데이터를 조회할 수 없습니다.");
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

  /** 데이터를 수정하고 수정된 결과를 조회하여 리턴 */
  async editItem(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement("NewsMapper", "updateItem", params);
      let [{ affectedRows }] = await dbcon.query(sql);

      if (affectedRows === 0) {
        throw new RuntimeException("수정된 데이터가 없습니다.");
      }

      //새로 저장된 데이터의 PK값을 활용하여 다시 조회
      sql = mybatisMapper.getStatement("NewsMapper", "selectItem", params);
      let [result] = await dbcon.query(sql);

      if (result.length === 0) {
        throw new RuntimeException("수정된 데이터를 조회할 수 없습니다.");
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

  /** 데이터를 삭제 */
  async deleteItem(params) {
    let dbcon = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement("NewsMapper", "deleteItem", params);
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

  /** 전체 데이터 수 조회 (페이징) */
  async getCount(params) {
    let dbcon = null;
    let cnt = 0;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement("NewsMapper", "selectCountAll", params);
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

module.exports = new NewsService();
