import fetch from 'node-fetch'

export default async function getSeasonsList(req, res){
    const request = await fetch(`https://api.jikan.moe/v4/seasons`)
    const response = await request.json()
    res.json(response)
}