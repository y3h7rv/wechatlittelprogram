import { LinRouter ,config} from 'lin-mizar';
import { TreeholeUserValidator,TreeholeRegisterValidator } from '../../validator/treehole.js';
import { ThuserDao } from '../../dao/treehole.js';
import { UserLoginFailed,SignUpFiled } from '..//..//lib//exception.js';

// msg 的dao 数据库访问层实例
const thuserDto = new ThuserDao();

const userApi = new LinRouter({
  prefix: "/treehole/user",
  module: '树洞用户'
});

userApi.get("/:id", async ctx => {
  ctx.json({
    message: "hello, 树洞接口"
  });
});

userApi.post("/login/", async ctx => {
  const v = await new TreeholeUserValidator().validate(ctx);
  console.log("\n=====>debug log======>" + v.get('body.phone'));
  let phone = v.get('body.phone');
  const user = await thuserDto.login(phone);
  if (!user||user.password!=v.get('body.password')) {
    throw new UserLoginFailed();
  }
  ctx.json(user);
  
});

userApi.post('/sign/',async ctx => {
    const v = await new TreeholeRegisterValidator().validate(ctx);
    console.log("\n=====>debug log======>\n" + "phone_number:"+v.get('body.phone')+"\nusername:"+v.get('body.username')+"\nface_url:"+v.get('body.face_url'))
    const new_user = await thuserDto.createUser(v);
    console.log(new_user);
    if(!new_user){
      throw new SignUpFiled();
    }else{
      ctx.json(new_user);
      }
      
    }
  
);

export { userApi };