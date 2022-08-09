import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

import { Provider  } from 'react-redux';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './app/store';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Router><Provider store={store}><App></App></Provider></Router>);
