import { CONSTANTS } from '../utils/constants';
import { getIdFromUrl } from '../utils/getIdFromUrl';

export const setFilms = (films) => ({
    type: 'SET_FILMS',
    films,
});

export function getFilms() {
    return (dispatch) => {
        fetch(CONSTANTS.filmsUrl).then(response => {
            return response.json();
        }).then(data => {
            const films = [];

            data.results.forEach((result) => {
                const id = getIdFromUrl(result.url);
                films.push({
                    id,
                    ...result
                });
            });
            dispatch(setFilms(films));
        }).catch(err => {
            console.log(err);
        });
    };
}
