import React, { useState } from "react";
import { AddCategory } from "./components/addCategory";

export const GifExpertApp = () => {
    
    const [categories, setcategories] = useState([ 'One Punch', 'Dragon Ball']);

    /*
    const onAddCategory = (event) => {
        // Valorant
        console.log('Valorant')
        //setcategories([...categories, 'Valorant']);
        setcategories(cat => [...cat, 'Valorant']); // insert al final
        //setcategories(cat => ['Valorant', ...cat]); // insert al principio
        
    }*/

    const onNewCategory = (newCategory) => {
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
            onNewCategory={onNewCategory}
            />
            {/* Listado de Gif */}
            <ol>
                {categories.map( cat => <li key={cat}>{cat}</li>)}
            </ol>
                {/* Gif Item */}
        </>
    )
}