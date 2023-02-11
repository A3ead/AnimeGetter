import fetch from 'node-fetch'

export default async function getSeasonal(req, res){
    const {year, season, current} = req.query
    let url = current == 'true' ? `https://api.jikan.moe/v4/seasons/now` : `https://api.jikan.moe/v4/seasons/${year}/${season}`
    const request = await fetch(url)
    const response = await request.json()
    res.json(response)
}