import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';
import Menu from './Menu';
import {FaBars} from 'react-icons/fa';

export default function NavbarSticky () {
  const { heads, items,  menu, openMenu } = useGlobalContext();
  
  function unique(data, key) {
    return [
      ...new Map(
        data.map(x => [key(x), x])
      ).values()
    ]
  }
    
    let newHead = (unique(heads, it => it.section));

    function capitalize(arr) {
      for (var i = 0; i < arr.length; i++) {
        var first = arr[i].section;
        arr[i].section = first.slice(0,1).toUpperCase() + first.slice(1).toLowerCase();
      }
    return arr;
    }

    const newHeads = capitalize(newHead)
    
    const newItems = (unique(items, item => item.section));
    const combineArray = [...newHeads, ...newItems]
    const allCategory = (unique(combineArray, array => array.section));  
  
    const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 300 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  return (
    <>
      <div className='hidden lg:block'>
        <div className={`navbar ${stickyClass}`}>
          <div className='text-center whitespace-nowrap'>
            <button onClick={openMenu} className={`nav-toggle pt-1 ${menu? 'hidden':'inline-block' }`}><FaBars /></button>
            <div className={`${menu? 'menu-vis': 'menu-non-vis-small'}`}><Menu /></div>                
            {allCategory.map((item,newIndex) =>{
              const {section,url} = item
              return (
                <a className='inline-block m-2 small-size capitalize hover:underline' key={newIndex} href={url}>{section}</a>
              )
            })}
          </div>      
        </div>
      </div>     
    </>
  ) 
}

