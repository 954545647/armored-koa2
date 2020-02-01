/**
 * @description 初始化程序
 */

const requireDirectory = require("require-directory");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

class InitApp {
  /**
   * 初始化方法
   * @param {app} app Koa实例
   */
  static initCore(app) {
    InitApp.app = app;
    InitApp.initMiddleWares();
    InitApp.initRouters();
  }

  /**
   * 自动加载全部路由文件并注册
   */
  static initRouters() {
    // 绝对路径
    const routesDirectory = `${process.cwd()}/src/routes`;
    requireDirectory(module, routesDirectory, {
      visit: whenLoadModule
    });

    /**
     * 当每个模块被加载的时候会触发调用
     * @param {obj} obj 路由实例
     */
    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InitApp.app.use(obj.routes(), obj.allowedMethods());
      }
    }
  }

  /**
   * 初始化并使用中间件
   */
  static initMiddleWares() {
    InitApp.app.use(bodyParser());
  }
}

module.exports = InitApp;
