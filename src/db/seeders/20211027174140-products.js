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
    const long = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo commodo purus nec tempus. Quisque eu elit vel mauris dapibus rutrum quis sit amet magna. Ut a condimentum dolor. Sed mattis sit amet erat sit amet ultricies. Etiam ac tortor nec nisi sagittis tincidunt. Fusce laoreet tellus ac porta interdum. Sed laoreet, nunc non vulputate varius, erat diam dapibus magna, at mattis risus velit nec metus. Aliquam erat volutpat. In accumsan, diam ac consequat placerat, dui nibh pretium sem, tempor aliquet felis lorem eget felis. Duis efficitur nec libero ut interdum. Nunc venenatis, urna eu commodo dapibus, lectus tellus placerat nibh, et blandit felis risus accumsan risus. Ut consectetur blandit dignissim.

Sed rhoncus mattis est, vitae egestas velit convallis ac. Donec sed eros pulvinar, ornare turpis quis, condimentum elit. Aliquam at volutpat est. Curabitur quis elit faucibus, dignissim orci non, lobortis felis. Vivamus non sem ut est posuere mollis. Aliquam erat volutpat. Suspendisse et tellus faucibus magna varius scelerisque. Duis eget mi finibus sem placerat venenatis. Donec tristique sagittis tincidunt. Duis tincidunt, nibh a vulputate efficitur, lorem massa maximus elit, at condimentum enim ex nec ligula. Integer vestibulum, sem eget accumsan sodales, lorem diam dictum leo, vitae volutpat lacus justo nec nibh. In hac habitasse platea dictumst. Aenean suscipit tristique eros ut iaculis. Morbi interdum placerat sodales. Aenean eleifend ut tellus quis consequat.

Suspendisse maximus purus nec tristique porta. Maecenas blandit urna at mi fermentum posuere. Fusce hendrerit erat ex, a tempor erat pellentesque sed. Sed placerat dapibus ligula id pellentesque. Etiam dictum metus non maximus egestas. Quisque eu turpis vehicula, maximus arcu ut, aliquam lacus. Suspendisse aliquam libero sit amet tellus viverra consequat.
    `
    const short = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis urna vitae turpis fermentum mattis et ut mi. Duis lectus.'
    const products = [
      {
        product_name: 'Фотосъемка', price: 2000, desc_full: long, desc_short: short, url:'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80'
      },
      {
        product_name: 'Видеосъемка', price: 3000, desc_full: long, desc_short: short, url:'https://images.unsplash.com/photo-1543242594-c8bae8b9e708?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'
      },
      {
        product_name: 'Прямая трансляция', price: 4000, desc_full: long, desc_short: short, url:'https://media.istockphoto.com/photos/studio-picture-id177346831?s=612x612'
      },
      {
        product_name: 'Гибкий тариф', price: 0, desc_full: long, desc_short: short, url:'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'
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
