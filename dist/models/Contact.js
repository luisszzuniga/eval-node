"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const { DataTypes, Model } = require('sequelize');
const database_1 = require("../config/database");
const Concession_1 = require("./Concession");
class Contact extends Model {
}
exports.Contact = Contact;
Contact.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    concessionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'concession_id'
    }
}, {
    sequelize: database_1.sequelize,
    modelName: 'contact',
    timestamps: false,
});
Contact.belongsTo(Concession_1.Concession);
Concession_1.Concession.hasMany(Contact);
