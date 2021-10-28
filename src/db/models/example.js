const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Example extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      // define association here
      this.belongsToMany(Product, { through: 'ProductExamples', foreignKey: 'example_id', as: 'forUrl' });
    }
  }
  Example.init({
    url: { type: DataTypes.TEXT, allowNull: false },
    is_photo: { type: DataTypes.BOOLEAN, allowNull: false },
  }, {
    sequelize,
    modelName: 'Example',
  });
  return Example;
};
