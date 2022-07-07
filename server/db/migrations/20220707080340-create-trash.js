module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trashes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      trash_can_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TrashCans',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      trash_name: {
        type: Sequelize.STRING,
      },
      trash_img_src: {
        type: Sequelize.STRING,
      },
      info: {
        type: Sequelize.TEXT,
      },
      score: {
        type: Sequelize.INTEGER,
      },
      bonus: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('Trashes');
  },
};
