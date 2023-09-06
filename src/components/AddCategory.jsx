// para crear un componente shortcut rafc

import { useState } from "react"

export const AddCategory = ({onNewCategory}) => { //onAddonCategory

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => { // (event)
        //console.log(event);
        //console.log(event.target.value);
        //setInputValue(event.target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;
        //console.log(event);
        //console.log(inputValue);
        //console.log(onAddCategory);
        //onAddCategory(cat => [...cat, inputValue]);
        onNewCategory(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
