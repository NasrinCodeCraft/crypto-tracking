import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const AreaChart = ({ historicalData, currencysymbol }) => {
    const [data, setData] = useState([['Date', 'Price']]);

    useEffect(() => {
        if (historicalData?.prices) {
            const formattedData = historicalData.prices
                .filter(item => item[1] !== undefined && item[1] !== null)
                .map(item => [
                    new Date(item[0]),
                    Number(item[1])
                ])
            setData([['Date', 'Price'], ...formattedData])
        }
    }, [historicalData])


    const options = {
        backgroundColor: 'transparent',
        legend: 'none',
        curveType: 'function',
        hAxis: {
            textStyle: { color: '#FFFFFF' },
            gridlines: { color: '#444444' },
            format: 'MMM dd',
        },
        vAxis: {
            textStyle: { color: '#FFFFFF' },
            gridlines: { color: '#444444' },
            format: `'${currencysymbol}'#,##0.00`
        },
        chartArea: {
            backgroundColor: {
                fill: 'transparent',
                opacity: 0
            },
            width: '90%',
            height: '80%'
        },
        colors: ['#10B981'],
        lineWidth: 3,
        // Trendlines may be specific to certain chart types and might need adjustment
        trendlines: {
            0: {
                type: 'linear',
                color: '#00FFFF',
                lineWidth: 1,
                opacity: 0.4,
                showR2: false
            }
        },
        crosshair: {
            trigger: 'both',
            orientation: 'vertical',
            color: '#00FFFF',
            opacity: 0.2
        },
        tooltip: {
            textStyle: { color: '#000000' },
            showColorCode: true,
            isHtml: true
        }
    };
  return (
    <div className='w-full bg-gray-800/20 backdrop-blur-sm rounded-xl p-4 borderborder-emerald-500/20'>
      <Chart chartType='AreaChart'
            data={data} options={options} loader={<div className='text-emerald-400'>Loading Market Data...</div>}
            rootProps={{ 'data-testid': '1'}}
      />
    </div>
  );
};

export default AreaChart;