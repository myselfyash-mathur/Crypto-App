import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar,Exchanges,Homepage,Cryptodetails,Cryptocurrencies,News } from './components';
import "./App.css";
const App=()=>{
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar></Navbar>
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route exact path="/" element={<Homepage/>}/>
                            <Route path="/exchanges" element={<Exchanges/>}/>
                            <Route path="/crpytocurrencies" element={<Cryptocurrencies/>}/>
                            <Route path="/crpyto/:coinId" element={<Cryptodetails />}/>
                            <Route path="/news" element={<News/>}/>
                        </Routes>
                    </div>
                </Layout>
            </div>
            <div className='footer'>

            </div>
            
        </div>
    )
}

export default App;


