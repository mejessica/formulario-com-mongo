const {mongoose} = require('../db')

const pessoaSchema = new mongoose.Schema({
    nome: String,
    email: String,
    cpf: String,
    dataNascimento: String,
})

const dadosPessoa = mongoose.model("Pessoa", pessoaSchema);

module.exports = dadosPessoa;