import { NotFound, Forbidden,RepeatException,generate } from 'lin-mizar';
import sequelize from '../lib/db.js';
import { Thuser } from '../model/treehole.js';

class ThuserDao {
  async login (phonenumber) {
    const msg = await Thuser.findOne({
      where: {
        phone:phonenumber
      }
    });
    return msg;
  }

  async createUser (v) {
    let user = await Thuser.findOne({
      where: {
        username: v.get('body.username')
      }
    });
    if (user) {
      throw new RepeatException({
        code: 10071
      });
    }
    if (v.get('body.phone') ) {
      user = await Thuser.findOne({
        where: {
          phone: v.get('body.phone')
        }
      });
      if (user) {
        throw new RepeatException({
          code: 10082
        });
      }
    }
    await this.registerUser(v);
    let result = await Thuser.findOne({
      where: {
        username: v.get('body.username')
      }
    });
    if (!result) {
      throw new RepeatException({
        code: 10081
      })}
    return result;
    //await this.registerUser(v);
    }
  async registerUser (v) {
    let transaction;
    try {
      transaction = await sequelize.transaction();
      const user = {
        username: v.get('body.username'),
        phone:v.get('body.phone'),
        password:v.get('body.password'),
        face_url:v.get('body.face_url'),
      };

    await Thuser.create(user, {
        transaction
      });

      await transaction.commit();
    } catch (error) {
      if (transaction) await transaction.rollback();
      throw new RepeatException({code:10080});
    }
    return true;
  }

}

export { ThuserDao };
