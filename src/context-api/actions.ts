import { Service } from "@/app/page"
import { deleteServiceService, getCategoriesData, getServicesData, updateServiceService } from "@/services/services"

export const getServices = async (dispatch: any) => {
    try {
        const data = await getServicesData()
        dispatch({ type: "SET_SERVICES", data })

    } catch (error) {
        console.error(error)
    }
}

export const getCategories = async (dispatch: any) => {
    try {
        const data = await getCategoriesData()
        dispatch({ type: "SET_CATEGORIES", data })

    } catch (error) {
        console.error(error)
    }
}

export const filterServices = async (dispatch: any, category:number) => {
    dispatch({ type: "FILTER_SERVICES", data: category })
}

export const setCategory = async (dispatch: any, category:number) => {
    dispatch({ type: "SET_CATEGORY", data: category })
}

export const updateService = async (dispatch: any, service: Service) => {
    //SERVER UPDATE
    await updateServiceService(service)
    //
    dispatch({ type: "UPDATE_SERVICE", data: service })
    dispatch({ type: "UPDATE_FILTERED"})
}

export const resetService = async (dispatch: any) => {
    dispatch({ type: "RESET_SERVICE"})
}

export const setService = async (dispatch: any, service: Service) => {
    dispatch({ type: "SET_SERVICE", data: service })
}

export const deleteService = async (dispatch: any, id:number) => {
    //SERVER DELETED
    await deleteServiceService(id)
    //
    dispatch({ type: "DELETE_SERVICE", data: id })
}