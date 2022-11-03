const { DataTypes, Model } = require('sequelize');
import { sequelize } from "../config/database";
import { Concession } from "./Concession";

class Mine extends Model
{
    public id!: Number;
    public name!: String;
    public longitude!: Number;
    public latitude!: Number;
    public concessionId!: Number;
}

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
    sequelize,
    modelName: 'mine',
    timestamps: false,
});

Mine.belongsTo(Concession);
Concession.hasMany(Mine);

export { Mine };