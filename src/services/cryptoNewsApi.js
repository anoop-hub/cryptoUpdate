import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'd9afe80b03msh50e66ae2bf0defbp17ef22jsn932403ee099b',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      
}

const createRequest=(url)=>({url,headers:cryptoNewsHeaders})

export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bing-news-search1.p.rapidapi.com' }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day`),
      }),
    }),
  });
  
  export const { useGetCryptoNewsQuery } = cryptoNewsApi;
