import { useAuthContext } from "./useAuthContext"
import { useCategoriesContext } from "./useCategoriesContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: categoriesDispatch } = useCategoriesContext()

    const logout = () => {
        //remove user from local storage
        localStorage.removeItem('user')

        //dispatch logout
        dispatch({type:'LOGOUT'})
        categoriesDispatch({type:'SET_CATEGORIES', payload:[]})
    }

    return {logout}
}
