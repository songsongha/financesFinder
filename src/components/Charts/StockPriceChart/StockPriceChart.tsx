import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts'

export function StockPriceChart({ chartData }: { chartData: any }) {
    console.log({ chartData })
    return (
        // <ResponsiveContainer width='100%' height='100%'>
        <AreaChart width={500} height={500} data={chartData}>
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
        // </ResponsiveContainer>
    )
}

export default StockPriceChart
