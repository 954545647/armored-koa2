/**
 * @description sequelize 实例
 */

const Sequelize = require("sequelize");

const { MYSQL_CONF, MYSQL_CONNECT } = require("@config/db");
const { isProd, isTest } = require("@utils/env");

const { host, password, user, datebase } = MYSQL_CONF;
const conf = {
  host,
  dialect: "mysql",
  timezone: "+08:00"
};

if (isTest) {
  conf.logging = () => {};
}

// 线上环境使用连接池
if (isProd) {
  conf.pool = MYSQL_CONNECT;
}

const seq = new Sequelize(datebase, user, password, conf);

// 同步数据库
// seq
//   .sync({
//     force: true
//   })
//   .then(() => {
//     console.log("sync ok");
//     process.exit();
//   });

module.exports = seq;
