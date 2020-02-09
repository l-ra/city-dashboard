import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CityDashboard from './CityDashboard';
//import * as serviceWorker from './serviceWorker';


window.addEventListener('resize', changeWindowSize);

async function ziskejSmlouvy(){
    try {
        const url = process.env.PUBLIC_URL+'/out-10.json'
        console.log("Url", url)
        const resp = await fetch(url,{ method: 'GET', cache:'no-cache'})
        return await resp.json()    
    } catch (ex){
        console.log("Proble se ziskanim smluv",ex)
        return null;
    }
}

async function changeWindowSize(){
    const width = window.innerWidth
    const height = window.innerHeight
    const smlouvy = await ziskejSmlouvy() 
    ReactDOM.render(<CityDashboard width={width} height={height} smlouvy={smlouvy}/>, document.getElementById('root'));
}

changeWindowSize()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
