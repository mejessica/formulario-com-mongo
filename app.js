const express = require('express')
const app = express();
const methodOverride = require('method-override');
const dadosPessoa = require('./models/pessoa')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); //preparar para receber informaçoes do tipo post
app.use(methodOverride('_method'));
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.redirect('/pessoas')
})

app.get('/pessoas', async (req, res) => {
    const pessoas = await dadosPessoa.find({});
    res.render('index', { pessoas });
});

app.get('/pessoas/new', (req, res) => {
    res.render('new');
})

app.get('/pessoas/:id', async (req, res) => {
    const { id } = req.params;
    const pessoa = await dadosPessoa.findById(id);
    
    res.render('show', { pessoa });
});

app.post('/pessoas', async (req, res) => {
    const novaPessoa = new dadosPessoa(req.body);
    await novaPessoa.save();
    res.redirect('/pessoas');
});

app.get('/pessoas/:id/edit', async (req, res) => {
    const { id } = req.params;
    const pessoa = await dadosPessoa.findById(id);
    res.render('edit', { pessoa });
});

app.patch('/pessoas/:id', async (req, res) => {
    const { id } = req.params;
    
    await dadosPessoa.findByIdAndUpdate(id, req.body,{runValidators:true});
 
    res.redirect('/pessoas/' + id);
})

app.delete('/pessoas/:id', async (req, res) => {
    const { id } = req.params;
    await dadosPessoa.findByIdAndDelete(id)
    res.redirect('/pessoas');
});


app.listen(2000, () => console.log('porta ligada na porta 2000'))