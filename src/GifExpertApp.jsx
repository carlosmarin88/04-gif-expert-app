import React, { useState } from "react";

export const GifExpertApp = () => {
    
    const [categories, setcategories] = useState([ 'One Punch', 'Dragon Ball']);

    console.log(categories);

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
            {/* Listado de Gif */}
            <ol>
                {categories.map( cat => <li key={cat}>{cat}</li>)}
            </ol>
                {/* Gif Item */}
        </>
    )
}