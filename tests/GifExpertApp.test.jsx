import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en el componente <GifExpertApp/>', () => { 

    test('Debe de hacer match con el snapshot', () => { 

        const {container} = render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();
     })


     test('Debe de llamar onNewCategory si el input tiene un valor', async() => { 

        render(<GifExpertApp/>);
        //const addCategory = await screen.findByTestId('add-category');
        //console.log(addCategory);
     })

     test('Elemento de busqueda por defecto One Punch', async() => { 

        render(<GifExpertApp/>);
        //const addCategory = await screen.findByTestId('add-category');
        //console.log(addCategory);
     })
 })