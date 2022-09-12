import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import '../node_modules/normalize.css/normalize.css';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { store, persistor } from "../src/components/store";
import { PersistGate } from "redux-persist/integration/react";



import HoldersPage from '../src/components/HoldersPage'
import WelcomePage from '../src/components/sections/WelcomePage'
import Counter from '../src/components/Counter'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path='/' element={<WelcomePage/>}/>
            <Route path='/counter' element={<Counter/>}/>
            <Route path='/holderspage' element={<HoldersPage/>}/>
            <Route path='/home' element={<App/>}/>
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
