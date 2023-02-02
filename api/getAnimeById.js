import fetch from 'node-fetch'

export default async function getAnimeById(req, res){
    const {malID} = req.query
    const request = await fetch(`https://api.jikan.moe/v4/anime/${malID}/full`)
    const response = await request.json()
    res.json(response)
}