import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  // Hook useState
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {
    // if( categories.includes(newCategory)) return;
    if (categories.some(categoria => categoria.toLowerCase() === newCategory.toLowerCase())) return;

    setCategories([newCategory, ...categories ]);

  }

  return (
    <>
      {/* Titulo */}
      <h1>GiftExpertApp</h1>

      {/* input */}
      <AddCategory 
        // setCategories={ setCategories } 
        onNewCategory={ e => onAddCategory(e) }
      />

      {/* Listado de Gif  */}
      { categories.map( category => (
            <GifGrid key={category} category={ category }/>
          )
        )
      }
 
      {/* Gif item */}

      
    </>
  )
}
