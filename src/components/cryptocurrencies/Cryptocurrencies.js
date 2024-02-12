import React, { useState, useEffect } from 'react'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import "./Cryptocurrencies.css"
import { Link } from 'react-router-dom'
const Cryptocurrencies = () => {
   
    const { data: cryptosList, isFetching } = useGetCryptosQuery();
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

         setCryptos(filteredData);

    }, [cryptosList, searchTerm])

    if(isFetching) return 'Loading ...';

   


  return (
    <>
    <div className='search-crypto'>
    <input placeholder='Search Cryptocurrency'  type="text" autoComplete="off"  name="text" className="input" onChange={(e) => setSearchTerm(e.target.value)} />
     </div>
    <div className='crypto-card' style={{ display: 'flex' ,justifyContent:'center', flexWrap:"wrap", gap:'50px'}}>
    {cryptos.map((currency) => (

   
    <div className="card" key={currency}>
    <Link to={`/coin/${currency.uuid}`}>
  <p className="heading">
    {`${currency.rank}. ${currency.name}`}
  </p>
  <img className='crypto-image' src={currency.iconUrl}  alt=''/>
  <p>Price:- { "$" + (currency.price)} </p>
  <p>MarketCap:- {((currency.marketCap)/1000000000).toFixed(2) + "B"}</p>
  <p>Daily Change:- {currency.change}%</p>
  
</Link></div>
 ))}
 </div>
</>
  )
}

export default Cryptocurrencies