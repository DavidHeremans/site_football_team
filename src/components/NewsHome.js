import React from 'react'
import NewsCard from './NewsCard'

function NewsHome({articles}) {
    return (
        <div className="row news-home">
            <h2 className="home-title">Laatste Nieuws</h2>
           
            {articles.slice(0,3).map((article, index) => (
            <NewsCard key={index} article={article} />
             ))}

             <input type="button" value="Meer nieuws" className="primary" />
        </div>
    )
}

export default NewsHome
