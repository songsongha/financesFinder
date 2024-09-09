export const formatAddress = (address?: string, city?: string, country?: string) => {
    let formattedAddress = address || ''
    if (city) formattedAddress += `\n${city}`
    if (formattedAddress && country) {
        formattedAddress += `, ${country}`
    } else if (country) {
        return country
    }

    return formattedAddress
}
