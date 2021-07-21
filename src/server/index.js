var markdown = require( "markdown" ).markdown;
const dotenv = require('dotenv')
dotenv.config()
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
const port = 1515;
//const KeyApp = d1718abe482ad01522b9fbcaf87b78f9
const cors = require('cors')
app.use(cors());
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static('dist'))
app.use(express.json())
//test for api key
//console.log(`Your API key is ${process.env.API_KEY}`);
const KeyApp = process.env.API_KEY
console.log(`API key is :" ${KeyApp} "`)
app.use(express.static('dist'))
console.log(__dirname)

app.get('/passcode', (req, res) => {
    //res.send(KeyApp)
    res.json(KeyApp)
})
app.get('/', function (req, res){
      res.sendFile('dist/index.html')
  //  res.sendFile(path.resolve('src/client/views/index.html'))
})
app.listen(port, () => {
  console.log(`Sentiment app listening on port ${port}!`)
})
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
