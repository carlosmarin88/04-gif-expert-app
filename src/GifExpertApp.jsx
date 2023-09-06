import React, { useState } from "react";

export const GifExpertApp = () => {
    
    const [categories, setcategories] = useState([ 'One Punch', 'Dragon Ball']);

    const onAddCategory = (event) => {
        // Valorant
        console.log('Valorant')
        //setcategories([...categories, 'Valorant']);
        setcategories(cat => [...cat, 'Valorant']); // insert al final
        //setcategories(cat => ['Valorant', ...cat]); // insert al principio
        
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
            {/* Listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map( cat => <li key={cat}>{cat}</li>)}
            </ol>
                {/* Gif Item */}
        </>
    )
}