import React, { useEffect } from "react";
import {Link} from 'react-router-dom';
import "./Error.css";

function Error({ error, changeError }) {
  
  useEffect(() => {
    changeError(true)
    return () => {
      changeError(false)
    }
  }, [changeError])
  

  return (
    <div className="error">
      <div className="error__type"><h1>404</h1></div>
      <div className="word">Sorry, This page is not available!</div>
      <Link to='/'><button className='back__btn'>Go To Home</button></Link>
    </div>
  );
}

export default Error;
