import React, {useState,useEffect} from 'react'
import millify from 'millify'

import { Link } from 'react-router-dom';
import { Select, Typography, Avatar, Card, Row, Col, Input } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';



const { Text, Title } = Typography;
const { Option } = Select;
const News = ({simplified}) => {
    const count = simplified ? 6 : 17;
    const { data:cryptoNews } = useGetCryptoNewsQuery(count);
    const [newsList,setNews]=useState(cryptoNews);
    console.log(cryptoNews);
    if(!cryptoNews) return 'Loading...';
    return (
        <>
            <Row gutter={[24,24]}>
                {newsList.map((news,i)=>(
                    <Col cs={24} sm={12} lg={8} key={i}>
                        <Card className="news-card" hoverable>
                        <p>{news.title}</p>
                        <p>Source: {news.source} </p>
                        <a href={`${news.url}`} target="_blank" rel="noreferrer">
                            <Title className='news-title' level={4}>{news.title}</Title>
                        </a>
                        </Card>    
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default News
