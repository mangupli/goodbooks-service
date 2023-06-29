'use strict';

const { User, Book } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate(
      [
        {
          login: 'first-user',
          password: 'my-first-password',
          Books: [
            {
              title: 'Над пропастью во ржи',
              author: 'Джером Селинджер',
            },
            {
              title: 'Последнее желание',
              author: 'Сапковский',
            },
            {
              title: 'Выбор',
              author: 'Эдит Ева Эгер',
            },
            {
              title: 'Норвежский лес',
              author: 'Харуки Мураками',
            },
          ],
        },
        {
          login: 'second-user',
          password: 'my-second-password',
          Books: [
            {
              title: 'Гарри Поттер и Философоский камень',
              author: 'Дж. Роулинг',
            },
          ],
        },
      ],
      {
        include: [Book],
      }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await User.destroy({ truncate: { cascade: true } });
  },
};
