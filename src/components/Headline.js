import React from 'react';
import { useGlobalContext } from './context';

const Headline = () => {
    const { heads, items } = useGlobalContext();
    
    function unique(data, key) {
        return [
            ...new Map(
                data.map(x => [key(x), x])
            ).values()
        ]
    }
    
    const newHeads = (unique(heads, it => it.section));

    function capitalize(arr) {
    for (var i = 0; i < arr.length; i++) {
        var first = arr[i].section;
        arr[i].section = first.slice(0,1).toUpperCase() + first.slice(1).toLowerCase();
    }
    return arr;
    }
    
    const newHead = capitalize(newHeads)
    
    const newItems = (unique(items, item => item.section));
    const combineArray = [...newHead, ...newItems]
    const allCategories = (unique(combineArray, array => array.section));
    
    return (
    <>
        <div className='text-center lg:mx-auto border-double border-black border-b-4 headline-border whitespace-nowrap'>
            {allCategories.map((item,newIndex) =>{
                const {section,url} = item
                return (
                    <a className={`hidden lg:inline-block m-2 text-small capitalize hover:underline ${section==='Us' && 'lg:hidden' }`}  key={newIndex} href={url}>{section}</a>
                )
            })

            }
        </div>
    </>
    )
    }

export default Headline
