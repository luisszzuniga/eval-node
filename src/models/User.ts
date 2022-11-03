const { DataTypes, Model } = require('sequelize');
const md5 = require("md5");
import { sequelize } from "../config/database";

class User extends Model
{
    public id!: Number;
    public name!: String;
    public email!: String;
    public password!: String;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        async set(this: User, value: String) {
            this.setDataValue('password', await md5(value));
        }
    },
}, {
    sequelize,
    modelName: 'user',
    timestamps: false,
});

export { User };