import fetch from 'node-fetch'

export default async function getAnimeSearch(req, res){
    const {q, sfw} = req.query
    let url = sfw == 1 ? `https://api.jikan.moe/v4/anime?q=${q}&sfw=${sfw}` : `https://api.jikan.moe/v4/anime?q=${q}`
    const request = await fetch(url)
    const response = await request.json()
    res.json(response)
}