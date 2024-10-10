import { types } from '../types/article';

export const postArticle = data => {
    return {
        type: types.POST_ARTICLE,
        payload: data
    };
};

