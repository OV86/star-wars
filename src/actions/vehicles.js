import { CONSTANTS } from '../utils/constants';
import { getIdFromUrl } from '../utils/getIdFromUrl';

export const setVehicles = (vehicles) => ({
    type: 'SET_VEHICLES',
    vehicles,
});

export function getVehicles() {
    return (dispatch) => {
        fetch(CONSTANTS.vehiclesUrl).then(response => {
            return response.json();
        }).then(data => {
            const vehicles = [];

            data.results.forEach((result) => {
                const id = getIdFromUrl(result.url);
                vehicles.push({
                    id,
                    ...result
                });
            });
            dispatch(setVehicles(vehicles));
        }).catch(err => {
            console.log(err);
        });
    };
}
