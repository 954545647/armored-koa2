/**
 * @description 登录测试接口
 */
const router = require("koa-router")();
const fs = require("fs");
const path = require("path");
const RegisterValidator = require("@validators/user");

router.get("/", async ctx => {
  const file = process.cwd();
  const fileName = path.join(file, "index.html");
  ctx.set({ "Content-Type": "text/html" });
  ctx.body = fs.readFileSync(fileName);
  return;
});

router.get("/user/:id", async ctx => {
  let v = await new RegisterValidator().validate(ctx);
});

router.post("/test", async ctx => {
  let v = await new RegisterValidator().validate(ctx);
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
