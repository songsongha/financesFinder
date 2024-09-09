import { Box, Modal, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import StockPriceChart from '../Charts/StockPriceChart/StockPriceChart'
import CashFlowChart from '../Charts/CashFlowChart/CashFlowChart'
import { CompanyDataType } from '../../hooks/useGetCompanyData'
import './ChartModal.css'

export function ChartModal({
    rowData,
    showModal,
    handleClose
}: {
    rowData: CompanyDataType
    showModal: boolean
    handleClose: () => void
}) {
    const { name, currency, price, symbol } = rowData
    return (
        <Modal open={showModal} onClose={handleClose}>
            <Box className='modal'>
                <Typography variant='h5' className='title'>
                    {symbol} - {name}
                </Typography>
                <Typography variant='body2' className='title'>
                    Current Stock Price: {price} {currency}
                </Typography>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='gridContainer'>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ height: '20rem', textAlign: 'center' }}>
                        <Typography variant='body1'>Historic Stock Price</Typography>
                        <StockPriceChart ticker={rowData.symbol} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ height: '20rem', textAlign: 'center' }}>
                        <Typography variant='body1'>Historic Cash Flow</Typography>
                        <CashFlowChart ticker={rowData.symbol} />
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}

export default ChartModal
