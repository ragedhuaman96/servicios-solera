"use client";

import { createContext, useContext, useMemo, useReducer } from "react";
import ServicesReducer, { INITIAL_STATE } from "./reducer";
import { ServicesState } from './reducer';
import { getServices } from "./actions";

interface ActionsService {
    getServices: any
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