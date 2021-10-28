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
        name: 'name1', surname: 'surname1', email: 'email1', phone: 'phone1',
      },
      {
        name: 'name2', surname: 'surname2', email: 'email2', phone: 'phone2',
      },
      {
        name: 'name2', surname: 'surname2', email: 'email2', phone: 'phone2',
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
