import fetch from 'node-fetch'

export default async function getRequest(req, res){
    const request = await fetch('https://api.jikan.moe/v4/anime/1')
    const response = await request.json()
    res.json(response)
}