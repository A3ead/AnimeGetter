import fetch from 'node-fetch'

export default async function getSchedules(req, res){
    const {limit, page} = req.query
    const request = await fetch(`https://api.jikan.moe/v4/schedules?&limit=${limit}&page=${page}`)
    const response = await request.json()
    res.json(response)
}