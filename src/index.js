import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CityDashboard from './CityDashboard';
import * as serviceWorker from './serviceWorker';


window.addEventListener('resize', changeWindowSize);

function changeWindowSize(){
    const width = window.innerWidth
    const height = window.innerHeight
    ReactDOM.render(<CityDashboard width={width} height={height}/>, document.getElementById('root'));
}

changeWindowSize()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
