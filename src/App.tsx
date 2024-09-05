import * as React from 'react'
import { useQuery } from 'react-query'
import { getData, getProfile } from './utils/api'
import SearchBar from './components/SearchBar/SearchBar'
import BasicTable from './components/BasicTable/BasicTable'
import { BasicTableType } from './components/BasicTable/BasicTable'

function App() {
    const [search, setSearch] = React.useState('')
    const { data, isLoading } = useQuery(['getData', search], () => getData(search))
    const { data: profile } = useQuery(['getProfile', search], () => getProfile())
    console.log({ data })
    console.log({ profile })

    const tableData: BasicTableType[] = React.useMemo(() => {
        return (
            data?.map((item: any) => {
                const { symbol, name, exchangeShortName } = item
                return {
                    symbol,
                    name,
                    stockExchange: exchangeShortName,
                    address: '111 12 Street SW Calgary AB CANADA'
                }
            }) || []
        )
    }, [data])

    return (
        <>
            {isLoading ? 'loading!!!' : 'Hello World'}
            <SearchBar setSearchQuery={setSearch} />
            <BasicTable data={tableData} />
        </>
    )
}

export default App
