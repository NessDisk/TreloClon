import React from 'react';
import SelectionMenu from './botons/selectorMenue';

const NavBar = () => {
  return <div className='absolute top-0 flex flex-row justify-between items-center right-50% bg-white h-[100px] w-full '>
  <div className=' flex flex-row w-[50%] justify-between ml-5'>

    <div>
    Logo
    </div>
    <div>
    <SelectionMenu name='funciones'></SelectionMenu>
    </div>
    <div>
    <SelectionMenu name='planes'></SelectionMenu>    
    </div>
    <div>
     precio
    </div>
    <div>
    <SelectionMenu name='soluciones'></SelectionMenu>
    </div>
  </div>
    <div className='mr-5'>
        ir a tableros
    </div>



  </div>;
};

export default NavBar;