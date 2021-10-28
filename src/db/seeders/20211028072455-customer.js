module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const customers = [
      {
        name: 'Иван', surname: 'Фамилия', email: 'ivan@mail.ru', phone: '+7 (965) 123-23-23',
      },
      {
        name: 'Михаил', surname: 'Фамилия', email: 'misha@mail.ru', phone: '+7 (965) 123-23-23',
      },
      {
        name: 'Андрей', surname: 'Фамилия', email: 'andrei@mail.ru', phone: '+7 (965) 123-23-23',
      },
    ];
    await queryInterface.bulkInsert('Customers', customers, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
