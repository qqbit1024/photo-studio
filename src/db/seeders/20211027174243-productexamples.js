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
    const productsExamples = [
      { product_id: 1, example_id: 1 },
      { product_id: 1, example_id: 2 },
      { product_id: 1, example_id: 3 },
      { product_id: 1, example_id: 4 },
      { product_id: 2, example_id: 5 },
      { product_id: 2, example_id: 6 },
      { product_id: 2, example_id: 7 },
      { product_id: 2, example_id: 8 },
      { product_id: 3, example_id: 9 },
      { product_id: 3, example_id: 10 },
      { product_id: 3, example_id: 11 },
      { product_id: 3, example_id: 12 },
      { product_id: 3, example_id: 13 },
      { product_id: 4, example_id: 14 },
      { product_id: 4, example_id: 15 },
      { product_id: 4, example_id: 16 },
      { product_id: 1, example_id: 17 },
      { product_id: 2, example_id: 18 },
      { product_id: 3, example_id: 19 },
      { product_id: 4, example_id: 20 },
      { product_id: 1, example_id: 16 },
    ];
    await queryInterface.bulkInsert('ProductExamples', productsExamples, {});
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
