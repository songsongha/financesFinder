import axios from 'axios'

export const getGeneralData = async (search: string) => {
    const response = await axios.get(
        `https://financialmodelingprep.com/api/v3/search?query=${search}&exchange=NASDAQ,NYSE&apikey=UFYYyVi62zcPgSBQlLYdlJbW2sHU6Xh4&limit=10`
    )
    return response.data
}

export const getProfile = async (query: string) => {
    const response = await axios.get(
        `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=UFYYyVi62zcPgSBQlLYdlJbW2sHU6Xh4`
    )
    return response.data
}
