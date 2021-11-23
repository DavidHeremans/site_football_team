import React from 'react'

function NewsCard({article}) {
    return (
        <div className="col-lg-4 mt-3 news-card">
            
                <img 
                src='https://images.unsplash.com/photo-1624880357913-a8539238245b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' 
                alt="Photo"
                width="100%" />
            <div className="news-card-info">
            <h3>{article.title}</h3>
            <hr/>
            <small>{article.date}</small>
            </div>
        </div>
    )
}

export default NewsCard
