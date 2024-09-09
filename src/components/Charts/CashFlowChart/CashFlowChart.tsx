import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip, Bar, ComposedChart, Line } from 'recharts'
import { useQuery } from 'react-query'
import { getCashFlowData } from '../../../utils/api'
import { Box } from '@mui/material'

export function CashFlowChart({ ticker }: { ticker: string }) {
    const { data } = useQuery(['getCashFlowData', ticker], () => getCashFlowData(ticker), {
        enabled: !!ticker
    })

    const formatYAxisLabel = (value: number) => {
        if (value >= 1000000000 || value <= -1000000000) {
            return `${(value / 1000000000).toFixed(0)}B`
        }
        if (value >= 1000000 || value <= -1000000) {
            return `${(value / 1000000).toFixed(0)}M`
        }
        if (value >= 1000 || value <= -1000) {
            return `${(value / 1000).toFixed(0)}K`
        }
        return value.toString()
    }

    return data?.length ? (
        <ResponsiveContainer width='100%' height='100%'>
            <ComposedChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                stackOffset='sign'
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='date' />
                <YAxis
                    domain={['auto', 'auto']}
                    label={{
                        value: 'USD',
                        angle: -90,
                        position: 'insideLeft',
                        style: {
                            textAnchor: 'middle',
                            fill: '#333'
                        }
                    }}
                    tickFormatter={formatYAxisLabel}
                />
                <Tooltip formatter={(value: number) => new Intl.NumberFormat('en').format(value)} />
                <Legend />
                <Bar name='Operating' dataKey='netCashProvidedByOperatingActivities' stackId='a' fill='#8884d8' />
                <Bar name='Investing' dataKey='netCashUsedForInvestingActivites' stackId='a' fill='#82ca9d' />
                <Bar name='Financing' dataKey='netCashUsedProvidedByFinancingActivities' stackId='a' fill='#82999d' />
                <Line name='Net Cashflow' type='monotone' dataKey='netChangeInCash' stroke='#ff7300' />
            </ComposedChart>
        </ResponsiveContainer>
    ) : (
        <Box>No Data Available</Box>
    )
}

export default CashFlowChart
