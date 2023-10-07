const {mongoose} = require('../db')

const pessoaSchema = new mongoose.Schema({
    nome: String,
    email: email,
    cpf: number,
    dataNascimento: Date,
})

const dadosPessoa = mongoose.model("Pessoa", pessoaSchema);

module.exports = dadosPessoa;