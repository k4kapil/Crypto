import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': '7fba2f78d3mshc9dc23f00cece34p151922jsn079d7f675f4f',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}
const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: () => createRequest(`/coindesk`)
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;