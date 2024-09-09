import * as React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import BasicTable from './components/BasicTable/BasicTable'
import { CompanyDataType, useGetCompanyData } from './hooks/useGetCompanyData'
import ChartModal from './components/ChartModal/ChartModal'

function App() {
    const [search, setSearch] = React.useState('')
    const [rowData, setRowData] = React.useState<CompanyDataType>({
        symbol: '',
        name: '',
        stockExchange: '',
        address: '',
        price: 0,
        currency: ''
    })
    const [showModal, setShowModal] = React.useState(false)

    const { companyData, isLoading } = useGetCompanyData(search)

    const handleOpen = (row: CompanyDataType) => {
        setRowData(row)
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <>
            {isLoading ? 'loading!!!' : 'Hello World'}
            <SearchBar setSearchQuery={setSearch} />
            <BasicTable data={companyData} handleRowClick={handleOpen} />
            <ChartModal showModal={showModal} rowData={rowData} handleClose={handleClose} />
        </>
    )
}

export default App
