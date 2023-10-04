const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/dbPessoas')
    .then(() => {
        console.log("Conectado ao banco de dados");
    })
    .catch(err => {
        console.error(`Erro ao conectar no banco ${err}`);
    })

    
module.exports = mongoose