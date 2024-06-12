import  { useState } from 'react';
import { AddCategory, GifGride } from './components';




export const GifExpertApp = () => {


    const [categorias, setCategorias] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    
    const addCategory = ( newCategory:string ) => {

        if(categorias.includes(newCategory)) return;

        setCategorias([newCategory,...categorias ]);
    }

    return (
        <>
            <h1>Gif Expert</h1>

            <AddCategory 
            onAddCategory={addCategory}
            
            //setCategorias={setCategorias}
            ></AddCategory>
                    
                {
                    categorias.map( (categoria) => {
                        return <GifGride key={categoria} category={categoria}></GifGride>
                    })
                }
           
        </>
    )
}
