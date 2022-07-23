module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TrashCans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      trash_can_name: {
        type: Sequelize.STRING,
      },
      trash_can_info: {
        type: Sequelize.TEXT,
      },
      trash_can_img_src: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TrashCans');
  },
};
