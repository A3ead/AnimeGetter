import fetch from 'node-fetch'

export default async function getTopAnime(req, res){
    let {type, page, filter} = req.query
    const request = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}&type=${type}&filter=${filter}`)
    const response = await request.json()
    res.json(response)
}