const db = require("../models");
const Torunaments = db.tournaments;
const Groups = db.groups
const Teams = db.teams
const Calendars = db.calendars


/* RETORNA LA LISTA DE TIPOS DE RADARES */
exports.getAllTournaments = (req,res) => {

    const code = {
      code : req.params["code"]
    };

    Torunaments.findOne({
      where: {
          code: code.code
      },
      include: {
        model: Groups,
        include: [ 
                    {model: Teams}, 
                    { model:Calendars,
                      include: [
                        { model: Teams,
                          as: "teamLocal"},
                        { model: Teams,
                          as: "teamVisitor"}
                      ],
                    },
                  ],
      },
      order: [
        ['idTournament', 'ASC'],
        [Groups, 'idGroups', 'ASC'],
        [Groups,Teams, 'idTeams', 'ASC'],
        [Groups,Calendars, 'gameDate', 'ASC']
      ]
    })
    .then( (r) => {      
      res.status(200).send({message: ('Torneos obtenidos satisfactoriamente'),
        data: r.dataValues
      })
    })
    .catch(err => {      
      res.status(500).send("Error interno" +  err)
    });
}