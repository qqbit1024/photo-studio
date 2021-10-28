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
    const urls = [
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
      { url: 'https://picsum.photos/400/300', is_photo: true },
    ];
    await queryInterface.bulkInsert('Examples', urls, {});
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
