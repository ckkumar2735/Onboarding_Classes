import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';
import Card from 'react-bootstrap/Card';
import '../Styles/Comission_onbording.css'

import Esign from './Esign';
import Comission_onbording_1 from './Comission_onbording_1';
import Decline_form from './Decline_form';



const Comission_onbording = () => {
  const [toggle, setToggle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [Accept, setAccept] = useState(false);
  const [Decline, setDecline] = useState(false);




  useEffect(() => {
    if (Accept == true) {
      setDecline(false);
      setToggle(!toggle);
      setShowContent(true);
    }
    else if (Decline == true) {
      setAccept(false);
      setToggle(toggle);
      setShowContent(true);
    }

  }, [Accept, Decline])




  const [formData, setFormData] = useState({
    expertiseType: '',
    addExpertise: '',
    ownerName: '',
    socialAccountType: '',
    socialAccountUrl: '',
    ownerEmail: '',
    numBatches: ''
  });

  // const handleInputChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   console.log(formData);
  // };

  function Nextpage() {
    setToggle(!toggle);
    setShowContent(true);
  }



  return (
    <div className='container' >
      <div className='row'>
        <div className='col-md-8'>

          {!showContent && (
            <Card className=' card_123 text-center d-flex justify-content-center align-items-center cod' style={{
              borderRadius: '8px'
            }}>


              <Card.Body>
                <Card.Title className='card_124  mt-4'>Commission & Onboarding Details</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle> */}
                <Card.Text className=' card_125    mt-5'>
                  Please note 20% commission and Rs.0 onboarding fees will be applicable to your Class Bookings. Please click 'Accept' to continue.
                </Card.Text>


                {/* <button className='btn4 mt-5 '  >Accept</button>
              <button className='btn5 mt-5'>Decline</button> */}
              </Card.Body>
              <div className='d-flex  my-4'>
                {Accept ? (<Button className=' efg  efgh bg-danger ' onClick={() => setAccept(false)}  > Accept</Button>)
                  : (<Button className='efg efgh  bg-light ' onClick={() => setAccept(true)}> Accept</Button>)}
                {Decline ? (<Button className='efg   bg-danger  ' onClick={() => setDecline(false)}> Decline</Button>)
                  : (<Button className='efg bg-light' onClick={() => setDecline(true)} >Decline</Button>)}



              </div>


            </Card>
          )}

          {/* <div className='mt-5'>
              <span className='abc mt-5'>
                  <input type="checkbox"   id="switcher" checked={toggle}  onClick={Nextpage}  />
                  <label htmlFor="switcher"></label>
                  </span>                
              </div> */}





          {showContent && (
            <>
              {toggle ? (<Comission_onbording_1 />) : (<Decline_form />)}
            </>)}




        </div>
      </div>
    </div>



  );
};



export default Comission_onbording;
