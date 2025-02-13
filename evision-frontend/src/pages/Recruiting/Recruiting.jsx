import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Header from "./Header";
import Body from "./Body";
import ReHeader from "./ReHeader";

const Recruiting = () => {

  useEffect(() => {
    axios.get("http://localhost:3001/recruiting").then((response)=>{
      console.log("IT WORKED");
    })
  }, []);

  return (
    <>
      <ReHeader />
      <div>
        <Header />
        <Body />
      </div>
    </>
  );
};

export default Recruiting;
