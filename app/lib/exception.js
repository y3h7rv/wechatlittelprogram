import { HttpException, config } from 'lin-mizar';

const CodeMessage = config.getItem('codeMessage', {});

/**
 * 自定义异常类
 */
class BookNotFound extends HttpException {
  constructor (ex) {
    super();
    this.status = 404;
    this.code = 10022;
    this.message = CodeMessage.getMessage(10022);
    this.exceptionHandler(ex);
  }
}
class UserLoginFailed extends HttpException {
  constructor (ex) {
    super();
    this.status = 404;
    this.code = 10022;
    this.message = CodeMessage.getMessage(10010);
    this.exceptionHandler(ex);
  }
}

class SignUpFiled extends HttpException{
  constructor(ex){
    super();
    this.status = 404;
    this.code= 10081;
    this.message=CodeMessage.getMessage(10081);

  }
}
class MessageNotFound extends HttpException {
  constructor (ex) {
    super();
    this.status = 404;
    this.code = 10022;
    this.message = CodeMessage.getMessage(10022);
    this.exceptionHandler(ex);
  }
}
export { BookNotFound,UserLoginFailed,SignUpFiled,MessageNotFound };
