import fetch from 'node-fetch'

export default async function animeSearch(req, res){
    const request = await fetch(`https://api.jikan.moe/v4/anime?q=${receievedText}&page=1`)
    const response = await request.json()
    const malID = response.data.results[0].mal_id
    const animeRequest = await fetch(`/api/getAnimeById?malID=${malID}`)
    const animeResponse = await animeRequest.json()
    res.json(animeResponse)
    
}