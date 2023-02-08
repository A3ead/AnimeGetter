import fetch from 'node-fetch'

export default async function getSchedules(req, res){
    const {limit} = req.query
    const request = await fetch(`https://api.jikan.moe/v4/schedules?&limit=${limit}`)
    const response = await request.json()
    res.json(response)
}