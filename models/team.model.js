module.exports = (sequelize, Sequelize) => {
    const Teams = sequelize.define("teams", {
        idTeams: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false  ,
            autoIncrement: true 
          },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        flag: {
            type: Sequelize.STRING,
            allowNull: false
          }, 
        idGroups: {
          type: Sequelize.INTEGER,
          allowNull: false
          },
        gamesPlayed: {
          type: Sequelize.INTEGER,
          allowNull: true,
          },
        wins: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
        draws: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
        losses: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
        goalsFor: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
        goalsAgainst: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
        goalsDifference: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
        points: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
        classified: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
          },
        isThird: {
            type: Sequelize.INTEGER,
            allowNull: true,
          }
    },
    {
        tableName: 'Teams',
        timestamps: false
    });
  
    return Teams;
  };