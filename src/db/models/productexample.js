const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductExample extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductExample.init({
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    example_id: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'ProductExample',
  });
  return ProductExample;
};
