
import { GifItem } from './GifItem';
import { useFetchGift } from '../hooks/useFetchGift';



type GifGrideProps = {
    category?: string
}




export const GifGride = ({ category }: GifGrideProps) => {

    const { images, isLoading }= useFetchGift(category);
 
    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                { isLoading ?  <p>Loading...</p> :
                     images.map((img: any) => 
                            <GifItem key={img.id} image={img} ></GifItem>
                    )
                }
                    
            </div>
        </>
    )
}
