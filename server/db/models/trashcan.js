'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrashCan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrashCan.init({
    trash_can_name: DataTypes.STRING,
    trash_can_img_src: DataTypes.STRING,
    trash_can_img_src: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TrashCan',
  });
  return TrashCan;
};