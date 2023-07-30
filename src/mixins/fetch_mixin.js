import { ref } from 'vue'

 
const queue = ref([])
let interval

export async function useFetchQueue(fetchRequests){
    queue.value = [...queue.value, ...fetchRequests]

    if(!interval){
        interval = setInterval(async ()=>{

            let currentBatch = queue.value.slice(0,3)
            queue.value = queue.value.slice(3)
    
            if(currentBatch.length == 0){
                clearInterval(interval)
                interval = null
            }
            for(let i of currentBatch){
                const request = await fetch(i[0])
                const response = await request.json()
                i[1](response)
            }
    
        },1100)
    }


}

