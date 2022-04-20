import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useGlobalContext } from './context';
import {AiOutlineClose} from 'react-icons/ai';

const Menu = () => {
  const { heads, items, closeMenu } = useGlobalContext();

  function unique(data, key) {
    return [
      ...new Map(
          data.map(x => [key(x), x])
      ).values()
    ]
  }
    
  const newMenu = (unique(heads, it => it.section));

  function capitalize(arr) {
  for (var i = 0; i < arr.length; i++) {
      var first = arr[i].section;
      arr[i].section = first.slice(0,1).toUpperCase() + first.slice(1).toLowerCase();
  }
  return arr;
  }
  const newMenus = capitalize(newMenu)
  
  const newItems = (unique(items, item => item.section));
  const combineMenu = [...newMenus, ...newItems]
  const allMenu = (unique(combineMenu, menu => menu.section));
  return (
    <>
      <aside className='sidebar show-sidebar'>
        <div className='sidebar-butt'>
          <button><AiOutlineClose onClick={()=> closeMenu()}/></button>
        </div>
        <ul className='links'>
          {allMenu.map((link) => {
            const { section,url } = link;
            return (
              <li key={uuidv4()}>
                <a href={url}>
                  {section}
                </a>
              </li>
            );
            })}
          </ul>
      </aside>
    </>
  )
}

export default Menu