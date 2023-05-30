import { LinValidator, Rule } from 'lin-mizar';

class TreeholeUserValidator extends LinValidator {
  constructor () {
    super();
    this.phone = new Rule('isNotEmpty', '必须传入手机号');
    this.password = new Rule('isNotEmpty', '必须传入密码');
  }
}

class TreeholeRegisterValidator extends LinValidator {
  constructor () {
    super();
    this.username =  new Rule('isNotEmpty', {code:1,msg:'参数不足：username'});
    this.phone = new Rule('isNotEmpty', {code:1,msg:'参数不足：phone'});
    this.face_url = new Rule('isNotEmpty',  {code:1,msg:'参数不足：face_url'});
    this.password = new Rule('isNotEmpty', {code:1,msg:'参数不足：password'});
    this.password_again = new Rule('isNotEmpty',  {code:1,msg:'参数不足：password_again'});
  }
    validateConfirmPassword(data) {
      if (!data.body.password || !data.body.password_again) {
        return [false, '两次输入的密码不一致，请重新输入'];
      }
      const ok = data.body.password === data.body.password_again;
      if (ok) {
        return ok;
      } else {
        return [false, '两次输入的密码不一致，请重新输入'];
      }
    }
}


export { TreeholeUserValidator,TreeholeRegisterValidator};