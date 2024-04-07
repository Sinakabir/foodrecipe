import React, { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

const Favourites = () => {
  const {favouriteList} = useContext(GlobalContext)

 

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        favouriteList && favouriteList.length > 0 ?
        favouriteList.map(item => <RecipeItem item={item}/>)
        : <div>
          <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>Nothign is added in Favourites. </p>
        </div>
      }
    </div>
  );
};

export default Favourites;
