import { Service } from "../[category]/page"

export const getLocalServices=()=>{
    const data = localStorage.getItem('SERVICES')
    return data ? JSON.parse(data) : []
}

export const setLocalServices=(data: Service[])=>{
    localStorage.setItem('SERVICES', JSON.stringify(data))
}