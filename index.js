const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors')
const request = require('request-promise');

app.use(cors({origin: '*'}));
app.use(express.json());


app.get('/', async (req, res)=>{
    try {
        const response = await request('https://api.geoapify.com/v1/ipinfo?apiKey=602ca6018c914bfcbc5464b9d8260aa0')
        //const response2 = await request('http://ip-api.com/json')
        res.send(JSON.parse(response))

    } catch (error) {
        res.json(error)
    }
})

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))