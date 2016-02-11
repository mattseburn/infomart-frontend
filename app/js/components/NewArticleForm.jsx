import React from 'react';
import ReactDOM from 'react-dom';
import AppDispatcher from '../dispatcher/AppDispatcher';

class NewArticleForm extends React.Component {
    createArticle(e) {
        e.preventDefault();
        let id = guid();
        let title = ReactDOM.findDOMNode(this.refs.title).value.trim();
        ReactDOM.findDOMNode(this.refs.title).value = '';
        let content = ReactDOM.findDOMNode(this.refs.content).value.trim();
        ReactDOM.findDOMNode(this.refs.content).value = '';

        AppDispatcher.dispatch({
            action: 'add-article',
            article: {
                id: id,
                title: title,
                content: content
            }
        });
    }

    render() {
        return <form onSubmit={ this.createArticle.bind(this) }>
                <label for="title">Title</label>
                <input type="text" ref="title" id="title" />
                <label for="content">Content</label>
                <input type="text" ref="content" id="content" />
                <button>Add new article</button>
            </form>;
    }
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

export default NewArticleForm;
