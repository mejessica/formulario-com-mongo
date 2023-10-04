const dadosPessoa = require('./models/pessoa');


    const pessoa1 = new dadosPessoa({
        nome: 'jessica',
        email: 'jegelsdorf@gmail.com',
        cpf: '458963852741',
        dataNascimento: '22/04/2004',
    })
    
    const pessoa2 = new dadosPessoa({
        nome: 'sarah',
        email: 'sarahpicenni@gmail.com',
        cpf: '789456123694',
        dataNascimento: '08/02/2005',
    })
    
   dadosPessoa.insertMany([pessoa1,pessoa2])
    .then(res => console.log(res))
    .catch(e => console.log(e))
    