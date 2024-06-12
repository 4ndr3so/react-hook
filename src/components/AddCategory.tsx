import React, { useState } from 'react'

export const AddCategory = ({onAddCategory}:{onAddCategory:any}) => {

  
    const [inputValue, setInputValue] = useState<string>('');

    const onInpuChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(inputValue.trim().length <= 0) return;

        //setCategorias((categories:any) => [inputValue, ...categories]);

        onAddCategory(inputValue);
        setInputValue('');
    }

  return (
  
    <form onSubmit={onSubmit}>

            <label htmlFor="nomb">Add Name:</label>
            <input type="text" name="nomb" placeholder='Buscar' value={inputValue}
            onChange={onInpuChange}/>
    </form>

  )
}
