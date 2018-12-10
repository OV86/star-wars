export function getIdFromUrl(url) {
    // search backwards for the first slash starting from the last one
    const lastIndexOfSlash = url.lastIndexOf('/', url.length - 2);
    return url.substring(lastIndexOfSlash + 1, url.length - 1);
}
