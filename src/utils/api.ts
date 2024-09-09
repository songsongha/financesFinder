import axios from 'axios'

const URL = 'https://financialmodelingprep.com/api/v3'
const APIKEY = 'apikey=UFYYyVi62zcPgSBQlLYdlJbW2sHU6Xh4'

export const getGeneralData = async (search: string) => {
    const response = await axios.get(`${URL}/search?query=${search}&exchange=NASDAQ,NYSE&${APIKEY}&limit=10`)
    console.log({ response })
    return response.data
}

export const getProfile = async (ticker: string) => {
    const response = await axios.get(`${URL}/profile/${ticker}?${APIKEY}`)
    return response.data
}

export const getHistoricStockPrice = async (ticker: string) => {
    const response = await axios.get(`${URL}/historical-price-full/${ticker}?${APIKEY}`)
    return response.data
}

export const getCashFlowData = async (ticker: string) => {
    const response = await axios.get(`${URL}/cash-flow-statement/${ticker}?period=annual&${APIKEY}`)
    return response.data
}
