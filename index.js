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
        const response2 = await request('http://ip-api.com/json')
        const response3 = await request('https://api.ipdata.co/?api-key=test')
        res.send(JSON.parse({response, response2, response3}))
        //res.send(JSON.parse(response2))
        //res.send(JSON.parse(response3))
    } catch (error) {
        res.json(error)
    }
})

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))