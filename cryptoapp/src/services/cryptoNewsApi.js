import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders = {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
}

const baseUrl = 'https://crypto-news-live3.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptoNews: builder.query({
            query:(count)=> createRequest(`/news?count=${count}`)
        })
    })
});

export const { useGetCryptoNewsQuery, } = cryptoNewsApi;