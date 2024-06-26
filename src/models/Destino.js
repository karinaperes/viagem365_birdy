const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')
const Destino = connection.define('destinos', {
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'usuarios',
            key: 'id'
          },       
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uf: {
        type:DataTypes.STRING,
        allowNull: false
    },
    coordenadas_geo: {
        type: DataTypes.STRING
    }
})

module.exports = Destino
