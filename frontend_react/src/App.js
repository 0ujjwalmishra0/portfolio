import React from 'react';
import { About,Footer,Header,Testimonial,Work,Skills } from './container';
import {Navbar,Nav} from './components';
import './App.scss';

const App  =() =>{
    return (
        <div className='app'>
        {/* <Navbar/> */}
        <Header/>
        <Nav/>
        {/* <About/> */}
        
        <Skills/>
        <Work/>
        <Testimonial/>
        <Footer/>
        </div>
    );
}

export default App;