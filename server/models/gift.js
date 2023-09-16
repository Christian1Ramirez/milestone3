"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
 class Gifts extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
   // define association here
  }
 }
 Gifts.init(
  {
   gift_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
   },
   premium: {
    type: DataTypes.STRING,
    allowNull: false,
   },
   price: {
    type: DataTypes.TEXT,
    allowNull: true,
   },
   retail: {
    type: DataTypes.TEXT,
    allowNull: true,
   },
   time: {
    type: DataTypes.TEXT,
    allowNull: true,
   },
   availability: {
    type: DataTypes.TEXT,
    allowNull: true,
   },
   location: {
    type: DataTypes.TEXT,
    allowNull: true,
   },
   user_id: {
    type: DataTypes.UUID,
    allowNull: true
   },
  },
  {
   sequelize,
   modelName: "Gift",
   tableName: "Gifts",
   timestamps: false,
  }
 );
 return Gifts;
};
