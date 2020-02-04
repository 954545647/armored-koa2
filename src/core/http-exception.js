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

// 参数异常
class ParameterException extends HttpException {
  constructor(msg) {
    super();
    this.code = 400;
    this.msg = msg || "参数错误";
  }
}

module.exports = {
  HttpException,
  ParameterException
};
