import Sequelize from 'sequelize';
import { NotFound, Forbidden,RepeatException,generate } from 'lin-mizar';
import sequelize from '../lib/db.js';
import {  Message } from '../model/treeholemessage';
class thmessageDao{
  async addMessage (v) {
    const message = new Message();
    message.user_id=v.get('body.user_id'),
    message.username= v.get('body.username'),
    message.face_url=v.get('body.face_url'),
    message.content = v.get('body.content'),
    message.total_likes=v.get('body.total_likes'),
    message.send_timestamp=v.get('body.send_timestamp'),
    await message.save();
  }
  async getmessages(){
    const messages = await Message.findAll();
    return messages;
  }
}
export{thmessageDao};