'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Guests.init({
    guest_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    owner: {
      type: DataTypes.STRING
    },
    non_owner: {
      type: DataTypes.STRING
    },
    gift: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pp: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    tour_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Guest',
    tableName: 'Guests',
    timestamps: false
  });
  return Guests;
};