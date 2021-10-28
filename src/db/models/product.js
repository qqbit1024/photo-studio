const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Order, Example, Request, Quantity,
    }) {
      // define association here
      this.belongsToMany(Order, { through: 'OrderProducts', foreignKey: 'product_id', as: 'forOrder' });
      this.belongsToMany(Example, { through: 'ProductExamples', foreignKey: 'product_id', as: 'forUrl' });
      this.hasMany(Request, { foreignKey: 'product_id' });
      this.hasMany(Quantity, { foreignKey: 'product_id' });
    }
  }
  Product.init({
    product_name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    desc_full: { type: DataTypes.TEXT, allowNull: false },
    desc_short: { type: DataTypes.TEXT, allowNull: false },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
