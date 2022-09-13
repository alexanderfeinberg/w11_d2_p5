'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Colors',
    [{name:'Test1', createdAt:new Date(), updatedAt:new Date()},
    {name:'Test2', createdAt:new Date(), updatedAt:new Date()},
    {name:'Test3', createdAt:new Date(), updatedAt:new Date()}])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Colors', {
      name:['Test1', 'Test2', 'Test3']
    })
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
