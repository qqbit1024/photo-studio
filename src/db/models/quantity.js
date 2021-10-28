const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Quantity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, Product }) {
      // define association here
      this.belongsTo(Order, { foreignKey: 'order_id' });
      this.belongsTo(Product, { foreignKey: 'product_id' });
    }
  }
  Quantity.init({
    order_id: { type: DataTypes.INTEGER, allowNull: false },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    hours: { type: DataTypes.INTEGER, allowNull: false },
    equip_count: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'Quantity',
  });
  return Quantity;
};
