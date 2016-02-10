import {EventEmitter} from 'events';
import _ from 'lodash';

let ArticlesStore = _.extend({}, EventEmitter.prototype, {
    articles: [
        {
            id: 0,
            title: "Article 1",
            content: "some text here"
        },
        {
            id: 1,
            title: "Article 2",
            content: "some more text here"
        }
    ],

    getArticles: function() {
        return this.articles;
    },

    addArticles: function(article) {
        this.articles.push(article);
    },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

export default ArticlesStore;
