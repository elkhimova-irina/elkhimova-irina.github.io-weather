import './MainPage.css';
import React from 'react';
import Header from '../../components/Header/Header'
import MainPart from '../../components/MainPart/preview'
import Icon from '../../12.gif'

class Main extends React.Component {
   render(){

   return(
   <div className='MainPage'>
             <Header />
              <MainPart/>
             
                <a className="glink" href="https://github.com/elkhimova-irina/elkhimova-irina.github.io"><img src={Icon} alt="icon" /></a>
            </div>
        );
    }
    }
    
    
    
    export default Main;