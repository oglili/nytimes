import React from 'react';
import logo from '../logo.png';
import { v4 as uuidv4 } from 'uuid';
import { useGlobalContext } from './context';

const Footer = () => {
    const { heads, items } = useGlobalContext();
    function unique(data, key) {
        return [
            ...new Map(
                data.map(x => [key(x), x])
            ).values()
        ]
    }
    
    const newItemF = (unique(heads, it => it.section));

    return (
    <>
        <footer className='border-double border-indigo border-t-4 border-b-2 pt-3 pb-3 mb-4 ml-3'>
            <div><a href="#"><img src={logo} alt="" className='logo' /></a></div>
            <div className='grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 space-between mb-3'>
                <div>
                    <h2 className='font-bold mb-3 mt-2'>NEWS</h2>
                    <p className='hover:underline mb-2 small-size'><a href="#">Home Page</a></p>
                    {newItemF.map((item,index) => {
                    const {section,url} = item
                    if (index < 10)
                    return (
                        <a className='block mb-2 capitalize hover:underline small-size' key={index} href={url}>{section}</a>
                    )
                })}
                </div>
                <div>
                    <h2 className='font-bold mb-3 mt-2'>OPINION</h2>
                    {newItemF.map((item,index) => {
                    const {section,url} = item
                    if (index > 5)
                    return (
                        <a className='block mb-2 capitalize hover:underline small-size' key={index} href={url}>{section}</a>
                    )
                })}
                </div>
                <div>
                    <h2 className='font-bold mb-3 mt-2'>ARTS</h2>
                    {newItemF.map((item,index) => {
                    const {section,url} = item
                    if (index < 8)
                    return (
                        <a className='block mb-2 capitalize hover:underline small-size' key={index} href={url}>{section}</a>
                    )
                })}
                </div>
                <div>
                    <h2 className='font-bold mb-3 mt-2'>LIVING</h2>
                    {newItemF.map((item,index) => {
                    const {section,url} = item
                    if (index > 8)
                    return (
                        <a className='block mb-2 capitalize hover:underline small-size' key={index} href={url}>{section}</a>
                    )
                })}
                </div>
                <div>
                    <h2 className='font-bold mb-3 mt-2'>TRAVEL</h2>
                    {newItemF.map((item,index) => {
                    const {section,url} = item
                    if (index < 8)
                    return (
                        <a className='block mb-2 capitalize hover:underline small-size' key={index} href={url}>{section}</a>
                    )
                })}
                </div>
                <div>
                    <h2 className='font-bold mb-3 mt-2'>MORE</h2>
                    <p className='hover:underline mb-2 small-size font-bold'><a href="#">Subscribe</a></p>
                    {newItemF.map((item,index) => {
                    const {section,url} = item
                    if (index > 6)
                    return (
                        <a className='block mb-2 capitalize hover:underline small-size' key={index} href={url}>{section}</a>
                    )
                })}
                </div>
            </div>            
        </footer>
        <p className='text-center small-size pb-3'> © 2022 The New York Times Company</p>    
    </>
    )
}

export default Footer