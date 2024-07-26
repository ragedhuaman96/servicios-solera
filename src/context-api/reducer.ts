import { Service } from "@/app/[category]/page"
import { title } from 'process';

export type ServicesState = {
    services: {
        loading: boolean,
        data: Service[]
    },
    categories: {
        loading: boolean,
        data: any[]
    },
    service: Service,
    category: number 
}

export const INITIAL_STATE: ServicesState ={
    services: {
        loading: true,
        data: []
    },
    categories: {
        loading: true,
        data: []
    },
    service: {
        id: '',
        title: '',
        description: '',
        category: ''
    },
    category: 1
}

const ServicesReducer = (state: ServicesState, action: any): ServicesState => {
    switch (action.type) {
        case "SET_SERVICES":
            return {
                ...state,
                services: {
                    loading: false,
                    data: action.data
                }
            }
            case "SET_CATEGORIES":
                return {
                    ...state,
                    categories: {
                        loading: false,
                        data: action.data
                    }
                }
        case "UPDATE_SERVICE":
            return {
                ...state,
                services: {
                    loading: false,
                    data: updateService(state.services.data, action.data)
                }
            }
        case "DELETE_SERVICE":
            return {
                ...state,
                services: {
                    loading: false,
                    data: state.services.data.filter(e=>e.id != action.data)
                }
            }
        default:
            return state
    }
}

function updateService(data: Service[], service: Service){
    return data.map(item =>
        item.id === service.id ? service : item
    );
}

export default ServicesReducer