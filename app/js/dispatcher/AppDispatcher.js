import {Dispatcher} from 'flux';
let AppDispatcher = new Dispatcher();

import ArticlesStore from '../stores/ArticlesStore';

AppDispatcher.register((payload) => {
    let action = payload.action;
    let article = payload.article;
    let id = payload.id;

    switch(action) {
        case 'add-article':
            ArticlesStore.addArticles(article);
            break;
        default:
            return true;
    }

    ArticlesStore.emitChange();

    return true;
});

export default AppDispatcher;
