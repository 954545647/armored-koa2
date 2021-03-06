/**
 * @description 用户参数校验模型
 */
const { Validator, Rule } = require("@core/validator");
class RegisterValidator extends Validator {
  constructor() {
    super();
    this.age = new Rule("isOptional", "", 15);
    this.username = [
      new Rule("isLength", "昵称长度必须在4-20之间", {
        min: 4,
        max: 20
      })
    ];
    this.password1 = [
      new Rule("isLength", "密码至少6个字符,最多20个字符", {
        min: 6,
        max: 20
      })
      // new Rule(
      //   "matches",
      //   "密码长度必须在6~22位之间，包含字符、数字和 _ ",
      //   "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]"
      // )
    ];
    this.password2 = this.password1;
  }

  validatePassword(vals) {
    const psw1 = vals.body.password1;
    const psw2 = vals.body.password2;
    if (psw1 !== psw2) {
      throw new Error("两次输入的密码不一致，请重新输入");
    }
  }
}

module.exports = RegisterValidator;
