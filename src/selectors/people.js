
// get person
export const getById = (items, id) => {
    return items.find((item) => {
        return item.id === id;
    });
};

// search for people
export const getPeople = (items, text) => {
    if (text.length === 0) {
        return null;
    }

    return items.filter((item) => {
        // generate an array of object key to loop over
        const itemsKeys = Object.keys(item);
        for (let i = 0; i < itemsKeys.length; i++) {
            // ignore all properties that are not strings
            if (typeof item[itemsKeys[i]] === 'string' || item[itemsKeys[i]] instanceof String) {
                if (item[itemsKeys[i]].toLowerCase().includes(text.toLowerCase())) {
                    return true;
                }
            }
        }
        return false;
    });
};
