// vehicles reducer
const vehiclesReducerDefaultState = [];

const vehiclesReducer = (state = vehiclesReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_VEHICLES':
            return action.vehicles;
        default:
            return state;
    }
};

export default vehiclesReducer;

