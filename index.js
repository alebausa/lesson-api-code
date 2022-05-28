const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res, next) => {
  res.send('<h1>Hello world</h1>')
})

app.get('/rockets', (req, res, next) => {
  axios.get('https://api.spacexdata.comv4/rockets')
    .then((response) => {
      res.json(response.data)
    })
    .catch(err => console.log(err))
    .finally(() => { console.log('All done')})
})

app.get('/rockets2', async (req, res, next) => {
  try {
    const response = await axios.get('https://api.spacexdata.comv4/rockets');
    const response2 = await axios.get('https://api.spacexdata.comv4/rockets');  
    res.json({ response: response.data, response2: response2.data })
  } catch (error) {
    console.log(error)
  }
})

app.listen(3000, () => { console.log('Server running on port 3000 🛫') });