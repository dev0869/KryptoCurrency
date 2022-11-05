import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const CryptoHeaders = {

  'X-RapidAPI-Key': 'a2a139f442msh90f217a844c442ap1b9404jsn3db8e247daba',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

// ====here baseurl 'b' should be in small letter

const createRequest = (url) => ({ url, headers: CryptoHeaders })

export const CryptoApi = createApi({
  reducerPath: 'CryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: builder => ({




    GetCryptos: builder.query({
      query: () => createRequest('/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0'),


    }),

    GetDetails: builder.query({
      query: (uuid) => createRequest(`/coin/${uuid}`),


    }),
    GetMDetails: builder.query({
      query: (uuid) => createRequest(`/stats`),


    }),
    GetHistory: builder.query({
      query: (uuid) => createRequest(`/coin/${uuid}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h `)


    }),







  })

});

export const {

  useGetCryptosQuery, useGetDetailsQuery,useGetHistoryQuery,useGetMDetailsQuery,
} = CryptoApi;