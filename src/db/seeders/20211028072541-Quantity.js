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
    const quantities = [
      {
        order_id: 1, product_id: 1, hours: 2, equip_count: 2,
      },
      {
        order_id: 2, product_id: 2, hours: 1, equip_count: 1,
      },
      {
        order_id: 3, product_id: 1, hours: 1, equip_count: 1,
      },
      {
        order_id: 3, product_id: 2, hours: 2, equip_count: 2,
      },
      {
        order_id: 3, product_id: 3, hours: 3, equip_count: 3,
      },
    ];
    await queryInterface.bulkInsert('Quantities', quantities, {});
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
