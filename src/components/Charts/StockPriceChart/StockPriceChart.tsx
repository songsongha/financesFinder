import * as React from 'react'
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { getHistoricStockPrice } from '../../../utils/api'
import { useQuery } from 'react-query'
import { Box } from '@mui/material'

export function StockPriceChart({ ticker }: { ticker: string }) {
    const { data } = useQuery(['getHistoricStockPrice', ticker], () => getHistoricStockPrice(ticker), {
        enabled: !!ticker
    })

    const historicalData = React.useMemo(() => {
        return data?.historical.sort((a: any, b: any) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
    }, [data])

    return historicalData?.length ? (
        <ResponsiveContainer width='100%' height='100%'>
            <AreaChart width={500} height={500} data={historicalData}>
                <YAxis
                    domain={['auto', 'auto']}
                    label={{
                        value: 'Stock Price',
                        angle: -90,
                        position: 'insideLeft',
                        style: {
                            textAnchor: 'middle',
                            fill: '#333'
                        }
                    }}
                />
                <XAxis dataKey='date' />
                <CartesianGrid />
                <Tooltip />
                <Area dataKey='open' />
            </AreaChart>
        </ResponsiveContainer>
    ) : (
        <Box>No Data Available</Box>
    )
}

export default StockPriceChart
