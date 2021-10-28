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
    const products = [
      {
        product_name: 'photo', price: 100, desc_full: 'lorem full', desc_short: 'loremshort',
      },
      {
        product_name: 'photo2', price: 200, desc_full: 'lorem full', desc_short: 'loremshort',
      },
      {
        product_name: 'photo3', price: 300, desc_full: 'lorem full', desc_short: 'loremshort',
      },
      {
        product_name: 'video', price: 400, desc_full: 'lorem full', desc_short: 'loremshort',
      },
    ];
    await queryInterface.bulkInsert('Products', products, {});
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
