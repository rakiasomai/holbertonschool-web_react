

export const getFullYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) => {
    if (isIndex === true) {
        return "Holberton School"
    } else {
        return "Holberton School main dashboard"
    }
}

export const getLatesNotification = () => {
    return " <strong>Urgent requirement </strong> - complete by EOD "
}