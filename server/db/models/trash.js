const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Trash extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ TrashCan, Progress, TimeProgress }) {
      this.belongsTo(TrashCan, { foreignKey: 'trash_can_id' });
      this.hasMany(Progress, { foreignKey: 'trash_id' });
      this.hasMany(TimeProgress, { foreignKey: 'trash_id' });
    }
  }
  Trash.init({
    trash_can_id: DataTypes.INTEGER,
    trash_name: DataTypes.STRING,
    trash_img_src: DataTypes.STRING,
    info: DataTypes.TEXT,
    score: DataTypes.INTEGER,
    bonus: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Trash',
  });
  return Trash;
};
