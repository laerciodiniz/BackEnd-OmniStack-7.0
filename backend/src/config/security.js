const UsuarioMongoDB = 'admin';
const SenhaMongoDB = 'admin';

const DATABASE_URL = `mongodb+srv://${UsuarioMongoDB}:${SenhaMongoDB}@cluster0-r4hcb.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = { UsuarioMongoDB, SenhaMongoDB, DATABASE_URL };