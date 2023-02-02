import fetch from 'node-fetch'

export default async function getSchedules(req, res){
    const request = await fetch('https://api.jikan.moe/v4/schedules')
    const response = await request.json()
    res.json(response)
}