import React from 'react';
import './selectionMenu.css';

interface selectorMenuProt{ 
    name:string
}


const SelectionMenu = (props:selectorMenuProt ) => {

return <div className='hover:text-blue-700  cursor-pointer'>
   
   <div className='border-b border-b-2 border-blue-700 slice-border-b'>
    {
        props.name 
    }   v 

   </div>
</div>

}


export default SelectionMenu;