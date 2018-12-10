// species reducer
const speciesReducerDefaultState = [];

const speciesReducer = (state = speciesReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_SPECIES':
            return action.species;
        default:
            return state;
    }
};

export default speciesReducer;

