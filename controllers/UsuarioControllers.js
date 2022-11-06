// const UsuarioControllers = {};
// const models = require('../models/index');

// UsuarioControllers.getData = async(req, res) => {
//     let { email } = req.params;
//     let resp = await models.usuario.findAll({
//         where: { email: email }
//     })
//     res.send(resp);
// };

// UsuarioControllers.patchUser = async(req, res) => {
//     const { email } = req.params;
//     const user = req.body;
//     let resp = await models.usuario.update({
//         name: usuario.name,
//         email: usuario.email,
//         password: usuario.password
//     }, {
//         where: { email: email }
//     })
//     res.json({
//         resp,
//         message: "Usuario actualizado"
//     })
// };

// UsuarioControllers.deleteUser = async(req, res) => {
//     const { id } = req.params;
//     let resp = await models.usuario.destroy({
//         where: {
//             id_usuario: id
//         }
//     })
//     res.json({
//         resp,
//         message: "Usuario eliminado"
//     });
// }

// module.exports = UsuarioControllers