module.exports = (sequelize, Sequelize) => {
    const Group_Calendar = sequelize.define("group_calendar", {
        idGroups: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false 
          },
        idCalendars: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false 
        },
    },
    {
        tableName: 'Group_Calendar',
        timestamps: false
    });
  
    return Group_Calendar;
  };