import React from 'react'
import { useGetCryptosQuery } from "../../services/cryptoApi"
// import { Link } from 'react-router-dom';
import "./HomePage.css"
import Cryptocurrencies from '../cryptocurrencies/Cryptocurrencies';
import News from '../news/News';
const HomePage = () => {

  const {data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  console.log(data);

  if(isFetching) return 'Loading ...';

  return (
    <div>
        <h1>Global Crypto Stats </h1>
        <div>
          <ul>
            <li>Total Cryptocurrencies :- {globalStats.total}</li>
            <li>Total Exchanges :- {globalStats.totalExchanges}</li>
            <li>Total Market Cap :- {((globalStats.totalMarketCap)/1000000000000).toFixed(2) + "T"}</li>
            <li>Total 24h Volume :- {((globalStats.total24hVolume)/1000000000).toFixed(2) + "B"} </li>
            <li>Total Markets :- {((globalStats.totalMarkets)/1000).toFixed(2) + "K"}</li>
          </ul>
          
          
        </div>
        
        
        <div>
          <h2>Top 10 Cryptocurrencies in the World </h2>
          <a href="/"><button className="bn632-hover bn20">Show More</button></a>
        </div>
        <Cryptocurrencies />
        <div>
          <h2>Latest Crypto News </h2>
          <a href="/"><button className="bn632-hover bn20">Show More</button></a>
        </div>
       <News />
    </div>
  )
}

export default HomePage