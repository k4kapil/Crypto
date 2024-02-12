import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '7fba2f78d3mshc9dc23f00cece34p151922jsn079d7f675f4f',
    // 'X-RapidAPI-Key': 'coinrankingf4b00823830c0a3f4c44df81749c6fef86e650bf6e998bb8',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }


  const baseUrl = "https://coinranking1.p.rapidapi.com";


  const createRequest = (url) => ({ url, headers: cryptoApiHeaders })
  
  export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        }),
        getCryptoDetails: builder.query({
          query: (uuid) => createRequest(`/coin/${uuid}`)
        }),
        getCryptoHistory: builder.query({
          query: ({uuid, timePeriod}) => createRequest(`/coin/${uuid}/history?timePeriod=${timePeriod}`)
      }),
    })
  });

  export const { useGetCryptosQuery,useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} = cryptoApi;