import React from 'react';
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
import moment from "moment";
import "./News.css"



const News = () => {
  const { data: cryptoNewsList, isLoading } = useGetCryptoNewsQuery();

  if (isLoading) return <div>Loading...</div>;
 
  return (
    <div className='news-container'>
      <div style={{ display: 'flex' ,justifyContent:'center', flexWrap:"wrap", gap:'100px'}}>
        {cryptoNewsList.data.map((article, index) => (
          <div   className='news-card' key={index}>
          <img className="news-image" src={article.thumbnail} alt={article.title} style={{ maxWidth: '300px' }} />
            <h2 className="news-title">{article.title}</h2>
            <p className="news-desc">{article.description}</p>
            <button className="btn" href={article.url} target="_blank" type="button">
            <strong>Read More</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div className="circles"></div>
    <div className="circles"></div>
  </div>
             </button>
            <p>Published At: {moment(article.createdAt).format('LLL')}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default News;






// import React, { useState, useEffect } from 'react';
// import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
// import { Link } from "react-router-dom";
// import moment from "moment";


// const News = () => {
//   const { data: cryptoNewsList } = useGetCryptoNewsQuery();
//   const [cryptoNews, setCryptoNews] = useState(cryptoNewsList?.data?.coindesk);

  

//   console.log(cryptoNewsList);
//   if(!cryptoNews?.coindesk) return 'Loading ...';

//   return (
//     <>
//     <div>
//       <h2>Crypto News</h2>
//       {cryptoNews.coindesk.map((article, index) => (
//         <div key={index}>
//           <h3><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
//           <p>{article.description}</p>
//           <img src={article.thumbnail} alt={article.title} style={{ maxWidth: '300px' }} />
//           <p>Published At: {new Date(article.createdAt).toLocaleString()}</p>
//         </div>
//       ))}
//     </div>
//     </>
//   );
// };

// export default News;

  

   
   


