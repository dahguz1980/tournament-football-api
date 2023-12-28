module.exports = (sequelize, Sequelize) => {
  const Tournaments = sequelize.define("tournaments", {
      idTournament: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false  ,
          autoIncrement: true 
        },
      code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      date_init: {
        type: Sequelize.DATE,
        allowNull: false
        }, 
      date_end: {
        type: Sequelize.DATE,
        allowNull: false
        },
      countries: {
        type: Sequelize.STRING,
        allowNull: false,
        },
      qty_teams_clasified: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      qty_third_teams_clasified: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
  },
  {
      tableName: 'Tournaments',
      timestamps: false
  });

  return Tournaments;
};