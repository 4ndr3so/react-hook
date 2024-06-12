import  { useEffect, useState } from 'react'
import { getGift } from '../api/getGif';


// Define the type for the image object
interface ImageObject {
    id: string;
    title: string;
    url: string;
  }

interface UseImageReturn {
    images: ImageObject[];
    isLoading: boolean;
}

export const useFetchGift = (category:any):UseImageReturn =>{

    const [images, setImage] = useState<ImageObject[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getImages = async () => {

        const images = await getGift(category);
        setImage(images)

    }


    useEffect(() => {
        getImages().then(() => setIsLoading(false));
    }, [category])

    return {images, isLoading}
}
