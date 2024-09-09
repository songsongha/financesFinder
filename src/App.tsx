import * as React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import BasicTable from './components/BasicTable/BasicTable'
import { CompanyDataType, useGetCompanyData } from './hooks/useGetCompanyData'
import ChartModal from './components/ChartModal/ChartModal'
import { Box, Typography } from '@mui/material'
import './App.css'

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

    const { companyData } = useGetCompanyData(search)

    const handleOpen = (row: CompanyDataType) => {
        setRowData(row)
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <>
            <Box className='header'>
                <Typography variant='h4' className='title'>
                    Finances Finder
                </Typography>
                <SearchBar setSearchQuery={setSearch} />
            </Box>
            <Box className='body'>
                <BasicTable data={companyData} handleRowClick={handleOpen} />
            </Box>
            <ChartModal showModal={showModal} rowData={rowData} handleClose={handleClose} />
        </>
    )
}

export default App
