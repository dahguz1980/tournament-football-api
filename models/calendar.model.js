module.exports = (sequelize, Sequelize) => {
    const Calendars = sequelize.define("calendars", {
        idCalendars: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false  ,
            autoIncrement: true 
          },
        local: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        visitor: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        goalsLocal: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        goalsVisitor: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        gameDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        gamePlace: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'Calendars',
        timestamps: false
    });
  
    return Calendars;
  };