import { CONSTANTS } from '../utils/constants';
import { getIdFromUrl } from '../utils/getIdFromUrl';

export const setPlanets = (planets) => ({
    type: 'SET_PLANETS',
    planets,
});

export function getPlanets() {
    return (dispatch) => {
        fetch(CONSTANTS.planetsUrl).then(response => {
            return response.json();
        }).then(data => {
            const planets = [];

            data.results.forEach((result) => {
                const id = getIdFromUrl(result.url);
                planets.push({
                    id,
                    ...result
                });
            });
            dispatch(setPlanets(planets));
        }).catch(err => {
            console.log(err);
        });
    };
}
