import React from 'react';
import { connect } from 'react-redux';
import ArticleForm from './ArticleForm';
import ArticlePosts from './ArticlePosts';
import { postArticle} from '../actions/article';

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postArticle: data => dispatch(postArticle(data))
    };
};

const Article = ({articles, postArticle}) => {
    return (
        <div>
            <ArticleForm postArticle = {postArticle} />
            <ArticlePosts articles = {articles} />
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);