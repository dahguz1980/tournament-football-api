
const dbConfig = require("../config/db");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/Tables
db.tournaments = require("./tournament.model.js")(sequelize, Sequelize);
db.groups = require("./group.model.js")(sequelize, Sequelize);
db.teams = require("./team.model.js")(sequelize, Sequelize);
db.calendars = require("./calendar.model.js")(sequelize, Sequelize);
db.group_calendar = require("./group_calendar.model.js")(sequelize, Sequelize);

//Relations
db.tournaments.hasMany(db.groups,{foreignKey: 'idTournament'});
db.groups.belongsTo(db.tournaments,{foreignKey: 'idTournament'});

db.groups.hasMany(db.teams,{foreignKey: 'idGroups'});
db.teams.belongsTo(db.groups,{foreignKey: 'idGroups'});


db.teams.hasMany(db.calendars,{foreignKey: 'local'});
db.calendars.belongsTo(db.teams,{as: 'teamLocal', foreignKey: 'local'});

db.teams.hasMany(db.calendars,{foreignKey: 'visitor'});
db.calendars.belongsTo(db.teams,{as: 'teamVisitor', foreignKey: 'visitor'});

db.calendars.belongsToMany(db.groups, { through: db.group_calendar, foreignKey: 'idCalendars'});
db.groups.belongsToMany(db.calendars, { through: db.group_calendar,foreignKey: 'idGroups'});

// Export Module
module.exports = db;