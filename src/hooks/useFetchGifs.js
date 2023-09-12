import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

/**
 *  hook personalizado para trabajar con los gifs
 * @returns retorna un array de gifs
 */
export const useFetchGifs = ( category ) => {


    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    // este hook nos ayuda aca para que cargue las imagenes solo cuando es creado el component
    // con el segundo parametro []
    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading,
    }
}
