import React from 'react';
import { Line } from "react-chartjs-2"
import {Chart as ChartJS} from 'chart.js/auto'
import "../cryptoDetails/LineChart.css"
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i =0; coinHistory?.data?.history?.length ; i += 0) {
        coinPrice.push(coinHistory?.data?.history[i].price);
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
    };

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: `Price of ${coinName} in USD`,
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: {
                ticks: {
                    beginAtZero: true,
                },
            },
        },
    };

    return (
        <>
            <div className='chart-header'>
                <h2 className='chart-title'>{coinName} Price Chart</h2>
                <div className='price-container'>
                    <h5 className='price-change'>{coinHistory?.data?.change}%</h5>
                    <h5 className='current-price'>Current {coinName} Price: ${currentPrice}</h5>
                </div>
            </div>
            <div className='line-chart'>
                <canvas id='lineChartCanvas'></canvas>
            </div>
            <Line data={data} options={options} />
        </>
    )
}

export default LineChart;
