import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifts";




export const useFetchGifs = (category) => {


    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)


    const getimages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        
        getimages();
    }, []);



    return {
        images: images,
        isLoading
    }

}
