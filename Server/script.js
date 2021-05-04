const axios = require('axios').default
let express = require('express')
let cors = require('cors')
let app = express()
let fs = require('fs')

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 4 * 1010, // 4 seconds
  max: 1// limit each IP to 1 request per windowMs
});

//  apply to all requests
app.use('/anime',limiter);
//app.use('/top',limiter);


app.use(cors())
app.use(express.json())

app.get('/anime',function(req,res)
{
    let animeID = req.query.anime

    axios.get(`https://api.jikan.moe/v3/search/anime?q=${animeID}&page=1`)
    .then(function(resp)
    {
        let malID = resp.data.results[0].mal_id
        //console.log(malID)
        axios.get(`https://api.jikan.moe/v3/anime/${malID}`)
        .then(function (response) 
        {
            // handle success
           // console.log(response.data.synopsis);
           // res.setHeader('Access-Control-Allow-Origin', '*')
            res.json(response.data)
        })
    })


})

app.post('/addanime',function(req,res)
{
    let data = req.body
    if (fs.existsSync('./AnimeData.json') == false)
     {
        fs.writeFileSync('./AnimeData.json',JSON.stringify([]))
     } 
    let saveddata = fs.readFileSync('./AnimeData.json')
    let animeArray = JSON.parse(saveddata)
    let j = 0
    for (let i of animeArray)
    {
        if(i.title == data.title)
        {
            j++
            break
        }
    }
    
    if (j == 0)
    {
        animeArray.push(data)
        fs.writeFileSync('./AnimeData.json', JSON.stringify(animeArray,null,4))
       // console.log(req.body)
    }
    res.send(animeArray)
    
})

app.get('/list',function(req,res)
{
    if (fs.existsSync('./AnimeData.json') == true)
    {
        let x = fs.readFileSync('./AnimeData.json')
        let saveddata = JSON.parse(x)
        res.json(saveddata)
    }
    else
    {
        res.send('list is empty')
    }

})

app.get('/get', function(req,res)
{
    let title = req.query.title
    //console.log(title)
    let x = fs.readFileSync('./AnimeData.json')
    let saveddata = JSON.parse(x)
    for (let i of saveddata)
    {
        if (i.title == title)
        {
            res.json(i)
            break
        }
    }
})

app.get('/top',function(req,res)
{
 axios.get(`https://api.jikan.moe/v3/top/anime`)
    .then(function (response) 
    {
       //console.log(response.data);
        res.json(response.data)
    })
})

app.get('/schedule',function(req,res)
{
    axios.get('https://api.jikan.moe/v3/schedule')
    .then(function(response)
    {   
        res.json(response.data)
    })
})

app.get('/archive',function(req,res)
{
 axios.get(`https://api.jikan.moe/v3/season/archive`)
    .then(function (response) 
    {
       //console.log(response.data);
        res.json(response.data)
    })
})

app.get('/seasonal',function(req,res)
{
    let year = req.query.year
    let season = req.query.season
 axios.get(`https://api.jikan.moe/v3/season/${year}/${season}`)
    .then(function (response) 
    {
       //console.log(response.data);
        res.json(response.data)
    })
})



app.listen(3000, function()
{
    console.log('listening')
})
