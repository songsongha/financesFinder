import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip, Bar, ComposedChart, Line } from 'recharts'
const mockCashFlowData = [
    {
        date: '2023-09-30',
        symbol: 'AAPL',
        reportedCurrency: 'USD',
        cik: '0000320193',
        fillingDate: '2023-11-03',
        acceptedDate: '2023-11-02 18:08:27',
        calendarYear: '2023',
        period: 'FY',
        netIncome: 96995000000,
        depreciationAndAmortization: 11519000000,
        deferredIncomeTax: 0,
        stockBasedCompensation: 0,
        changeInWorkingCapital: -6577000000,
        accountsReceivables: -417000000,
        inventory: -1618000000,
        accountsPayables: -1889000000,
        otherWorkingCapital: -2653000000,
        otherNonCashItems: -2227000000,
        netCashProvidedByOperatingActivities: 110543000000,
        investmentsInPropertyPlantAndEquipment: -10959000000,
        acquisitionsNet: 0,
        purchasesOfInvestments: -29513000000,
        salesMaturitiesOfInvestments: 45514000000,
        otherInvestingActivites: -1337000000,
        netCashUsedForInvestingActivites: 3705000000,
        debtRepayment: -5923000000,
        commonStockIssued: 0,
        commonStockRepurchased: -82981000000,
        dividendsPaid: -15025000000,
        otherFinancingActivites: -4559000000,
        netCashUsedProvidedByFinancingActivities: -108488000000,
        effectOfForexChangesOnCash: 0,
        netChangeInCash: 5760000000,
        cashAtEndOfPeriod: 30737000000,
        cashAtBeginningOfPeriod: 24977000000,
        operatingCashFlow: 110543000000,
        capitalExpenditure: -10959000000,
        freeCashFlow: 99584000000,
        link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019323000106/0000320193-23-000106-index.htm',
        finalLink: 'https://www.sec.gov/Archives/edgar/data/320193/000032019323000106/aapl-20230930.htm'
    },
    {
        date: '2022-09-24',
        symbol: 'AAPL',
        reportedCurrency: 'USD',
        cik: '0000320193',
        fillingDate: '2022-10-28',
        acceptedDate: '2022-10-27 18:01:14',
        calendarYear: '2022',
        period: 'FY',
        netIncome: 99803000000,
        depreciationAndAmortization: 11104000000,
        deferredIncomeTax: 895000000,
        stockBasedCompensation: 0,
        changeInWorkingCapital: 1200000000,
        accountsReceivables: -9343000000,
        inventory: 1484000000,
        accountsPayables: 9448000000,
        otherWorkingCapital: -389000000,
        otherNonCashItems: 31357000000,
        netCashProvidedByOperatingActivities: 122151000000,
        investmentsInPropertyPlantAndEquipment: -10708000000,
        acquisitionsNet: -306000000,
        purchasesOfInvestments: -76923000000,
        salesMaturitiesOfInvestments: 67363000000,
        otherInvestingActivites: -1780000000,
        netCashUsedForInvestingActivites: -22354000000,
        debtRepayment: -4078000000,
        commonStockIssued: 0,
        commonStockRepurchased: -95625000000,
        dividendsPaid: -14841000000,
        otherFinancingActivites: 3795000000,
        netCashUsedProvidedByFinancingActivities: -110749000000,
        effectOfForexChangesOnCash: 0,
        netChangeInCash: -10952000000,
        cashAtEndOfPeriod: 24977000000,
        cashAtBeginningOfPeriod: 35929000000,
        operatingCashFlow: 122151000000,
        capitalExpenditure: -10708000000,
        freeCashFlow: 111443000000,
        link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019322000108/0000320193-22-000108-index.htm',
        finalLink: 'https://www.sec.gov/Archives/edgar/data/320193/000032019322000108/aapl-20220924.htm'
    },
    {
        date: '2021-09-25',
        symbol: 'AAPL',
        reportedCurrency: 'USD',
        cik: '0000320193',
        fillingDate: '2021-10-29',
        acceptedDate: '2021-10-28 18:04:28',
        calendarYear: '2021',
        period: 'FY',
        netIncome: 94680000000,
        depreciationAndAmortization: 11284000000,
        deferredIncomeTax: -4774000000,
        stockBasedCompensation: 0,
        changeInWorkingCapital: -4911000000,
        accountsReceivables: -14028000000,
        inventory: -2642000000,
        accountsPayables: 12326000000,
        otherWorkingCapital: -567000000,
        otherNonCashItems: 30327000000,
        netCashProvidedByOperatingActivities: 104038000000,
        investmentsInPropertyPlantAndEquipment: -11085000000,
        acquisitionsNet: -33000000,
        purchasesOfInvestments: -109558000000,
        salesMaturitiesOfInvestments: 106483000000,
        otherInvestingActivites: -352000000,
        netCashUsedForInvestingActivites: -14545000000,
        debtRepayment: -11643000000,
        commonStockIssued: 1105000000,
        commonStockRepurchased: -92527000000,
        dividendsPaid: -14467000000,
        otherFinancingActivites: 1998000000,
        netCashUsedProvidedByFinancingActivities: -93353000000,
        effectOfForexChangesOnCash: 0,
        netChangeInCash: -3860000000,
        cashAtEndOfPeriod: 35929000000,
        cashAtBeginningOfPeriod: 39789000000,
        operatingCashFlow: 104038000000,
        capitalExpenditure: -11085000000,
        freeCashFlow: 92953000000,
        link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/0000320193-21-000105-index.htm',
        finalLink: 'https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/aapl-20210925.htm'
    },
    {
        date: '2020-09-26',
        symbol: 'AAPL',
        reportedCurrency: 'USD',
        cik: '0000320193',
        fillingDate: '2020-10-30',
        acceptedDate: '2020-10-29 18:06:25',
        calendarYear: '2020',
        period: 'FY',
        netIncome: 57411000000,
        depreciationAndAmortization: 11056000000,
        deferredIncomeTax: -215000000,
        stockBasedCompensation: 0,
        changeInWorkingCapital: 5690000000,
        accountsReceivables: 8470000000,
        inventory: -127000000,
        accountsPayables: -4062000000,
        otherWorkingCapital: 1409000000,
        otherNonCashItems: 28844000000,
        netCashProvidedByOperatingActivities: 80674000000,
        investmentsInPropertyPlantAndEquipment: -7309000000,
        acquisitionsNet: -1524000000,
        purchasesOfInvestments: -115148000000,
        salesMaturitiesOfInvestments: 120483000000,
        otherInvestingActivites: -791000000,
        netCashUsedForInvestingActivites: -4289000000,
        debtRepayment: -3462000000,
        commonStockIssued: 880000000,
        commonStockRepurchased: -75992000000,
        dividendsPaid: -14081000000,
        otherFinancingActivites: -209000000,
        netCashUsedProvidedByFinancingActivities: -86820000000,
        effectOfForexChangesOnCash: 0,
        netChangeInCash: -10435000000,
        cashAtEndOfPeriod: 39789000000,
        cashAtBeginningOfPeriod: 50224000000,
        operatingCashFlow: 80674000000,
        capitalExpenditure: -7309000000,
        freeCashFlow: 73365000000,
        link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019320000096/0000320193-20-000096-index.htm',
        finalLink: 'https://www.sec.gov/Archives/edgar/data/320193/000032019320000096/aapl-20200926.htm'
    },
    {
        date: '2019-09-28',
        symbol: 'AAPL',
        reportedCurrency: 'USD',
        cik: '0000320193',
        fillingDate: '2019-10-31',
        acceptedDate: '2019-10-30 18:12:36',
        calendarYear: '2019',
        period: 'FY',
        netIncome: 55256000000,
        depreciationAndAmortization: 12547000000,
        deferredIncomeTax: -340000000,
        stockBasedCompensation: 0,
        changeInWorkingCapital: -3488000000,
        accountsReceivables: 3176000000,
        inventory: -289000000,
        accountsPayables: -1923000000,
        otherWorkingCapital: -4452000000,
        otherNonCashItems: 340000000,
        netCashProvidedByOperatingActivities: 69391000000,
        investmentsInPropertyPlantAndEquipment: -10495000000,
        acquisitionsNet: -624000000,
        purchasesOfInvestments: -40631000000,
        salesMaturitiesOfInvestments: 98724000000,
        otherInvestingActivites: -1078000000,
        netCashUsedForInvestingActivites: 45896000000,
        debtRepayment: -1842000000,
        commonStockIssued: 781000000,
        commonStockRepurchased: -69714000000,
        dividendsPaid: -14119000000,
        otherFinancingActivites: -5301000000,
        netCashUsedProvidedByFinancingActivities: -90976000000,
        effectOfForexChangesOnCash: 0,
        netChangeInCash: 24311000000,
        cashAtEndOfPeriod: 50224000000,
        cashAtBeginningOfPeriod: 25913000000,
        operatingCashFlow: 69391000000,
        capitalExpenditure: -10495000000,
        freeCashFlow: 58896000000,
        link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019319000119/0000320193-19-000119-index.htm',
        finalLink: 'https://www.sec.gov/Archives/edgar/data/320193/000032019319000119/a10-k20199282019.htm'
    }
]
export function CashFlowChart({ chartData }: { chartData: any }) {
    console.log({ chartData })
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

    return (
        // <ResponsiveContainer width='100%' height='100%'>
        <ComposedChart
            width={500}
            height={300}
            data={mockCashFlowData}
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
        // </ResponsiveContainer>
    )
}

export default CashFlowChart
