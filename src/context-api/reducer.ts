import { Service } from '@/app/page';
import { title } from 'process';

export type ServicesState = {
    services: Service[],
    filtered: Service[],
    categories: any[],
    service: Service,
    category: number 
}

const SERVICE_INI_STATE = {
    id: '',
    title: '',
    description: '',
    category: ''
}

export const INITIAL_STATE: ServicesState ={
    services: [],
    filtered: [],
    categories: [],
    service: SERVICE_INI_STATE,
    category: -1
}

const ServicesReducer = (state: ServicesState, action: any): ServicesState => {
    switch (action.type) {
        case "SET_SERVICES":
            return {
                ...state,
                services: action.data,
                filtered: action.data        
            }
        case "FILTER_SERVICES":
            return {
                ...state,
                filtered: action.data == -1 ? state.services : state.services.filter(e=>e.category == action.data)
            }
        case "UPDATE_FILTERED":
            return {
                ...state,
                filtered: state.category == -1 ? state.services : state.services.filter(e=>e.category == state.category)
            }
        case "SET_CATEGORIES":
            return {
                ...state,
                categories: action.data
            }
        case "SET_CATEGORY":
            return {
                ...state,
                category: action.data
            }
        case "SET_SERVICE":
            return {
                ...state,
                service: action.data
            }
        case "UPDATE_SERVICE":
            return {
                ...state,
                filtered: updateService(state.filtered, action.data),
                services: updateService(state.services, action.data)
            }
        case "RESET_SERVICE":
            return {
                ...state,
                service: SERVICE_INI_STATE
            }
        case "DELETE_SERVICE":
            return {
                ...state,
                filtered: state.filtered.filter(e=>e.id != action.data),
                services:  state.services.filter(e=>e.id != action.data)
            }
        default:
            return state
    }
}

function updateService(data: Service[], service: Service){
    return data.map(item =>
        item.id == service.id ? service : item
    );
}

export default ServicesReducer