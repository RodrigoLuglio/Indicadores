export const getStatusColor = (term, status) => {
    var color;
    switch (status.toLowerCase()) {
        case "aprovado":
            color = 'blue1'
            break;
        case "finalizado":
            color = 'green_mid2'
            break;
        case "verificacao":
            color = '[#0177FB]'
            break;
        case "incompleto":
            color = 'orange'
            break;
        case "sem informação":
            color = 'red1'
            break;
        default:
            color = '[#ffffff]'
            break;
    }

    return term + '-' + color;
}


export const slugify = (text, separator) => {
    return text.toString()
    .normalize('NFD')                   // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '')   // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '')   // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, separator);
}