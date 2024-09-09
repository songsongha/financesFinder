import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { CompanyDataType } from '../../hooks/useGetCompanyData'
import './BasicTable.css'

export default function BasicTable({
    data,
    handleRowClick
}: {
    data: CompanyDataType[]
    handleRowClick: (row: CompanyDataType) => void
}) {
    return (
        <TableContainer className='tableContainer'>
            <Table sx={{ maxWidth: 900 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Company Name</TableCell>
                        <TableCell align='center'>Symbol</TableCell>
                        <TableCell align='right'>Address</TableCell>
                        <TableCell align='right'>Exchange</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow onClick={() => handleRowClick(row)} hover key={row.symbol} className='row'>
                            <TableCell component='th' scope='row'>
                                {row.name}
                            </TableCell>
                            <TableCell align='center'>{row.symbol}</TableCell>
                            <TableCell align='right' sx={{ whiteSpace: 'pre-line' }}>
                                {row.address}
                            </TableCell>
                            <TableCell align='right'>{row.stockExchange}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
