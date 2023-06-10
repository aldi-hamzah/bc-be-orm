import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class shipper extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ship_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ship_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ship_phone: {
      type: DataTypes.STRING(24),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shipper',
    schema: 'sales',
    timestamps: false,
    indexes: [
      {
        name: "ship_id_pk",
        unique: true,
        fields: [
          { name: "ship_id" },
        ]
      },
      {
        name: "shipper_pkey",
        unique: true,
        fields: [
          { name: "ship_id" },
        ]
      },
    ]
  });
  }
}
