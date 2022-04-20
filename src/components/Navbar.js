import React from 'react'
import logo from '../logo.png';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import Menu from './Menu';
import {FaBars} from 'react-icons/fa';
import {BsFillPersonFill} from 'react-icons/bs';
import {TiWeatherPartlySunny} from 'react-icons/ti';
import {BiSearchAlt2} from 'react-icons/bi';

const Navbar = () => {
    const { menu, openMenu } = useGlobalContext();

    const date = Date.now();
    const today = new Date(date).toDateString();

    const urlLogIn = 'https://wuser.netlify.app/login';

    return (
    <>
        <nav className='lg:hidden p-3'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <button onClick={openMenu} className='nav-toggle'><FaBars /></button>
                    <div className={`${menu? 'menu-vis': 'menu-non-vis-small'}`}><Menu /></div>
                    <Link to='/'><img src={logo} alt="" className='logo'/></Link>
                    <button className='nav-person'>
                        <a href={urlLogIn}><BsFillPersonFill /></a>
                    </button>
                </div>
            </div>
        </nav>
        <nav className='lg:hidden'>
            <div className='nav-center'>
                <div className='nav-header nav-color'>
                    <div>
                        <p className="font-bold">{today}</p>
                    </div>
                    <Link to='/' >SUBSCRIBE FOR $1/WEEK</Link>
                </div>
            </div>
        </nav>
        <nav className='hidden lg:block lg:w-11/12 lg:mx-auto'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <div className='nav-toggle-search'>
                        <button onClick={openMenu} className='nav-toggle'><FaBars /></button>
                        <div className={`${menu? 'menu-vis': 'menu-non-vis'}`}><Menu /></div>
                        <Link to='/search' className= 'm-5 nav-person'><BiSearchAlt2 /></Link>
                        <div className='search-non-vis'><SearchForm /></div>
                    </div>    
                    <div>
                        <p className='span-margin'><span className='mx-3'>U.S.</span><span className='mx-3'>INTERNATIONAL</span><span className='mx-3'>CANADA</span><span className='mx-3'>ESPAÑOL</span><span className='mx-3'>中文</span></p>
                    </div>
                    <div>
                        <span className='mx-5 bg-slate-500 text-xs p-2 text-white'><Link to='/' >SUBSCRIBE FOR $1/WEEK</Link></span>
                        <button className='nav-person'>
                            <a href={urlLogIn}><BsFillPersonFill /></a>                            
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        <nav className='hidden lg:block lg:w-11/12 lg:mx-auto'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <div>
                        <p className="font-bold text-xs">{today}</p>
                        <p className="text-xs">Today's Paper</p>
                    </div>
                    <Link to='/'><img src={logo} alt="" className='logo-large'/></Link>
                    <button className='nav-person'>
                        <TiWeatherPartlySunny />
                    </button> 
                </div>
            </div>
        </nav>
    </>
    )  
}

export default Navbar