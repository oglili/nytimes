import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import {FaChevronLeft} from 'react-icons/fa';
import SearchForm from '../components/SearchForm';

const Search = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [term, setTerm] = useState('politics')
    const [articles, setArticle] = useState([])
    
    const fetchArticle = async () => {
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_API_KEY}`).then((response) => {
            setArticle(response.data.response.docs);
            setIsLoading(false)
            }).catch((error) => {
            console.error(error);
            setIsLoading(false)
        }
    )};

    useEffect(() => {
        fetchArticle()
    }, [term]);
    
    return (
        <div>
            <Link to='/nytimes' className='flex'><FaChevronLeft /><span className='pt 1'>back</span></Link>      
            <div className="showcase mt-2">
                <div className="overlay">
                    <h1 className="text-4x1 font-bold text-white text-center mb-4 capitalize lg:text-6xl">Viewing articles about {term}</h1>
                    <SearchForm searchText= {(text) => setTerm(text)}/>
                </div>
            </div>
            <section className="grid grid-cols-1 gap-3 px-5 pt-10 pb-10"> 
            {isLoading? (
                <h1 className='text-center font-bold m-5 md:text-4xl text-2xl'>Loading</h1>
            ) : (articles.map((article) => {
            const {
                abstract,
                headline:{main},
                byline:{original},
                lead_paragraph,
                news_desk,
                section_name,
                web_url,
                _id,
                word_count,
            } = article

            return (
                <main key={_id} className="bg-white pt-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto">
                <h2 className="font-bold text-2xl mb-5 lg:text-4xl">{main}</h2>
                <h4>{abstract}</h4>
                <p>{lead_paragraph}</p>

                <ul className="my-4">
                    <li>{original}</li>
                    <li><span className="font-bold">News Desk:</span>  {news_desk}</li>
                    <li><span className="font-bold"> Section Name:</span> {section_name}</li>
                    <li><span className="font-bold">Word Count:</span>  {word_count}</li>
                </ul>
                <a href={web_url} className="underline">Web Resource</a>
                </main>
            )
            }))
        }
        </section>    
    </div>
    )
}

export default Search