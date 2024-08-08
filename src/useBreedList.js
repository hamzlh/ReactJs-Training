// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";
// const localCache = {}
export default function useBreedList(animal){
    const result = useQuery(["breeds", animal], fetchBreedList)

    return [result?.data?.breeds ?? [], result.status]
    // const [breedList, setBreedList] = useState([])
    // const [status, setStatus] = useState("unloaded")
    
    // useEffect(()=> {
        
    //     if (!animal) {
    //         setBreedList([])
    //     }else if (localCache[animal]) {
    //         setBreedList(localCache[animal])
    //     }else{
    //         requestBreedList()
    //     }
    //     async function requestBreedList() {
    //         setBreedList([])
    //         setStatus("loading")

    //         const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
    //         const json = await res.json()
    //         console.log(json);
            
    //         localCache[animal] = json.breeds || []
    //         setBreedList(localCache[animal])
    //         setStatus("loaded")
    //     }
    // },[animal])

    // return [breedList, status]
}

