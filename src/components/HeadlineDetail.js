import React from 'react';
import newspaper from  '../newspaper.jpg';
import { useGlobalContext } from './context';

const HeadlineDetails = () => {
    const { heads } = useGlobalContext();

    function unique(data, key) {
        return [
            ...new Map(
                data.map(x => [key(x), x])
            ).values()
        ]
    }
    
    const newItemN = (unique(heads, it => it.section));
        
    return (
    <>
        <div className='m-4'>
        <h2 className='font-bold mb-3'>NEWS</h2>
        <div  className='grid xs:grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 space-between'>
        {newItemN.map((item,index) => {
            const {section,abstract,title,multimedia,url} = item
            if (index < 15)
            return (
                <article key={index} className='headline-details'>
                    <p className='capitalize font-bold'>{section}</p>
                    {multimedia?.length > 0 ? (
                        multimedia.map((media,indexItem) => {
                            if (indexItem ===0)
                        return (
                            <div className='img-size'><a key={indexItem} href={url}><img src={media.url} alt='' /></a></div>
                        )})
                    ):(
                        <div className='img-size'><a href={url}><img src={newspaper} alt='' /></a></div>
                    )
                    }
                    <div className='img-size small-size'>
                        <a className='block hover:opacity-75 p-1' href={url}>{title}</a>
                        <a className='block hover:opacity-75 p-1'href={url}>{abstract}</a>
                    </div>
                </article>        
            )
        })

        }
        </div>
    </div>   
    </>
)
}

export default HeadlineDetails