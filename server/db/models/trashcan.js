const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TrashCan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Trash }) {
      this.hasMany(Trash, { foreignKey: 'trash_can_id' });
    }
  }
  TrashCan.init({
    trash_can_name: DataTypes.STRING,
    trash_can_info: DataTypes.TEXT,
    trash_can_img_src: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'TrashCan',
  });
  return TrashCan;
};
