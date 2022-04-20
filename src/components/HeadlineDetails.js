import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useGlobalContext } from './context';

const HeadlineDetails = () => {
    const { heads } = useGlobalContext();  

    const newOpinion = heads.filter((item) => item.section.toLowerCase()==='opinion');    
    let arrayOpinion = ['Opinion','Opinion Columnists','Editorials','Guest Essays','Sunday Review | Opinion']
    
    const newArt = heads.filter((item) => item.section.toLowerCase()==='arts');
    const newMovies = heads.filter((item) => item.section.toLowerCase()==='movies');
    const newTheater = heads.filter((item) => item.section.toLowerCase()==='theater');
    const newBuss = heads.filter((item) => item.section.toLowerCase()==='business');
    const newArts = [...newArt, ...newMovies]
    const newArtss = [...newTheater, ...newBuss]
    const newArtAll = [...newArts, ...newArtss]   
    let arrayArts = ['Arts','Art and Design','Movies','Television','Sports'];
    
    const newStyle = heads.filter((item) => item.section.toLowerCase()==='style');
    const newWell = heads.filter((item) => item.section.toLowerCase()==='well');
    const newRealEstate = heads.filter((item) => item.section.toLowerCase()==='realestate');
    const newStyles = [...newStyle, ...newWell]
    const newStylesAll = [...newStyles, ...newRealEstate]
    
    let arrayStyle= ['Style','Well and Design','Well','Travel','Real Estate'];

    return (
    <>
    <div className='m-4'>
        <h2 className='font-bold mb-3 mt-12'>OPINION</h2>
        <div  className='grid xs:grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 space-between'>
        {newOpinion.map((item,index) =>{
            const {abstract,title,multimedia,url} = item
            if (index < 5)
            return (
                <article key={index} className='headline-details'>
                    <h4 className='capitalize font-bold'>{arrayOpinion[index]}</h4>
                    {multimedia.map((media,indexOpinion) => {
                        if (indexOpinion ===1)
                        return (
                            <div key={indexOpinion} className='img-size'><a href={url}><img src={media.url} alt='' /></a></div>
                        )
                    })}
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
    <div className='m-4'>
        <h2 className='font-bold mb-3 mt-12'>ARTS</h2>
        <div  className='grid xs:grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 space-between'>
        {newArtAll.map((item,index) =>{
            const {abstract,title,multimedia,url} = item
            if (index < 5)
            return (
                <article key={index} className='headline-details'>
                    <h4 className='capitalize font-bold'>{arrayArts[index]}</h4>
                    {multimedia.map((media,indexArts) => {
                        if (indexArts==1)
                        return (
                            <div key={indexArts} className='img-size'><a href={url}><img src={media.url} alt='' /></a></div>
                        )
                    })}
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
    <div className='m-4'>
        <h2 className='font-bold mb-3 mt-12'>LIVING</h2>
        <div  className='grid xs:grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 space-between'>
        {newStylesAll.map((item,index) =>{
            const {abstract,title,multimedia,url} = item
            if (index < 5)
            return (
                <article key={uuidv4()} className='headline-details'>
                    <h4 className='capitalize font-bold'>{arrayStyle[index]}</h4>
                    {multimedia.map((media,indexStyle) => {
                        if (indexStyle ===1)
                        return (
                            <div key={indexStyle} className='img-size'><a href={url}><img src={media.url} alt='' /></a></div>
                        )
                    })}
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