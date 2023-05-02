const express= require('express')

const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const chefData = require('./data/chefData.json');

app.get('/', (req, res) => {
    res.send('Dragon is running')
});

app.get("/chefData", (res,req)=>{
    res.send(chefData);
});

app.get('/chefData/:id', (req, res) => {
    const id = req.params.id;
    const selected = chefData.find(n => n._id === id);
    res.send(selected)
})

app.listen(port, () => {
    console.log(`Chef API is running on port: ${port}`)
})






