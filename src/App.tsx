import * as React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import BasicTable from './components/BasicTable/BasicTable'
import { useGetCompanyData } from './hooks/useFinancePrep'

function App() {
    const [search, setSearch] = React.useState('')
    const { companyData, isLoading } = useGetCompanyData(search)

    return (
        <>
            {isLoading ? 'loading!!!' : 'Hello World'}
            <SearchBar setSearchQuery={setSearch} />
            <BasicTable data={companyData} />
        </>
    )
}

export default App
