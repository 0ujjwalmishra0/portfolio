import React from 'react';
import './Nav.scss';
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai';
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BsChatQuote} from 'react-icons/bs';
import { useState } from 'react';
const Nav= ()=>{
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href='#' onClick={()=> setActiveNav('#')} className= {activeNav==='#' ? 'active': ''}><AiOutlineHome/></a>
            <a href='#skills' onClick={()=> setActiveNav('#about')} className= {activeNav==='#about' ? 'active': ''}><AiOutlineUser/></a>
            <a href='#work' onClick={()=> setActiveNav('#work')} className= {activeNav==='#work' ? 'active': ''}><RiServiceLine/></a>
            <a href='#testimonials' onClick={()=> setActiveNav('#testimonials')} className= {activeNav==='#testimonials' ? 'active': ''}><BsChatQuote/></a>
            <a href='#contact' onClick={()=> setActiveNav('#contact')} className= {activeNav==='#contact' ? 'active': ''}><BiMessageSquareDetail/></a>
        </nav>
    );
};


export default Nav;