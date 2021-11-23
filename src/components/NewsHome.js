import React from 'react'
import NewsCard from './NewsCard'

function NewsHome({articles}) {
    return (
        <div className="row">
            <h2 className="home-title">Laatste Nieuws</h2>
           
            {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
             ))}
        </div>
    )
}

export default NewsHome
