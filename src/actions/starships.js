import { CONSTANTS } from '../utils/constants';
import { getIdFromUrl } from '../utils/getIdFromUrl';

export const setStarships = (starships) => ({
    type: 'SET_STARSHIPS',
    starships,
});

export function getStarships() {
    return (dispatch) => {
        fetch(CONSTANTS.starshipsUrl).then(response => {
            return response.json();
        }).then(data => {
            const starships = [];

            data.results.forEach((result) => {
                const id = getIdFromUrl(result.url);
                starships.push({
                    id,
                    ...result
                });
            });
            dispatch(setStarships(starships));
        }).catch(err => {
            console.log(err);
        });
    };
}
