

export const getFullYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) => {
    if (isIndex == true) {
        return "Holberton School"
    } else {
        return "Holberton School main dashboard"
    }
}