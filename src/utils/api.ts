import axios from 'axios'

export const getData = async (search: string) => {
    const response = await axios.get(
        `https://financialmodelingprep.com/api/v3/search?query=${search}&apikey=UFYYyVi62zcPgSBQlLYdlJbW2sHU6Xh4&limit=10`
    )
    return response.data
}

export const getProfile = async () => {
    const response = await axios.get(
        'https://financialmodelingprep.com/api/v3/profile/AAPL,APP?apikey=UFYYyVi62zcPgSBQlLYdlJbW2sHU6Xh4'
    )
    return response.data
}
