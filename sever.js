
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function (req, res) {
    return res.render('step1');
})

app.get('/step/:id', (req, res) => {

    const id = req.params.id;
console.log("params", req.params)
    switch (id) {
        case '1': return res.render('step1');
        break;
        case '2': return res.render('step2');
        break;
        case '3': return res.render('step3');

    }
})




app.listen(8080, () => console.log(`server listening in port 8080`));