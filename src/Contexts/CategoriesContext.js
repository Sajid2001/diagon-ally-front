import { createContext, useReducer } from 'react'

export const CategoriesContext = createContext()

export const categoriesReducer = (state, action) => {
    switch(action.type){
        case 'SET_CATEGORIES':
            return{
                categories: action.payload
            }
        case 'CREATE_CATEGORY':
            return{
                categories:[action.payload,...state.categories]
            }
        case 'DELETE_CATEGORY':
            return {
                categories: state.categories.filter(category => category._id !== action.payload._id),
            }
        case 'ADD_LOCATION':
            {
                const { categoryId, location} = action.payload;
                const category = state.categories.find(category => category._id === categoryId);
          
                if (category) {
    
                  const updatedCategory = { ...category };
                  updatedCategory.locations = [...updatedCategory.locations, location];

                  const updatedCategories = state.categories.map(category =>
                    category._id === categoryId ? updatedCategory : category
                  );

                  return {
                    categories: updatedCategories,
                  };

                }
                return state;
            }
        case 'DELETE_LOCATION':
            {
                const { categoryId, locationId } = action.payload;
                const category = state.categories.find(category => category._id === categoryId);
          
                if (category) {
                  const updatedCategory = { ...category };
                  updatedCategory.locations = updatedCategory.locations.filter(location => location._id !== locationId);

                  const updatedCategories = state.categories.map(category =>
                    category._id === categoryId ? updatedCategory : category
                  );

                  return {
                    categories: updatedCategories,
                  };
                  
                }
                return state;
            }
        default:
            return state;
    }
}

export const CategoriesContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(categoriesReducer, {
        categories:[]
    })

    return(
        <CategoriesContext.Provider value = {{...state,dispatch}}>
            { children }
        </CategoriesContext.Provider>
    )
}

