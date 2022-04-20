import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useGlobalContext } from './context';

const Headlines = () => {
    const { heads } = useGlobalContext();
    const newWorld = heads.filter((item) => item.section.toLowerCase()==='world');
    const newWorlds = heads.filter((item) => item.section.toLowerCase()==='us');
    const newWorldAll = [...newWorld, ...newWorlds];
    
    return (
    <>
        <div className='m-4'>
        {newWorld.map((item,index) =>{
            const {des_facet,abstract,title,multimedia,url} = item
            if (index==0)
            return (
                <main key={uuidv4()} className='border-b-2'>
                    <p className='text-2xl font-bold text-black text-center m-8 capitalize lg:text-4xl hover:opacity-60'><a href={url}>{title}</a></p>
                    <section  className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-between mb-3'>
                        <article className='grid xs:grid-cols-1 md:grid-cols-3 col-span-2'>
                        <div className='text-center md:text-left m-3'>
                            <p className='font-bold mt-2 text-[#FF0000]'>Live</p>
                            <div>
                                {des_facet.map((des,indexD) => {
                                    if (indexD < 2)
                                return (
                                    <p className='font-bold mt-2' key={indexD}>{des}</p>
                                )
                            })}
                            {multimedia.map((media,indexW) => {
                                if (indexW ==0)
                                return (
                                    <p className='mt-2 text-sm' key={indexW}>{media.caption}</p>
                                )
                            })}
                            </div>
                        </div>
                        <div className='md:col-span-2'>
                            {multimedia.map((media,indice) => {
                                if (indice==0)
                                return (
                                    <div key={indice}><a href={url}><img src={media.url} alt='' /></a></div>
                                )
                            })}
                        </div>
                        </article>
                        <div className='hidden sm:hidden text-sm font-bold xs:block lg:block border-l-2 m-3'>
                            <a className='block hover:opacity-75 p-1' href={url}>{title}</a>
                            <a className='block hover:opacity-75 p-1'href={url}>{abstract}</a>
                        </div>
                    </section>
                </main>        
            )
        })
        }               
    </div>
    <div className='grid lg:grid-cols-5 md:grid-cols-3 divide-x m-4 font-semibold small-size'>
    {newWorldAll.map((item,index) =>{
            const {abstract, title, url} = item
            if (index < 5)
            return (
                <section key={uuidv4()} className =''>
                    <p className='m-4 hover:opacity-75 '><a href={url}>{abstract || title}</a></p>                   
                </section>                      
            )
        })
        }
    </div>      
    </>
)
}

export default Headlines
