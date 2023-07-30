import fetch from 'node-fetch'

export default async function getTopAnime(req, res){
    let {type, page, filter} = req.query
    let url = `https://api.jikan.moe/v4/top/anime?page=${page}`
    if(type){
        url = url + `&type=${type}`
    }
    if(filter){
        url = url + `&filter=${filter}`
    }
    const request = await fetch(url)
    const response = await request.json()
    res.json(response)
}