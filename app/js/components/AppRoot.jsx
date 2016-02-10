import React from 'react';
import ArticlesStore from '../stores/ArticlesStore'
import AppDispatcher from '../dispatcher/AppDispatcher';
import NewArticleForm from './NewArticleForm';

let getArticlesState = () => {
    return {
        items: ArticlesStore.getArticles()
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
        let items = ArticlesStore.getArticles();
        let itemHtml = items.map(( article ) => {
            return <article key={ article.id }>
                    <h2>{ article.title }</h2>
                    <section>{ article.content }</section>
                </article>;
        });
        return <div>
                { itemHtml }
                <NewArticleForm />
            </div>;
    }
};

export default AppRoot;
