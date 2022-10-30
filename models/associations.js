const Usuario = require('./usuario')
const Pelicula = require('./pelicula')
const Prestamo = require('./prestamo')
const Serie = require('./serie')
const Rol = require('./rol')




//Relacion 1 a N prestamo-usuario
Usuario.hasMany(Prestamo)
Prestamo.belongsTo(Usuario)

//Relacion N a N prestamo-serie
Serie.belongsToMany(Prestamo, { through: "prestamo-series" })
Prestamo.belongsToMany(Serie, { through: "prestamo-series" })

//Relacion N a N prestamo-pelicula
Pelicula.belongsToMany(Prestamo, { through: "prestamo-peliculass" })
Prestamo.belongsToMany(Pelicula, { through: "prestamo-peliculass" })