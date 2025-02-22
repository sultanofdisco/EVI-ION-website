import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Header from "./Header";
import Body from "./Body";
import ReHeader from "./ReHeader";

const Recruiting = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    axios.get("http://54.180.97.182:3001/recruiting").then((response)=>{
      console.log("IT WORKED");
      window.scrollTo(0, 0)
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
