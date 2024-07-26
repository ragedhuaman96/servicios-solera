import { getServicesData } from "@/services/services"

export const getServices = async (dispatch: any) => {
    try {
        const data = await getServicesData()
        dispatch({ type: "SET_SERVICES", data })

    } catch (error) {
        console.error(error)
    }

}