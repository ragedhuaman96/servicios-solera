import { Service } from "@/app/page"
import { getLocalServices, setLocalServices } from "@/app/utils"
import { toast } from "react-toastify"

const _data = [
    {
        id: 1,
        title: "Llamar ambulancia",
        description: "Se llama a los medicos",
        category: 2
    },
    {
        id: 2,
        title: "Limpiar la cocina",
        description: "Se limpia el area de la preparacion de alimentos",
        category: 3
    },
    {
        id: 3,
        title: "Lavar el auto",
        description: "Se limpia el auto por dentro y por fuera",
        category: 1
    },
    {
        id: 4,
        title: "Hacer mamagrafia",
        description: "Se examina para cancer de mama",
        category: 2
    },
    {
        id: 5,
        title: "Limpiar el baño",
        description: "Se limpia el baño por dentro",
        category: 3
    },
    {
        id: 6,
        title: "Cambiar las bujias",
        description: "Reparacion del auto",
        category: 1
    },
    {
        id: 7,
        title: "Radiografia",
        description: "Se hace rayos X",
        category: 2
    },
    {
        id: 8,
        title: "Hacer el mercado",
        description: "Se realiza las compras para cocinar ese día",
        category: 3
    },
    {
        id: 9,
        title: "Reparar los frenos",
        description: "Reparacion del auto",
        category: 1
    },
    {
        id: 10,
        title: "Colonoscopia",
        description: "Se revisa el colon",
        category: 2
    },
    {
        id: 11,
        title: "Comprar un balon de gas",
        description: "Se compra el gas para cocinar",
        category: 3
    },
    {
        id: 12,
        title: "Tapizar los asientos",
        description: "Se tapiza los asientos del auto",
        category: 1
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
    try {
        let data = getLocalServices()
    
        if(data.length == 0){
            data = _data
            setLocalServices(_data)
        }
        const response = await fetchFakeData(data)
        console.log('SERVICES desde el server', response)
    
        return response
    } catch (error) {
        console.error(error)
    }

  }

export const getCategoriesData = async () => {
    try {
        const response = await fetchFakeData(_categories)

        return response
    } catch (error) {
        console.error(error)
    }
}

export const updateServiceService = async (service: Service)=>{
    try {
        let data = getLocalServices()
    
        if(data.length > 0){
            data = data.map((item:any) =>
                item.id == service.id ? service : item
            );
            await fetchFakeUpdateData(setLocalServices, data)
            toast.success('Se actualizó el servicio de forma exitosa')
        }
    } catch (error) {
        console.error(error)
    }
}

export const deleteServiceService = async (id: number)=>{
    try {
        let data = getLocalServices()
    
        if(data.length > 0){
            data = data.filter((e:any)=>e.id != id)
            await fetchFakeUpdateData(setLocalServices, data)
            toast.success('Se eliminó el servicio de forma exitosa')
        }
    } catch (error) {
        console.error(error)
    }
}

  export function fetchFakeData(data:any[]) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 250); // Retraso de 500ms
    });
  }

  export function fetchFakeUpdateData(next:any, param: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(next(param));
      }, 250); // Retraso de 500ms
    });
  }