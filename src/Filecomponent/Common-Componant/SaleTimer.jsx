import React from 'react'
import './SaleTimer.css'
import { useState , useEffect } from 'react'

const SaleTimer = () => {

    const [Timer , setTimer] = useState({days:0 , hours:0 , minutes:0 , seconds:0});

    useEffect(()=>{
        const saleEndDate = new Date('2024-03-22T23:59:59').getTime();
        const updateTimer = () =>{
            const currentTime = new Date().getTime();
            const timeDifference = saleEndDate - currentTime;

            if(timeDifference>0){
                const days = Math.floor(timeDifference/(1000*60*60*24));
                const hours = Math.floor((timeDifference%(1000*60*60*24))/(1000*60*60));
                const minutes = Math.floor((timeDifference%(1000*60*60))/(1000*60));
                const seconds = Math.floor((timeDifference%(1000*60))/1000);
                
                setTimer({days , hours , minutes , seconds});
            }
        }
        const timInterval = setInterval(updateTimer,1000);

        return()=> clearInterval(timInterval);
    },[]);

  return (
    <>
      <div className="maintimer">
        <p className='ptimer-div'>
          <h1 className='sh1'>{Timer.days}<span>days</span></h1>
          <h1 className='sh1'>{Timer.hours}<span>hours</span></h1>  
          <h1 className='sh1'>{Timer.minutes} <span>minutes</span></h1>  
          <h1 className='sh1'>{Timer.seconds} <span>seconds</span></h1> 
        </p>
      </div>
    </>
  )
}

export default SaleTimer
