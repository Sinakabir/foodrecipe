import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouriteList, setFavouriteList] = useState([]);

  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await res.json();

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate('/')
      }

      console.log(data);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavourite(getCurrentItem) {
    let copyFavouriteList = [...favouriteList]
    const index = copyFavouriteList.findIndex(item => item.id === getCurrentItem.id)

    if(index === -1){
      copyFavouriteList.push(getCurrentItem)
    }else{
      copyFavouriteList.splice(index)
    }
    setFavouriteList(copyFavouriteList)
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavourite,
        favouriteList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
