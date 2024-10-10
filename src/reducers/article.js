import { types } from '../types/article';

const initialState = {
    articles: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.POST_ARTICLE:
            console.log(action.payload);
            return {
                ...state,
                articles: [...state.articles, action.payload]
            }
        default:
            return state;
    }
};

export default reducer;