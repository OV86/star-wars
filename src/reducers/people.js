// people reducer
const peopleReducerDefaultState = [];

const peopleReducer = (state = peopleReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_PEOPLE':
            return action.people;
        default:
            return state;
    }
};

export default peopleReducer;

