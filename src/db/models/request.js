const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      // define association here
      this.belongsTo(Product, { foreignKey: 'product_id' });
    }
  }
  Request.init({
    customer_name: { type: DataTypes.STRING, allowNull: false },
    customer_surname: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    message: DataTypes.TEXT,
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: false },
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};
