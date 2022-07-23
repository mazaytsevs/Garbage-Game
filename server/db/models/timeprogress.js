const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TimeProgress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Trash }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Trash, { foreignKey: 'trash_id' });
    }
  }
  TimeProgress.init({
    user_id: DataTypes.INTEGER,
    trash_id: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TimeProgress',
  });
  return TimeProgress;
};
