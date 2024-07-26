"use client";

import { createContext, useContext, useMemo, useReducer } from "react";
import ServicesReducer, { INITIAL_STATE } from "./reducer";
import { ServicesState } from './reducer';
import { getServices, setCategory, filterServices, deleteService, getCategories, setService, updateService, resetService } from './actions';
import { Service } from "@/app/page";

interface ActionsService {
    getServices: any;
    getCategories: any;
    setCategory: any
    filterServices: any;
    deleteService: any;
    setService: any;
    updateService: any;
    resetService: any
}

interface ServicesContextType extends ServicesState, ActionsService {}

const ServicesContext = createContext<ServicesContextType | undefined>(undefined);

const ServicesProvider = ({ children }: { children: React.ReactNode }) => {

    const [state, dispatch] = useReducer(ServicesReducer, INITIAL_STATE);

    const servicesFunctions = useMemo(
        () => ({
            getServices: () => {
                getServices(dispatch);
            },
            getCategories: () => {
                getCategories(dispatch);
            },
            setCategory:(category: number) => {
                setCategory(dispatch, category)
            },
            filterServices:(category: number) => {
                filterServices(dispatch, category)
            },
            deleteService:(id: number) => {
                deleteService(dispatch, id)
            },
            setService:(service: Service) => {
                setService(dispatch, service)
            },
            updateService:(service: Service) =>{
                updateService(dispatch, service)
            },
            resetService:() =>{
                resetService(dispatch)
            }
        }),
        []
    );

    return (
        <ServicesContext.Provider value={{ ...state, ...servicesFunctions }}>
            {children}
        </ServicesContext.Provider>
    );
}

export const useServicesContext = () => {
    const context = useContext(ServicesContext);
    if (!context) {
        throw new Error('useServicesContext must be used within an ServicesProvider');
    }
    return context;
};

export default ServicesProvider