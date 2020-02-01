const router = require("koa-router")();

router.get("/", async (ctx, next) => {
  ctx.body = {
    name: "rrr"
  };
});

router.post("/test", async (ctx, next) => {
  const { name } = ctx.request.body;
  ctx.body = {
    name
  };
});

module.exports = router;
