"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concession = void 0;
const { DataTypes, Model } = require('sequelize');
const database_1 = require("../config/database");
class Concession extends Model {
}
exports.Concession = Concession;
Concession.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    siret: {
        type: DataTypes.STRING,
        allowNull: false
    },
    license: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    adressId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'adress_id'
    }
}, {
    sequelize: database_1.sequelize,
    modelName: 'concession',
    timestamps: false,
});
