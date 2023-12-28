module.exports = (sequelize, Sequelize) => {
    const Groups = sequelize.define("groups", {
        idGroups: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false  ,
            autoIncrement: true 
          },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        idTournament: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'Groups',
        timestamps: false
    });
  
    return Groups;
  };