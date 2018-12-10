// planets reducer
const planetsReducerDefaultState = [];

const planetsReducer = (state = planetsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_PLANETS':
            return action.planets;
        default:
            return state;
    }
};

export default planetsReducer;

