import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar,Exchanges,Homepage,Cryptodetails,Cryptocurrencies,News } from './components';
import "./App.css";
import { SpaceContext } from 'antd/lib/space';
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
                            <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
                            <Route path="/crypto/:coinId" element={<Cryptodetails />}/>
                            <Route path="/news" element={<News/>}/>
                        </Routes>
                    </div>
                </Layout>
            
                <div className='footer'>
                    <Typography.Title  level={5} style={{color:'white', textAlign: 'center'}}>
                        Cryptoverse <br/>
                        All rights reserved.
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App;


