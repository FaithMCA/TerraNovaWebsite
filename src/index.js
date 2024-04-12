//React imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

//SRC folder imports
import App from './App';



//Lets React render
let root = ReactDOM.createRoot(document.getElementById('root'));



//Render the React
root.render(
    <>
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
    </>
)