const router = require("koa-router")();
const { User } = require("@db/model/index");
router.get("/", async (ctx, next) => {
  // 查询测试
  const rex = await User.findOne({
    where: {
      userName: "rex"
    }
  });
  console.log(rex.dataValues);
  ctx.body = {
    name: "rrr"
  };
});

router.post("/test", async (ctx, next) => {
  const { name } = ctx.request.body;
  // 新建用户
  const user = await User.create({
    username: name,
    password: "123",
    phone: "123"
  });
  console.log(user.dataValues);
  ctx.body = {
    name,
    user
  };
});

module.exports = router;
