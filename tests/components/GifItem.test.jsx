
import { GifItem } from '../../src/components';
import { render, screen } from '@testing-library/react';

describe('Pruebas en <GifItem>', () => {

    const title = 'Titulo';
    const url = 'http://urltest.com/'


    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={ title } url = { url } />)
        //screen.debug();
        const { src, alt } = screen.getByRole('img');
        //console.log(screen.getByRole('img').src, screen.getByRole('img').alt)
        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(title);
        
         expect(src).toBe(url);
         expect(alt).toBe(title);
    });

    test('Debe de mostrar el titulo en el componente', () => { 

        render(<GifItem title={ title } url = { url } />);
        expect(screen.getByText(title)).toBeTruthy();
     })

})