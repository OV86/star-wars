// starships reducer
const starshipsReducerDefaultState = [];

const starshipsReducer = (state = starshipsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_STARSHIPS':
            return action.starships;
        default:
            return state;
    }
};

export default starshipsReducer;

