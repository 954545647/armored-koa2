/**
 * @description 特定类型的异常集合
 */

// 服务器异常
class HttpException extends Error {
  constructor(msg = "服务器异常", code = 400) {
    super();
    this.msg = msg;
    this.code = code;
  }
}

module.exports = {
  HttpException
};
