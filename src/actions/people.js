import { CONSTANTS } from '../utils/constants';
import { getIdFromUrl } from '../utils/getIdFromUrl';

export const setPeople = (people) => ({
    type: 'SET_PEOPLE',
    people,
});

export function getPeople() {
    return (dispatch) => {
        fetch(CONSTANTS.peopleUrl).then(response => {
            return response.json();
        }).then(data => {
            const people = [];

            data.results.forEach((result) => {
                const id = getIdFromUrl(result.url);
                people.push({
                    id,
                    ...result
                });
            });
            dispatch(setPeople(people));
        }).catch(err => {
            console.log(err);
        });
    };
}
