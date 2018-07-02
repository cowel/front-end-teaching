import React, { Component } from 'react';
import './App.css';

// Stateless component
const Intro = (props) => {
    console.log('props ', props)
    return (
        <div>
            <p className="App-intro">
            To get started, edit <code>src/abc.js</code> and save to reload.
            </p>
            <p>Brazill - Mexico</p>
            <p>{props.ratio}</p>
        </div>
    );
}

export default Intro;
