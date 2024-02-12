import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../../services/cryptoApi';
// import Loader from './Loader';
import LineChart from '../cryptoDetails/LineChart';
import "./CryptoDetails.css"
// import HTMLReactParser from "html-react-parser"
import { AiFillDollarCircle } from "react-icons/ai";
import { FaRankingStar } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { SiCoinmarketcap } from "react-icons/si";
import { FaMedal } from "react-icons/fa6";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { RiFundsLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { AiTwotoneStop } from "react-icons/ai";
import { BsExclamationCircle } from "react-icons/bs";
import { FaExclamationCircle } from "react-icons/fa";
import { HiExclamationCircle } from "react-icons/hi2";



const CryptoDetails = () => {
  const { uuid } = useParams();
  const [timePeriod, setTimePeriod] = useState('7d');
  const { data, isFetching } = useGetCryptoDetailsQuery(uuid);
  const {data: coinHistory} = useGetCryptoHistoryQuery({uuid, timePeriod});
  const cryptoDetails = data?.data?.coin;


  console.log(cryptoDetails,"jjj")
  


  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && (cryptoDetails?.price)}`, icons:<AiFillDollarCircle /> },
    { title: 'Rank', value: cryptoDetails?.rank, icons: <FaRankingStar /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.["24hVolume"] && (cryptoDetails?.["24hVolume"])}`, icons:<IoIosRocket /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && (cryptoDetails?.marketCap)}`, icons: <SiCoinmarketcap />},
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && (cryptoDetails?.allTimeHigh?.price)}`, icons:<FaMedal /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icons: <RiFundsLine />},
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icons: <MdOutlineCurrencyExchange /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <FaCheck />:<AiTwotoneStop />, icons:<BsExclamationCircle /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total &&(cryptoDetails?.supply?.total)}`, icons:<FaExclamationCircle /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && (cryptoDetails?.supply?.circulating)}`, icons:<HiExclamationCircle /> },
  ];

  // if (isFetching) return <Loader />;

  if (isFetching) return 'Loading ...';

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
 

  return (
   <>
   <div className='coin-detail-container'> 
      <div className='coin-heading-container'>
        <h2 className='coin-name' >
          {cryptoDetails.name} ({cryptoDetails.symbol}) Price :- <img src={cryptoDetails.iconUrl} alt='' />
        </h2>
        <p>
          {cryptoDetails.name} live price in US dollars.
          View value statistics, market cap and supply.
        </p>
      </div>
      {/* Your select and line chart components */}
      
      <select 
        defaultValue={'7d'} 
        className='select-timeperiod' 
        placeholder='Select Time Period' 
        onChange={(value) => setTimePeriod(value)}>
          {time.map( (date) => <option key={date} > {date} </option> )}
        </select>

        {/* <LineChart coinHistory = {coinHistory} currentChange = {cryptoDetails.change} currentPrice = {(cryptoDetails.price)} coinName = {cryptoDetails.name} /> */}
      <div className='stats-container'>
        <div className='coin-value-statistic'>
          <div className='coin-value-statistic-heading'>
            <h3 className='coin-detailes-heading'>
              {cryptoDetails.name} Value Statistics
            </h3>
            <p> 
              An overview showing the stats of {cryptoDetails.name}
            </p>
          </div>
          {stats.map(({ icons, title, value}) => (
            <div className='coin-stats' key={title}>
              <div className='coin-stats-name'>
                <h3>{icons}</h3>
                <span>{title}</span>
              </div>
              <span className='stats'>{value}</span>
            </div>
          ))}
        </div>
        
        <div className='other-stats-info'>
          <div className='coin-value-statistic-heading'>
            <h3 className='coin-detailes-heading'>
              Other Statistics
            </h3>
            <p> 
              An overview showing the stats of Cryptocurrencies
            </p>
          </div>
          {genericStats.map(({ icons, title, value}) => (
            <div className='coin-stats' key={title}>
              <div className='coin-stats-name'>
                <h3>{icons}</h3>
                <span>{title}</span>
              </div>
              <span className='stats'>{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='coin-desc-link'>
        <div className='coin-desc'>
          <h3 className='coin-details-heading'>
            What is {cryptoDetails.name}
            {(cryptoDetails.description)}
          </h3>
        </div>
        <div className='coin-links'>
          <h3 className='coin-details-heading'>
            {cryptoDetails.name} Links
          </h3>
          {cryptoDetails.links.map((link) => (
            <div className='coin-link' key={link.name}>
              <h5 className="link-name">
                {link.type}
              </h5>
              <a href={link.url} target="_blank" rel='noreferrer'>{link.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>

  );
};

export default CryptoDetails;









