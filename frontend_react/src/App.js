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
        <About/>
        <Work/>
        {/* <Skills/> */}
        <Testimonial/>
        <Footer/>
        </div>
    );
}

export default App;