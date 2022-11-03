"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mine = void 0;
const { DataTypes, Model } = require('sequelize');
const database_1 = require("../config/database");
class Mine extends Model {
}
exports.Mine = Mine;
Mine.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    longitude: {
        type: DataTypes.DECIMAL(15, 12),
        allowNull: false
    },
    latitude: {
        type: DataTypes.DECIMAL(15, 12),
        allowNull: false
    },
    concessionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'concession_id'
    }
}, {
    sequelize: database_1.sequelize,
    modelName: 'mine',
    timestamps: false,
});
