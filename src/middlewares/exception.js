/**
 * 全局处理异常中间件
 * @param {ctx} ctx
 * @param {function} next 中间件
 */

const { isDev } = require("@utils/env");
const { HttpException } = require("@core/http-exception");
const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    const isHttpException = error instanceof HttpException;
    console.error(error);
    // 开发环境下直接抛出
    if (isDev && !isHttpException) {
      throw error;
    }
    // 已知异常
    if (isHttpException) {
      ctx.body = {
        msg: error.msg,
        request: `${ctx.method} ${ctx.path}`
      };
      ctx.status = error.code;
      // 未知异常
    } else {
      ctx.body = {
        msg: "未知错误！",
        request: `${ctx.method} ${ctx.path}`
      };
      ctx.status = 500;
    }
  }
};

module.exports = catchError;
