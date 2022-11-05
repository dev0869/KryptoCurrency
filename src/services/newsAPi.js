import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const NewsHeaders = {

  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': 'a2a139f442msh90f217a844c442ap1b9404jsn3db8e247daba',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

// ====here baseurl 'b' should be in small letter

const createRequest = (url) => ({ url, headers: NewsHeaders })
export const NewsApi = createApi({
  reducerPath: ' NewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    GetNews: builder.query({
      query: () => createRequest('https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency&count=100&freshness=Day&textFormat=Raw&safeSearch=Off'),
    })
  })
});

export const {

  useGetNewsQuery,
} = NewsApi;