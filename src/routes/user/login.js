/**
 * @description 登录测试接口
 */
const router = require("koa-router")();
const fs = require("fs");
const path = require("path");
const { User } = require("@db/model/index");

router.get("/", async ctx => {
  const file = process.cwd();
  const fileName = path.join(file, "index.html");
  ctx.set({ "Content-Type": "text/html" });
  ctx.body = fs.readFileSync(fileName);
  return;
});

router.post("/test", async ctx => {
  const { name } = ctx.request.body;
  // 新建用户
  const user = await User.create({
    username: name,
    password: "123",
    phone: "123"
  });
  console.log(user.dataValues);
  // 查询测试
  const rex = await User.findOne({
    where: {
      userName: "rex"
    }
  });
  console.log(rex.dataValues);
  ctx.body = {
    name,
    user
  };
});

router.post("/login", async ctx => {
  if (ctx.session.user) {
    ctx.body = `hello, ${ctx.session.user}`;
  } else {
    const { user, password } = ctx.request.body;
    ctx.session = {
      user,
      password
    };
    ctx.body = "u are first login";
  }

  ctx.body = {};
});

module.exports = router;
