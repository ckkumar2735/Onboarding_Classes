import React, { useState } from 'react'
import global from "../Images/Vector.png" 
import img1 from "../Images/logo.png"
import '../Styles/Header.css'


import Stepper_steps from './Stepper_steps';
import LocationForm from './LocationForm ';
import Category from './Category';

import { Card } from '@mui/material';

const Headers = () => {

 
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>

          <div className=' mt-2' >
            <div className='row'>
              <div className='header'>
                <img src={img1} alt="" className="img-fluid logo " />
                <div className='language-select'>
                  <img src={global} alt="" className="img-fluid icon" />
                  <div className="custom-select">
                    <select className='select-language'>
                      <option value="1" selected>English</option>
                      <option value="2">Hindi</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
           
            {/* <div className='row'>
              <Category />
            </div> */}
           
          
          </div>

  
         
        </div>
      </div>
    </>
  )
}

export default Headers
