const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Customer, Product, Quantity }) {
      // define association here
      this.belongsTo(Customer, { foreignKey: 'customer_id' });
      this.belongsToMany(Product, { through: 'OrderProducts', foreignKey: 'order_id' });
      this.hasMany(Quantity, { foreignKey: 'order_id' });
    }
  }
  Order.init({
    customer_id: { type: DataTypes.INTEGER, allowNull: false },
    total: DataTypes.INTEGER,
    status: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
