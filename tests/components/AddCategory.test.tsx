import { fireEvent, render,screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";


const onAddCategory:any=["one punch"];
describe('Prueba en Add category', () => { 

    test('debe de mostrar el componente correctamente', () => {
        expect(true).toBe(true);
        render(<AddCategory onAddCategory={onAddCategory}/>);
        const input = screen.getByRole('textbox') as HTMLInputElement;
        fireEvent.change(document.querySelector('input') as Element, {target: {value: 'Saitama'}});


        expect( input.value).toBe('Saitama');
        screen.debug();
    });
});