import React, {useState} from 'react';
import newspaper from  '../newspaper.jpg';
import { useGlobalContext } from './context';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const Viewed = () => {
    const { items } = useGlobalContext();
    const [sliderRef, setSliderRef] = useState(null)
    const sliderSettings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
    
    return (
    <>
        <div className='headline-border  mt-12'>
        <h1 className='text-2xl font-bold text-black text-center my-4 capitalize lg:text-3xl'>Most viewed articles for the last seven days</h1>
        <div className='content'>
            <Slider ref={setSliderRef} {...sliderSettings}>
                {items.map((item) => {
                    const {
                        title,
                        abstract,
                        id,
                        published_date,
                        updated,
                        url,
                        byline
                    } = item
                    return (
                        <article key={id} className="gap-10 px-5 pt-10">
                            <h1>{title}</h1>
                            <a href={url} className="underline text-blue-500">{abstract}</a>
                            <p><span className="font-bold"> Published date:</span> {published_date}, <span className="font-bold">Updated:</span> {updated} </p>
                            <p>{byline} </p>
                        </article>
                    )     
                })}
            </Slider>
            <div className='controls px-5'>
                <button onClick={sliderRef?.slickPrev}>
                    <FaChevronLeft />
                </button>
                <button onClick={sliderRef?.slickNext}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
        <div className='mt-14'>
        {items.map((item,index) =>{
            const {id,abstract,title,media:images,url,byline,section,adx_keywords} = item            
            if (index < 7)
            return (
                <main key={id}>
                    <section className='grid xs:grid-cols-1 md:grid-cols-3 gap-4 space-between mb-3 divide-x border-black'>
                        <article className='grid xs:grid-cols-1 md:grid-cols-2 col-span-2 gap-4 space-between mb-3 border-t-2 border-black pt-3'>
                            <div> 
                                <a className='block hover:opacity-75 p-1 font-bold' href={url}>{title}</a>
                                <a className='block hover:opacity-75 p-1'href={url}>{abstract}</a>
                            </div>
                            <div className='viewed'>
                            {images.length > 0 ? (
                                <img
                                    className="news-item__image"
                                    src={images[0]["media-metadata"][0]["url"]}
                                />):(<img
                                    className="news-item__image"
                                    src={newspaper}
                                />)}
                            </div>
                        </article>            
                        <div className='img-size small-size xs:block lg:block'>
                            <p className='font-bold  m-3'>{section}</p>
                            <p className='font-light m-3'>{adx_keywords}</p>
                            <a className='block hover:opacity-75 p-1  m-3' href={url}>{title}</a>
                            <a className='block hover:opacity-75 p-1  m-3'href={url}>{abstract}</a>
                            <p className='text-xs  m-3'>{byline}</p>
                        </div>
                    </section>
                </main>        
            )
        })
        }               
    </div>
    </div>
    </>
    ) 
}
export default Viewed