import { getLocalServices } from "@/app/utils"

const _data = [
    {
        id: 1,
        title: "Llamar ambulancia",
        description: "Se llama a los medicos",
        category: 2
    },
    {
        id: 2,
        title: "Limpiar el baño",
        description: "Se llama a los medicos wiuussnfldfnsdssdddddddddddd",
        category: 1
    },
    {
        id: 3,
        title: "Lavar el auto",
        description: "Se llama a los medicos",
        category: 3
    }
]

const _categories = [
    {
        id:1,
        name:"Autos"
    },
    {
        id:2,
        name:"Salud"
    },
    {
        id:3,
        name:"Hogar"
    },
]

export const getServicesData = async () => {
    let data = getLocalServices()
    
    if(data.length == 0){
        data = _data
    }
    const response = await fetchFakeData(data)
    console.log('SERVICES desde el server', response)

    return response
  }

export const getCategoriesData = async () => {
    const response = await fetchFakeData(_categories)

    return response
}


  export function fetchFakeData(data:any[]) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 250); // Retraso de 500ms
    });
  }