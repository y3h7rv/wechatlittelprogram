import { InfoCrudMixin } from 'lin-mizar';
import { merge } from 'lodash';
import { Sequelize, Model } from 'sequelize';
import sequelize from '../lib/db';
class Message extends Model{
    toJSON () {
        const origin = {
          id: this.id,
          user_id: this.user_id,
          username: this.username,
          face_url: this.face_url,
          content: this.content,
          total_likes:this.total_likes,
          send_timestamp:this.send_timestamp,
        };
        return origin;
      }
}
Message.init(
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
      },
      user_id:{
        type:Sequelize.INTEGER(11),
        allowNull:false
      },
      username: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
       face_url: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      content:{
        type:Sequelize.STRING(500),
        allowNull:false
      },
      total_likes:{
        type:Sequelize.INTEGER(11),
        allowNull:false
      },
      send_timestamp:{
        type:Sequelize.INTEGER(11),
        allowNull:false
      },
    },
    merge(
      {
        sequelize,
        tableName: 'message',
        modelName: 'treeholemessage'
      },
      InfoCrudMixin.options
    )
  );
export{Message};