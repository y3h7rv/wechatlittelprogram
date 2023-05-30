import { LinRouter, NotFound, disableLoading } from 'lin-mizar';
import {  CreateMessageValidator} from '../../validator/treeholemessage.js';
import { thmessageDao } from '../../dao/treeholemessage.js';
import { MessageNotFound } from '../../lib/exception.js';

// book 的红图实例
const messageApi = new LinRouter({
    prefix: '/treehole/Message',
    module: '树洞内容'
  });
  
  // book 的dao 数据库访问层实例
  const thmessageDto = new thmessageDao();

  messageApi.post("/publish_new_message/",async ctx => {
    const v = await new CreateMessageValidator().validate(ctx);
    console.log("step_one");
    await thmessageDto.addMessage(v);
    console.log("step_two");
    ctx.json(v);
  })

  messageApi.post("/get_all_messages/",async ctx => {
    const messages = await thmessageDto.getmessages();
    // if (!books || books.length < 1) {
    //   throw new NotFound({
    //     message: '没有找到相关书籍'
    //   });
    // }
    ctx.json(messages);
  })
  messageApi.post("/get_one_user_all_messages", async ctx => {
    const v = await new messageSearchValidator().validate(ctx);
    const message = await thmessageDto.getMessageByuserid(v.get('query.q'));
    if (!message) {
      throw new MessageNotFound();
    }
    ctx.json(book);
  });
  
  export{messageApi};