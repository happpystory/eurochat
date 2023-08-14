const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors')
const request = require('request-promise');

app.use(cors({origin: '*'}));
app.use(express.json());


app.get('/', async (req, res)=>{
    try {
        const response = await request('https://ipinfo.io')
        res.send(JSON.parse(response))
    } catch (error) {
        res.json(error)
    }
})

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))