// films reducer
const filmsReducerDefaultState = [];

const filmsReducer = (state = filmsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_FILMS':
            return action.films;
        default:
            return state;
    }
};

export default filmsReducer;

