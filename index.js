const express= require('express')

const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefData = require('./chefData.json');
app.use(cors());

app.get('/', (req, res) => {
    res.json('Chef is running')
});

app.get('/chefData', (req,res)=>{
    res.send(chefData);
});

app.get('/chefData/:id', (req, res) => {
    const id = req.params.id;
    const selected = chefData.find(n => n.id === id);
    res.send(selected)
})

app.listen(port, () => {
    console.log(`Chef API is running on port: ${port}`)
})






