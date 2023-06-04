import { Lin, LinValidator, Rule } from 'lin-mizar';

class CreateMessageValidator extends LinValidator {
  constructor () {
    super();
    this.user_id = new Rule('isNotEmpty', {code:1,msg:'参数不足：user_id'});
    this.username = new Rule('isNotEmpty', {code:1,msg:'参数不足：username'});
    this.face_url = new Rule('isNotEmpty', {code:1,msg:'参数不足：face_url'});
    this.content = new Rule('isNotEmpty', {code:1,msg:'参数不足：content'});
    this.total_likes=new Rule('isNotEmpty', {code:1,msg:'参数不足：total_likes'});
    this.send_timestamp=new Rule('isNotEmpty', {code:1,msg:'参数不足：send_timestamp'});
  }
}
class messageSearchValidator extends LinValidator{
  constructor(){
    super();
this.user_id=new Rule('isNotEmpty',{code:1,msg:'参数不足：user_id'})
  }
}
class userSearchValidator extends LinValidator{
  constructor(){
    super();
  this.username=new Rule('isNotEmpty',{code:1,msg:'参数不足：username'})
  }
}
class do_likeValidator extends LinValidator{
  constructor(){
    super();
    this.user_id=new Rule('isNotEmpty',{code:1,msg:'参数不足：user_id'});
    this.id=new Rule('isNotEmpty',{code:1,msg:'参数不足：message_id'})

  }
}
class parameterValidator extends LinValidator{
  constructor(){
    super();
    this.user_id=new Rule('isNotEmpty',{code:1,msg:'参数不足：user_id'});
    this.id=new Rule('isNotEmpty',{code:1,msg:'参数不足：message_id'})  }
}
export { CreateMessageValidator , messageSearchValidator,do_likeValidator,parameterValidator,userSearchValidator};