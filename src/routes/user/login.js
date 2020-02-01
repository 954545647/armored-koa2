const router = require("koa-router")();

router.get("/", async (ctx, next) => {
  ctx.body = {
    name: "rrr"
  };
});

router.post("/test", async (ctx, next) => {
  const { name } = ctx.request.body;
  if (name == "rex") {
    throw new global.errs.HttpException();
  }
  ctx.body = {
    name
  };
});

module.exports = router;
