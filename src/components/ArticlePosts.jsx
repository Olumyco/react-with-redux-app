import React from 'react';

const ArticlePosts = ({ articles }) => {
    return (
        <div>
            {articles.map((data, index) => {
                return (
                    <div key={index} style={{borderBottom: '1px solid #444', paddingBottom: '5px'}}>
                        <h2>{data.title}</h2>
                        <p>{data.content}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ArticlePosts;