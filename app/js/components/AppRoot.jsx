import React from 'react';
import ArticlesStore from '../stores/ArticlesStore'
import AppDispatcher from '../dispatcher/AppDispatcher';
import NewArticleForm from './NewArticleForm';

let getArticlesState = () => {
    return {
        articles: ArticlesStore.getArticles()
    }
}

class AppRoot extends React.Component {
    _onChange() {
        this.setState(getArticlesState());
    }

    constructor() {
        super();
        this.state = getArticlesState();
    }

    componentDidMount() {
        ArticlesStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        ArticlesStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        let _this = this;
        let articles = ArticlesStore.getArticles();
        let articleHtml = articles.map(( article ) => {
            return <article key={ article.id }>
                    <h2>{ article.title }</h2>
                    <section>{ article.content }</section>
                </article>;
        });
        return <div>
                <NewArticleForm />
                { articleHtml }
            </div>;
    }
};

export default AppRoot;
