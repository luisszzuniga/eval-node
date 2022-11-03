const { DataTypes, Model } = require('sequelize');
import { sequelize } from "../config/database";
import { Concession } from "./Concession";

class Contact extends Model
{
    public id!: Number;
    public lastname!: String;
    public firstname!: String;
    public mail!: String;
    public phone!: Number;
    public concessionId!: Number;
}

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
    sequelize,
    modelName: 'contact',
    timestamps: false,
});

Contact.belongsTo(Concession);
Concession.hasMany(Contact);

export { Contact };