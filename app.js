/**
 * @description 入口文件
 */
const Koa = require("koa");
const app = new Koa();
const InitApp = require("./src/core/init");

InitApp.initCore(app);

app.listen(3000);
