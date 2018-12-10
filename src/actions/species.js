import { CONSTANTS } from '../utils/constants';
import { getIdFromUrl } from '../utils/getIdFromUrl';

export const setSpecies = (species) => ({
    type: 'SET_SPECIES',
    species,
});

export function getSpecies() {
    return (dispatch) => {
        fetch(CONSTANTS.speciesUrl).then(response => {
            return response.json();
        }).then(data => {
            const species = [];

            data.results.forEach((result) => {
                const id = getIdFromUrl(result.url);
                species.push({
                    id,
                    ...result
                });
            });
            dispatch(setSpecies(species));
        }).catch(err => {
            console.log(err);
        });
    };
}
