const { DataTypes, Model } = require('sequelize');
import { sequelize } from "../config/database";
import { Mine } from "./Mine";

class Concession extends Model
{
    public id!: Number;
    public name!: String;
    public siret!: String;
    public license!: String;
    public phone!: Number;
    public adressId!: Number;
}

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
    sequelize,
    modelName: 'concession',
    timestamps: false,
});

export { Concession };