import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['']);

    /*
    const onAddCategory = (event) => {
        // Valorant
        console.log('Valorant')
        //setcategories([...categories, 'Valorant']);
        setcategories(cat => [...cat, 'Valorant']); // insert al final
        //setcategories(cat => ['Valorant', ...cat]); // insert al principio
        
    }*/

    const onNewCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        //console.log(newCategory);
        setcategories(cat => [newCategory, ...cat]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
            <AddCategory
                //onAddCategory={ setcategories }
                onNewCategory={onNewCategory}/>
            {/* Listado de Gif */}
            {categories.map(cat => <GifGrid key={cat} category={cat} />)}
            {/* Gif Item */}
        </>
    )
}