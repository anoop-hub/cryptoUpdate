import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


const cryptoApiHeader={
  'X-RapidAPI-Key': 'd9afe80b03msh50e66ae2bf0defbp17ef22jsn932403ee099b',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}


const createRequest=(url)=>({url,headers:cryptoApiHeader})
const baseUrl='https://coinranking1.p.rapidapi.com';

export const cryptoApi=createApi({
         reducerPath:'cryptoApi',
         baseQuery:fetchBaseQuery({baseUrl}),
         endpoints:(builder)=>({
          getCryptos:builder.query({
            query:()=>createRequest('/coins')
          }),
          getCryptoDetails:builder.query({
            query:(coinId)=>createRequest(`/coin/${coinId}`)
           }),
           getCryptoHistory:builder.query({
            query:({coinId,timeperiod})=>createRequest(`/coin/${coinId}/history?timeperiod=${timeperiod}`)
           }),
           getCryptoExchange:builder.query({
            query:()=>createRequest('/exchanges')
           })
         })
         
});

export const{
  useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetCryptoExchangeQuery
}=cryptoApi;

