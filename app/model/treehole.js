import { InfoCrudMixin } from 'lin-mizar';
import { merge } from 'lodash';
import { Sequelize, Model } from 'sequelize';
import sequelize from '../lib/db.js';

class Thuser extends Model {
  toJSON () {
    const origin = {
      id: this.id,
      username: this.username,
      phone: this.phone,
      password: this.password,
      face_url: this.face_url
    };
    return origin;
  }
}

Thuser.init(
  {
    id: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    phone: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
    password: {
        type: Sequelize.STRING(32),
        allowNull: false
     },
     face_url: {
      type: Sequelize.STRING(250),
      allowNull: false
    }
  },
  merge(
    {
      sequelize,
      tableName: 'thuser',
      modelName: 'treehole'
    },
    InfoCrudMixin.options
  )
);

export { Thuser };
